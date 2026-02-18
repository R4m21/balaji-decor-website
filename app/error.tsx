"use client";

import config from "@/lib/config";
import { logger } from "@/lib/logger";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    if (!config.isProduction) {
      logger.error(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Something went wrong.</h1>
        <button
          onClick={() => reset()}
          className="mt-4 rounded bg-primary px-4 py-2 text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
