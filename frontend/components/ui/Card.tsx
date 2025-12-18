import { ElementType, ReactNode } from "react";

type CardPadding = "sm" | "md" | "lg";
type CardShadow = "none" | "soft" | "strong";

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowMap: Record<CardShadow, string | undefined> = {
  none: undefined,
  soft: "var(--shadow-soft)",
  strong: "var(--shadow-strong)",
};

interface CardProps {
  as?: ElementType;
  padding?: CardPadding;
  shadow?: CardShadow;
  className?: string;
  children: ReactNode;
}

export function Card({ as: Tag = "div", padding = "md", shadow = "soft", className = "", children }: CardProps) {
  return (
    <Tag
      className={`rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-1)] backdrop-blur ${paddingClasses[padding]} ${className}`.trim()}
      style={shadowMap[shadow] ? { boxShadow: shadowMap[shadow] } : undefined}
    >
      {children}
    </Tag>
  );
}
