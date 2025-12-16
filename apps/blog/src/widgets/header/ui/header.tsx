import Link from "next/link";
import { Container } from "@/shared/ui";
import { ThemeToggle } from "@/features/theme";
import { siteConfig } from "@/shared/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-semibold text-lg hover:text-primary transition-colors"
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
