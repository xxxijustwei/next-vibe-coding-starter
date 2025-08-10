// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { DEFAULT_LANGUAGE, LANGUAGES, detectLanguage } from "./locales";

const I18nMiddleware = createI18nMiddleware({
  locales: LANGUAGES,
  defaultLocale: DEFAULT_LANGUAGE,
  urlMappingStrategy: "rewrite",
  resolveLocaleFromRequest: detectLanguage,
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
