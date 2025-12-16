import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/ui";

export const metadata: Metadata = {
  title: "About",
  description: "About jmo",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="space-y-6 leading-relaxed">
        <p>안녕하세요, jmo입니다.</p>
        <p>개발하면서 배운 것들과 생각을 기록하는 공간입니다.</p>
        <div className="pt-4 flex gap-6 text-sm">
          <Link
            href="mailto:minodevs@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            email
          </Link>
          <Link
            href="https://github.com/jbj338033"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            github
          </Link>
        </div>
      </div>
    </Container>
  );
}
