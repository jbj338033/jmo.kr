import { cn } from "@/shared/lib";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-a:text-primary",
        "prose-pre:bg-muted prose-pre:border prose-pre:border-border",
        "prose-code:before:content-none prose-code:after:content-none",
        className
      )}
    >
      {children}
    </article>
  );
}
