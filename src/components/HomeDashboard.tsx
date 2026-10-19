import { Bell, ChevronRight, ClipboardList, Download, IndianRupee, LayoutDashboard, Phone } from "lucide-react";

const LINKS = [
  { to: "/admission", label: "Admission", detail: "Apply for B.Sc. Nursing", icon: ClipboardList },
  { to: "/notices", label: "Latest Notices", detail: "College announcements", icon: Bell },
  { to: "/downloads", label: "Downloads", detail: "Forms and prospectus", icon: Download },
  { to: "/fra-fee-structure", label: "FRA Fee Structure", detail: "FRA-approved course fees", icon: IndianRupee },
  { to: "/contact", label: "Contact Us", detail: "Call or send an enquiry", icon: Phone },
];

export function HomeDashboard({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <aside className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="flex items-center gap-3 bg-navy px-5 py-4 text-navy-foreground">
        <LayoutDashboard className="h-5 w-5 text-orange" />
        <h2 className="text-lg font-bold">Dashboard</h2>
      </div>
      <nav className="divide-y divide-border">
        {LINKS.map((item) => (
          <button
            key={item.to}
            onClick={() => onNavigate(item.to)}
            className="group flex min-h-20 w-full items-center gap-3 px-5 py-4 text-left hover:bg-sky hover:pl-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sky text-royal">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-foreground">{item.label}</span>
              <span className="block text-xs text-muted-foreground">{item.detail}</span>
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </nav>
    </aside>
  );
}