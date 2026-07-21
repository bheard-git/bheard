const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export type RecaptchaAction = "contact_lead" | "career_application";

export function isRecaptchaConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() &&
      process.env.RECAPTCHA_SECRET_KEY?.trim()
  );
}

function minScore() {
  const raw = process.env.RECAPTCHA_MIN_SCORE;
  const parsed = raw ? Number.parseFloat(raw) : 0.5;
  return Number.isFinite(parsed) ? parsed : 0.5;
}

type VerifyResult =
  | { ok: true }
  | { ok: false; message: string };

type GoogleVerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(
  token: string | null | undefined,
  expectedAction: RecaptchaAction
): Promise<VerifyResult> {
  if (!isRecaptchaConfigured()) {
    if (process.env.NODE_ENV === "production") {
      return { ok: false, message: "Security verification is not configured." };
    }
    return { ok: true };
  }

  if (!token?.trim()) {
    return { ok: false, message: "Security verification failed. Please refresh and try again." };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY!.trim();
  const body = new URLSearchParams({
    secret,
    response: token.trim(),
  });

  let data: GoogleVerifyResponse;
  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    data = (await res.json()) as GoogleVerifyResponse;
  } catch {
    return { ok: false, message: "Could not verify security check. Please try again." };
  }

  if (!data.success) {
    return { ok: false, message: "Security verification failed. Please try again." };
  }

  if (typeof data.score === "number" && data.score < minScore()) {
    return { ok: false, message: "Submission blocked as suspicious. Please try again later." };
  }

  if (data.action && data.action !== expectedAction) {
    return { ok: false, message: "Security verification failed. Please refresh and try again." };
  }

  return { ok: true };
}
