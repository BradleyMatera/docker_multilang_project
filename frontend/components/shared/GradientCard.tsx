import { Card, CardBody } from "@nextui-org/react";
import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  gradient: string;
}

export function GradientCard({ children, gradient }: GradientCardProps) {
  return (
    <Card radius="lg" className={`border border-white/10 bg-gradient-to-br ${gradient} bg-opacity-20 backdrop-blur-xl shadow-xl-gradient`}>
      <CardBody className="p-6 md:p-8 text-left space-y-3">{children}</CardBody>
    </Card>
  );
}
