import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Phone, Star, Zap } from "lucide-react";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section id="home" className="w-full px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge className="mb-3 flex items-center gap-1"><Zap className="h-3 w-3" /> Frontend Developer</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Merhaba, ben <span className="text-primary">Fatih</span> 👋
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            React, Tailwind ve shadcn/ui ile temiz ve hızlı web arayüzleri geliştiriyorum. Aşağıda projeler ve iletişim bilgileri var.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects"><Code2 className="mr-2 h-4 w-4" />Projeler</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact"><Phone className="mr-2 h-4 w-4" />İletişim</a>
            </Button>
            <Socials />
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-2xl border bg-gradient-to-br from-primary/10 to-transparent grid place-items-center">
            <Star className="h-20 w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}