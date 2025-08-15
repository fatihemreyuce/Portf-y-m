import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Phone, Star, Zap } from "lucide-react";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <section id="home" className="w-full scroll-mt-20 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <Badge className="mb-3 inline-flex items-center gap-1">
            <Zap className="h-3 w-3" /> Frontend Developer
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Merhaba, ben <span className="text-primary">Fatih</span> 👋
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-prose">
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
          <div className="w-full md:aspect-square min-h-[220px] rounded-2xl border bg-gradient-to-br from-primary/10 to-transparent grid place-items-center">
            <Star className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
