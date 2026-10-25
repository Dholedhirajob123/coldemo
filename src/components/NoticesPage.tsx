import { useState } from "react";
import { FileText, ImageIcon, Download } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";
import {
  loadNotices,
  NOTICE_CATEGORIES,
  type Notice,
} from "./NoticeList";

export function NoticesPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [cat, setCat] = useState<string>("All");
  const [notices] = useState<Notice[]>(() => loadNotices());

  const filtered =
    cat === "All" ? notices : notices.filter((n) => n.category === cat);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const tabs = ["All", ...NOTICE_CATEGORIES];

  return (
    <div>
      <PageTitleHeader
        title="Notices"
        subtitle="Latest updates, circulars and announcements"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-5xl px-4 py-14">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setCat(t)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                cat === t
                  ? "bg-navy text-white shadow"
                  : "border border-border bg-card text-muted-foreground hover:border-navy/40 hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Wide horizontal cards */}
        <div className="mt-8 space-y-3">
          {sorted.length === 0 && (
            <div className="rounded-xl border bg-white p-10 text-center text-sm text-muted-foreground">
              No notices in this category yet.
            </div>
          )}

          {sorted.map((n) => {
            const isPdf =
              n.attachmentName?.toLowerCase().endsWith(".pdf") ||
              n.attachment?.startsWith("data:application/pdf");

            return (
              <div
                key={n.id}
                className="group flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Left side: Icon + Text */}
                <div className="flex items-center gap-4">
                  {/* Soft Icon Tile */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                    {isPdf ? (
                      <FileText className="h-6 w-6" />
                    ) : (
                      <ImageIcon className="h-6 w-6" />
                    )}
                  </span>

                  {/* Title & Meta */}
                  <div>
                    <h3 className="text-base font-semibold text-navy">
                      {n.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      {n.category} <span className="mx-1">•</span> {n.date}
                    </p>
                  </div>
                </div>

                {/* Right side: Download Button */}
                {n.attachment ? (
                  <a
                    href={n.attachment}
                    download={n.attachmentName || undefined}
                    className="flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground px-4">
                    No file attached
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}