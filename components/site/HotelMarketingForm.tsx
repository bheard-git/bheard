"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  MessageCircle,
  Megaphone,
  MonitorCog,
  CircleHelp,
  ChevronDown,
} from "lucide-react";

import { trackLeadSubmission } from "@/lib/analytics/events";

import {
  hotelMarketingLeadClientSchema,
  type HotelMarketingLeadClientFields,
  type HotelMarketingInterest,
  HOTEL_MARKETING_INTEREST_OPTIONS,
  HOTEL_PROPERTY_TYPE_OPTIONS,
} from "@/lib/validators/landingLead.validator";
import { FaWhatsapp } from "react-icons/fa";

const defaultValues: HotelMarketingLeadClientFields = {
  propertyName: "",
  propertyType: "",
  fullName: "",
  email: "",
  phone: "",
  interestedIn: "",
  message: "",
};

const fieldErrorCls =
  "mb-0.5 h-0.5 -translate-y-1.5 text-[11px] leading-tight text-red-600";

const labelCls =
  "font-body text-[11px] font-semibold text-on-surface";

const inputCls =
  "h-10 w-full rounded-md border border-outline-variant bg-white px-3 font-body text-xs text-on-surface outline-none transition placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/15";

const inputErrorCls =
  inputCls +
  " border-red-400 focus:border-red-500 focus:ring-red-500/20";

const interestTileBaseCls =
  "flex min-h-[54px] items-center gap-2 rounded-md border px-2.5 py-2 text-left font-body text-[10px] font-medium leading-tight transition-all duration-200 outline-none focus-visible:border-primary";

const interestTileIdleCls =
  interestTileBaseCls +
  " border-outline-variant bg-white text-on-surface hover:border-primary/40 hover:bg-primary/5";

const interestTileSelectedCls =
  interestTileBaseCls +
  " border-primary bg-primary/10 font-semibold text-primary";

const interestTileErrorCls =
  interestTileBaseCls +
  " border-red-400 bg-white text-on-surface";

const interestIconMap: Record<
  HotelMarketingInterest,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  "Marketing & Social": Megaphone,
  "Performance Marketing": BarChart3,
  "Technology / Digital": MonitorCog,
  "AI & Automation": Bot,
  "Not sure yet": CircleHelp,
};

export default function LandingLeadForm({
  sourcePage = "/hotel-marketing",
}: {
  sourcePage?: string;
}) {
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
  } = useForm<HotelMarketingLeadClientFields>({
    resolver: zodResolver(hotelMarketingLeadClientSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const interestedIn = watch("interestedIn");

  const selectInterest = (
    option: HotelMarketingInterest
  ) => {
    setValue("interestedIn", option, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const propertyType = watch("propertyType");
  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    setSubmitError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          phone: `${countryCode} ${values.phone}`.trim(),
          sourcePage,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);

        setSubmitError(
          payload?.error?.message ??
            "Could not submit your request. Please try again."
        );

        return;
      }

      trackLeadSubmission({
        formName: "hotel_marketing_lead_form",
        sourcePage,
      });

      reset(defaultValues);
      setCountryCode("+91");

      setSuccess(
        "Thanks! We'll review your requirement and get back to you."
      );
    } catch {
      setSubmitError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-3.5"
    >
      {/* =====================================================
          FORM TITLE
      ====================================================== */}
      <div>
        <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
          Tell us what you need help with.
        </h2>

        <p className="mt-3 font-body text-[10px] font-semibold text-on-surface">
          What do you need help with?
        </p>
      </div>

      {/* =====================================================
          INTEREST
      ====================================================== */}
      <fieldset className="grid gap-1.5">
        <input
          type="hidden"
          {...register("interestedIn")}
        />

        <div
          className="grid grid-cols-2 gap-2 lg:grid-cols-5"
          role="radiogroup"
          aria-label="What do you need help with?"
        >
          {HOTEL_MARKETING_INTEREST_OPTIONS.map(
            (option) => {
              const selected =
                interestedIn === option;

              const Icon = interestIconMap[option];

              return (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() =>
                    selectInterest(option)
                  }
                  className={
                    selected
                      ? interestTileSelectedCls
                      : errors.interestedIn
                        ? interestTileErrorCls
                        : interestTileIdleCls
                  }
                >
                  <Icon
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.6}
                  />

                  <span>{option}</span>
                </button>
              );
            }
          )}
        </div>

        {errors.interestedIn ? (
          <p className={fieldErrorCls}>
            {errors.interestedIn.message}
          </p>
        ) : null}
      </fieldset>

      {/* =====================================================
          PROPERTY / BRAND + PROPERTY TYPE
      ====================================================== */}
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={labelCls}>
            Property / Brand Name
          </span>

          <input
            {...register("propertyName")}
            className={
              errors.propertyName
                ? inputErrorCls
                : inputCls
            }
            placeholder="Enter property / brand name"
            autoComplete="organization"
          />

          {errors.propertyName ? (
            <p className={fieldErrorCls}>
              {errors.propertyName.message}
            </p>
          ) : null}
        </label>

        <label className="">
          <div className="relative grid gap-1.5">
            <span className={labelCls}>
              Property Type
            </span>

            {/* Hidden field keeps react-hook-form registration */}
            <input
              type="hidden"
              {...register("propertyType")}
            />

            <button
              type="button"
              onClick={() => setPropertyTypeOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={propertyTypeOpen}
              className={[
                "flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 text-left text-sm outline-none transition",
                "focus:border-primary focus:ring-1 focus:ring-primary/20",
                errors.propertyType
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                  : "border-outline-variant hover:border-primary/40",
              ].join(" ")}
            >
              <span
                className={
                  propertyType
                    ? "text-on-surface"
                    : "text-on-surface-variant"
                }
              >
                {propertyType ||
                  "Hotel / Resort / F&B / Other"}
              </span>

              <ChevronDown
                className={[
                  "h-4 w-4 shrink-0 text-on-surface-variant transition-transform duration-200",
                  propertyTypeOpen ? "rotate-180" : "",
                ].join(" ")}
                aria-hidden
              />
            </button>

            {propertyTypeOpen && (
              <div
                role="listbox"
                aria-label="Property Type"
                className="
                  absolute
                  left-0
                  right-0
                  z-50
                  mt-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-outline-variant/70
                  bg-white
                  p-1
                  shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)]
                "
              >
                {HOTEL_PROPERTY_TYPE_OPTIONS.map((option) => {
                  const selected = propertyType === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setValue("propertyType", option, {
                          shouldValidate: true,
                          shouldDirty: true,
                          shouldTouch: true,
                        });

                        setPropertyTypeOpen(false);
                      }}
                      className={[
                        "flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        selected
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-on-surface hover:bg-primary/5 hover:text-primary",
                      ].join(" ")}
                    >
                      <span className="flex-1">
                        {option}
                      </span>

                      {selected && (
                        <span
                          className="ml-3 h-1.5 w-1.5 rounded-full bg-primary"
                          aria-hidden
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {errors.propertyType && (
              <p className={fieldErrorCls}>
                {errors.propertyType.message}
              </p>
            )}
          </div>
        </label>
      </div>

      {/* =====================================================
          NAME
      ====================================================== */}
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
            <span className={labelCls}>
            Your Name
            </span>

            <input
            {...register("fullName")}
            className={
                errors.fullName
                ? inputErrorCls
                : inputCls
            }
            placeholder="Enter your name"
            autoComplete="name"
            />

            {errors.fullName ? (
            <p className={fieldErrorCls}>
                {errors.fullName.message}
            </p>
            ) : null}
        </label>
        <label className="grid gap-1.5">
            <span className={labelCls}>
            Work Email
            </span>

            <input
            type="email"
            {...register("email")}
            className={
                errors.email
                ? inputErrorCls
                : inputCls
            }
            placeholder="Enter your work email"
            autoComplete="email"
            />

            {errors.email ? (
            <p className={fieldErrorCls}>
                {errors.email.message}
            </p>
            ) : null}
        </label>
      </div>

      {/* =====================================================
          PHONE / WHATSAPP
      ====================================================== */}
      <label className="grid gap-1.5">
        <span className={labelCls}>
          Phone / WhatsApp
        </span>

        <div className="grid grid-cols-[76px_1fr] gap-2">
          <div className="relative">
            <select
              aria-label="Country code"
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value)}
              className={`${inputCls} appearance-none pr-7`}
            >
              <option value="+91">
                +91
              </option>
              <option value="+1">
                +1
              </option>
              <option value="+44">
                +44
              </option>
              <option value="+65">
                +65
              </option>
              <option value="+971">
                +971
              </option>
            </select>
          </div>

          <input
            {...register("phone")}
            className={
              errors.phone
                ? inputErrorCls
                : inputCls
            }
            placeholder="Enter phone number"
            autoComplete="tel"
          />
        </div>

        {errors.phone ? (
          <p className={fieldErrorCls}>
            {errors.phone.message}
          </p>
        ) : null}
      </label>

      {/* =====================================================
          EMAIL
      ====================================================== */}

      {/* =====================================================
          MESSAGE
      ====================================================== */}
      <label className="grid gap-1.5">
        <span className={labelCls}>
          Tell us briefly what you're looking for{" "}
          <span className="font-normal text-on-surface-variant">
            (Optional)
          </span>
        </span>

        <textarea
          {...register("message")}
          rows={2}
          className={
            (errors.message
              ? inputErrorCls
              : inputCls) +
            " min-h-[58px] resize-none py-2.5"
          }
          placeholder="Type your message..."
        />

        {errors.message ? (
          <p className={fieldErrorCls}>
            {errors.message.message}
          </p>
        ) : null}
      </label>

      {/* =====================================================
          ERROR
      ====================================================== */}
      {submitError ? (
        <p className="text-xs leading-relaxed text-red-600">
          {submitError}
        </p>
      ) : null}

      {/* =====================================================
          SUCCESS
      ====================================================== */}
      {success ? (
        <div className="relative overflow-hidden rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-emerald-800">
          <div className="relative flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

            <p className="font-body text-xs leading-relaxed">
              {success}
            </p>
          </div>
        </div>
      ) : null}

      {/* =====================================================
          PRIMARY CTA
      ====================================================== */}
      <button
        type="submit"
        disabled={submitting}
        className="
          inline-flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-md
          bg-primary
          px-5
          font-headline
          text-xs
          font-bold
          uppercase
          tracking-[0.12em]
          text-primary-foreground
          shadow-[0_8px_24px_-10px_rgba(255,146,62,0.7)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-primary/90
          hover:shadow-[0_12px_30px_-10px_rgba(255,146,62,0.8)]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {submitting
          ? "Sending..."
          : "Start a conversation"}

        {!submitting ? (
          <ArrowRight
            className="h-4 w-4"
            aria-hidden
          />
        ) : null}
      </button>

      {/* =====================================================
          WHATSAPP
      ====================================================== */}
      <a
        href="https://wa.me/917966820782"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mx-auto
          inline-flex
          items-center
          gap-2
          font-body
          text-xs
          font-semibold
          text-[#20b968]
          transition-colors
          hover:text-[#159954]
        "
      >
        <FaWhatsapp
          className="h-4 w-4"
          strokeWidth={2}
        />

        Prefer WhatsApp?

        <ArrowRight
          className="h-3.5 w-3.5"
          aria-hidden
        />
      </a>
    </form>
  );
}