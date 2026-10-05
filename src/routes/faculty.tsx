import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Meet the experienced teaching faculty of Rajashri College of Nursing, Mehkar — designations, qualifications and departments." },
      { property: "og:title", content: "Faculty — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Experienced nursing faculty across all departments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacultyPage,
});

const FACULTY = [
  { name: "Prof. S. Deshmukh", designation: "Principal", qualification: "M.Sc. Nursing", department: "Administration", experience: "20+ years" },
  { name: "Mrs. A. Kulkarni", designation: "Vice Principal", qualification: "M.Sc. Nursing (Med-Surg)", department: "Medical Surgical Nursing", experience: "15 years" },
  { name: "Ms. R. Patil", designation: "Associate Professor", qualification: "M.Sc. Nursing (OBG)", department: "Obstetrics & Gynaecology", experience: "12 years" },
  { name: "Mr. V. Jadhav", designation: "Assistant Professor", qualification: "M.Sc. Nursing (CHN)", department: "Community Health Nursing", experience: "10 years" },
  { name: "Ms. P. More", designation: "Nursing Tutor", qualification: "B.Sc. Nursing", department: "Child Health Nursing", experience: "7 years" },
  { name: "Ms. K. Shinde", designation: "Nursing Tutor", qualification: "B.Sc. Nursing", department: "Mental Health Nursing", experience: "6 years" },
  { name: "Mr. S. Pawar", designation: "Clinical Instructor", qualification: "B.Sc. Nursing", department: "Clinical Training", experience: "8 years" },
  { name: "Mrs. N. Bhosale", designation: "Nursing Tutor", qualification: "GNM, B.Sc. Nursing", department: "Fundamentals of Nursing", experience: "9 years" },
];

const DEPARTMENTS = ["All", ...Array.from(new Set(FACULTY.map((f) => f.department)))];

function FacultyPage() {
  const [dept, setDept] = useState("All");
  const list = dept === "All" ? FACULTY : FACULTY.filter((f) => f.department === dept);

  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Our Faculty</h1>
        <p className="mt-2 text-navy-foreground/70">Experienced educators dedicated to student success</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                dept === d ? "bg-navy text-navy-foreground" : "border border-border bg-card text-foreground hover:bg-accent"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((f) => (
            <div key={f.name} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky text-2xl font-bold text-royal">
                {f.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{f.name}</h3>
              <p className="text-sm font-medium text-orange">{f.designation}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.qualification}</p>
              <p className="text-xs text-muted-foreground">{f.department}</p>
              <p className="mt-2 inline-block rounded-full bg-teal/15 px-2 py-0.5 text-xs font-medium text-teal">
                {f.experience} experience
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
