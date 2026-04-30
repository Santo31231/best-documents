import { MessageSquare, FileSearch, Stamp, Truck } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Заявка", text: "Опишите задачу в WhatsApp или через форму. Уточним документ, страну и сроки." },
  { icon: FileSearch, title: "Расчёт и договор", text: "Озвучим итоговую стоимость, состав работ и сроки. Принимаем документы у вас или курьером." },
  { icon: Stamp, title: "Оформление", text: "Получаем справки, проставляем апостиль, делаем перевод и нотариальное заверение." },
  { icon: Truck, title: "Доставка", text: "Передаём готовые документы лично, по Украине Новой Почтой или международной доставкой." },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">Как мы работаем</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            4 шага от запроса до готовых документов
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-semibold text-[var(--gold)]/60">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}