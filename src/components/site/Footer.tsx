import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display text-lg">A</span>
            <span className="font-display text-base font-semibold text-foreground">{SITE.brandName}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{SITE.brandSubtitle}. Работаем по всей Украине, доставка по Европе.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-foreground">Контакты</div>
          <p className="mt-2">{SITE.city}</p>
          <p>{SITE.workingHours}</p>
          <a
            href={whatsappLink("Здравствуйте!")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsappDisplay}
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-foreground">Услуги</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#services" className="hover:text-foreground">Апостиль на документы</a></li>
            <li><a href="#services" className="hover:text-foreground">Консульская легализация</a></li>
            <li><a href="#services" className="hover:text-foreground">Нотариальный перевод</a></li>
            <li><a href="#services" className="hover:text-foreground">Восстановление документов</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
          <span>© {new Date().getFullYear()} {SITE.brandName}. Все права защищены.</span>
          <span>Ваши данные не передаются третьим лицам.</span>
        </div>
      </div>
    </footer>
  );
}