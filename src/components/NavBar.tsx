import { useState } from "react";
import Socials from "@/components/Socials";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-bold tracking-tight text-lg">Fatih.dev</a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Desktop socials */}
        <div className="hidden sm:block">
          <Socials compact />
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t">
          <nav className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" className="py-2" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" className="py-2" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <div className="pt-2">
              <Socials />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
