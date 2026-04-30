import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import imgApostille from "@/assets/doc-apostille.jpg";
import imgAttestat from "@/assets/doc-attestat.png";
import imgDiploma from "@/assets/doc-diploma.png";
import imgJustice from "@/assets/doc-apostille-justice.png";
import imgVityag1 from "@/assets/doc-vityag-1.png";
import imgVityag2 from "@/assets/doc-vityag-2.png";

type Service = {
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  badge?: string;
};

const SERVICES: Service[] = [
  {
    title: "Апостиль на диплом и приложение",
    description: "Легализация диплома о высшем образовании в МОН Украины для учёбы и работы за границей.",
    bullets: ["Стандартный и срочный режим", "С нотариальным переводом", "Курьером по Украине и в Европу"],
    image: imgDiploma,
    badge: "МОН Украины",
  },
  {
    title: "Апостиль на аттестат",
    description: "Апостилирование школьного аттестата и приложения к нему — для поступления в зарубежные вузы.",
    bullets: ["Аттестат + приложение", "Перевод на любой язык", "Без вашего присутствия"],
    image: imgAttestat,
    badge: "МОН Украины",
  },
  {
    title: "Апостиль на свидетельства ЗАГС",
    description: "Свидетельства о рождении, браке, разводе, смерти, перемене имени — апостиль через Минюст.",
    bullets: ["Свежие повторные свидетельства", "Извлечения из реестра", "Перевод и нотариальное заверение"],
    image: imgJustice,
    badge: "Минюст",
  },
  {
    title: "Апостиль на справку о несудимости",
    description: "Получение справки в МВД и проставление апостиля — для виз, ВНЖ и трудоустройства.",
    bullets: ["Получаем справку под ключ", "Срок действия учитываем", "Перевод на язык страны"],
    image: imgApostille,
    badge: "МВД Украины",
  },
  {
    title: "Извлечение / справки из реестра",
    description: "Восстановление утерянных документов: добрачная фамилия, повторные свидетельства, архивные справки.",
    bullets: ["Запросы в архивы и ЗАГС", "Извлечения из госреестров", "С последующим апостилем"],
    image: imgVityag1,
    badge: "Восстановление",
  },
  {
    title: "Восстановление документов ЗАГС",
    description: "Дубликаты свидетельств о рождении, браке, разводе — даже если оригинал утерян десятки лет назад.",
    bullets: ["По всей Украине", "Архивные запросы", "Готовим к легализации"],
    image: imgVityag2,
    badge: "Восстановление",
  },
  {
    title: "Консульская легализация",
    description: "Для стран, не подписавших Гаагскую конвенцию: ОАЭ, Канада, Китай, Кувейт и др.",
    bullets: ["МИД + консульство страны", "Полный цикл под ключ", "Сопровождение"],
    badge: "МИД Украины",
  },
  {
    title: "Нострификация документов",
    description: "Признание иностранных дипломов и аттестатов в Украине через МОН.",
    bullets: ["Подача в МОН", "Сопровождение комиссии", "Готовый сертификат"],
    badge: "МОН Украины",
  },
  {
    title: "Нотариальный перевод",
    description: "Присяжный и нотариальный перевод документов на 30+ языков с заверением.",
    bullets: ["Английский, немецкий, польский, чешский…", "Срочно — за 1 день", "Соответствие требованиям"],
    badge: "Перевод",
  },
  {
    title: "Доставка по Украине и Европе",
    description: "Курьером по Киеву, Новой Почтой по Украине, международная доставка готовых документов.",
    bullets: ["DHL, Meest, Нова Пошта", "Трекинг отправления", "Безопасная упаковка"],
    badge: "Сервис",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">Наши услуги</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Полный цикл легализации документов
          </h2>
          <p className="mt-4 text-muted-foreground">
            От получения справки до апостиля и доставки за границу — берём на себя весь процесс.
            Стоимость зависит от документа и сроков, отправим расчёт в ответ на ваш запрос.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              {service.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {service.badge ? (
                    <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-medium text-foreground shadow-soft">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/8 to-[var(--gold)]/10">
                  <span className="font-display text-5xl text-primary/30">A</span>
                  {service.badge ? (
                    <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-medium text-foreground shadow-soft">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--gold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button asChild size="sm" className="bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
                    <a
                      href={whatsappLink(`Здравствуйте! Подскажите стоимость услуги: ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-1.5 h-4 w-4" />
                      Узнать стоимость
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <a href={`#contact?service=${encodeURIComponent(service.title)}`}>Заявка</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}