import config from "@/lib/config";

export async function verifyRecaptcha(token: string) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${config.recaptchaSecret}&response=${token}`,
  });

  const data = await res.json();
  return data.success && data.score > 0.5;
}
