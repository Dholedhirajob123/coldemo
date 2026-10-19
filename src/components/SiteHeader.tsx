import { useState } from "react";
import { Menu, Phone, Mail, MapPin, X, ChevronDown } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { to: "/about", label: "About College" },
      { to: "/president-message", label: "President's Message" },
      { to: "/secretary-message", label: "Secretary's Message" },
      { to: "/principal-message", label: "Principal's Message" },
      { to: "/vision-mission", label: "Vision & Mission" },
    ],
  },
  { to: "/courses", label: "Courses" },
  { to: "/admission", label: "Admission" },
  {
    label: "Faculty",
    children: [
      { to: "/faculty/teaching", label: "Teaching Faculty" },
      { to: "/faculty/non-teaching", label: "Non-Teaching Staff" },
    ],
  },
  
  // Removed Campus & Infrastructure from here
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/downloads", label: "Downloads" },
  { to: "/notices", label: "Notices" },
  { to: "/fra-fee-structure", label: "FRA Fee Structure" },
  { to: "/contact", label: "Contact Us" },
];

const ABOUT_PATHS = ["/about", "/president-message", "/secretary-message", "/principal-message", "/vision-mission"];
const FACULTY_PATHS = ["/faculty/teaching", "/faculty/non-teaching"];

export function SiteHeader({
  current,
  onNavigate,
}: {
  current: string;
  onNavigate: (p: string) => void;
}) {
  const [open, setOpen] = useState(false);
  
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facultyOpen, setFacultyOpen] = useState(false);
  
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileFacultyOpen, setMobileFacultyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-1.5 text-[11px] sm:px-4 sm:text-xs">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <a href="tel:9881851514" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="h-3 w-3" /> <span>9881851514</span>
            </a>
            <a href="mailto:rajshreensgmehkar@gmail.com" className="hidden items-center gap-1 hover:opacity-80 sm:flex">
              <Mail className="h-3 w-3" />
              <span className="truncate">rajshreensgmehkar@gmail.com</span>
            </a>
            <span className="hidden items-center gap-1 md:flex">
              <MapPin className="h-3 w-3" /> Mehkar, Dist. Buldhana – 443301
            </span>
          </div>
          <button
            onClick={() => onNavigate("/admission")}
            className="shrink-0 rounded-full bg-orange px-2.5 py-1 font-semibold text-orange-foreground hover:opacity-90"
          >
            Admission Enquiry
          </button>
        </div>
      </div>

      {/* Brand row */}
      <div className="border-b border-border bg-background/95 shadow-sm backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[64px_1fr_44px] items-center gap-2 px-3 py-2.5 sm:grid-cols-[86px_1fr_86px] sm:gap-4 sm:px-4 sm:py-3">
      <button
  onClick={() => onNavigate("/")}
  className="flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
>
  <div className="h-full w-full overflow-hidden rounded-lg">
    <img
      src="src/assets/logo.png"
      alt="Rajashri College of Nursing Logo"
      className="h-full w-full object-cover"
    />
  </div>
</button>

          <button onClick={() => onNavigate("/")} className="min-w-0 text-center">
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
          </button>

          <div className="flex h-11 w-11 items-center justify-end sm:h-20 sm:w-20">
            <button
              className="rounded-md border border-border p-2 text-navy lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden border-t border-border bg-navy lg:block">
          <div className="mx-auto flex max-w-7xl flex-wrap items-stretch px-4">
            {NAV.map((item) => {
              if (item.children) {
                const isAbout = item.label === "About Us";
                const isFaculty = item.label === "Faculty";
                
                const isOpen = isAbout ? aboutOpen : facultyOpen;
                const setOpenState = isAbout ? setAboutOpen : setFacultyOpen;
                
                let isActive = false;
                if (isAbout) isActive = ABOUT_PATHS.includes(current);
                if (isFaculty) isActive = FACULTY_PATHS.includes(current);

                return (
                  <div
                    key={item.label}
                    className="relative flex items-stretch"
                    onMouseEnter={() => setOpenState(true)}
                    onMouseLeave={() => setOpenState(false)}
                  >
                    <button
                      onClick={() => onNavigate(isAbout ? "/about" : "/faculty/teaching")}
                      className={`flex h-full items-center gap-1 whitespace-nowrap px-3 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-royal text-navy-foreground"
                          : "text-navy-foreground/85 hover:bg-royal hover:text-navy-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-md border border-border bg-card shadow-lg">
                        {item.children.map((child) => (
                          <button
                            key={child.to}
                            onClick={() => {
                              onNavigate(child.to);
                              setOpenState(false);
                            }}
                            className={`block w-full border-b border-border px-4 py-2.5 text-left text-sm last:border-b-0 hover:bg-sky ${
                              current === child.to
                                ? "bg-sky font-semibold text-royal"
                                : "text-foreground"
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.to} className="relative flex items-stretch">
                  <button
                    onClick={() => onNavigate(item.to!)}
                    className={`whitespace-nowrap px-3 py-2.5 text-sm font-medium transition-all ${
                      current === item.to
                        ? "bg-orange text-orange-foreground"
                        : "text-navy-foreground/85 hover:bg-royal hover:text-navy-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Mobile nav */}
        {open && (
          <nav className="border-t border-border bg-navy lg:hidden">
            <div className="flex flex-col px-4 py-2">
              {NAV.map((item) => {
                if (item.children) {
                  const isAbout = item.label === "About Us";
                  const isFaculty = item.label === "Faculty";
                  
                  const isMobileOpen = isAbout ? mobileAboutOpen : mobileFacultyOpen;
                  const setMobileOpenState = isAbout ? setMobileAboutOpen : setMobileFacultyOpen;
                  
                  let isActive = false;
                  if (isAbout) isActive = ABOUT_PATHS.includes(current);
                  if (isFaculty) isActive = FACULTY_PATHS.includes(current);

                  return (
                    <div key={item.label} className="border-b border-navy-foreground/10">
                      <button
                        onClick={() => setMobileOpenState(!isMobileOpen)}
                        className={`flex w-full items-center justify-between py-2.5 text-left text-sm font-medium ${
                          isActive ? "font-semibold text-orange" : "text-navy-foreground/90"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isMobileOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileOpen && (
                        <div className="pb-2 pl-4">
                          {item.children.map((child) => (
                            <button
                              key={child.to}
                              onClick={() => {
                                onNavigate(child.to);
                                setOpen(false);
                                setMobileOpenState(false);
                              }}
                              className={`block w-full py-2 text-left text-sm ${
                                current === child.to
                                  ? "font-semibold text-orange"
                                  : "text-navy-foreground/75"
                              }`}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.to}
                    onClick={() => {
                      onNavigate(item.to!);
                      setOpen(false);
                    }}
                    className={`border-b border-navy-foreground/10 py-2.5 text-left text-sm font-medium ${
                      current === item.to
                        ? "font-semibold text-orange"
                        : "text-navy-foreground/90"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}