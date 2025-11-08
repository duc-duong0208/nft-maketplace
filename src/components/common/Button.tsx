import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base = clsx(
    "rounded-full font-semibold transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black",
    fullWidth && "w-full"
  );

  const variants = {
    primary: clsx(
      "bg-yellow-400 text-black",
      !disabled && "hover:bg-yellow-500 hover:shadow-lg",
      disabled && "bg-yellow-600 cursor-not-allowed"
    ),
    secondary: clsx(
      "bg-transparent border border-yellow-400 text-yellow-400",
      !disabled && "hover:text-white hover:bg-yellow-400/10 hover:border-yellow-100",
      disabled && "border-gray-500 text-gray-500 cursor-not-allowed"
    ),
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-2.5 text-sm",
    lg: "px-10 py-3 text-base",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}