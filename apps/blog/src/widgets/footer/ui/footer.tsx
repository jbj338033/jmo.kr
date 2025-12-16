import Link from "next/link";
import { Container } from "@/shared/ui";
import { siteConfig } from "@/shared/config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container>
        <div className="flex items-center justify-between py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.author.name}</p>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
      </Container>
    </footer>
  );
}
