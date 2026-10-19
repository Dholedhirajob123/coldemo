import { GraduationCap, Clock, BookOpen, Briefcase, FileCheck, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";

const ANM_FOCUS = [
  "Primary Health Care",
  "Community Health Nursing",
  "Maternal & Child Health",
  "Basic Anatomy & Physiology",
  "Nutrition",
  "First Aid",
];

const BSC_FOCUS = [
  "Medical-Surgical Nursing",
  "Anatomy & Physiology",
  "Pharmacology",
  "Obstetric & Gynecological Nursing",
  "Pediatric Nursing",
  "Mental Health Nursing",
  "Community Health",
  "Healthcare Management",
];

const DOCUMENTS = [
  "CET Admit Card & Result (B.Sc.)",
  "CAP Allotment Letter (B.Sc.)",
  "10th / SSC Marksheet",
  "12th / HSC Marksheet",
  "Caste Certificate (if applicable)",
  "Passport Size Photos",
  "Identity Proof (Aadhar/PAN)",
  "Leaving Certificate",
];

export function CoursesPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="Courses Offered"
        subtitle="Programmes offered at Rajashri College of Nursing"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">

        {/* ========================================== */}
        {/* 1. ANM PROGRAM                             */}
        {/* ========================================== */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal text-white">
                <HeartPulse className="h-9 w-9" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-navy">Auxiliary Nurse Midwife (ANM)</h2>
                <p className="text-muted-foreground">Diploma in Nursing</p>
              </div>
            </div>
            <button onClick={() => onNavigate("/admission")} className="rounded-md bg-orange px-6 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
              Apply Now
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-sky p-4 text-center">
              <Clock className="mx-auto h-6 w-6 text-teal" />
              <p className="mt-1 font-semibold">2 Years</p>
              <p className="text-xs text-muted-foreground">Course Duration</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <BookOpen className="mx-auto h-6 w-6 text-teal" />
              <p className="mt-1 font-semibold">10+2 (Any Stream)</p>
              <p className="text-xs text-muted-foreground">Qualification</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <FileCheck className="mx-auto h-6 w-6 text-teal" />
              <p className="mt-1 font-semibold">Minimum 40%</p>
              <p className="text-xs text-muted-foreground">Aggregate Marks</p>
            </div>
          </div>

          {/* Description */}
          <h3 className="mt-8 text-lg font-semibold text-navy">Course Overview</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            The ANM program is a diploma course designed to prepare entry-level healthcare workers with essential skills in basic nursing, maternal and child health, primary healthcare, and community health services.
          </p>

          {/* Eligibility Details */}
          <h3 className="mt-6 text-lg font-semibold text-navy">Eligibility Criteria</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><strong>Qualification:</strong> 10+2 (Higher Secondary) in any stream (Science, Commerce, or Arts) from a recognized board.</li>
            <li><strong>Minimum Marks:</strong> Minimum 40% aggregate marks in 10+2.</li>
            <li><strong>Age Limit:</strong> Minimum 17 years completed as of 31st December of the admission year (Maximum age limit as per regulatory council norms).</li>
            <li><strong>Gender:</strong> Female candidates.</li>
          </ul>

          {/* Key Focus Areas */}
          <h3 className="mt-6 text-lg font-semibold text-navy">Key Focus Areas</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ANM_FOCUS.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {h}
              </li>
            ))}
          </ul>
        </div>

        {/* ========================================== */}
        {/* 2. B.Sc. NURSING PROGRAM                   */}
        {/* ========================================== */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <GraduationCap className="h-9 w-9" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-navy">Bachelor of Science in Nursing</h2>
                <p className="text-muted-foreground">B.Sc. Nursing (Undergraduate Degree)</p>
              </div>
            </div>
            <button onClick={() => onNavigate("/admission")} className="rounded-md bg-orange px-6 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
              Apply Now
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-sky p-4 text-center">
              <Clock className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold">4 Years</p>
              <p className="text-xs text-muted-foreground">Incl. Clinical Internship</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <BookOpen className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold">10+2 (PCB)</p>
              <p className="text-xs text-muted-foreground">Qualification</p>
            </div>
            <div className="rounded-lg bg-sky p-4 text-center">
              <ShieldCheck className="mx-auto h-6 w-6 text-royal" />
              <p className="mt-1 font-semibold">Minimum 45%</p>
              <p className="text-xs text-muted-foreground">Aggregate in PCB</p>
            </div>
          </div>

          {/* Description */}
          <h3 className="mt-8 text-lg font-semibold text-navy">Course Overview</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            The B.Sc. Nursing program is a comprehensive undergraduate degree course designed to develop high-level clinical competencies, critical thinking, leadership qualities, and research skills required for professional nurses in modern hospital and clinical settings.
          </p>

          {/* Eligibility Details */}
          <h3 className="mt-6 text-lg font-semibold text-navy">Eligibility Criteria</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><strong>Qualification:</strong> 10+2 (PCB) from a recognized board with Physics, Chemistry, Biology, and English as core subjects.</li>
            <li><strong>Minimum Marks:</strong> Minimum 45% aggregate marks in PCB (40% for reserved categories).</li>
            <li><strong>Age Limit:</strong> Minimum 17 years completed as of 31st December of the admission year.</li>
            <li><strong>Selection Process:</strong> As per Maharashtra Nursing Entrance / State Common Entrance Cell / University affiliation guidelines.</li>
          </ul>

          {/* Key Focus Areas */}
          <h3 className="mt-6 text-lg font-semibold text-navy">Key Focus Areas</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {BSC_FOCUS.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" /> {h}
              </li>
            ))}
          </ul>
        </div>

        {/* ========================================== */}
        {/* 3. COMMON DOCUMENTS SECTION                */}
        {/* ========================================== */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
            <Briefcase className="h-5 w-5 text-orange" /> Required Documents at Admission
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {DOCUMENTS.map((d) => (
              <span key={d} className="rounded-full bg-sky px-3 py-1.5 text-sm font-medium text-navy">{d}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}