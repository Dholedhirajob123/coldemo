import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Clock, BookOpen, Briefcase, Star, FileCheck } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "B.Sc. Nursing — 4 year undergraduate programme. Eligibility: 12th Science (PCB). Admission as per Maharashtra/MUHS process." },
      { property: "og:title", content: "Courses — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "B.Sc. Nursing — 4 year programme, eligibility 12th Science (PCB)." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const HIGHLIGHTS = [
  "MUHS Nashik affiliated curriculum",
  "Extensive clinical training in attached hospital",
  "Rural & urban community health postings",
  "Modern skill labs and simulation practice",
  "Experienced nursing faculty",
  "Internship & placement guidance",
];

const CAREERS = [
  "Staff Nurse (Government & Private Hospitals)",
  "Community Health Nurse",
  "Nursing Officer / Nursing Supervisor",
  "ICU, OT & Emergency Care Nurse",
  "Nursing Tutor / Educator",
  "Higher studies: M.Sc. Nursing, Post-Basic specialties",
];

const DOCUMENTS = [
  "CET Admit Card & Result",
  "CAP Allotment Letter",
  "HSC / SSC Marksheet",
  "Caste Certificate (where applicable)",
  "Passport Size Photos",
  "Identity Proof",
];

function CoursesPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <p className="mt-2 text-navy-foreground/70">Programmes offered at Rajashri College of Nursing</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Main course card */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <GraduationCap className="h-9 w-9" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-navy">B.Sc. Nursing</h2>
                <p className="text-muted-foreground">Bachelor of Science in Nursing</p>
              </div>
            </div>
            <Link to="/admission" className="rounded-md bg-orange px-6 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
              Apply Now
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-sky p-4 text-center">
              <Clock className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold text-foreground">4 Years</p>
              <p className="text-xs text-muted-foreground">Duration</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <BookOpen className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold text-foreground">12th Science (PCB)</p>
              <p className="text-xs text-muted-foreground">Eligibility</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <FileCheck className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold text-foreground">CET / CAP Process</p>
              <p className="text-xs text-muted-foreground">Admission</p>
            </div>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-navy">Course Overview</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            The B.Sc. Nursing programme is a 4-year undergraduate degree affiliated to MUHS Nashik. It
            combines classroom learning, laboratory practice and extensive clinical training to prepare
            students for professional nursing practice across hospitals, community health and education.
            Admission is as per the applicable Maharashtra / MUHS admission process.
          </p>
        </div>

        {/* Highlights & careers */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
              <Star className="h-5 w-5 text-orange" /> Course Highlights
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
              <Briefcase className="h-5 w-5 text-teal" /> Career Opportunities
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {CAREERS.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy">Required Documents</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {DOCUMENTS.map((d) => (
              <span key={d} className="rounded-full bg-sky px-3 py-1.5 text-sm text-foreground">{d}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
