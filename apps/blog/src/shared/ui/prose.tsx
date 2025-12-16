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
        "prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900",
        "prose-pre:text-neutral-800 dark:prose-pre:text-neutral-200",
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-code:bg-neutral-100 prose-code:text-neutral-800",
        "dark:prose-code:bg-neutral-800 dark:prose-code:text-neutral-200",
        className
      )}
    >
      {children}
    </article>
  );
}
