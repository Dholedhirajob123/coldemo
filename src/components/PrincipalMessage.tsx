import { User, Quote } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";
import principalImg from "@/assets/principal.jpg";

export function PrincipalMessage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="overflow-hidden">
      <PageTitleHeader title="Principal's Message" subtitle="Mrs. R. Jyothi" onNavigate={onNavigate} />

      <section className="mx-auto max-w-6xl px-4 py-14">

        {/* 3D perspective wrapper */}
        <div className="mt-6 [perspective:1600px]">
          <div className="group grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(10px)] sm:p-8 lg:grid-cols-[300px_1fr] lg:gap-10">
            {/* LEFT: Image card (3D) */}
            <div className="relative [transform-style:preserve-3d]">
              {/* Glow behind */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-orange/40 via-teal/30 to-navy/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.45)] [transform:translateZ(40px)]">
                <img
                  src={principalImg}
                  alt="Mrs. R. Jyothi, Principal"
                  className="h-[340px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                {/* Name plate floating in 3D */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 p-3 text-center shadow-lg backdrop-blur [transform:translateZ(60px)]">
                  <h2 className="text-lg font-bold text-navy">Mrs. R. Jyothi</h2>
                  <p className="text-xs font-medium text-orange">
                    Principal, Rajashri College of Nursing
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <span className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange text-orange-foreground shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] [transform:translateZ(80px)]">
                <User className="h-6 w-6" />
              </span>
            </div>

            {/* RIGHT: Message */}
            <div className="flex flex-col justify-center">
              <Quote className="h-10 w-10 text-teal/40 [transform:translateZ(20px)]" />
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  A warm welcome to the official website of Rajashri College of Nursing,
                  Mehkar! Our institution stands for academic excellence, discipline, and a
                  deep commitment to healthcare service.
                </p>
                <p>
                  Nursing is a unique blend of science, art, and compassion. Through our
                  dedicated faculty, advanced laboratory facilities, and comprehensive
                  clinical training, we aim to nurture competent healthcare professionals
                  who can confidently meet the dynamic challenges of the medical field.
                </p>
                <p>
                  Our college is affiliated to Maharashtra University of Health Sciences
                  (MUHS), Nashik, and follows a comprehensive curriculum that combines
                  theoretical knowledge with extensive clinical training. We have
                  state-of-the-art laboratories, a well-stocked library, and tie-ups with
                  reputed hospitals for clinical postings.
                </p>
                <p>
                  To our dear students: this college is the platform where your
                  professional dreams take shape. With hard work, discipline, and
                  dedication, you will surely achieve greatness in this noble career. I
                  invite you all to explore our website to learn more about our academic
                  programs and vibrant campus life.
                </p>
                <p className="font-semibold text-navy">
                  Together, let us build a future rooted in care, competence, and character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}