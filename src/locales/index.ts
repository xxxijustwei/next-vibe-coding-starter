import { NextRequest } from "next/server";

export {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
} from "./client";

export const LANGUAGES = ["en", "cn"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const detectLanguage = (req: NextRequest) => {
  const acceptLanguage = req.headers.get("accept-language");
  if (!acceptLanguage) return DEFAULT_LANGUAGE;

  const languages = acceptLanguage.split(",");
  for (const language of languages) {
    if (LANGUAGES.includes(language as Language)) return language as Language;
  }
  return DEFAULT_LANGUAGE;
};

export const getRainbowKitLocale = (locale: Language) => {
  switch (locale) {
    case "en":
      return "en-US";
    case "cn":
      return "zh-CN";
    default:
      return "en-US";
  }
};
