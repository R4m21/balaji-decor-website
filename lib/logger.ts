import config from "@/lib/config";

const isServer = typeof window === "undefined";

/**
 * Logger – works server + client safely
 * - Server: suppress in production
 * - Client: always logs safely
 */
type LogLevel = "info" | "warn" | "error";

const formatArgs = (level: LogLevel, args: any[]) => [
  `[${new Date().toISOString()}] [${level.toUpperCase()}]`,
  ...args,
];

export const logger = {
  info: (...args: any[]) => {
    if (isServer && config.isProduction) return;
    console.info(...formatArgs("info", args));
  },
  warn: (...args: any[]) => {
    if (isServer && config.isProduction) return;
    console.warn(...formatArgs("warn", args));
  },
  error: (...args: any[]) => {
    if (isServer && config.isProduction) return;
    console.error(...formatArgs("error", args));
  },
};
