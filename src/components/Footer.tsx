import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Fatih.dev — Tüm hakları saklıdır.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><Github size={20} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><Linkedin size={20} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><Mail size={20} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><Twitter size={20} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}