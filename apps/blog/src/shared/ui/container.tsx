import { cn } from "@/shared/lib";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-2xl px-4", className)}>{children}</div>
  );
}
