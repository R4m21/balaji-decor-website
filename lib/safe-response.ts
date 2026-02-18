import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import config from "./config";

const isDev = !config.isProduction;

export function safeErrorResponse(
  error: unknown,
  message = "Internal server error",
  status = 500,
) {
  if (isDev) {
    return NextResponse.json(
      {
        error: message,
        details: error instanceof Error ? error.message : error,
      },
      { status },
    );
  }

  logger.error("Production Error:", error);

  return NextResponse.json({ error: message }, { status });
}
