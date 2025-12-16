import { cn } from "@/shared/lib";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <article
      className={cn(
        "[&>*]:mb-4 [&>*:last-child]:mb-0",
        "[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4",
        "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3",
        "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2",
        "[&_p]:leading-relaxed",
        "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2",
        "[&_strong]:font-semibold",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:my-1",
        "[&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
        "[&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono",
        "[&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-border",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
        "[&_hr]:border-border [&_hr]:my-8",
        className
      )}
    >
      {children}
    </article>
  );
}
