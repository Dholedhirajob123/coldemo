import { Link } from "@tanstack/react-router";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="font-bold">Rajashri College of Nursing</span>
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

        <div>
          <h3 className="font-semibold">College</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/about" className="hover:text-orange">Vision &amp; Mission</Link></li>
            <li><Link to="/about" className="hover:text-orange">Principal's Message</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Academics</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/courses" className="hover:text-orange">Courses</Link></li>
            <li><Link to="/faculty" className="hover:text-orange">Faculty</Link></li>
            <li><Link to="/admission" className="hover:text-orange">Admission</Link></li>
            <li><Link to="/clinical-training" className="hover:text-orange">Clinical Training</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Mehkar, Dist. Buldhana, Maharashtra – 443301
            </li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 9881851514</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> rajshreensgmehkar@gmail.com</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <Link to="/notices" className="hover:text-orange">Notices</Link>
            <Link to="/downloads" className="hover:text-orange">Downloads</Link>
            <Link to="/gallery" className="hover:text-orange">Gallery</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 py-4 text-center text-xs text-navy-foreground/60">
        © Rajashri College of Nursing, Mehkar. All Rights Reserved.
      </div>
    </footer>
  );
}
