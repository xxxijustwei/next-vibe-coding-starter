"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { useRipple } from "@/hooks/use-ripple";
import { cn } from "@/lib/utils";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Loader2Icon } from "lucide-react";
import { useCallback, useState } from "react";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 shrink-0 outline-none relative overflow-hidden",
    "text-sm font-medium whitespace-nowrap rounded-md transition-all cursor-pointer",
    "active:scale-98 transition-all duration-100",
    "disabled:pointer-events-none disabled:opacity-70",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:dark:ring-destructive/40",
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: cn(
          "bg-destructive text-white shadow-xs hover:bg-destructive/90",
          "focus-visible:ring-destructive/20 focus-visible:dark:ring-destructive/40 dark:bg-destructive/60",
        ),
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  disabled = false,
  asChild = false,
  loading,
  setLoading,
  onClick,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    setLoading?: (loading: boolean) => void;
  }) {
  const {
    ripples,
    onClick: handleRippleClick,
    onClear: handleRippleClear,
  } = useRipple();
  const handleLoading = useCallbackRef(setLoading);

  const [uncontrolledLoading, setUncontrolledLoading] = useState(
    loading ?? false,
  );
  const isLoading = loading ?? uncontrolledLoading;
  const isControlled = loading !== undefined;

  const onLoadingChange = useCallback(
    (loading: boolean) => {
      if (!isControlled) {
        setUncontrolledLoading(loading);
      }
      handleLoading?.(loading);
    },
    [isControlled, handleLoading],
  );

  const Comp = asChild ? Slot : "button";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleRippleClick(event);
    if (!onClick) return;

    if (
      typeof onClick === "function" &&
      onClick.constructor.name === "AsyncFunction"
    ) {
      onLoadingChange(true);
      Promise.resolve(onClick(event)).finally(() => {
        onLoadingChange(false);
      });
      return;
    }

    onClick(event);
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading && (
        <>
          <Loader2Icon
            className="size-4 shrink-0 animate-spin"
            aria-hidden="true"
          />
          <span className="sr-only">Loading</span>
        </>
      )}
      <Slottable>{children}</Slottable>
      {ripples.map((ripple) => {
        const duration = Math.min(
          Math.max(0.01 * ripple.size, 0.2),
          ripple.size > 100 ? 0.75 : 0.5,
        );
        return (
          <LazyMotion key={ripple.id} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                initial={{
                  transform: "scale(0)",
                  opacity: 0.35,
                }}
                animate={{ transform: "scale(2)", opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  backgroundColor: "currentColor",
                  borderRadius: "100%",
                  transformOrigin: "center",
                  pointerEvents: "none",
                  overflow: "hidden",
                  inset: 0,
                  zIndex: 0,
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                }}
                transition={{ duration }}
                onAnimationComplete={() => {
                  handleRippleClear(ripple.id);
                }}
              />
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </Comp>
  );
}

export { Button, buttonVariants };
