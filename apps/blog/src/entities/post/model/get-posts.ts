import fs from "fs";
import path from "path";
import type { Post, PostMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export async function getPosts(category?: string): Promise<Post[]> {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const mod = await import(`@/content/${slug}.mdx`);
      return {
        slug,
        meta: mod.meta as PostMeta,
        content: mod.default,
      };
    })
  );

  const sorted = posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  if (category) {
    return sorted.filter((p) => p.meta.category === category);
  }

  return sorted;
}

export async function getCategories(): Promise<string[]> {
  const posts = await getPosts();
  const categories = new Set(
    posts.map((p) => p.meta.category).filter((c): c is string => !!c)
  );
  return Array.from(categories).sort();
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const mod = await import(`@/content/${slug}.mdx`);
    return {
      slug,
      meta: mod.meta as PostMeta,
      content: mod.default,
    };
  } catch {
    return null;
  }
}

export async function getAdjacentPosts(slug: string) {
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
