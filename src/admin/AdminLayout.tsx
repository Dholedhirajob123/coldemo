import { LayoutDashboard, Images, Users, Bell, Home, LogOut, Download } from "lucide-react";

const LINKS = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/gallery", label: "Gallery", icon: Images },
  { to: "/admin/faculty", label: "Faculty", icon: Users },
  { to: "/admin/notices", label: "Notices", icon: Bell },
  { to: "/admin/downloads", label: "Downloads", icon: Download }, // <-- Add this
];

export function AdminLayout({
  current,
  onNavigate,
  onLogout,
  children,
}: {
  current: string;
  onNavigate: (p: string) => void;
  onLogout: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col bg-navy text-white sm:flex">
        <div className="border-b border-white/10 px-5 py-5 text-lg font-bold">RCN Admin</div>
        <nav className="flex-1 space-y-1 p-3">
          {LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => onNavigate(l.to)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                current === l.to ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10"
              }`}
            >
              <l.icon className="h-4 w-4" /> {l.label}
            </button>
          ))}
        </nav>
        <div className="space-y-1 border-t border-white/10 p-3">
          <button onClick={() => onNavigate("/")} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10">
            <Home className="h-4 w-4" /> View Site
          </button>
          <button onClick={onLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-300 hover:bg-white/10">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-border bg-white px-4 py-3 sm:px-6">
          <h1 className="font-semibold text-navy">
            {LINKS.find((l) => l.to === current)?.label ?? "Admin"}
          </h1>
          <button onClick={onLogout} className="rounded-md border px-3 py-1.5 text-sm sm:hidden">
            Logout
          </button>
        </header>

        {/* Mobile nav */}
        <nav className="flex gap-1 overflow-x-auto border-b bg-white px-2 py-2 sm:hidden">
          {LINKS.map((l) => (
            <button
              key={l.to}
              onClick={() => onNavigate(l.to)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${
                current === l.to ? "bg-navy text-white" : "border text-muted-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}