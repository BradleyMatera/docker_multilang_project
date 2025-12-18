import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-[var(--primary)] text-white hover:brightness-110",
  secondary: "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]",
  ghost: "border border-[var(--border-subtle)] text-[var(--foreground)] hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children, fullWidth = false, ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-md)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] ring-offset-[var(--background)] disabled:opacity-60 disabled:cursor-not-allowed";
  const width = fullWidth ? "w-full" : "";
  const composedClass = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${width} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a className={composedClass} href={href} {...anchorProps} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={composedClass} type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"} {...rest}>
      {children}
    </button>
  );
}
