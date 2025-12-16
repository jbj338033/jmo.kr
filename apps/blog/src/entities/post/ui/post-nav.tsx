import Link from "next/link";
import type { Post } from "../model";

interface PostNavProps {
  prev: Post | null;
  next: Post | null;
}

export function PostNav({ prev, next }: PostNavProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-16 pt-8 border-t border-border flex justify-between gap-4">
      <div className="flex-1">
        {prev && (
          <Link
            href={`/posts/${prev.slug}`}
            className="group block text-sm"
          >
            <span className="text-muted-foreground">이전</span>
            <p className="mt-1 group-hover:text-primary transition-colors truncate">
              {prev.meta.title}
            </p>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {next && (
          <Link
            href={`/posts/${next.slug}`}
            className="group block text-sm"
          >
            <span className="text-muted-foreground">다음</span>
            <p className="mt-1 group-hover:text-primary transition-colors truncate">
              {next.meta.title}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
