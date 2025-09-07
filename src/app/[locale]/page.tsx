"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("intro");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-muted-foreground">{t("description")}</p>
      </main>
    </div>
  );
};

export default Page;
