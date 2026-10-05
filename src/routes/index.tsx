import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Clock, BookOpen, BadgeCheck, FileText, Bell, ArrowRight } from "lucide-react";
import { HomeDashboard } from "@/components/HomeDashboard";
import { ImageSlider, type SliderImage } from "@/components/ImageSlider";
import campusImage from "@/assets/nursing-campus.jpg";
import labImage from "@/assets/nursing-lab.jpg";
import classroomImage from "@/assets/nursing-classroom.jpg";
import clinicalImage from "@/assets/nursing-clinical.jpg";
import graduationImage from "@/assets/nursing-graduation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajashri College of Nursing, Mehkar — Excellence in Nursing Education" },
      { name: "description", content: "B.Sc. Nursing college in Mehkar, Dist. Buldhana, Maharashtra. Approved by Govt. of Maharashtra & MUHS Nashik. CET Code 9501, MUHS Code 155193." },
      { property: "og:title", content: "Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Excellence in Nursing Education — building skilled, compassionate healthcare professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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
  { title: "CET Document Verification Notice for Admitted Students", date: "22 Sep 2026", category: "CET", isNew: true },
  { title: "MUHS Winter Examination Time Table Released", date: "15 Sep 2026", category: "Examination", isNew: false },
  { title: "College Circular: Orientation Programme for First Year", date: "08 Sep 2026", category: "Circular", isNew: false },
];

const SLIDES: SliderImage[] = [
  { src: campusImage, alt: "Nursing students walking toward the college campus" },
  { src: labImage, alt: "B.Sc. Nursing students practicing in the clinical skills laboratory" },
  { src: classroomImage, alt: "Nursing students learning anatomy in a classroom" },
  { src: clinicalImage, alt: "Nursing students receiving practical hospital training" },
  { src: graduationImage, alt: "B.Sc. Nursing graduates celebrating their achievement" },
];

const COURSE_SLIDES: SliderImage[] = [
  { src: labImage, alt: "B.Sc. Nursing students practicing in the clinical skills laboratory" },
  { src: classroomImage, alt: "Nursing students learning anatomy in a classroom" },
  { src: clinicalImage, alt: "Nursing students receiving practical hospital training" },
  { src: campusImage, alt: "Nursing students walking toward the college campus" },
  { src: graduationImage, alt: "B.Sc. Nursing graduates celebrating their achievement" },
];

function Index() {
  return (
    <div>
      <ImageSlider images={SLIDES} label="College highlights" className="min-h-[480px] bg-navy text-navy-foreground sm:min-h-[520px] md:min-h-[590px]">
        <div className="absolute inset-0 z-10 bg-navy/65" />
        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-12 py-16 text-center sm:min-h-[520px] sm:px-16 md:min-h-[590px] md:px-24 md:py-20">
          <p className="text-xs font-semibold uppercase text-teal sm:text-sm">
            Approved by Govt. of Maharashtra &amp; MUHS Nashik
          </p>
          <h1 className="mt-4 max-w-5xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Rajashri College of Nursing, Mehkar</h1>
          <p className="mt-4 text-lg font-medium text-navy-foreground/90 sm:text-xl">Excellence in Nursing Education</p>
          <p className="mx-auto mt-3 hidden max-w-2xl text-navy-foreground/70 sm:block">
            Building skilled, compassionate and confident healthcare professionals for tomorrow.
          </p>
          <div className="mt-7 grid w-full max-w-xs gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3">
            <Link to="/admission" className="rounded-md bg-orange px-6 py-3 font-semibold text-orange-foreground hover:opacity-90">
              Apply Now
            </Link>
            <Link to="/courses" className="rounded-md bg-teal px-6 py-3 font-semibold text-teal-foreground hover:opacity-90">
              Explore Courses
            </Link>
            <Link to="/contact" className="rounded-md border border-navy-foreground/40 px-6 py-3 font-semibold hover:bg-navy-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </ImageSlider>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-teal">Our programme</p>
                <h2 className="mt-1 text-3xl font-bold text-navy">B.Sc. Nursing</h2>
                <p className="mt-1 text-muted-foreground">Learning, clinical practice and a rewarding healthcare career.</p>
              </div>
              <Link to="/courses" className="flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
                Course Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ImageSlider
              images={COURSE_SLIDES}
              label="B.Sc. Nursing programme"
              interval={4200}
              className="min-h-[300px] rounded-lg border border-border bg-navy sm:min-h-[360px] md:min-h-[430px]"
            >
              <div className="absolute inset-0 z-10 bg-navy/20" />
              <div className="absolute bottom-10 left-14 right-14 z-10 text-navy-foreground sm:left-16 sm:right-16 md:left-20">
                <p className="text-xs font-semibold uppercase text-teal sm:text-sm">Four-year degree programme</p>
                <p className="mt-1 text-2xl font-bold">Study. Practise. Care.</p>
              </div>
            </ImageSlider>
          </div>
          <div className="pt-0 lg:pt-[89px]">
            <HomeDashboard />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-t border-border bg-sky/50 py-12">
        <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_FACTS.map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky text-royal">
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

      {/* Latest notices */}
      <section className="bg-sky py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy">
              <Bell className="h-6 w-6 text-orange" /> Latest Notices
            </h2>
            <Link to="/notices" className="flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {NOTICES.map((n) => (
              <div key={n.title} className="rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-teal/15 px-2 py-0.5 font-medium text-teal">{n.category}</span>
                  {n.isNew && <span className="rounded-full bg-orange px-2 py-0.5 font-semibold text-orange-foreground">NEW</span>}
                  <span className="ml-auto text-muted-foreground">{n.date}</span>
                </div>
                <p className="mt-2 font-medium text-foreground">{n.title}</p>
                <button className="mt-3 text-sm font-semibold text-royal hover:underline">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-navy">Start Your Nursing Career With Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Admissions open for B.Sc. Nursing. Appear for the applicable CET process and secure your seat through CAP rounds.
        </p>
        <Link to="/admission" className="mt-6 inline-block rounded-md bg-orange px-8 py-3 font-semibold text-orange-foreground hover:opacity-90">
          Admission Enquiry
        </Link>
      </section>
    </div>
  );
}
