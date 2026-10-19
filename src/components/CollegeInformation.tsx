import {
  GraduationCap, Clock, BadgeCheck, Briefcase, CheckCircle2, 
  Users, Landmark, Eye, Target, HeartHandshake, 
  FlaskConical, Library, Home, ArrowRight, ShieldCheck
} from "lucide-react";

const STATS = [
  { icon: GraduationCap, value: "B.Sc. Nursing", label: "Degree Offered" },
  { icon: Clock, value: "4 Years", label: "Course Duration" },
  { icon: BadgeCheck, value: "MUHS", label: "Nashik Affiliation" },
];

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

const CORE_VALUES = [
  { title: "Compassion", marathi: "(सहानुभूती)", desc: "Treating every patient with empathy, respect, dignity, and care." },
  { title: "Integrity & Ethics", marathi: "(नैतिकता)", desc: "Upholding high ethical standards in academic and clinical practice." },
  { title: "Excellence", marathi: "(उत्कृष्टता)", desc: "Striving for continuous improvement in learning, teaching, and patient care." },
  { title: "Discipline", marathi: "(शिस्त)", desc: "Fostering professional conduct, punctuality, and responsibility." },
  { title: "Service to Humanity", marathi: "(समाजसेवा)", desc: "Dedicating our skills and knowledge to the betterment of community health." },
];

const WHY_CHOOSE = [
  { icon: BadgeCheck, title: "Govt. & MUHS Approved", desc: "Recognised by Govt. of Maharashtra and MUHS." },
  { icon: Users, title: "Experienced Faculty", desc: "Qualified nursing professors and clinical instructors." },
  { icon: FlaskConical, title: "Modern Skill Labs", desc: "State-of-the-art clinical training laboratories." },
  { icon: Library, title: "Advanced Library", desc: "Well-stocked library with nursing textbooks and journals." },
  { icon: Home, title: "Hostel & Support", desc: "Safe hostel accommodation with wardens." },
  { icon: Briefcase, title: "Hospital Experience", desc: "Hands-on experience in reputed hospital setups." },
];

const APPROVALS = [
  { label: "Approved By", value: "Govt. of Maharashtra" },
  { label: "Affiliated To", value: "MUHS, Nashik" },
  { label: "CET Code", value: "9501" },
  { label: "MUHS Code", value: "155193" },
];

export function CollegeInformation({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <section className="border-b border-border bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* --- INTRODUCTION --- */}
        <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">About Us (बद्दल / परिचयात्मक माहिती)</p>
            <h2 className="mt-1 text-3xl font-bold text-navy">Rajashri College of Nursing</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <Landmark className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-navy">Our Foundation</h3>
                <p className="text-sm text-muted-foreground">Dharmaveer Diliprao Rahate Shikshan va Bahu-uddeshiya Sanstha, Mehkar</p>
              </div>
            </div>
            
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground text-sm">
              <p>
                Rajashri College of Nursing, Mehkar, is a premier institution dedicated to excellence in nursing education and healthcare training.
              </p>
              <p>
                Situated in Mehkar, the college was founded with the objective of making world-class healthcare education accessible to students from both rural and urban areas. We aim to bridge the gap between academic learning and clinical practice by providing state-of-the-art infrastructure, advanced clinical training laboratories, a well-stocked library, and hands-on experience in reputed hospital setups.
              </p>
            </div>
          </article>

          {/* Leadership */}
          <div className="rounded-xl border border-border bg-sky/40 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy flex items-center gap-2 border-b border-border pb-3">
              <Users className="h-5 w-5 text-teal" /> Visionary Leadership
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider">President</span>
                <span className="font-medium text-foreground">Shri Pratapraoji Jadhav</span>
                <span className="block text-xs text-orange">Hon'ble Minister, Govt. of India</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider">Secretary</span>
                <span className="font-medium text-foreground">Shri Rushikesh P. Jadhav</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase text-muted-foreground tracking-wider">Principal</span>
                <span className="font-medium text-foreground">Mrs. R. Jyothi</span>
              </li>
            </ul>
            <p className="mt-5 text-xs italic text-muted-foreground leading-relaxed">
              Under their guidance, the college fosters an environment of discipline, moral values, scientific inquiry, and compassionate care.
            </p>
          </div>
        </div>

        {/* --- VISION & MISSION --- */}
        <div className="mt-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy sm:text-3xl">Vision & Mission</h3>
            <p className="text-sm font-semibold text-orange mt-1">(दृष्टीकोन आणि ध्येय)</p>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {VISION_MISSION.map((v) => (
              <article key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.subtitle}</p>
                  </div>
                </div>
                
                {v.body && (
                  <p className="text-sm leading-relaxed text-muted-foreground bg-sky/30 p-4 rounded-lg border border-border">
                    "{v.body}"
                  </p>
                )}
                
                {v.points && (
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {v.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        <span><strong className="text-navy">{point.title}:</strong> {point.desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* --- CORE VALUES --- */}
        <div className="mt-12 bg-sky/30 rounded-2xl p-6 sm:p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy sm:text-3xl">Core Values</h3>
            <p className="text-sm font-semibold text-orange mt-1">(संस्थेची मुख्य मूल्ये)</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-teal transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <HeartHandshake className="h-5 w-5 text-teal shrink-0" />
                  <h4 className="font-semibold text-navy">{val.title} <span className="text-xs font-normal text-muted-foreground">{val.marathi}</span></h4>
                </div>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- WHY RAJASHRI --- */}
        <div className="mt-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">Why Choose Us</p>
            <h3 className="mt-1 text-2xl font-bold text-navy sm:text-3xl">Why Students Choose Rajashri</h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/15 text-teal">
                  <w.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-3 font-semibold text-foreground">{w.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- APPROVALS --- */}
        <div className="mt-10 rounded-xl border border-border bg-navy text-navy-foreground p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Authenticity</p>
          <h3 className="mt-1 text-xl font-bold">Approvals &amp; Affiliation</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {APPROVALS.map((a) => (
              <div key={a.label} className="rounded-lg border border-navy-foreground/20 bg-navy-foreground/10 p-3">
                <p className="text-xs uppercase text-navy-foreground/60">{a.label}</p>
                <p className="mt-1 font-semibold text-white">{a.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}