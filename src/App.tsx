import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Skills from "@/pages/Skills";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="w-full">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}