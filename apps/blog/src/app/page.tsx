import { Container } from "@/shared/ui";
import { getPosts } from "@/entities/post";
import { PostList } from "@/widgets/post-list";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <Container>
      <section>
        <h1 className="text-2xl font-bold mb-2">Posts</h1>
        <p className="text-muted-foreground mb-8">
          생각과 경험을 기록합니다.
        </p>
        <PostList posts={posts} />
      </section>
    </Container>
  );
}
