import { Link } from "@tanstack/react-router";
import { GraduationCap, Clock, BadgeCheck, Briefcase, CheckCircle2, ShieldCheck, Building2, Sparkles, Users, Landmark, Eye, Target, HeartHandshake, CalendarDays, Library, Home, MapPin, FlaskConical, FileText, ArrowRight } from "lucide-react";

const STATS = [
  { icon: GraduationCap, value: "B.Sc. Nursing", label: "Degree Offered" },
  { icon: Clock, value: "4 Years", label: "Course Duration" },
  { icon: BadgeCheck, value: "MUHS", label: "Nashik Affiliation" },
  { icon: MapPin, value: "Mehkar", label: "Dist. Buldhana" },
];

const VISION_MISSION = [
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be a centre of excellence in nursing education, producing graduates who lead with knowledge, skill and compassion in healthcare.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To provide quality, value-based nursing education with strong clinical training, and to serve the healthcare needs of rural and urban communities.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    body: "Compassion, discipline, ethics and lifelong learning guide everything we teach — inside the classroom, in the lab and at the bedside.",
  },
];

const WHY_CHOOSE = [
  { icon: BadgeCheck, title: "Govt. & MUHS Approved", desc: "Recognised by the Government of Maharashtra and affiliated to MUHS, Nashik." },
  { icon: Users, title: "Experienced Faculty", desc: "Qualified nursing professors, tutors and clinical instructors." },
  { icon: FlaskConical, title: "Modern Skill Labs", desc: "Well-equipped nursing skill and science laboratories for hands-on practice." },
  { icon: MapPin, title: "Rural & Urban Exposure", desc: "Community health postings in villages and urban health centres." },
  { icon: Library, title: "Advanced Library", desc: "Nursing textbooks, journals, references and a quiet reading hall." },
  { icon: Home, title: "Hostel & Support", desc: "Safe hostel accommodation with wardens and student support services." },
  { icon: Briefcase, title: "Internship & Placement", desc: "Internship training with career and placement guidance for graduates." },
];

const CAMPUS_LIFE = [
  "Health awareness and free medical camps",
  "International Nursing Day celebrations",
  "Blood donation and community outreach drives",
  "Cultural, festive and sports events",
  "Guest lectures by healthcare professionals",
  "Hospital, industry and institutional visits",
];

const SUPPORT_SERVICES = [
  { icon: Home, title: "Secured Hostel", desc: "Separate hostel arrangements with resident wardens." },
  { icon: Library, title: "Library & Reading Hall", desc: "Books, journals and a calm space for self-study." },
  { icon: HeartHandshake, title: "Counselling & Mentoring", desc: "Faculty mentors guide academic and personal growth." },
  { icon: ShieldCheck, title: "Student Welfare", desc: "Contact the college office for student welfare and safety policies." },
  { icon: FileText, title: "Scholarship Guidance", desc: "Help with state and central scholarship applications." },
  { icon: Briefcase, title: "Career & Placement Cell", desc: "Resume, interview and hospital recruitment support." },
];

const APPROVALS = [
  { label: "Approved By", value: "Govt. of Maharashtra" },
  { label: "Affiliated To", value: "MUHS, Nashik" },
  { label: "CET Code", value: "9501" },
  { label: "MUHS Code", value: "155193" },
];


export function CollegeInformation() {
  return (
      {/* About the college — overview, vibe, security, premises */}
      <section className="border-b border-border bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal">Welcome to Rajashri</p>
              <h2 className="mt-1 text-3xl font-bold text-navy">About Our College</h2>
              <p className="mt-1 max-w-2xl text-muted-foreground">
                Everything you should know about the college — the campus atmosphere, safety and the facilities on our premises.
              </p>
            </div>
            <Link to="/contact" className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-royal hover:underline">
              Contact the College <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.label} className="interactive-lift rounded-xl border border-border bg-sky p-4 text-center">
                <s.icon className="mx-auto h-6 w-6 text-royal" />
                <p className="mt-2 text-sm font-bold leading-tight text-navy">{s.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="interactive-lift rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] lg:col-span-2">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                  <Landmark className="h-8 w-8" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-navy">Rajashri College of Nursing</h3>
                  <p className="text-muted-foreground">Mehkar, Dist. Buldhana, Maharashtra – 443301</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Run by D.D.R. Shikshan Va Bahu-Uddeshiya Sanstha, Mehkar, Rajashri College of Nursing is
                approved by the Government of Maharashtra and MUHS Nashik. The college offers the four-year
                B.Sc. Nursing degree, combining strong classroom teaching, modern skill labs and hands-on
                clinical training so every student graduates confident, skilled and ready to serve.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-sky p-4">
                  <p className="flex items-center gap-2 font-semibold text-navy"><Users className="h-4 w-4 text-royal" /> Expert Faculty</p>
                  <p className="mt-1 text-sm text-muted-foreground">Experienced nursing educators and clinicians.</p>
                </div>
                <div className="rounded-lg bg-sky p-4">
                  <p className="flex items-center gap-2 font-semibold text-navy"><BadgeCheck className="h-4 w-4 text-royal" /> Fully Approved</p>
                  <p className="mt-1 text-sm text-muted-foreground">Govt. of Maharashtra & MUHS Nashik approved.</p>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              <article className="interactive-lift rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">Campus Vibe</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A positive, disciplined and friendly campus where students learn together, take part in
                  cultural events, health camps and celebrations — feeling at home while building their careers.
                </p>
              </article>

              <article className="interactive-lift rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange/15 text-orange">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">Safety & Security</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Student wellbeing and a respectful learning environment are important parts of campus life.
                  Contact the college office for current security arrangements, anti-ragging policies and hostel availability.
                </p>
              </article>
            </div>
          </div>

          <article className="interactive-lift mt-5 rounded-xl border border-border bg-navy p-6 text-navy-foreground shadow-[var(--shadow-elevated)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-foreground/15 text-teal">
                <Building2 className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold sm:text-xl">Our Premises</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Spacious academic building with well-ventilated classrooms",
                "Modern nursing skill labs & science laboratories",
                "Well-stocked library with reading hall",
                "Hostel accommodation, playground & cafeteria",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg bg-navy-foreground/10 p-4 text-sm text-navy-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {item}
                </div>
              ))}
            </div>
          </article>

          {/* Vision, mission & values */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {VISION_MISSION.map((v) => (
              <article key={v.title} className="interactive-lift rounded-xl border border-border bg-sky/60 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            ))}
          </div>

          {/* Why students choose us */}
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange">Why Rajashri</p>
                <h3 className="mt-1 text-2xl font-bold text-navy sm:text-3xl">Why Students Choose Us</h3>
                <p className="mt-1 max-w-2xl text-muted-foreground">
                  An education focused on knowledge, professional values and student development.
                </p>
              </div>
              <Link to="/facilities" className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-royal hover:underline">
                Facilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE.map((w) => (
                <div key={w.title} className="interactive-lift rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/15 text-teal">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-3 font-semibold text-foreground">{w.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Campus life & student support */}
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="interactive-lift rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange/15 text-orange">
                  <CalendarDays className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-navy">Life at Rajashri</h3>
                  <p className="text-sm text-muted-foreground">Learning that goes well beyond the classroom.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {CAMPUS_LIFE.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg bg-sky p-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="interactive-lift rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-royal/15 text-royal">
                  <Users className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-navy">Student Support &amp; Services</h3>
                  <p className="text-sm text-muted-foreground">Help at every step of the four-year journey.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {SUPPORT_SERVICES.map((s) => (
                  <div key={s.title} className="flex items-start gap-3 rounded-lg border border-border p-3">
                    <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-navy">{s.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Approvals & codes */}
          <div className="mt-8 rounded-xl border border-border bg-sky p-6 sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-teal">Authenticity</p>
                <h3 className="mt-1 text-xl font-bold text-navy">Approvals, Affiliation &amp; College Codes</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Admissions are through the State CET / CAP process against the college and university codes below.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {APPROVALS.map((a) => (
                    <div key={a.label} className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{a.label}</p>
                      <p className="mt-1 font-semibold text-navy">{a.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Link to="/admission" className="rounded-md bg-orange px-5 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
                  Apply Now
                </Link>
                <Link to="/contact" className="rounded-md border border-navy/30 px-5 py-2.5 font-semibold text-navy hover:bg-navy/5">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
