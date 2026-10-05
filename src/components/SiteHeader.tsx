import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";
import collegeLogo from "@/assets/rajashri-college-logo.jpeg.asset.json";

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
      <div className="border-b border-border bg-background/95 shadow-sm backdrop-blur">
        <div className="relative mx-auto grid max-w-7xl grid-cols-[64px_minmax(0,1fr)_44px] items-center gap-2 px-3 py-2.5 sm:grid-cols-[86px_minmax(0,1fr)_86px] sm:gap-4 sm:px-4 sm:py-3">
          <Link
            to="/"
            aria-label="Rajashri College of Nursing home"
            className="group flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20"
          >
            <img
              src={collegeLogo.url}
              alt="Rajashri College of Nursing logo"
              width={800}
              height={800}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <Link to="/" className="min-w-0 text-center">
            <span className="hidden text-xs font-semibold uppercase text-teal sm:block">
              D.D.R. Shikshan Va Bahu-Uddeshiya Sanstha, Mehkar's
            </span>
            <span className="mt-0.5 block font-display text-[clamp(1rem,2.4vw,2rem)] font-bold leading-tight text-navy">
              RAJASHRI COLLEGE OF NURSING
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase text-muted-foreground sm:text-sm">
              Mehkar, Dist. Buldhana 443301
            </span>
            <span className="mt-1 hidden text-xs font-bold text-royal md:block">
              Approved by Govt. of Maharashtra &amp; MUHS Nashik
            </span>
          </Link>

          <span className="hidden h-20 w-20 sm:block" aria-hidden="true" />
          <button
            className="justify-self-end rounded-md border border-border p-2 text-navy lg:hidden"
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
