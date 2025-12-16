import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/shared/ui";
import { siteConfig } from "@/shared/config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name}`,
};

export default function AboutPage() {
  return (
    <Container>
      <div className="space-y-6 text-[15px] leading-relaxed">
        <p>
          안녕하세요, {siteConfig.author.name}입니다.
        </p>
        <p>
          개발하면서 배운 것들과 생각을 기록하는 공간입니다.
        </p>
        <div className="pt-4 flex gap-6 text-sm">
          <Link
            href={`mailto:${siteConfig.author.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            email
          </Link>
          <Link
            href={siteConfig.links.github}
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
