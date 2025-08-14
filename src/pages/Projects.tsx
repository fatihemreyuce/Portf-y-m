import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder } from "lucide-react";

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
};

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      title: "Portfolio Landing",
      desc: "Tailwind + shadcn/ui ile basit landing page.",
      tags: ["React", "Tailwind", "UI"],
      link: "https://example.com",
    },
    {
      title: "Todo App",
      desc: "LocalStorage destekli küçük bir görev yöneticisi.",
      tags: ["React", "LocalStorage"],
      link: "https://example.com",
    },
    {
      title: "API Dashboard",
      desc: "fetch API ile basit veri panosu.",
      tags: ["React", "fetch"],
      link: "https://example.com",
    },
  ]);

  return (
    <section id="projects" className="w-full px-4 py-14 bg-white">
      <div className="max-w-6xl mx-auto flex items-end justify-between mb-8">
        <div className="flex items-center gap-2">
          <Folder className="h-5 w-5 text-primary" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Öne Çıkan Projeler</h2>
            <p className="text-muted-foreground">Küçük ama faydalı işler.</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {p.title}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline flex items-center gap-1 text-sm"
                >
                  İncele <ExternalLink className="h-4 w-4" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge variant="secondary" key={t}>{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
