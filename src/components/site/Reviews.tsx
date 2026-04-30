import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Анна К.",
    role: "Польша, рабочая виза",
    text: "Сделали апостиль на диплом и аттестат за 4 дня вместе с переводом на польский. Курьером отправили в Варшаву — всё пришло целым. Очень благодарна за оперативность.",
  },
  {
    name: "Дмитрий П.",
    role: "Германия, поступление в магистратуру",
    text: "Документы из вуза 90-х, многое было утеряно. Помогли восстановить, поставили апостиль и сделали присяжный перевод. Университет принял с первого раза.",
  },
  {
    name: "Ольга М.",
    role: "Италия, воссоединение семьи",
    text: "Оформляли свидетельства о рождении и браке с апостилем и переводом. Приятно, что всё удалённо — я не ездила в Киев ни разу. Доставили DHL.",
  },
  {
    name: "Сергей Л.",
    role: "Канада, иммиграция",
    text: "Нужна была срочная справка о несудимости с переводом. Получили и легализовали за 2 рабочих дня. Чётко, по делу, без скрытых платежей.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">Отзывы клиентов</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Нам доверяют тысячи людей
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                «{r.text}»
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}