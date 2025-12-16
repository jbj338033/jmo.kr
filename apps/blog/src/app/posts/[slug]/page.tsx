import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Prose } from "@/shared/ui";
import { getPost, getPosts, PostHeader } from "@/entities/post";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const Content = post.content;

  return (
    <Container>
      <article>
        <PostHeader meta={post.meta} />
        <Prose>
          <Content />
        </Prose>
      </article>
    </Container>
  );
}
