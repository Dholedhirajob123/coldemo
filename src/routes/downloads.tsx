import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { useState } from "react";
import { PageBackButton } from "@/components/PageBackButton";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Download admission forms, prospectus, notices, circulars, fee structure and academic documents." },
      { property: "og:title", content: "Downloads — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Admission forms, prospectus, circulars and academic documents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadsPage,
});

const CATEGORIES = ["All", "Admission Forms", "Prospectus", "Notices", "Circulars", "Academic Documents", "Fee Structure", "Important Forms"];

const DOCS = [
  { title: "B.Sc. Nursing Admission Form 2026–27", date: "01 Oct 2026", category: "Admission Forms" },
  { title: "College Prospectus 2026–27", date: "15 Sep 2026", category: "Prospectus" },
  { title: "CAP Round Admission Notice", date: "28 Sep 2026", category: "Notices" },
  { title: "Anti-Ragging Circular", date: "05 Aug 2026", category: "Circulars" },
  { title: "Academic Calendar 2026–27", date: "01 Jul 2026", category: "Academic Documents" },
  { title: "Fee Structure 2026–27", date: "01 Jul 2026", category: "Fee Structure" },
  { title: "Hostel Application Form", date: "10 Jun 2026", category: "Important Forms" },
  { title: "Bonafide Certificate Request Form", date: "10 Jun 2026", category: "Important Forms" },
];

function DownloadsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? DOCS : DOCS.filter((d) => d.category === cat);

  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Downloads</h1>
        <p className="mt-2 text-navy-foreground/70">Forms, prospectus, notices and documents</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <PageBackButton />
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
          {list.map((d) => (
            <div key={d.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange/15 text-orange">
                <FileText className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-foreground">{d.title}</p>
                <p className="text-xs text-muted-foreground">{d.category} · {d.date}</p>
              </div>
              <button className="flex shrink-0 items-center gap-1.5 rounded-md bg-navy px-3 py-2 text-sm font-medium text-navy-foreground hover:opacity-90">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
