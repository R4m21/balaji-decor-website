const requests = new Map<string, { count: number; lastRequest: number }>();

export function rateLimit(ip: string, limit: number) {
  const now = Date.now();
  const windowMs = 60 * 1000;

  const record = requests.get(ip);

  if (!record) {
    requests.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (now - record.lastRequest > windowMs) {
    requests.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (record.count >= limit) return false;

  record.count++;
  return true;
}
