import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import collegeLogo from "@/assets/rajashri-college-logo.jpeg.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img src={collegeLogo.url} alt="" width={800} height={800} loading="lazy" className="h-14 w-14 shrink-0 rounded-md bg-background object-contain p-0.5" />
            <span className="min-w-0 font-bold leading-tight">Rajashri College of Nursing</span>
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
            <li>
              <a href="tel:7218298534" className="flex items-center gap-2 hover:text-orange">
                <Phone className="h-4 w-4" /> 7218298534
              </a>
            </li>
            <li><a href="mailto:rajshreensgmehkar@gmail.com" className="flex min-w-0 items-center gap-2 hover:text-orange"><Mail className="h-4 w-4 shrink-0" /><span className="break-all">rajshreensgmehkar@gmail.com</span></a></li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <Link to="/notices" className="hover:text-orange">Notices</Link>
            <Link to="/downloads" className="hover:text-orange">Downloads</Link>
            <Link to="/gallery" className="hover:text-orange">Gallery</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 px-4 py-5 text-center text-xs text-navy-foreground/65">
        <p>© Rajashri College of Nursing, Mehkar. All Rights Reserved.</p>
        <p className="mt-1 text-navy-foreground/90">
          Created by <span className="font-semibold text-orange">Dhiraj Dhole</span>
          <span className="mx-2 text-navy-foreground/30">•</span>
          <a href="tel:7218298534" className="font-semibold hover:text-orange">7218298534</a>
        </p>
      </div>
    </footer>
  );
}
