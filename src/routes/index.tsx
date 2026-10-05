import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Clock, BookOpen, BadgeCheck, FileText, Bell, ArrowRight } from "lucide-react";

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

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-royal opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Approved by Govt. of Maharashtra &amp; MUHS Nashik
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Rajashri College of Nursing, Mehkar</h1>
          <p className="mt-4 text-xl font-medium text-navy-foreground/90">Excellence in Nursing Education</p>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/70">
            Building skilled, compassionate and confident healthcare professionals for tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_FACTS.map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
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
      </section>

      {/* Latest notices */}
      <section className="bg-sky py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy">
              <Bell className="h-6 w-6 text-orange" /> Latest Notices
            </h2>
            <Link to="/notices" className="flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {NOTICES.map((n) => (
              <div key={n.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
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
