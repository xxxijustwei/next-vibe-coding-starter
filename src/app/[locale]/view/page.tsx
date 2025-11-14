"use client";

import { ViewTransition } from "react";
import { UnoptimizedLazyImage } from "@/components/lazy-image";
import { OptimizeLink } from "@/components/optimize-link";

const Page = () => {
  return (
    <ViewTransition>
      <div className="h-screen w-full max-w-4xl mx-auto py-4">
        <div className="h-full flex items-center justify-center">
          <OptimizeLink
            href="/"
            className="aspect-18/13 w-full cursor-zoom-out"
          >
            <ViewTransition name="image">
              <UnoptimizedLazyImage
                src="https://github.com/xxxijustwei/next-vibe-coding-starter/raw/main/public/asahi.webp"
                alt="intro"
                className="rounded-2xl overflow-hidden "
                imgClassName="w-full h-full object-contain"
              />
            </ViewTransition>
          </OptimizeLink>
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
