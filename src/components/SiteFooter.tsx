import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function SiteFooter({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-background font-bold text-navy">
              RN
            </div>
            <span className="font-bold leading-tight">Rajashri College of Nursing</span>
          </div>
          <p className="mt-3 text-sm text-navy-foreground/70">
            Building skilled, compassionate and confident healthcare professionals for tomorrow.
          </p>
          <div className="mt-4 flex gap-3">
            <Facebook className="h-5 w-5 cursor-pointer hover:text-orange" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-orange" />
            <Youtube className="h-5 w-5 cursor-pointer hover:text-orange" />
          </div>
        </div>

        {/* College */}
        <div>
          <h3 className="font-semibold">College</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <button onClick={() => onNavigate("/about")} className="hover:text-orange">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/president-message")} className="hover:text-orange">
                President's Message
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/secretary-message")} className="hover:text-orange">
                Secretary's Message
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/principal-message")} className="hover:text-orange">
                Principal's Message
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/vision-mission")} className="hover:text-orange">
                Vision &amp; Mission
              </button>
            </li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="font-semibold">Academics</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <button onClick={() => onNavigate("/courses")} className="hover:text-orange">
                Courses
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/faculty")} className="hover:text-orange">
                Faculty
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/facilities")} className="hover:text-orange">
                Facilities
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/admission")} className="hover:text-orange">
                Admission
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("/fra-fee-structure")} className="hover:text-orange">
                FRA Fee Structure
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Mehkar, Dist. Buldhana, Maharashtra – 443301
            </li>
            <li>
              <a href="tel:9881851514" className="flex items-center gap-2 hover:text-orange">
                <Phone className="h-4 w-4" /> 9881851514
              </a>
            </li>
            <li>
              <a href="tel:7720826503" className="flex items-center gap-2 hover:text-orange">
                <Phone className="h-4 w-4" /> 7720826503
              </a>
            </li>
            <li>
              <a
                href="mailto:rajshreensgmehkar@gmail.com"
                className="flex items-center gap-2 hover:text-orange"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">rajshreensgmehkar@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
     <div className="border-t border-navy-foreground/15 px-4 py-5 text-center text-xs text-navy-foreground/65">
  <p>© Rajashri College of Nursing, Mehkar. All Rights Reserved.</p>
  <p className="mt-1">
    Created by <span className="font-semibold text-orange">Dhiraj Dhole</span>
    <span className="mx-2">•</span>
    <a href="tel:7218298534" className="font-semibold hover:text-orange">
      7218298534
    </a>
    <span className="mx-2">•</span>
    <a
      href="https://your-project-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:text-orange"
    >
      Project Link
    </a>
  </p>
</div>
    </footer>
  );
}