import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

interface SocialsProps {
  compact?: boolean;
}

export default function Socials({ compact = false }: SocialsProps) {
  const cls = compact ? "hidden sm:flex items-center gap-2" : "flex items-center gap-3";
  return (
    <div className={cls}>
      <Button variant="outline" size="icon" asChild>
        <a href="https://github.com/username" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="mailto:mail@domain.com" aria-label="Mail">
          <Mail className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://twitter.com/username" target="_blank" rel="noreferrer" aria-label="Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://instagram.com/username" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}