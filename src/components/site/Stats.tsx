const STATS = [
  { value: "10+", label: "лет опыта" },
  { value: "5 000+", label: "оформленных документов" },
  { value: "60+", label: "стран принимают наши документы" },
  { value: "от 1", label: "рабочего дня — срочно" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6 md:py-14">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-3xl font-semibold text-primary md:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}