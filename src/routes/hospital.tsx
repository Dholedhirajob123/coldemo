import { createFileRoute } from "@tanstack/react-router";
import { Hospital, Stethoscope, HeartPulse, Ambulance, BedDouble, Users } from "lucide-react";

export const Route = createFileRoute("/hospital")({
  head: () => ({
    meta: [
      { title: "Attached Hospital — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Clinical training at our attached hospital — patient care, nursing practice, emergency training and practical exposure." },
      { property: "og:title", content: "Attached Hospital — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Hands-on clinical training through our attached hospital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HospitalPage,
});

const FEATURES = [
  { icon: Hospital, title: "Attached Hospital", desc: "Direct access to a functioning hospital for daily clinical learning." },
  { icon: Stethoscope, title: "Clinical Training", desc: "Supervised ward postings across medicine, surgery, OBG and paediatrics." },
  { icon: HeartPulse, title: "Patient Care", desc: "Real patient care experience under qualified nursing supervision." },
  { icon: Users, title: "Nursing Practice", desc: "Hands-on practice of nursing procedures and care planning." },
  { icon: Ambulance, title: "Emergency Training", desc: "Exposure to emergency and casualty care, first aid and triage." },
  { icon: BedDouble, title: "Practical Exposure", desc: "Bedside learning that bridges theory and real-world practice." },
];

const STATS = [
  { value: "100+", label: "Hospital Beds" },
  { value: "6+", label: "Clinical Departments" },
  { value: "Daily", label: "Ward Postings" },
  { value: "24×7", label: "Emergency Exposure" },
];

function HospitalPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Attached Hospital</h1>
        <p className="mt-2 text-navy-foreground/70">Where classroom learning meets real patient care</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl bg-sky p-6 text-center">
              <p className="text-3xl font-bold text-royal">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
