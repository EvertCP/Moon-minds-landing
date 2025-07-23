import * as React from 'react';
import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

interface BadgeWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariantProps['variant'];
  className?: string;
  children: React.ReactNode;
}

export function BadgeWrapper({ variant, className, children, ...props }: BadgeWrapperProps) {
  return (
    <Badge variant={variant} className={className} {...props}>
      {children}
    </Badge>
  );
}
