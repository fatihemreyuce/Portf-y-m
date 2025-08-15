import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { form, setForm, reset } = useContactForm();

  return (
    <section id="contact" className="w-full scroll-mt-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" /> İletişim
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form verisi:", form);
              localStorage.setItem("contactForm", JSON.stringify(form));

              alert(`Gönderildi!
Ad: ${form.name}
Email: ${form.email}
Mesaj: ${form.message}`);
              reset();
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
              <Textarea
                placeholder="Kısa mesajın…"
                className="min-h-[120px]"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="flex flex-wrap gap-3">
                <Button type="submit" className="w-full md:w-auto flex items-center gap-2">
                  Gönder <Send className="h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" onClick={reset}>
                  Temizle
                </Button>
              </div>
            </div>
          </form>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.806002041349!2d29.44880841528101!3d40.80686217932073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc6212f1c01b%3A0x60bc1c25d1e4f8b!2sGebze%2C%20Kocaeli!5e0!3m2!1str!2str!4v1692100000000!5m2!1str!2str"
              width="100%"
              height="100%"
              className="rounded-lg shadow-md min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

