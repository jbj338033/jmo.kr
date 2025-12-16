import Link from "next/link";
import { Container } from "@/shared/ui";
import { siteConfig } from "@/shared/config";

export function Footer() {
  return (
    <footer className="mt-auto py-16">
      <Container>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>{siteConfig.author.name}</p>
          <Link
            href={siteConfig.links.github}
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
