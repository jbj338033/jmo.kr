import Link from "next/link";
import { Container } from "@/shared/ui";
import { ThemeToggle } from "@/features/theme";

export function Header() {
  return (
    <header className="pt-8 pb-16">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-medium hover:opacity-60 transition-opacity">
            jmo's blog
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              about
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
