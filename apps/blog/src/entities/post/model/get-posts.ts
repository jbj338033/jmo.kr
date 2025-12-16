import fs from "fs";
import path from "path";
import type { Post, PostMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export async function getPosts(): Promise<Post[]> {
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

  return posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
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
