import Link from "next/link";
import type { Post } from "../model";

interface PostCardProps {
  post: Post;
}

function formatShortDate(date: string): string {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <Link
        href={`/posts/${post.slug}`}
        className="group flex items-baseline justify-between gap-4 py-3 -mx-3 px-3 rounded-lg hover:bg-muted/50 transition-colors"
      >
        <h2 className="font-medium group-hover:text-primary transition-colors truncate">
          {post.meta.title}
        </h2>
        <time className="text-sm text-muted-foreground tabular-nums shrink-0">
          {formatShortDate(post.meta.date)}
        </time>
      </Link>
    </article>
  );
}
