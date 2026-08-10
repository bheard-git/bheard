"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { RecaptchaNotice, useRecaptcha } from "@/components/site/RecaptchaProvider";
import {
  INTERESTED_IN_OPTIONS,
  contactLeadClientSchema,
  type ContactLeadClientFields,
  type InterestedInOption,
} from "@/lib/validators/contactLead.validator";

const defaultValues: ContactLeadClientFields = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  interestedIn: "",
  message: "",
};

const fieldErrorCls = "mt-[2px] -mb-2 text-xs text-red-600";
const inputCls =
  "h-11 w-full rounded-md border border-outline-variant bg-white px-3 text-sm text-on-surface outline-none transition focus:border-primary";
const inputErrorCls = inputCls + " border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/30";
const tileBaseCls =
  "h-11 shrink-0 xl:whitespace-nowrap xl:w-fit rounded-md border px-3 text-left text-sm transition outline-none focus-visible:border-primary";
const tileIdleCls =
  tileBaseCls + " border-outline-variant bg-white text-on-surface hover:border-primary/40";
const tileSelectedCls =
  tileBaseCls + " border-primary bg-primary/10 font-semibold text-primary";
const tileErrorCls =
  tileBaseCls + " border-red-400 bg-white text-on-surface focus-visible:border-red-500";

export default function ContactLeadForm({ sourcePage }: { sourcePage?: string }) {
  const { enabled: recaptchaEnabled, ready: recaptchaReady, executeRecaptcha } = useRecaptcha();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactLeadClientFields>({
    resolver: zodResolver(contactLeadClientSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const interestedIn = watch("interestedIn");

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    setSubmitError(null);
    setSuccess(null);

    let recaptchaToken: string | undefined;
    if (recaptchaEnabled) {
      if (!recaptchaReady) {
        setSubmitError("Security check is still loading. Please wait a moment and try again.");
        setSubmitting(false);
        return;
      }
      const token = await executeRecaptcha("contact_lead");
      if (!token) {
        setSubmitError("Security verification failed. Please refresh and try again.");
        setSubmitting(false);
        return;
      }
      recaptchaToken = token;
    }

    const res = await fetch("/api/contact-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        sourcePage: sourcePage ?? "/contact",
        recaptchaToken,
      }),
    });

    if (!res.ok) {
      const payload = await res.json().catch(() => null);
      setSubmitError(payload?.error?.message ?? "Could not submit your message. Please try again.");
      setSubmitting(false);
      return;
    }

    reset(defaultValues);
    setSuccess("Thanks, your message has been submitted. Our team will reach out shortly.");
    setSubmitting(false);
  });

  const selectInterest = (option: InterestedInOption) => {
    setValue("interestedIn", option, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-on-surface">Full name</span>
        <input
          {...register("fullName")}
          className={errors.fullName ? inputErrorCls : inputCls}
          placeholder="Your full name"
          autoComplete="name"
        />
        {errors.fullName ? <p className={fieldErrorCls}>{errors.fullName.message}</p> : null}
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-on-surface">Email address</span>
        <input
          type="email"
          {...register("email")}
          className={errors.email ? inputErrorCls : inputCls}
          placeholder="name@company.com"
          autoComplete="email"
        />
        {errors.email ? <p className={fieldErrorCls}>{errors.email.message}</p> : null}
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-on-surface">Phone</span>
        <input
          {...register("phone")}
          className={errors.phone ? inputErrorCls : inputCls}
          placeholder="+91 90000 00000"
          autoComplete="tel"
        />
        {errors.phone ? <p className={fieldErrorCls}>{errors.phone.message}</p> : null}
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-on-surface">Company</span>
        <input
          {...register("company")}
          className={errors.company ? inputErrorCls : inputCls}
          placeholder="Your company (optional)"
          autoComplete="organization"
        />
        {errors.company ? <p className={fieldErrorCls}>{errors.company.message}</p> : null}
      </label>

      <fieldset className="grid gap-1.5 md:col-span-2">
        <legend className="text-sm font-semibold text-on-surface mb-1">I'm interested in</legend>
        <input type="hidden" {...register("interestedIn")} />
        <div className="grid gap-3 grid-cols-2 xl:flex" role="radiogroup" aria-label="I'm interested in">
          {INTERESTED_IN_OPTIONS.map((option) => {
            const selected = interestedIn === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => selectInterest(option)}
                className={
                  `${selected ? tileSelectedCls : errors.interestedIn ? tileErrorCls : tileIdleCls}`
                }
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.interestedIn ? <p className={fieldErrorCls}>{errors.interestedIn.message}</p> : null}
      </fieldset>

      <label className="grid gap-1.5 md:col-span-2">
        <span className="text-sm font-semibold text-on-surface">How can we help?</span>
        <textarea
          {...register("message")}
          rows={6}
          className={
            (errors.message ? inputErrorCls : inputCls) +
            " min-h-[100px] resize-y py-2.5"
          }
          placeholder="Share your goals, project context, and timeline (at least 20 characters)."
        />
        {errors.message ? <p className={fieldErrorCls}>{errors.message.message}</p> : null}
      </label>

      {submitError ? <p className="md:col-span-2 text-sm text-red-600">{submitError}</p> : null}
      {success ? (
        <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,158,11,0.18),transparent_45%)]" />
          <div className="relative flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 animate-pulse text-emerald-600" />
            <p className="text-sm leading-relaxed">{success}</p>
          </div>
        </div>
      ) : null}

      <div className="md:col-span-2 space-y-3">
        <button
          type="submit"
          disabled={submitting || (recaptchaEnabled && !recaptchaReady)}
          className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending..." : "Send message"}
        </button>
        <RecaptchaNotice />
      </div>
    </form>
  );
}
