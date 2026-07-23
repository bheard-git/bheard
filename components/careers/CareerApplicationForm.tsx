"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2, Upload, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/admin/ui/select";
import { RecaptchaNotice, useRecaptcha } from "@/components/site/RecaptchaProvider";
import {
  careerApplicationFieldsSchema,
  MAX_RESUME_BYTES,
  normalizeApplicationFields,
  type CareerApplicationFields,
} from "@/lib/validators/careerApplication.validator";

const YEARS_OPTIONS = ["0-1", "2-3", "4-5", "6-10", "10+"] as const;
const ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function emptyForm(roleTitle: string): CareerApplicationFields {
  return {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    yearsExperience: "",
    roleTitleApplied: roleTitle,
    currentCompany: "",
    portfolioUrl: "",
    linkedInUrl: "",
    expectedSalary: "",
    noticePeriod: "",
    coverLetter: "",
    referralSource: "",
    workAuthorization: "",
  };
}

type Props = {
  slug: string;
  roleTitle: string;
  onlineApplicationsReady: boolean;
  /** General careers page: editable role field and simplified copy. */
  variant?: "role" | "general";
};

const labelCls =
  "mb-2 block font-label text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-600";
const inputCls =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-body text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-neutral-200 dark:bg-white dark:text-neutral-900";

function validateResumeFile(file: File): string | null {
  if (file.size > MAX_RESUME_BYTES) {
    return `File must be under ${MAX_RESUME_BYTES / (1024 * 1024)} MB`;
  }
  const lower = file.name.toLowerCase();
  const okExt = lower.endsWith(".pdf") || lower.endsWith(".doc") || lower.endsWith(".docx");
  if (!okExt) return "Please upload a PDF or Word file (.pdf, .doc, .docx)";
  return null;
}

export default function CareerApplicationForm({
  slug,
  roleTitle,
  onlineApplicationsReady,
  variant = "role",
}: Props) {
  const { enabled: recaptchaEnabled, ready: recaptchaReady, executeRecaptcha } = useRecaptcha();
  const formId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerApplicationFields>({
    resolver: zodResolver(careerApplicationFieldsSchema),
    defaultValues: emptyForm(variant === "general" ? "" : roleTitle),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    reset(emptyForm(variant === "general" ? "" : roleTitle));
  }, [reset, roleTitle, variant]);

  const setFile = useCallback((file: File | null) => {
    setResumeError(null);
    if (!file) {
      setResumeFile(null);
      return;
    }
    const err = validateResumeFile(file);
    if (err) {
      setResumeError(err);
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
  }, []);

  const onFormSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    if (!onlineApplicationsReady) {
      setSubmitError("Online applications are temporarily unavailable for this listing. Please email careers@bheard.in with your resume.");
      return;
    }

    if (!resumeFile) {
      setResumeError("Please upload your resume");
      return;
    }

    const normalized = normalizeApplicationFields(values);

    let recaptchaToken: string | null = null;
    if (recaptchaEnabled) {
      if (!recaptchaReady) {
        setSubmitError("Security check is still loading. Please wait a moment and try again.");
        return;
      }
      recaptchaToken = await executeRecaptcha("career_application");
      if (!recaptchaToken) {
        setSubmitError("Security verification failed. Please refresh and try again.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.set("fullName", normalized.fullName);
      fd.set("email", normalized.email);
      fd.set("phone", normalized.phone);
      fd.set("city", normalized.city);
      fd.set("yearsExperience", normalized.yearsExperience);
      fd.set("roleTitleApplied", normalized.roleTitleApplied);
      fd.set("noticePeriod", normalized.noticePeriod ?? "");
      fd.set("coverLetter", normalized.coverLetter ?? "");
      fd.set("linkedInUrl", normalized.linkedInUrl ?? "");
      fd.set("portfolioUrl", "");
      fd.set("currentCompany", "");
      fd.set("expectedSalary", "");
      fd.set("referralSource", "");
      fd.set("workAuthorization", "");
      fd.set("resume", resumeFile);
      if (recaptchaToken) {
        fd.set("recaptchaToken", recaptchaToken);
      }

      const res = await fetch(`/api/careers/${encodeURIComponent(slug)}/applications`, {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setSubmitError(body?.error?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  });

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 shadow-sm">
        <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-emerald-950">Application sent</h2>
        <p className="mt-4 font-body text-body-lg text-emerald-900/90">
          Thank you for applying for <span className="font-semibold">{roleTitle}</span>. Our team will review your profile and get back to you if there is a fit.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        variant === "general"
          ? "rounded-xl bg-white p-6 shadow-[0_8px_32px_-12px_rgba(255,146,62,0.22)] md:p-8"
          : "rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-8"
      }
    >
      <div className="mb-6 max-w-2xl">
        <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Application</p>
        <h2 id="apply-heading" className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-neutral-900">
          Apply for this career
        </h2>
        <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">
          Fields marked <span className="text-primary">*</span> are required.
        </p>
      </div>

      <form id={formId} onSubmit={onFormSubmit} noValidate className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor={`${formId}-fullName`}>Full name <span className="text-primary">*</span></label>
            <input id={`${formId}-fullName`} className={inputCls} placeholder="As on your resume" {...register("fullName")} />
            {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label className={labelCls} htmlFor={`${formId}-email`}>Email address <span className="text-primary">*</span></label>
            <input id={`${formId}-email`} type="email" className={inputCls} placeholder="you@email.com" autoComplete="email" {...register("email")} />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
          </div>
          <div>
            <label className={labelCls} htmlFor={`${formId}-phone`}>Phone number <span className="text-primary">*</span></label>
            <input id={`${formId}-phone`} type="tel" className={inputCls} placeholder="+91..." {...register("phone")} />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
          </div>
          <div>
            <label className={labelCls} htmlFor={`${formId}-city`}>Current city <span className="text-primary">*</span></label>
            <input id={`${formId}-city`} className={inputCls} placeholder="e.g. Mumbai" {...register("city")} />
            {errors.city ? <p className="mt-1 text-xs text-red-600">{errors.city.message}</p> : null}
          </div>
          <div>
            <label className={labelCls} htmlFor={`${formId}-role`}>
              {variant === "general" ? <>Role / area of interest <span className="text-primary">*</span></> : <>Applying for <span className="text-primary">*</span></>}
            </label>
            <input
              id={`${formId}-role`}
              className={inputCls + (variant === "role" ? " cursor-not-allowed bg-neutral-50" : "")}
              readOnly={variant === "role"}
              aria-readonly={variant === "role"}
              placeholder={variant === "general" ? "e.g. Product Designer, Frontend Engineer" : undefined}
              {...register("roleTitleApplied")}
            />
            {errors.roleTitleApplied ? (
              <p className="mt-1 text-xs text-red-600">{errors.roleTitleApplied.message}</p>
            ) : null}
          </div>
          <div>
            <label className={labelCls}>Years of experience <span className="text-primary">*</span></label>
            <Controller
              control={control}
              name="yearsExperience"
              render={({ field }) => (
                <Select value={field.value || ""} onValueChange={field.onChange}>
                  <SelectTrigger className="h-[46px] rounded-lg border-neutral-200 bg-white text-neutral-900">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS_OPTIONS.map((y) => (
                      <SelectItem key={y} value={y}>{y} years</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.yearsExperience ? <p className="mt-1 text-xs text-red-600">{errors.yearsExperience.message}</p> : null}
          </div>
          <div>
            <label className={labelCls} htmlFor={`${formId}-linkedin`}>LinkedIn URL (optional)</label>
            <input id={`${formId}-linkedin`} type="text" inputMode="url" autoComplete="url" className={inputCls} placeholder="https://linkedin.com/in/..." {...register("linkedInUrl")} />
            {errors.linkedInUrl ? <p className="mt-1 text-xs text-red-600">{errors.linkedInUrl.message}</p> : null}
          </div>
        </div>

        <div>
          <span className={labelCls}>Resume <span className="text-primary">*</span></span>
          <div
            role="button"
            tabIndex={0}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const f = e.dataTransfer.files?.[0];
              if (f) setFile(f);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50/80 px-6 py-8 text-center transition hover:border-primary hover:bg-primary/5"
            onClick={() => fileInputRef.current?.click()}
          >
            <input ref={fileInputRef} type="file" accept={ACCEPT} className="sr-only" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary transition group-hover:bg-primary/25">
              {resumeFile ? <FileText className="h-6 w-6" aria-hidden /> : <Upload className="h-6 w-6" aria-hidden />}
            </div>
            <p className="mt-3 font-headline text-xs font-bold uppercase tracking-wide text-neutral-800">
              {resumeFile ? "Replace resume" : "Drag and drop or click to upload"}
            </p>
            <p className="mt-1 font-body text-xs text-neutral-600">PDF / DOC / DOCX · max {MAX_RESUME_BYTES / (1024 * 1024)} MB</p>
            {resumeFile ? (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-left shadow-sm">
                <FileText className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="max-w-[240px] truncate font-body text-xs font-medium text-neutral-900">{resumeFile.name}</span>
                <button
                  type="button"
                  className="ml-auto rounded p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                  aria-label="Remove file"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
          {resumeError ? <p className="mt-2 text-xs text-red-600">{resumeError}</p> : null}
        </div>

        {submitError ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-body text-sm text-red-800">{submitError}</div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-neutral-100 pt-5">
          <RecaptchaNotice className="text-neutral-500" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-body text-xs text-neutral-500">
              We use this data only for recruitment and role communication.
            </p>
            <button
              type="submit"
              disabled={
                submitting ||
                !onlineApplicationsReady ||
                (recaptchaEnabled && !recaptchaReady)
              }
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-headline text-xs font-black uppercase tracking-[0.12em] text-on-primary shadow-sm transition hover:bg-primary-fixed-dim disabled:cursor-not-allowed disabled:opacity-55"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
              {submitting ? "Submitting..." : !onlineApplicationsReady ? "Submit unavailable" : "Submit application"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
