import { cn } from "@/shared/lib";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[640px] px-6", className)}>
      {children}
    </div>
  );
}
