import { ImageIcon } from "lucide-react";

export type FacultyRow = {
  id: string;
  srNo: number;
  name: string;
  designation: string;
  qualification: string;
  qualAsPerMuhs: "Yes" | "No";
  experience: string;
  expAsPerMuhs: "Yes" | "No";
  photo: string;
  type: "teaching" | "non-teaching";
};

const KEY = "rcn_faculty";

export function loadFaculty(type: "teaching" | "non-teaching"): FacultyRow[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as FacultyRow[];
      return parsed.filter((f) => f.type === type).sort((a, b) => a.srNo - b.srNo);
    }
  } catch {}
  return [];
}

export function FacultyTable({ rows }: { rows: FacultyRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-sm text-muted-foreground">
        No staff information available yet. Please add entries from the admin panel.
      </div>
    );
  }

  // Check if this table contains Teaching or Non-Teaching
  const isTeaching = rows[0]?.type === "teaching";

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full min-w-[800px] border-collapse text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Sr No</th>
            <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Name Of Staff</th>
            <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Designation</th>
            
            {/* ONLY show these columns for Teaching */}
            {isTeaching && (
              <>
                <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Educational Qualification</th>
                <th className="border-r border-white/15 px-3 py-3 text-center font-semibold">Whether Qualification As per MUHS</th>
                <th className="border-r border-white/15 px-3 py-3 text-left font-semibold">Experience</th>
                <th className="border-r border-white/15 px-3 py-3 text-center font-semibold">Whether Experience As per MUHS</th>
              </>
            )}

            <th className="px-3 py-3 text-center font-semibold">Photo</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border-t px-3 py-2">{r.srNo}</td>
              <td className="border-t px-3 py-2 font-medium text-navy">{r.name}</td>
              <td className="border-t px-3 py-2">{r.designation}</td>
              
              {isTeaching && (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}