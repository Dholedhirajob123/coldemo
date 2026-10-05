import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Hospital, MapPin, Building2, Ambulance, Briefcase, GraduationCap, HeartPulse } from "lucide-react";

export const Route = createFileRoute("/clinical-training")({
  head: () => ({
    meta: [
      { title: "Clinical Training — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Practical training, hospital rotations, rural and urban clinical experience, emergency care training and internship." },
      { property: "og:title", content: "Clinical Training — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Hospital rotations, rural & urban clinical experience and internship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClinicalTrainingPage,
});

const SECTIONS = [
  { icon: Stethoscope, title: "Practical Training", desc: "Skill-lab practice and supervised procedures before ward postings." },
  { icon: Hospital, title: "Hospital Rotations", desc: "Rotations across medical, surgical, OBG, paediatric and ICU wards." },
  { icon: MapPin, title: "Rural Clinical Experience", desc: "Community postings in rural health centres around Mehkar." },
  { icon: Building2, title: "Urban Clinical Experience", desc: "Exposure to urban health centres and speciality hospitals." },
  { icon: Ambulance, title: "Emergency Care Training", desc: "Casualty, first-aid and critical-care response training." },
  { icon: Briefcase, title: "Internship", desc: "Structured internship integrating all areas of nursing practice." },
  { icon: GraduationCap, title: "Student Learning Experience", desc: "Case presentations, clinical conferences and reflective learning." },
  { icon: HeartPulse, title: "Patient-Centred Care", desc: "Learning compassionate, ethical and evidence-based care." },
];

function ClinicalTrainingPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Clinical Training</h1>
        <p className="mt-2 text-navy-foreground/70">Learning by doing — from skill labs to real wards</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-muted-foreground">
          Clinical training is the heart of nursing education at Rajashri College of Nursing. Students
          progress from simulation and skill labs to supervised hospital rotations, community postings
          and a structured internship — graduating with real confidence in patient care.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
