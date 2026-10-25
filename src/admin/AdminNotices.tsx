import { useState, useRef } from "react";
import { Plus, Trash2, Pencil, X, Upload, FileText, ImageIcon } from "lucide-react";
import type { Notice } from "../components/NoticeList";
import { NOTICE_CATEGORIES } from "../components/NoticeList";

const KEY = "rcn_notices";

const todayISO = () => new Date().toISOString().slice(0, 10);

const EMPTY: Notice = {
  id: "",
  title: "",
  category: NOTICE_CATEGORIES[0],
  date: todayISO(),
  description: "",
  attachment: "",
  attachmentName: "",
};

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AdminNotices() {
  const [items, setItems] = useState<Notice[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [draft, setDraft] = useState<Notice | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const persist = (next: Notice[]) => {
    try {
      setItems(next);
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      alert("Storage full. Try a smaller attachment or delete some notices.");
    }
  };

  const saveDraft = () => {
    if (!draft) return;
    if (!draft.title.trim()) {
      alert("Please add a title.");
      return;
    }
    const next = draft.id
      ? items.map((i) => (i.id === draft.id ? draft : i))
      : [...items, { ...draft, id: Math.random().toString(36).slice(2, 10) }];
    persist(next);
    setDraft(null);
  };

  const remove = (id: string) => {
    if (!confirm("Delete this notice?")) return;
    persist(items.filter((i) => i.id !== id));
  };

  const handleFile = async (file: File | undefined) => {
    if (!file || !draft) return;
    const ok = file.type.startsWith("image/") || file.type === "application/pdf";
    if (!ok) {
      alert("Please choose an image or a PDF.");
      return;
    }
    setUploading(true);
    try {
      const dataUrl = await fileToDataUrl(file);
      setDraft({ ...draft, attachment: dataUrl, attachmentName: file.name });
    } catch {
      alert("Failed to read file.");
    } finally {
      setUploading(false);
    }
  };

  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{items.length} notices</p>
        <button
          onClick={() => setDraft({ ...EMPTY, date: todayISO() })}
          className="flex items-center gap-1 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white"
        >
          <Plus className="h-4 w-4" /> Add Notice
        </button>
      </div>

      {/* Same card look as public page, with Edit/Delete */}
      <div className="mt-5 space-y-3">
        {sorted.length === 0 && (
          <div className="rounded-xl border bg-white p-10 text-center text-sm text-muted-foreground">
            No notices yet. Click <b>Add Notice</b> to create one.
          </div>
        )}

        {sorted.map((n) => (
          <div key={n.id} className="rounded-xl border bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
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
                    className="mt-2 inline-flex items-center gap-1 text-sm text-royal hover:underline"
                  >
                    {n.attachmentName?.toLowerCase().endsWith(".pdf") ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <ImageIcon className="h-4 w-4" />
                    )}
                    {n.attachmentName}
                  </a>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setDraft(n)}
                  className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100"
                  title="Edit"
                >
                  <Pencil className="h-3 w-3" />
                </button>
                <button
                  onClick={() => remove(n.id)}
                  className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                  title="Delete"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {draft && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setDraft(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-navy">{draft.id ? "Edit" : "Add"} Notice</h2>
              <button onClick={() => setDraft(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <label className="mt-4 block text-sm font-medium">Title</label>
            <input
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="e.g. CET 2026 Counselling Schedule"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />

            <label className="mt-3 block text-sm font-medium">Category</label>
            <select
              value={draft.category}
              onChange={(e) => setDraft({ ...draft, category: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            >
              {NOTICE_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <label className="mt-3 block text-sm font-medium">Date</label>
            <input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />

            <label className="mt-3 block text-sm font-medium">Description</label>
            <textarea
              value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              rows={3}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />

            <label className="mt-3 block text-sm font-medium">
              Attachment (PDF or image)
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600 transition hover:border-navy/50 hover:bg-gray-100"
            >
              <Upload className="h-5 w-5 text-gray-400" />
              {uploading
                ? "Reading…"
                : draft.attachmentName
                ? draft.attachmentName
                : "Click to choose a file"}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            {draft.attachment && (
              <button
                onClick={() =>
                  setDraft({ ...draft, attachment: "", attachmentName: "" })
                }
                className="mt-2 text-xs text-red-500 hover:underline"
              >
                Remove attachment
              </button>
            )}

            <button
              onClick={saveDraft}
              disabled={uploading}
              className="mt-5 w-full rounded-lg bg-navy py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {uploading ? "Please wait…" : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}