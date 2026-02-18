import crypto from "crypto";
import { cookies } from "next/headers";
import config from "./config";

const isProd = config.isProduction;

/**
 * Cookie Name
 * __Host- prefix is only valid in production over HTTPS
 */
const CSRF_COOKIE_NAME = isProd ? "__Host-balaji-csrf" : "balaji-csrf";
const CSRF_HEADER_NAME = "x-csrf-token";

/**
 * Generate secure random CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Set CSRF cookie
 */
export async function setCSRFCookie(token: string) {
  const cookieStore = await cookies();

  cookieStore.set({
    name: CSRF_COOKIE_NAME,
    value: token,
    httpOnly: false, // MUST be false for double-submit pattern
    secure: isProd,
    sameSite: "strict",
    path: "/",
  });
}

/**
 * Validate CSRF token using constant-time comparison
 */
export async function validateCSRF(req: Request): Promise<boolean> {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  const headerToken = req.headers.get(CSRF_HEADER_NAME);

  if (!cookieToken || !headerToken) return false;

  try {
    const cookieBuffer = Buffer.from(cookieToken, "utf-8");
    const headerBuffer = Buffer.from(headerToken, "utf-8");

    if (cookieBuffer.length !== headerBuffer.length) return false;

    return crypto.timingSafeEqual(cookieBuffer, headerBuffer);
  } catch {
    return false;
  }
}

export const CSRF_CONFIG = {
  cookieName: CSRF_COOKIE_NAME,
  headerName: CSRF_HEADER_NAME,
};
