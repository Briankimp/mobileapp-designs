import React, { forwardRef } from "react";
import { classNames } from "@/utils/classNames";

interface TnCButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "normal" | "outline" | "ghost" | "link";
  customSize?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  className?: string;
}

const TnCButton = forwardRef<
  HTMLButtonElement | HTMLDivElement,
  TnCButtonProps
>(
  (
    {
      className,
      variant = "default",
      customSize = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "div" : "button";

    const variantClasses = {
      default: "bg-blue-200 hover:bg-blue-200/90 rounded-md text-white-100",
      normal: "text-white",
      outline:
        "border border-blue-200/20 bg-blue-100/10 hover:bg-blue-100/30 rounded-md",
      ghost: "hover:bg-background hover:bg-primary-light-3 hover:bg-opacity-50",
      link: "underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      default: "",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "",
    };

    const classes = classNames(
      `py-2 px-6 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-base font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`,
      variantClasses[variant],
      sizeClasses[customSize]
    );

    return React.createElement(Comp, {
      className: classes,
      ref,
      ...props,
    });
  }
);

TnCButton.displayName = "TnCButton";

export { TnCButton };
