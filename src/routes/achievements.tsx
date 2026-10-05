import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Star, Award, BookOpen, Dumbbell, Music } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Student, faculty, academic, sports and cultural achievements of Rajashri College of Nursing, Mehkar." },
      { property: "og:title", content: "Achievements — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Awards and achievements of our students and faculty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

const ITEMS = [
  { icon: BookOpen, category: "Academic", title: "University Merit Ranks in MUHS Examinations", year: "2025", desc: "Students secured merit positions in MUHS Nashik B.Sc. Nursing examinations." },
  { icon: Trophy, category: "Student", title: "State Level Nursing Quiz — Winners", year: "2025", desc: "First prize at the state-level inter-college nursing quiz competition." },
  { icon: Medal, category: "Sports", title: "Inter-Collegiate Sports Meet", year: "2024", desc: "Medals in athletics and volleyball at the inter-collegiate sports meet." },
  { icon: Music, category: "Cultural", title: "Cultural Fest — Best Performance", year: "2024", desc: "Best group performance award at the university cultural festival." },
  { icon: Star, category: "Faculty", title: "Faculty Paper Presentations", year: "2024", desc: "Faculty members presented research papers at national nursing conferences." },
  { icon: Award, category: "College", title: "Best Community Health Outreach", year: "2023", desc: "Recognition for outstanding rural community health programmes." },
];

function AchievementsPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Achievements</h1>
        <p className="mt-2 text-navy-foreground/70">Celebrating excellence of our students and faculty</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-border">
          {ITEMS.map((a) => (
            <div key={a.title} className="relative pl-14">
              <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange text-orange-foreground">
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
