import { Link } from "@tanstack/react-router";
import { Bell, ChevronRight, ClipboardList, Download, IndianRupee, LayoutDashboard, Phone } from "lucide-react";

const DASHBOARD_LINKS = [
  { to: "/admission", label: "Admission", detail: "Apply for B.Sc. Nursing", icon: ClipboardList },
  { to: "/notices", label: "Latest Notices", detail: "College announcements", icon: Bell },
  { to: "/downloads", label: "Downloads", detail: "Forms and prospectus", icon: Download },
  { to: "/fee-structure", label: "Fee Structure", detail: "Course fee details", icon: IndianRupee },
  { to: "/contact", label: "Contact Us", detail: "Call or send an enquiry", icon: Phone },
] as const;

export function HomeDashboard() {
  return (
    <aside className="overflow-hidden rounded-lg border border-border bg-card shadow-sm" aria-labelledby="dashboard-title">
      <div className="flex items-center gap-3 bg-navy px-5 py-4 text-navy-foreground">
        <LayoutDashboard className="h-5 w-5 text-orange" />
        <h2 id="dashboard-title" className="text-lg font-bold">Dashboard</h2>
      </div>
      <nav className="divide-y divide-border" aria-label="Dashboard quick links">
        {DASHBOARD_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex min-h-20 items-center gap-3 px-5 py-4 transition-colors hover:bg-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky text-royal group-hover:bg-background">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-foreground">{item.label}</span>
              <span className="block text-xs text-muted-foreground">{item.detail}</span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </nav>
    </aside>
  );
}