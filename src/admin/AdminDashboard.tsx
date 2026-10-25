export function AdminDashboard({ onNavigate }: { onNavigate: (p: string) => void }) {
const tiles = [
  { label: "Gallery Photos", to: "/admin/gallery" },
  { label: "Faculty Members", to: "/admin/faculty" },
  { label: "Notices", to: "/admin/notices" },
  { label: "Downloads", to: "/admin/downloads" }, // <-- Add this
];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {tiles.map((t) => (
        <button key={t.to} onClick={() => onNavigate(t.to)} className="rounded-xl border bg-white p-6 text-left hover:shadow">
          <p className="text-sm text-muted-foreground">Manage</p>
          <p className="mt-1 text-lg font-bold text-navy">{t.label}</p>
        </button>
      ))}
    </div>
  );
}