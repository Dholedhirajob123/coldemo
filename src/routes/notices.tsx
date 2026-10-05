import { createFileRoute } from "@tanstack/react-router";
import { Bell, Download } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Latest admission, CET, examination, university notices and college circulars." },
      { property: "og:title", content: "Notices — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Latest notices, circulars and announcements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NoticesPage,
});

const CATEGORIES = ["All", "Admission", "CET", "Examination", "University", "Circular", "Announcement"];

const NOTICES = [
  { title: "B.Sc. Nursing Admission 2026–27: CAP Round Schedule", date: "28 Sep 2026", category: "Admission", isNew: true },
  { title: "CET Document Verification Notice for Admitted Students", date: "22 Sep 2026", category: "CET", isNew: true },
  { title: "MUHS Winter Examination Time Table Released", date: "15 Sep 2026", category: "Examination", isNew: false },
  { title: "University Circular: Updated Syllabus Implementation", date: "10 Sep 2026", category: "University", isNew: false },
  { title: "College Circular: Orientation Programme for First Year", date: "08 Sep 2026", category: "Circular", isNew: false },
  { title: "Important Announcement: Scholarship Application Deadline", date: "01 Sep 2026", category: "Announcement", isNew: false },
];

function NoticesPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? NOTICES : NOTICES.filter((n) => n.category === cat);

  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Notices &amp; Circulars</h1>
        <p className="mt-2 text-navy-foreground/70">Stay updated with the latest announcements</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                cat === c ? "bg-navy text-navy-foreground" : "border border-border bg-card text-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {list.map((n) => (
            <div key={n.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Bell className="h-4 w-4 text-orange" />
                <span className="rounded-full bg-teal/15 px-2 py-0.5 font-medium text-teal">{n.category}</span>
                {n.isNew && <span className="rounded-full bg-orange px-2 py-0.5 font-semibold text-orange-foreground">NEW</span>}
                <span className="ml-auto text-muted-foreground">{n.date}</span>
              </div>
              <p className="mt-2 font-medium text-foreground">{n.title}</p>
              <div className="mt-3 flex gap-3">
                <button className="text-sm font-semibold text-royal hover:underline">View Details</button>
                <button className="flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
                  <Download className="h-3.5 w-3.5" /> PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
