export interface PostMeta {
  title: string;
  description: string;
  date: string;
  category?: string;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: React.ComponentType;
}
