"use client";

import { ViewTransition } from "react";
import { UnoptimizedLazyImage } from "@/components/lazy-image";
import { OptimizeLink } from "@/components/optimize-link";

const Page = () => {
  return (
    <ViewTransition>
      <div className="h-screen w-full max-w-4xl mx-auto py-4">
        <div className="h-full flex items-center justify-center">
          <div className="aspect-18/13 w-full">
            <OptimizeLink href="/" className="cursor-zoom-out">
              <ViewTransition name="image">
                <UnoptimizedLazyImage
                  src="https://github.com/xxxijustwei/next-vibe-coding-starter/raw/main/public/asahi.webp"
                  alt="intro"
                  className="w-full h-full rounded-2xl overflow-hidden "
                  imgClassName="object-contain"
                />
              </ViewTransition>
            </OptimizeLink>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
