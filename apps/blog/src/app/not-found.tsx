import Link from "next/link";
import { Container } from "@/shared/ui";

export default function NotFound() {
  return (
    <Container>
      <div className="space-y-4">
        <p className="text-muted-foreground">페이지를 찾을 수 없습니다.</p>
        <Link href="/" className="text-sm hover:underline">
          ← 홈으로
        </Link>
      </div>
    </Container>
  );
}
