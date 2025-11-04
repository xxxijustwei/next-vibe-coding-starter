"use client";

import { ViewTransition } from "react";
import { UnoptimizedLazyImage } from "@/components/lazy-image";
import { useRouter } from "@/i18n/routing";

const Page = () => {
  const router = useRouter();
  return (
    <ViewTransition>
      <div className="h-screen w-full max-w-4xl mx-auto py-4">
        <div className="h-full flex items-center justify-center">
          <div
            className="aspect-18/13 w-full cursor-zoom-out"
            onClick={() => {
              router.push("/");
            }}
          >
            <ViewTransition name="image">
              <UnoptimizedLazyImage
                src="/asahi.webp"
                alt="intro"
                className="rounded-2xl overflow-hidden "
                imgClassName="w-full h-full object-contain"
              />
            </ViewTransition>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
