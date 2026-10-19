import { Trophy, Medal, Star, Award, BookOpen, Music } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";

const ITEMS = [
  { icon: BookOpen, category: "Academic", title: "University Merit Ranks", year: "2025", desc: "Students secured merit positions in MUHS Nashik examinations." },
  { icon: Trophy, category: "Student", title: "State Level Nursing Quiz — Winners", year: "2025", desc: "First prize at state-level inter-college nursing quiz." },
  { icon: Medal, category: "Sports", title: "Inter-Collegiate Sports Meet", year: "2024", desc: "Medals in athletics and volleyball." },
  { icon: Music, category: "Cultural", title: "Cultural Fest — Best Performance", year: "2024", desc: "Best group performance award." },
  { icon: Star, category: "Faculty", title: "Faculty Paper Presentations", year: "2024", desc: "Faculty presented research papers at national conferences." },
  { icon: Award, category: "College", title: "Best Community Health Outreach", year: "2023", desc: "Recognition for outstanding rural health programmes." },
];

export function AchievementsPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="Achievements"
        subtitle="Celebrating excellence of our students and faculty"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-border sm:before:left-5">
          {ITEMS.map((a) => (
            <div key={a.title} className="relative pl-11 sm:pl-14">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange text-orange-foreground sm:h-10 sm:w-10">
                <a.icon className="h-5 w-5" />
              </span>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-teal/15 px-2 py-0.5 font-medium text-teal">{a.category}</span>
                  <span className="text-muted-foreground">{a.year}</span>
                </div>
                <h3 className="mt-2 font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}