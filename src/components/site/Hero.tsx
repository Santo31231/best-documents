import { ArrowRight, MessageCircle, ShieldCheck, Clock, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import heroImage from "@/assets/hero-documents.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            Апостиль · Легализация · Перевод · Восстановление
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Документы для жизни <br className="hidden md:inline" />
            <span className="text-primary">за границей</span> — без вашего присутствия
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Оформляем апостиль, консульскую легализацию, нотариальный перевод и восстановление документов
            в Киеве и по всей Украине. Работаем удалённо, доставка по Европе.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
              <a href={whatsappLink("Здравствуйте! Хочу узнать стоимость и сроки.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Узнать стоимость в WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                Оставить заявку
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Официально, через МИД, МОН и Минюст" },
              { icon: Clock, label: "Срочное оформление от 1 рабочего дня" },
              { icon: Globe2, label: "Доставка по Украине и Европе" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm text-muted-foreground">
                <item.icon className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--gold)]/20 to-primary/10 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
            <img
              src={heroImage}
              alt="Апостилированные документы и печати"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}