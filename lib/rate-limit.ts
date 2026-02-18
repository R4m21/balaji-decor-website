const requests = new Map<string, { count: number; expires: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute

export function rateLimit(ip: string, limit: number): boolean {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record || record.expires < now) {
    requests.set(ip, {
      count: 1,
      expires: now + WINDOW_MS,
    });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count += 1;
  return true;
}
