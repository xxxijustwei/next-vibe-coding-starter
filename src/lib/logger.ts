import pino, { Logger } from "pino";

const LOG_LEVEL = process.env.NODE_ENV === "production" ? "warn" : "debug";

export const logger: Logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname",
      translateTime: "SYS:standard",
    },
  },
  level: LOG_LEVEL,
});
