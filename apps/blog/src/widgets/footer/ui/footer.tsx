import Link from "next/link";
import { Container } from "@/shared/ui";

export function Footer() {
  return (
    <footer className="mt-auto py-16">
      <Container>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>jmo</p>
          <Link
            href="https://github.com/jbj338033"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github
          </Link>
        </div>
      </Container>
    </footer>
  );
}
