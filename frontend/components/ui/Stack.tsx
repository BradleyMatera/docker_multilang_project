import { ElementType, ReactNode } from "react";

type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const gapMap: Record<StackGap, string> = {
  none: "0px",
  xs: "var(--space-1)",
  sm: "var(--space-2)",
  md: "var(--space-3)",
  lg: "var(--space-4)",
  xl: "var(--space-5)",
  "2xl": "var(--space-6)",
  "3xl": "var(--space-7)",
  "4xl": "var(--space-8)",
};

interface StackProps {
  as?: ElementType;
  gap?: StackGap;
  className?: string;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  children: ReactNode;
}

export function Stack({
  as: Tag = "div",
  gap = "lg",
  align = "stretch",
  justify = "start",
  className = "",
  children,
}: StackProps) {
  const justifyClass =
    justify === "between" ? "justify-between" : justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : "justify-start";
  const alignClass =
    align === "center" ? "items-center" : align === "end" ? "items-end" : align === "stretch" ? "items-stretch" : "items-start";

  return (
    <Tag
      className={`flex flex-col ${alignClass} ${justifyClass} ${className}`.trim()}
      style={{ gap: gapMap[gap] }}
    >
      {children}
    </Tag>
  );
}
