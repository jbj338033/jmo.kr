import Link from "next/link";
import { Container } from "@/shared/ui";
import { getPosts, getCategories } from "@/entities/post";
import { PostList } from "@/widgets/post-list";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const [posts, categories] = await Promise.all([
    getPosts(category),
    getCategories(),
  ]);

  return (
    <Container>
      {categories.length > 0 && (
        <nav className="flex gap-3 mb-8 text-sm">
          <Link
            href="/"
            className={category ? "text-muted-foreground hover:text-foreground transition-colors" : "font-medium"}
          >
            all
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/?category=${c}`}
              className={category === c ? "font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
            >
              {c}
            </Link>
          ))}
        </nav>
      )}
      <PostList posts={posts} />
    </Container>
  );
}
