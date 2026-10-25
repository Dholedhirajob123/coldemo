import { useState, useRef } from "react";
import { Plus, Trash2, Pencil, X, Upload, ImageIcon, FolderPlus } from "lucide-react";

export type GalleryItem = { id: string; title: string; category: string; src: string };
const PHOTO_KEY = "rcn_gallery";
const CAT_KEY = "rcn_gallery_categories";

const DEFAULT_CATEGORIES = [
  "Campus", "College Building", "Nursing Lab", "Library", "Classrooms",
  "Clinical Training", "Events", "Annual Function", "Nursing Day", "Sports",
  "Cultural Events", "Blood Donation", "Community Visit",
];

const EMPTY: GalleryItem = { id: "", title: "", category: "", src: "" };

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AdminGallery() {
  // --- Categories State ---
  const [categories, setCategories] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(CAT_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_CATEGORIES;
    } catch { return DEFAULT_CATEGORIES; }
  });
  const [newCat, setNewCat] = useState("");

  // --- Photos State ---
  const [items, setItems] = useState<GalleryItem[]>(() => {
    try { const raw = localStorage.getItem(PHOTO_KEY); return raw ? JSON.parse(raw) : []; }
    catch { return []; }
  });
  const [draft, setDraft] = useState<GalleryItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // --- Category Handlers ---
  const persistCats = (next: string[]) => {
    setCategories(next);
    localStorage.setItem(CAT_KEY, JSON.stringify(next));
  };

  const addCategory = () => {
    const val = newCat.trim();
    if (!val) return;
    if (categories.includes(val)) { alert("Category already exists."); return; }
    persistCats([...categories, val]);
    setNewCat("");
  };

  const removeCategory = (catToRemove: string) => {
    if (!confirm(`Delete category "${catToRemove}"? (Photos in this category will still exist, but you should re-assign them).`)) return;
    persistCats(categories.filter((c) => c !== catToRemove));
  };

  // --- Photo Handlers ---
  const persistPhotos = (next: GalleryItem[]) => {
    try {
      setItems(next);
      localStorage.setItem(PHOTO_KEY, JSON.stringify(next));
    } catch {
      alert("Storage full. Try a smaller image or delete some photos.");
    }
  };

  const openAddPhoto = () => {
    if (categories.length === 0) { alert("Please add a category first."); return; }
    setDraft({ ...EMPTY, category: categories[0] });
  };

  const saveDraft = () => {
    if (!draft || !draft.title.trim()) { alert("Please add a title."); return; }
    if (!draft.src) { alert("Please upload an image."); return; }
    const next = draft.id
      ? items.map((i) => (i.id === draft.id ? draft : i))
      : [...items, { ...draft, id: Math.random().toString(36).slice(2, 10) }];
    persistPhotos(next);
    setDraft(null);
  };

  const removePhoto = (id: string) => {
    if (!confirm("Delete this photo?")) return;
    persistPhotos(items.filter((i) => i.id !== id));
  };

  const handleFile = async (file: File | undefined) => {
    if (!file || !draft) return;
    if (!file.type.startsWith("image/")) { alert("Please choose an image file."); return; }
    setUploading(true);
    try {
      const dataUrl = await fileToDataUrl(file);
      setDraft({ ...draft, src: dataUrl });
    } catch {
      alert("Failed to read file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* ── CATEGORY MANAGER ── */}
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-navy">Manage Categories</h2>
        <p className="mt-1 text-sm text-muted-foreground">Add or remove gallery filter tabs.</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="inline-flex items-center gap-1 rounded-full bg-gray-100 pl-3 pr-1.5 py-1 text-sm font-medium text-gray-700">
              {c}
              <button onClick={() => removeCategory(c)} className="rounded-full p-1 hover:bg-gray-300 hover:text-red-600">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {categories.length === 0 && <span className="text-sm text-gray-400">No categories added yet.</span>}
        </div>

        <div className="mt-4 flex max-w-sm gap-2">
          <input
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
            placeholder="New category name..."
            className="w-full rounded-lg border px-3 py-2 text-sm"
            onKeyDown={(e) => e.key === "Enter" && addCategory()}
          />
          <button onClick={addCategory} className="flex shrink-0 items-center gap-1 rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            <FolderPlus className="h-4 w-4" /> Add
          </button>
        </div>
      </div>

      {/* ── PHOTO MANAGER ── */}
      <div>
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-lg font-bold text-navy">Gallery Photos</h2>
            <p className="text-sm text-muted-foreground">{items.length} photos uploaded</p>
          </div>
          <button onClick={openAddPhoto} className="flex items-center gap-1 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            <Plus className="h-4 w-4" /> Add Photo
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.id} className="overflow-hidden rounded-xl border bg-white">
              <div className="aspect-video bg-gray-100 relative">
                {i.src && <img src={i.src} alt={i.title} className="h-full w-full object-cover" />}
                <span className="absolute top-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                  {i.category}
                </span>
              </div>
              <div className="p-3">
                <p className="truncate font-medium">{i.title}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => setDraft(i)} className="rounded-md border px-2 py-1 text-xs hover:bg-gray-50">
                    <Pencil className="inline h-3 w-3" /> Edit
                  </button>
                  <button onClick={() => removePhoto(i.id)} className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50">
                    <Trash2 className="inline h-3 w-3" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ADD/EDIT PHOTO MODAL ── */}
      {draft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setDraft(null)}>
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-navy">{draft.id ? "Edit" : "Add"} Photo</h2>
              <button onClick={() => setDraft(null)}><X className="h-5 w-5" /></button>
            </div>

            <label className="mt-4 block text-sm font-medium">Title</label>
            <input
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="e.g. Annual Day 2026"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />

            <label className="mt-3 block text-sm font-medium">Category</label>
            <select
              value={draft.category}
              onChange={(e) => setDraft({ ...draft, category: e.target.value })}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            >
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>

            <label className="mt-3 block text-sm font-medium">Photo</label>
            <div
              onClick={() => fileRef.current?.click()}
              className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center transition hover:border-navy/50 hover:bg-gray-100"
            >
              {draft.src ? (
                <img src={draft.src} alt="Preview" className="max-h-48 rounded-md object-contain" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">{uploading ? "Reading…" : "Click to upload image"}</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />

            <button
              onClick={saveDraft}
              disabled={uploading}
              className="mt-5 w-full rounded-lg bg-navy py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {uploading ? "Please wait…" : "Save Photo"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}