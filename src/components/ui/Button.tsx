import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-brand-black text-brand-white hover:bg-brand-gray-800 transition-colors duration-300",
  secondary:
    "border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors duration-300",
  ghost:
    "text-brand-black hover:text-brand-gray-600 transition-colors duration-300",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase font-medium",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
