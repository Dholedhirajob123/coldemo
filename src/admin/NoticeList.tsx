import { FileText, ImageIcon, ExternalLink } from "lucide-react";

export type Notice = {
  id: string;
  title: string;
  category: string;
  date: string;          // ISO yyyy-mm-dd
  description: string;
  attachment: string;    // base64 data URL or URL
  attachmentName: string;
};

export const NOTICE_CATEGORIES = [
  "Admission",
  "CET",
  "Examination",
  "University",
  "Circular",
  "Announcement",
] as const;

const KEY = "rcn_notices";

export function loadNotices(): Notice[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Notice[]) : [];
  } catch {
    return [];
  }
}

export function NoticeList({ notices }: { notices: Notice[] }) {
  if (notices.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-sm text-muted-foreground">
        No notices in this category yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notices.map((n) => (
        <div
          key={n.id}
          className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-navy px-2.5 py-0.5 font-semibold text-white">
              {n.category}
            </span>
            <span className="text-muted-foreground">{n.date}</span>
          </div>

          <h3 className="mt-2 font-semibold text-navy">{n.title}</h3>

          {n.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {n.description}
            </p>
          )}

          {n.attachment && (
            <a
              href={n.attachment}
              target="_blank"
              rel="noopener noreferrer"
              download={n.attachmentName || undefined}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-royal hover:underline"
            >
              {n.attachmentName?.toLowerCase().endsWith(".pdf") ? (
                <FileText className="h-4 w-4" />
              ) : (
                <ImageIcon className="h-4 w-4" />
              )}
              {n.attachmentName || "View attachment"}
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}