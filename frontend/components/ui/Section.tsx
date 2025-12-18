import { ElementType, ReactNode } from "react";
import { Container } from "./Container";
import { Stack } from "./Stack";

type SectionPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<SectionPadding, string> = {
  none: "",
  sm: "py-8",
  md: "py-12 md:py-14",
  lg: "py-16 md:py-20",
};

interface SectionProps {
  as?: ElementType;
  id?: string;
  padding?: SectionPadding;
  className?: string;
  children: ReactNode;
}

export function Section({ as: Tag = "section", id, padding = "md", className = "", children }: SectionProps) {
  return (
    <Tag id={id} className={`${paddingClasses[padding]} ${className}`.trim()}>
      <Container>
        <Stack gap="2xl">{children}</Stack>
      </Container>
    </Tag>
  );
}
