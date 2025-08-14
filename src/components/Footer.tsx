import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Fatih Emre Yüce</p>
        <div className="flex gap-4 items-center">
          <a href="#home" className="hover:underline flex items-center gap-1">
            Yukarı <ArrowUp className="h-3 w-3" />
          </a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}