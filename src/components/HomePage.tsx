import {
  GraduationCap, Clock, BookOpen, BadgeCheck, FileText, Bell, ArrowRight,
  FileCheck, Star, Briefcase, CheckCircle2,
} from "lucide-react";
import { HomeDashboard } from "./HomeDashboard";
import { ImageSlider, type SliderImage } from "./ImageSlider";

import campusImage from "../assets/nursing-campus.jpg";
import classroomImage from "../assets/nursing-classroom.jpg";
import clinicalImage from "../assets/nursing-clinical.jpg";
import graduationImage from "../assets/nursing-graduation.jpg";
import labImage from "../assets/nursing-lab.jpg";

const SLIDES: SliderImage[] = [
  { src: campusImage, alt: "Rajashri College of Nursing campus" },
  { src: labImage, alt: "Nursing students practicing in the skills lab" },
  { src: classroomImage, alt: "Nursing classroom" },
  { src: clinicalImage, alt: "Nursing students during clinical training" },
  { src: graduationImage, alt: "Nursing graduates celebrating their achievement" },
];

const COURSE_SLIDES = [SLIDES[1], SLIDES[2], SLIDES[3], SLIDES[0], SLIDES[4]];

const QUICK_FACTS = [
  { icon: GraduationCap, title: "B.Sc. Nursing", sub: "Undergraduate Degree" },
  { icon: Clock, title: "4 Years", sub: "Course Duration" },
  { icon: BookOpen, title: "12th Science (PCB)", sub: "Eligibility" },
  { icon: BadgeCheck, title: "Govt. of Maharashtra & MUHS Nashik", sub: "Approved By" },
  { icon: FileText, title: "CET Code: 9501", sub: "College Code" },
  { icon: FileText, title: "MUHS Code: 155193", sub: "University Code" },
];

const NOTICES = [
  { title: "B.Sc. Nursing Admission 2026–27: CAP Round Schedule", date: "28 Sep 2026", category: "Admission", isNew: true },
  { title: "CET Document Verification Notice", date: "22 Sep 2026", category: "CET", isNew: true },
  { title: "MUHS Winter Examination Time Table Released", date: "15 Sep 2026", category: "Examination", isNew: false },
  { title: "Orientation Programme for First Year", date: "08 Sep 2026", category: "Circular", isNew: false },
];

const COURSE_FACTS = [
  { icon: Clock, value: "4 Years", label: "Duration" },
  { icon: BookOpen, value: "12th Science (PCB)", label: "Eligibility" },
  { icon: FileCheck, value: "CET / CAP Process", label: "Admission" },
  { icon: BadgeCheck, value: "MUHS Nashik", label: "Affiliation" },
];

const HIGHLIGHTS = [
  "MUHS Nashik affiliated curriculum",
  "Extensive clinical training",
  "Rural & urban community postings",
  "Modern skill labs",
  "Experienced nursing faculty",
  "Internship & placement guidance",
];

const CAREERS = [
  "Staff Nurse (Govt. & Private Hospitals)",
  "Community Health Nurse",
  "Nursing Officer / Supervisor",
  "ICU, OT & Emergency Care Nurse",
  "Nursing Tutor / Educator",
  "Higher studies: M.Sc. Nursing",
];

const DOCUMENTS = [
  "CET Admit Card & Result",
  "CAP Allotment Letter",
  "HSC / SSC Marksheet",
  "Caste Certificate",
  "Passport Size Photos",
  "Identity Proof",
];

export function HomePage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <ImageSlider images={SLIDES} label="Highlights" className="min-h-[480px] bg-navy text-navy-foreground sm:min-h-[520px] md:min-h-[590px]">
        <div className="absolute inset-0 z-10 bg-navy/65" />
        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-12 py-16 text-center sm:min-h-[520px] md:min-h-[590px] md:px-24">
          <p className="text-xs font-semibold uppercase text-teal sm:text-sm">
            Approved by Govt. of Maharashtra &amp; MUHS Nashik
          </p>
          <h1 className="mt-4 max-w-5xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Rajashri College of Nursing, Mehkar
          </h1>
          <p className="mt-4 text-lg text-navy-foreground/90 sm:text-xl">Excellence in Nursing Education</p>
          <div className="mt-7 grid w-full max-w-xs gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3">
            <button onClick={() => onNavigate("/admission")} className="rounded-md bg-orange px-6 py-3 font-semibold text-orange-foreground hover:opacity-90">
              Apply Now
            </button>
            <button onClick={() => onNavigate("/courses")} className="rounded-md bg-teal px-6 py-3 font-semibold text-teal-foreground hover:opacity-90">
              Explore Courses
            </button>
            <button onClick={() => onNavigate("/contact")} className="rounded-md border border-navy-foreground/40 px-6 py-3 font-semibold hover:bg-navy-foreground/10">
              Contact Us
            </button>
          </div>
        </div>
      </ImageSlider>

      <section className="border-b border-border bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold text-teal">Welcome to Rajashri</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">About Our College</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Rajashri College of Nursing, Mehkar, is run by D.D.R. Shikshan Va Bahu-Uddeshiya Sanstha. The college offers a four-year B.Sc. Nursing programme and is affiliated to Maharashtra University of Health Sciences, Nashik.
          </p>
          <button onClick={() => onNavigate("/about")} className="mt-5 inline-flex items-center gap-2 font-semibold text-royal hover:underline">
            Explore the College <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal">Our programme</p>
                <h2 className="mt-1 text-3xl font-bold text-navy">B.Sc. Nursing</h2>
                <p className="mt-1 text-muted-foreground">Learning, clinical practice and a rewarding career.</p>
              </div>
              <button onClick={() => onNavigate("/courses")} className="flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
                Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <ImageSlider images={COURSE_SLIDES} label="Programme" interval={4200} className="min-h-[300px] rounded-lg border border-border bg-navy sm:min-h-[360px] md:min-h-[430px]">
              <div className="absolute inset-0 z-10 bg-navy/20" />
              <div className="absolute bottom-10 left-14 right-14 z-10 text-navy-foreground">
                <p className="text-xs font-semibold uppercase text-teal sm:text-sm">Four-year degree programme</p>
                <p className="mt-1 text-2xl font-bold">Study. Practise. Care.</p>
              </div>
            </ImageSlider>
          </div>
          <div className="pt-0 lg:pt-[89px]">
            <HomeDashboard onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Courses offered</p>
          <h2 className="mt-1 text-3xl font-bold text-navy">Our Courses</h2>

          <article className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <div className="grid lg:grid-cols-[1fr_340px]">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                    <GraduationCap className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-navy">B.Sc. Nursing</h3>
                    <p className="text-muted-foreground">Bachelor of Science in Nursing</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {COURSE_FACTS.map((f) => (
                    <div key={f.label} className="flex items-start gap-3 rounded-lg bg-sky p-4">
                      <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                      <div>
                        <p className="font-semibold text-foreground">{f.value}</p>
                        <p className="text-xs uppercase text-muted-foreground">{f.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="mt-6 flex items-center gap-2 text-lg font-semibold text-navy">
                  <Star className="h-5 w-5 text-orange" /> Course Highlights
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="border-t border-border bg-navy p-6 text-navy-foreground sm:p-8 lg:border-l lg:border-t-0">
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <Briefcase className="h-5 w-5 text-teal" /> Career Opportunities
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
                  {CAREERS.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-2">
                  <button onClick={() => onNavigate("/admission")} className="rounded-md bg-orange px-5 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
                    Apply Now
                  </button>
                  <button onClick={() => onNavigate("/fra-fee-structure")} className="rounded-md border border-navy-foreground/40 px-5 py-2.5 font-semibold hover:bg-navy-foreground/10">
                    FRA Fee Structure
                  </button>
                </div>
              </aside>
            </div>
          </article>

          <div className="mt-6 rounded-lg border border-border bg-sky/60 p-5">
            <h4 className="text-base font-semibold text-navy">Documents required at admission</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {DOCUMENTS.map((d) => (
                <span key={d} className="rounded-full bg-card px-3 py-1.5 text-sm">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-sky/50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_FACTS.map((f) => (
              <div key={f.title} className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky text-royal">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{f.title}</p>
                  <p className="text-sm text-muted-foreground">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy">
              <Bell className="h-6 w-6 text-orange" /> Latest Notices
            </h2>
            <button onClick={() => onNavigate("/notices")} className="flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {NOTICES.map((n) => (
              <div key={n.title} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-teal/15 px-2 py-0.5 font-medium text-teal">{n.category}</span>
                  {n.isNew && <span className="rounded-full bg-orange px-2 py-0.5 font-semibold text-orange-foreground">NEW</span>}
                  <span className="ml-auto text-muted-foreground">{n.date}</span>
                </div>
                <p className="mt-2 font-medium text-foreground">{n.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-navy">Start Your Nursing Career With Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Admissions open for B.Sc. Nursing. Appear for the CET and secure your seat through CAP rounds.
        </p>
        <button onClick={() => onNavigate("/admission")} className="mt-6 inline-block rounded-md bg-orange px-8 py-3 font-semibold text-orange-foreground hover:opacity-90">
          Admission Enquiry
        </button>
      </section>
    </div>
  );
}