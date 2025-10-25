"use client";

import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

export const useI18n = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangeLocale = useCallback(
    (locale: string) => {
      const params = new URLSearchParams(searchParams);
      const newPath = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;
      router.replace(newPath, { locale });
    },
    [searchParams, pathname, router],
  );

  return {
    currentLocale,
    handleChangeLocale,
  };
};
