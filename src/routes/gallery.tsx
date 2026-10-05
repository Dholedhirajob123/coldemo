import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Campus, labs, library, events and clinical training photo gallery of Rajashri College of Nursing, Mehkar." },
      { property: "og:title", content: "Gallery — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Campus life, events and training in pictures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES = [
  "All", "Campus", "College Building", "Nursing Lab", "Library", "Classrooms",
  "Clinical Training", "Events", "Annual Function", "Nursing Day", "Sports",
  "Cultural Events", "Blood Donation", "Community Visit",
];

const PHOTOS = CATEGORIES.slice(1).flatMap((cat, i) => [
  { id: i * 2 + 1, category: cat, title: `${cat} — Photo 1` },
  { id: i * 2 + 2, category: cat, title: `${cat} — Photo 2` },
]);

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const list = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === cat);
  const active = PHOTOS.find((p) => p.id === lightbox);

  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="mt-2 text-navy-foreground/70">Moments from campus, labs and events</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
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

        <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
          {list.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setLightbox(p.id)}
              className="mb-4 flex w-full flex-col items-center justify-center break-inside-avoid rounded-xl border border-border bg-sky p-4 text-center hover:shadow-md"
              style={{ height: `${140 + (i % 3) * 50}px` }}
            >
              <ImageIcon className="h-8 w-8 text-royal" />
              <span className="mt-2 text-sm font-medium text-foreground">{p.title}</span>
              <span className="text-xs text-muted-foreground">{p.category}</span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="w-full max-w-lg rounded-2xl bg-card p-6 text-center sm:p-10" onClick={(e) => e.stopPropagation()}>
            <button className="ml-auto block text-muted-foreground hover:text-foreground" onClick={() => setLightbox(null)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <ImageIcon className="mx-auto mt-4 h-16 w-16 text-royal" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{active.title}</h3>
            <p className="text-sm text-muted-foreground">{active.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
