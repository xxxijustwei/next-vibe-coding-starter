"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/wed/button";
import { LANGUAGES, usePathname, useRouter } from "@/i18n/routing";
import { EarthIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export const LanguageToggle = () => {
  const t = useTranslations("locale");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <EarthIcon className="!size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent aria-label="Languages" className="min-w-fit">
        {LANGUAGES.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            onClick={() => router.replace(pathname, { locale })}
            checked={currentLocale === locale}
          >
            {t(locale)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
