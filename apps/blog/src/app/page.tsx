import { Container } from "@/shared/ui";
import { getPosts } from "@/entities/post";
import { PostList } from "@/widgets/post-list";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  );
}
