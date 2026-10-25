import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PageTitleHeader } from "./PageTitleHeader";

type GalleryItem = { id: string; title: string; category: string; src: string };

const PHOTO_KEY = "rcn_gallery";
const CAT_KEY = "rcn_gallery_categories";

const DEFAULT_CATEGORIES = [
  "Campus", "College Building", "Nursing Lab", "Library", "Classrooms",
  "Clinical Training", "Events", "Annual Function", "Nursing Day", "Sports",
  "Cultural Events", "Blood Donation", "Community Visit",
];

function loadGalleryData() {
  let photos: GalleryItem[] = [];
  let categories: string[] = DEFAULT_CATEGORIES;

  try {
    const rawPhotos = localStorage.getItem(PHOTO_KEY);
    if (rawPhotos) photos = JSON.parse(rawPhotos);

    const rawCats = localStorage.getItem(CAT_KEY);
    if (rawCats) categories = JSON.parse(rawCats);
  } catch {}

  return { photos, categories };
}

export function GalleryPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [{ photos, categories }] = useState(loadGalleryData);

  // "All" tab + custom dynamic categories
  const tabs = ["All", ...categories];

  const list = cat === "All" ? photos : photos.filter((p) => p.category === cat);
  const activeIndex = list.findIndex((p) => p.id === lightbox);
  const active = activeIndex >= 0 ? list[activeIndex] : null;

  const next = () => activeIndex < list.length - 1 && setLightbox(list[activeIndex + 1].id);
  const prev = () => activeIndex > 0 && setLightbox(list[activeIndex - 1].id);

  return (
    <div>
      <PageTitleHeader title="Gallery" subtitle="Moments from campus, labs and events" onNavigate={onNavigate} />

      <section className="mx-auto max-w-7xl px-4 py-14">
        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                cat === c
                  ? "bg-navy text-navy-foreground shadow"
                  : "border border-border bg-card text-muted-foreground hover:border-navy/40 hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <button
              key={p.id}
              onClick={() => setLightbox(p.id)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-sky shadow-sm transition hover:shadow-lg"
            >
              {p.src && (
                <img
                  src={p.src}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-royal/40" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/90 via-navy/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{p.title}</span>
                <span className="text-xs text-white/70">{p.category}</span>
              </div>
            </button>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No photos in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="h-5 w-5" />
          </button>

          {activeIndex > 0 && (
            <button className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="w-full max-w-3xl rounded-2xl bg-card p-4 shadow-2xl sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-sky">
              {active.src && <img src={active.src} alt={active.title} className="h-full w-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />}
              <ImageIcon className="absolute h-16 w-16 text-royal/40" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-navy">{active.title}</h3>
              <p className="text-sm text-muted-foreground">{active.category}</p>
            </div>
          </div>

          {activeIndex < list.length - 1 && (
            <button className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}