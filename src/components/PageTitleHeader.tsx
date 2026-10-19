import { PageBackButton } from "./PageBackButton";

export function PageTitleHeader({
  title,
  subtitle,
  onNavigate,
}: {
  title: string;
  subtitle?: string;
  onNavigate: (p: string) => void;
}) {
  return (
    <section className="relative border-b border-border bg-white px-16 py-6 sm:px-20">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6">
        <PageBackButton onNavigate={onNavigate} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-navy">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
