import { Bell, Download } from "lucide-react";
import { useState } from "react";
import { PageTitleHeader } from "./PageTitleHeader";

const CATEGORIES = ["All", "Admission", "CET", "Examination", "University", "Circular", "Announcement"];

const NOTICES = [
  { title: "B.Sc. Nursing Admission 2026–27: CAP Round Schedule", date: "28 Sep 2026", category: "Admission", isNew: true },
  { title: "CET Document Verification Notice", date: "22 Sep 2026", category: "CET", isNew: true },
  { title: "MUHS Winter Examination Time Table Released", date: "15 Sep 2026", category: "Examination", isNew: false },
  { title: "Updated Syllabus Implementation", date: "10 Sep 2026", category: "University", isNew: false },
  { title: "Orientation Programme for First Year", date: "08 Sep 2026", category: "Circular", isNew: false },
  { title: "Scholarship Application Deadline", date: "01 Sep 2026", category: "Announcement", isNew: false },
];

export function NoticesPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? NOTICES : NOTICES.filter((n) => n.category === cat);

  return (
    <div>
      <PageTitleHeader
        title="Notices & Circulars"
        subtitle="Stay updated with the latest announcements"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                cat === c ? "bg-navy text-navy-foreground" : "border border-border bg-card hover:bg-accent"
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