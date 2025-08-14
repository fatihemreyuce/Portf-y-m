import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "shadcn/ui", "Lucide Icons"
  ];

  return (
    <section id="skills" className="w-full px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-base px-3 py-1 hover:bg-white/90">{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}