import { connectToDatabase, isDatabaseConnected, resetMongooseCache } from "@/lib/db/mongoose";

const TRANSIENT_ERROR_NAMES = new Set([
  "MongoServerSelectionError",
  "MongoNetworkError",
  "MongoTimeoutError",
  "MongoNetworkTimeoutError",
  "MongoExpiredSessionError",
]);

function isTransientError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const name = "name" in error ? String((error as { name: string }).name) : "";
  if (TRANSIENT_ERROR_NAMES.has(name)) return true;
  const message = "message" in error ? String((error as { message: string }).message) : "";
  return /timed out|connection|ECONNREFUSED|ENOTFOUND|network/i.test(message);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type WithDbRetryOptions = {
  retries?: number;
  delayMs?: number;
};

/**
 * Connects to MongoDB and runs `fn`, retrying once on transient failures
 * (Atlas cold start, dropped connection, selection timeout).
 */
export async function withDbRetry<T>(
  fn: () => Promise<T>,
  options: WithDbRetryOptions = {}
): Promise<T> {
  const maxRetries = options.retries ?? 1;
  const delayMs = options.delayMs ?? 300;
  let lastError: unknown;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await connectToDatabase();
      if (!isDatabaseConnected()) {
        throw new Error("MongoDB connection is not ready");
      }
      return await fn();
    } catch (error) {
      lastError = error;
      const canRetry = attempt < maxRetries && isTransientError(error);
      if (canRetry) {
        console.warn(
          `[mongodb] query attempt ${attempt + 1} failed, retrying:`,
          error instanceof Error ? error.message : error
        );
        resetMongooseCache();
        await sleep(delayMs);
        continue;
      }
      throw error;
    }
  }

  throw lastError;
}
