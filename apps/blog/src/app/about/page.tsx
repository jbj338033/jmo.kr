import type { Metadata } from "next";
import { Container, Prose } from "@/shared/ui";
import { siteConfig } from "@/shared/config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name}`,
};

export default function AboutPage() {
  return (
    <Container>
      <Prose>
        <h1>About</h1>
        <p>
          안녕하세요, {siteConfig.author.name}입니다.
        </p>
        <p>
          이 블로그는 개발하면서 배운 것들과 생각을 기록하는 공간입니다.
        </p>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href={`mailto:${siteConfig.author.email}`}>Email</a>
          </li>
          <li>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </Prose>
    </Container>
  );
}
