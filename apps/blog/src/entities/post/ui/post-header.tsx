import type { PostMeta } from "../model";
import { formatDate } from "@/shared/lib";

interface PostHeaderProps {
  meta: PostMeta;
}

export function PostHeader({ meta }: PostHeaderProps) {
  return (
    <header className="mb-8 pb-8 border-b border-border">
      <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
      <p className="mt-2 text-muted-foreground">{meta.description}</p>
      <time className="mt-4 block text-sm text-muted-foreground">
        {formatDate(meta.date)}
      </time>
      {meta.tags && meta.tags.length > 0 && (
        <div className="mt-4 flex gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
