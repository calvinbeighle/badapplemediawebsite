
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:pointer-events-none",
    {
      // Size Variants
      "text-xs px-3 py-1.5 rounded": size === "sm",
      "text-sm px-5 py-2.5 rounded-md": size === "md",
      "text-base px-7 py-3 rounded-md": size === "lg",

      // Color Variants
      "bg-white text-black hover:bg-gray-100 focus:ring-purple-100": variant === "primary",
      "bg-studio-100 text-white hover:bg-studio-200": variant === "secondary",
      "bg-transparent border border-white text-white hover:bg-white/10 focus:ring-purple-100":
        variant === "outline",
      "bg-transparent text-white hover:bg-purple-100/10": variant === "ghost",
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
