import { Eye, Target, CheckCircle2 } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";

const VISION_MISSION = [
  {
    icon: Eye,
    title: "Vision",
    subtitle: "(दृष्टीकोन)",
    body: "To emerge as a center of excellence in nursing education, research, and healthcare service, nurturing compassionate, ethical, and globally competent nursing professionals who contribute significantly to the health and well-being of society.",
  },
  {
    icon: Target,
    title: "Mission",
    subtitle: "(ध्येय)",
    points: [
      { title: "Quality Education", desc: "To impart value-based, skill-oriented, and comprehensive nursing education aligned with global standards." },
      { title: "Clinical Excellence", desc: "To equip students with advanced practical skills and critical thinking through rigorous clinical training." },
      { title: "Compassionate Care", desc: "To instill deep ethical values, empathy, and professionalism in students to serve society with dedication." },
      { title: "Holistic Development", desc: "To foster leadership qualities, research aptitude, and lifelong learning habits through outreach programs." },
    ],
  },
];

export function VisionMissionPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader title="Vision & Mission" subtitle="Our guiding principles" onNavigate={onNavigate} />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="grid gap-6">
          {VISION_MISSION.map((v) => (
            <article key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-navy">{v.title}</h2>
                  <p className="text-sm text-muted-foreground">{v.subtitle}</p>
                </div>
              </div>

              {v.body && (
                <p className="rounded-lg border border-border bg-sky/30 p-4 text-base leading-relaxed text-muted-foreground">
                  "{v.body}"
                </p>
              )}

              {v.points && (
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {v.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>
                        <strong className="text-navy">{point.title}:</strong> {point.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}