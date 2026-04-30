import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { submitLead } from "@/server/leads.functions";
import { SITE, whatsappLink } from "@/config/site";

const SERVICES = [
  "Апостиль на диплом и приложение",
  "Апостиль на аттестат",
  "Апостиль на свидетельства ЗАГС",
  "Апостиль на справку о несудимости",
  "Извлечение / справки из реестра",
  "Восстановление документов ЗАГС",
  "Консульская легализация",
  "Нострификация документов",
  "Нотариальный перевод",
  "Другое / нужна консультация",
];

export function LeadForm() {
  const submit = useServerFn(submitLead);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [service, setService] = useState<string>(SERVICES[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service,
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    };
    setLoading(true);
    try {
      await submit({ data: payload });
      setDone(true);
      toast.success("Заявка отправлена! Свяжемся с вами в ближайшее время.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Что-то пошло не так";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 shadow-elegant md:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">Оставьте заявку</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Отправим расчёт стоимости в течение 30 минут
            </h2>
            <p className="mt-4 text-muted-foreground">
              Заполните форму или напишите нам в WhatsApp — уточним детали, подскажем сроки и стоимость
              именно по вашему документу и стране.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild size="lg" className="w-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90 sm:w-auto">
                <a href={whatsappLink("Здравствуйте! Хочу узнать стоимость услуги.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в WhatsApp {SITE.whatsappDisplay}
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">{SITE.workingHours}</p>
            </div>
          </div>

          {done ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-[var(--whatsapp)]" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">Спасибо за заявку!</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Мы получили ваш запрос и свяжемся с вами в ближайшее время. Если хотите быстрее — напишите в WhatsApp.
              </p>
              <Button onClick={() => setDone(false)} variant="outline" className="mt-6">
                Отправить ещё одну
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Имя *</Label>
                  <Input id="name" name="name" required maxLength={100} placeholder="Анна" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" name="phone" type="tel" required maxLength={30} placeholder="+380 ..." />
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="email">E-mail (необязательно)</Label>
                <Input id="email" name="email" type="email" maxLength={255} placeholder="you@example.com" />
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="service">Услуга *</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea id="message" name="message" rows={4} maxLength={2000} placeholder="Страна назначения, сроки, особенности документа…" />
              </div>

              <Button type="submit" size="lg" disabled={loading} className="mt-6 w-full">
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Отправляем…" : "Отправить заявку"}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Нажимая «Отправить», вы соглашаетесь на обработку данных для ответа на запрос.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}