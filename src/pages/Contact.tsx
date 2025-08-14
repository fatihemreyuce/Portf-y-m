import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="w-full px-4 py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" /> İletişim
        </h2>
        <form
          className="grid md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Gönderildi!\nAd: ${form.name}\nEmail: ${form.email}\nMesaj: ${form.message}`);
          }}
        >
          <div className="space-y-4">
            <Input
              placeholder="Ad Soyad"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="E-posta"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="space-y-4 md:col-span-2">
            <Textarea
              placeholder="Kısa mesajın…"
              className="min-h-[120px] w-160"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" className="w-full md:w-auto flex items-center gap-2">
              Gönder <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}