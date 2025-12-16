import Link from "next/link";
import type { Post } from "../model";
import { formatDate } from "@/shared/lib";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block py-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium group-hover:text-primary transition-colors">
            {post.meta.title}
          </h2>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.meta.description}
          </p>
          <time className="text-muted-foreground text-xs mt-2">
            {formatDate(post.meta.date)}
          </time>
        </div>
      </Link>
    </article>
  );
}
