import crypto from "crypto";
import { cookies } from "next/headers";
import config from "./config";
const isProd = config.isProduction;

const CSRF_COOKIE_NAME = isProd ? "__Host-balaji-csrf" : "balaji-csrf";
const CSRF_HEADER_NAME = "x-csrf-token";

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function setCSRFCookie(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: "strict",
    path: "/",
  });
}

export async function validateCSRF(req: Request): Promise<boolean> {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  const headerToken = req.headers.get(CSRF_HEADER_NAME);

  if (!cookieToken || !headerToken) return false;

  try {
    return crypto.timingSafeEqual(
      Buffer.from(cookieToken),
      Buffer.from(headerToken),
    );
  } catch {
    return false;
  }
}

export const CSRF_CONFIG = {
  cookieName: CSRF_COOKIE_NAME,
  headerName: CSRF_HEADER_NAME,
};
