import type { Post } from "@/entities/post";
import { PostCard } from "@/entities/post";

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        아직 작성된 글이 없습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
