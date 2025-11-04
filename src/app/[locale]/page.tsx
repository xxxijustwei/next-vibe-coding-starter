"use client";

import { useTranslations } from "next-intl";
import { ViewTransition } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { UnoptimizedLazyImage } from "@/components/lazy-image";
import { ModeToggle } from "@/components/mode-toggle";
import { useRouter } from "@/i18n/routing";

const Page = () => {
  const t = useTranslations("intro");
  const router = useRouter();
  return (
    <ViewTransition>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <main className="w-full max-w-md text-center space-y-3">
          <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("description")}</p>

          <div
            className="aspect-18/13 cursor-zoom-in"
            onClick={() => {
              router.push("/view");
            }}
          >
            <ViewTransition name="image">
              <UnoptimizedLazyImage
                src="/asahi.webp"
                alt="intro"
                className="rounded-2xl overflow-hidden"
                imgClassName="w-full h-full object-contain"
              />
            </ViewTransition>
          </div>
        </main>
      </div>
    </ViewTransition>
  );
};

export default Page;
