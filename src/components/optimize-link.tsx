"use client";

import { LinkProps } from "next/link";
import { useState } from "react";
import { Link } from "@/i18n/routing";

type OptimizeLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  LinkProps;

export function OptimizeLink({ children, ...props }: OptimizeLinkProps) {
  const [active, setActive] = useState(false);

  return (
    <Link
      {...props}
      locale={props.locale || undefined}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  );
}
