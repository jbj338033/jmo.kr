import type { Metadata } from "next";
import { Container } from "@/shared/ui";

export const metadata: Metadata = {
  title: "About",
  description: "About jmo",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="space-y-4 leading-relaxed">
        <p>안녕하세요, jmo입니다.</p>
        <p>개발하면서 배운 것들과 생각을 기록하는 공간입니다.</p>
      </div>
    </Container>
  );
}
