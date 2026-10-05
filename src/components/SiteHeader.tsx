import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, GraduationCap, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/admission", label: "Admission" },
  { to: "/faculty", label: "Faculty" },
  { to: "/hospital", label: "Hospital" },
  { to: "/facilities", label: "Facilities" },
  { to: "/clinical-training", label: "Clinical Training" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/downloads", label: "Downloads" },
  { to: "/notices", label: "Notices" },
  { to: "/fee-structure", label: "Fee Structure" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:9881851514" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="h-3 w-3" /> 9881851514
            </a>
            <a href="mailto:rajshreensgmehkar@gmail.com" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="h-3 w-3" /> rajshreensgmehkar@gmail.com
            </a>
            <span className="hidden items-center gap-1 md:flex">
              <MapPin className="h-3 w-3" /> Mehkar, Dist. Buldhana, Maharashtra – 443301
            </span>
          </div>
          <Link
            to="/admission"
            className="rounded-full bg-orange px-3 py-0.5 font-semibold text-orange-foreground hover:opacity-90"
          >
            Admission Enquiry
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-navy-foreground">
              <GraduationCap className="h-7 w-7" />
            </span>
            <span>
              <span className="block text-base font-bold leading-tight text-navy md:text-lg">
                RAJASHRI COLLEGE OF NURSING
              </span>
              <span className="block text-xs text-muted-foreground">
                Mehkar, Dist. Buldhana, Maharashtra
              </span>
            </span>
          </Link>
          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden border-t border-border bg-navy lg:block">
          <div className="mx-auto flex max-w-7xl flex-wrap px-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="px-3 py-2.5 text-sm font-medium text-navy-foreground/85 hover:bg-royal hover:text-navy-foreground"
                activeProps={{ className: "bg-royal text-navy-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile nav */}
        {open && (
          <nav className="border-t border-border bg-navy lg:hidden">
            <div className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy-foreground/10 py-2.5 text-sm font-medium text-navy-foreground/90"
                  activeProps={{ className: "text-orange font-semibold" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
