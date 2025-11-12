"use client";

import { useEffect, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";

type BookCallButtonProps = {
  children?: ReactNode;
  fullWidth?: boolean;
} & Pick<ButtonProps, "variant" | "size" | "className">;

export function BookCallButton({
  children = "Book a Call",
  variant = "default",
  size = "lg",
  className,
  fullWidth,
}: BookCallButtonProps) {
  useEffect(() => {
    async function loadCal() {
      const cal = await getCalApi({ namespace: "book-a-call" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }

    void loadCal();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="book-a-call"
      data-cal-link="roobi/30min"
      data-cal-config='{"layout":"month_view"}'
      className={cn(buttonVariants({ variant, size }), fullWidth && "w-full", className)}
    >
      {children}
    </button>
  );
}

