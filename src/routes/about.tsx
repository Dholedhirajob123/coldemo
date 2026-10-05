import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Quote, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Learn about Rajashri College of Nursing, Mehkar — our vision, mission, principal's message and why students choose us." },
      { property: "og:title", content: "About Us — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Our vision, mission and commitment to excellence in nursing education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const WHY_US = [
  "Approved by Govt. of Maharashtra & MUHS Nashik",
  "Experienced and dedicated teaching faculty",
  "Modern nursing laboratories and digital classrooms",
  "Attached hospital for hands-on clinical training",
  "Rural and urban clinical exposure",
  "Hostel facility and student support services",
  "Internship and placement guidance",
];

const OBJECTIVES = [
  "Provide quality nursing education aligned with MUHS curriculum",
  "Develop clinical competence through supervised practical training",
  "Instil compassion, ethics and professionalism in every student",
  "Promote community health through outreach programmes",
];

function AboutPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-navy-foreground/70">Rajashri College of Nursing, Mehkar</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold text-navy">About Rajashri College of Nursing</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Rajashri College of Nursing, Mehkar (Dist. Buldhana, Maharashtra – 443301) is a professional
          nursing education institution offering the B.Sc. Nursing programme. Approved by the Government
          of Maharashtra and affiliated to Maharashtra University of Health Sciences (MUHS), Nashik, the
          college is committed to building skilled, compassionate and confident healthcare professionals.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <Eye className="h-8 w-8 text-teal" />
            <h3 className="mt-3 text-xl font-semibold text-navy">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">
              To be a centre of excellence in nursing education, producing graduates who lead with
              knowledge, skill and compassion in healthcare.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <Target className="h-8 w-8 text-orange" />
            <h3 className="mt-3 text-xl font-semibold text-navy">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              To provide quality, value-based nursing education with strong clinical training, and to
              serve the healthcare needs of rural and urban communities.
            </p>
          </div>
        </div>

        {/* Principal's message */}
        <div className="mt-10 rounded-xl border border-border bg-sky p-8">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-navy text-3xl font-bold text-navy-foreground">
              P
            </span>
            <div>
              <Quote className="h-6 w-6 text-orange" />
              <p className="mt-2 italic leading-relaxed text-foreground">
                "Nursing is not just a profession — it is a calling to serve humanity. At Rajashri
                College of Nursing, we nurture students into competent, caring and confident nurses
                ready to meet the healthcare challenges of tomorrow."
              </p>
              <p className="mt-4 font-semibold text-navy">Principal</p>
              <p className="text-sm text-muted-foreground">Rajashri College of Nursing, Mehkar</p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <h2 className="mt-12 text-2xl font-bold text-navy">Why Choose Us</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WHY_US.map((w) => (
            <div key={w} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm text-foreground">{w}</span>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <h2 className="mt-12 text-2xl font-bold text-navy">Our Objectives</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          {OBJECTIVES.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </section>
    </div>
  );
}
