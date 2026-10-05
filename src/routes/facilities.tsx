import { createFileRoute } from "@tanstack/react-router";
import { Users, FlaskConical, Stethoscope, Hospital, Home, Library, Monitor, MapPin, Briefcase, Ambulance } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Modern laboratories, library, digital classrooms, hostel, attached hospital and clinical training facilities." },
      { property: "og:title", content: "Facilities — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Modern labs, library, hostel, digital classrooms and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacilitiesPage,
});

const FACILITIES = [
  { icon: Users, title: "Experienced Professors", desc: "Qualified and dedicated faculty guiding every student." },
  { icon: FlaskConical, title: "Modern Laboratories", desc: "Well-equipped nursing skill labs for hands-on practice." },
  { icon: Stethoscope, title: "Practical Clinical Training", desc: "Supervised clinical postings throughout the course." },
  { icon: Hospital, title: "Attached Hospital", desc: "Direct hospital access for real patient-care experience." },
  { icon: Home, title: "Hostel Facility", desc: "Safe and comfortable accommodation for students." },
  { icon: Library, title: "Advanced Library", desc: "Rich collection of nursing books, journals and references." },
  { icon: Monitor, title: "Digital Classrooms", desc: "Smart classrooms with modern teaching aids." },
  { icon: MapPin, title: "Rural & Urban Clinical Experience", desc: "Community health postings in rural and urban settings." },
  { icon: Briefcase, title: "Internship & Placement Guidance", desc: "Career support and placement assistance for graduates." },
  { icon: Ambulance, title: "Ambulance & Emergency Care Training", desc: "Training in emergency response and critical care." },
];

function FacilitiesPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Our Facilities</h1>
        <p className="mt-2 text-navy-foreground/70">Everything a nursing student needs to excel</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky text-royal">
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
