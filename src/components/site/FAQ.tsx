import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Сколько по времени делается апостиль?", a: "Стандартный срок — от 5 до 20 рабочих дней в зависимости от ведомства. Срочное оформление возможно от 1 рабочего дня." },
  { q: "Можно ли оформить документы без моего присутствия?", a: "Да. Достаточно прислать оригиналы документов курьером и нотариальную доверенность. Все этапы согласовываем в WhatsApp." },
  { q: "Сколько стоит услуга?", a: "Стоимость зависит от типа документа, страны назначения и срока. Отправим точный расчёт в WhatsApp в течение 30 минут после запроса." },
  { q: "На какие языки делаете перевод?", a: "Английский, немецкий, польский, чешский, итальянский, испанский, французский и ещё 25+ языков. Перевод заверяется нотариально или присяжным переводчиком." },
  { q: "Нужно ли апостилировать аттестат и приложение?", a: "Да, обычно требуются оба документа. Многие зарубежные вузы принимают аттестат только вместе с приложением." },
  { q: "Можно ли поставить апостиль на копию?", a: "Нет, апостиль ставится только на оригиналы или официальные дубликаты документов." },
  { q: "Как долго действует апостиль?", a: "Апостиль бессрочный. Но требования по сроку давности самого документа лучше уточнить в принимающей организации." },
  { q: "В какие страны доставляете готовые документы?", a: "По всей Украине Новой Почтой и в любую страну Европы и мира — DHL, Meest, FedEx. Безопасная упаковка и трекинг." },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">Вопросы и ответы</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">Часто задаваемые вопросы</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}