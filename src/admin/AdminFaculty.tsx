import { useState, useRef } from "react";
import { Plus, Trash2, Pencil, X, Upload, ImageIcon } from "lucide-react";
import type { FacultyRow } from "../components/FacultyTable";

const KEY = "rcn_faculty";

const EMPTY = (type: "teaching" | "non-teaching", nextSr: number): FacultyRow => ({
  id: "",
  srNo: nextSr,
  name: "",
  designation: "",
  qualification: "",
  qualAsPerMuhs: "Yes",
  experience: "",
  expAsPerMuhs: "Yes",
  photo: "",
  type,
});

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AdminFaculty() {
  const [items, setItems] = useState<FacultyRow[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [tab, setTab] = useState<"teaching" | "non-teaching">("teaching");
  const [draft, setDraft] = useState<FacultyRow | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const persist = (next: FacultyRow[]) => {
    try {
      setItems(next);
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      alert("Storage full. Try a smaller photo or delete some entries.");
    }
  };

  const visible = items
    .filter((i) => i.type === tab)
    .sort((a, b) => a.srNo - b.srNo);

  const openAdd = () => {
    const nextSr = visible.length ? Math.max(...visible.map((v) => v.srNo)) + 1 : 1;
    setDraft(EMPTY(tab, nextSr));
  };

  const saveDraft = () => {
    if (!draft) return;
    if (!draft.name.trim()) {
      alert("Please add a name.");
      return;
    }
    const next = draft.id
      ? items.map((i) => (i.id === draft.id ? draft : i))
      : [...items, { ...draft, id: Math.random().toString(36).slice(2, 10) }];
    persist(next);
    setDraft(null);
  };

  const remove = (id: string) => {
    if (!confirm("Delete this entry?")) return;
    persist(items.filter((i) => i.id !== id));
  };

  const handleFile = async (file: File | undefined) => {
    if (!file || !draft) return;
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image.");
      return;
    }
    setUploading(true);
    try {
      const dataUrl = await fileToDataUrl(file);
      setDraft({ ...draft, photo: dataUrl });
    } catch {
      alert("Failed to read file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2">
        {(["teaching", "non-teaching"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              tab === t ? "bg-navy text-white" : "border bg-white text-muted-foreground"
            }`}
          >
            {t === "teaching" ? "Teaching" : "Non-Teaching"}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{visible.length} entries</p>
        <button
          onClick={openAdd}
          className="flex items-center gap-1 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white"
        >
          <Plus className="h-4 w-4" /> Add Member
        </button>
      </div>

      {/* Table */}
      <div className="mt-5 overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Sr No</th>
              <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Name Of Staff</th>
              <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Designation</th>
              
              {/* Only show extra columns for Teaching */}
              {tab === "teaching" && (
                <>
                  <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Educational Qualification</th>
                  <th className="border-r border-white/15 px-3 py-3 text-center font-semibold">Qual. As per MUHS</th>
                  <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Experience</th>
                  <th className="border-r border-white/15 px-3 py-3 text-center font-semibold">Exp. As per MUHS</th>
                </>
              )}

              <th className="border-r border-white/15 px-3 py-3 text-center font-semibold">Photo</th>
              <th className="px-3 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={tab === "teaching" ? 9 : 5} className="px-3 py-10 text-center text-sm text-muted-foreground">
                  No entries yet. Click <b>Add Member</b> to create one.
                </td>
              </tr>
            )}
            {visible.map((r, idx) => (
              <tr key={r.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border-t px-3 py-2">{r.srNo}</td>
                <td className="border-t px-3 py-2 font-medium text-navy">{r.name}</td>
                <td className="border-t px-3 py-2">{r.designation}</td>
                
                {tab === "teaching" && (
                  <>
                    <td className="border-t px-3 py-2">{r.qualification}</td>
                    <td className="border-t px-3 py-2 text-center">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${r.qualAsPerMuhs === "Yes" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {r.qualAsPerMuhs}
                      </span>
                    </td>
                    <td className="border-t px-3 py-2">{r.experience}</td>
                    <td className="border-t px-3 py-2 text-center">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${r.expAsPerMuhs === "Yes" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {r.expAsPerMuhs}
                      </span>
                    </td>
                  </>
                )}

                <td className="border-t px-3 py-2 text-center">
                  {r.photo ? (
                    <img src={r.photo} alt={r.name} className="mx-auto h-12 w-12 rounded-full object-cover" />
                  ) : (
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      <ImageIcon className="h-5 w-5" />
                    </div>
                  )}
                </td>
                <td className="border-t px-3 py-2">
                  <div className="flex justify-center gap-2">
                    <button onClick={() => setDraft(r)} className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
                      <Pencil className="h-3 w-3" />
                    </button>
                    <button onClick={() => remove(r.id)} className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {draft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setDraft(null)}>
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-navy">{draft.id ? "Edit" : "Add"} Member</h2>
              <button onClick={() => setDraft(null)}><X className="h-5 w-5" /></button>
            </div>

            <label className="mt-4 block text-sm font-medium">Sr No</label>
            <input type="number" value={draft.srNo} onChange={(e) => setDraft({ ...draft, srNo: Number(e.target.value) || 1 })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />

            <label className="mt-3 block text-sm font-medium">Name Of Staff</label>
            <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />

            <label className="mt-3 block text-sm font-medium">Designation</label>
            <input value={draft.designation} onChange={(e) => setDraft({ ...draft, designation: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />

            {/* Only show these fields for Teaching */}
            {draft.type === "teaching" && (
              <>
                <label className="mt-3 block text-sm font-medium">Educational Qualification</label>
                <input value={draft.qualification} onChange={(e) => setDraft({ ...draft, qualification: e.target.value })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />

                <label className="mt-3 block text-sm font-medium">Whether Qualification As per MUHS</label>
                <select value={draft.qualAsPerMuhs} onChange={(e) => setDraft({ ...draft, qualAsPerMuhs: e.target.value as "Yes" | "No" })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <label className="mt-3 block text-sm font-medium">Experience</label>
                <input value={draft.experience} onChange={(e) => setDraft({ ...draft, experience: e.target.value })} placeholder="e.g. 5 years" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />

                <label className="mt-3 block text-sm font-medium">Whether Experience As per MUHS</label>
                <select value={draft.expAsPerMuhs} onChange={(e) => setDraft({ ...draft, expAsPerMuhs: e.target.value as "Yes" | "No" })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </>
            )}

            <label className="mt-3 block text-sm font-medium">Type</label>
            <select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value as "teaching" | "non-teaching" })} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm">
              <option value="teaching">Teaching</option>
              <option value="non-teaching">Non-Teaching</option>
            </select>

            <label className="mt-3 block text-sm font-medium">Photo</label>
            <div onClick={() => fileRef.current?.click()} className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-5 text-center transition hover:border-navy/50 hover:bg-gray-100">
              {draft.photo ? (
                <img src={draft.photo} alt="Preview" className="h-28 w-28 rounded-full object-cover" />
              ) : (
                <>
                  <Upload className="h-7 w-7 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">{uploading ? "Reading…" : "Click to choose a photo"}</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
            
            {draft.photo && (
              <button onClick={() => setDraft({ ...draft, photo: "" })} className="mt-2 text-xs text-red-500 hover:underline">Remove photo</button>
            )}

            <button onClick={saveDraft} disabled={uploading} className="mt-5 w-full rounded-lg bg-navy py-2 text-sm font-semibold text-white disabled:opacity-50">
              {uploading ? "Please wait…" : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}