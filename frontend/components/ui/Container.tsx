import { ElementType, ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

interface ContainerProps {
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", size = "xl", className = "", children }: ContainerProps) {
  const base = "mx-auto w-full px-6 md:px-10";
  return <Tag className={`${base} ${sizeClasses[size]} ${className}`.trim()}>{children}</Tag>;
}
