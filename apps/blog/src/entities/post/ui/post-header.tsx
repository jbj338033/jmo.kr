import type { PostMeta } from "../model";
import { formatDate } from "@/shared/lib";

interface PostHeaderProps {
  meta: PostMeta;
}

export function PostHeader({ meta }: PostHeaderProps) {
  return (
    <header className="mb-12">
      <time className="text-sm text-muted-foreground">
        {formatDate(meta.date)}
      </time>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">{meta.title}</h1>
    </header>
  );
}
