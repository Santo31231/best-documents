import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/config/site";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Заявка" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display text-lg">A</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground">{SITE.brandName}</span>
            <span className="hidden text-[11px] text-muted-foreground md:block">{SITE.brandSubtitle}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
          <a href={whatsappLink("Здравствуйте! Хочу узнать стоимость услуги.")} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1.5 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}