import Socials from "@/components/Socials";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Menu */}
        <div className="flex items-center gap-3">
          <button className="sm:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#home" className="font-bold tracking-tight text-lg">Fatih.dev</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Social Icons */}
        <Socials compact />
      </div>
    </header>
  );
}
