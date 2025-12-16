import Link from "next/link";
import { Container } from "@/shared/ui";

export default function NotFound() {
  return (
    <Container>
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">페이지를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="mt-8 inline-block text-primary hover:underline"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </Container>
  );
}
