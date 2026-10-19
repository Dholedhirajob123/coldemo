import { User, Quote } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";
import presidentImg from "@/assets/president.jpg";

export function PresidentMessage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="overflow-hidden">
      <PageTitleHeader title="President's Message" subtitle="Shri Pratapraoji Jadhav" onNavigate={onNavigate} />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* 3D perspective wrapper */}
        <div className="mt-6 [perspective:1600px]">
          <div className="group grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(10px)] sm:p-8 lg:grid-cols-[300px_1fr] lg:gap-10">
            {/* LEFT: Image card (3D) */}
            <div className="relative [transform-style:preserve-3d]">
              {/* Glow behind */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-navy/50 via-teal/30 to-orange/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.45)] [transform:translateZ(40px)]">
  <img
    src={presidentImg}
    alt="Shri Pratapraoji Jadhav, President"
    className="h-[340px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
  />
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

  {/* Name plate floating in 3D */}
  <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 p-3 text-center shadow-lg backdrop-blur [transform:translateZ(60px)]">
    <h2 className="text-lg font-bold text-navy">Shri Pratapraoji Jadhav</h2>
    <p className="text-xs font-medium text-orange">
      President, D.D.R. Shikshan Va Bahu-Uddeshiya Sanstha
    </p>
    <p className="mt-0.5 text-[11px] text-muted-foreground">
      Hon'ble Minister, Govt. of India
    </p>
  </div>
</div>

              {/* Floating badge */}
              <span className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-navy-foreground shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] ring-2 ring-white [transform:translateZ(80px)]">
                <User className="h-6 w-6" />
              </span>
            </div>

            {/* RIGHT: Message */}
            <div className="flex flex-col justify-center">
              <Quote className="h-10 w-10 text-teal/40 [transform:translateZ(20px)]" />
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Healthcare is one of the most noble forms of service to humanity. In
                  today's rapidly evolving world, nursing professionals play a vital and
                  indispensable role in shaping strong healthcare systems. Under the banner
                  of Dharmaveer Diliprao Rahate Shikshan va Bahu-uddeshiya Sanstha, Mehkar,
                  our goal at Rajashri College of Nursing, Mehkar is to empower students
                  with high-quality, skill-based, and compassionate nursing education.
                </p>
                <p>
                  We are committed to providing state-of-the-art infrastructure,
                  well-equipped laboratories, and guidance from highly qualified faculty. We
                  ensure that every student who graduates from our institution is not only
                  academically proficient but also embodies ethical values, clinical
                  competence, and true empathy toward patient care.
                </p>
                <p>
                  I extend my heartfelt gratitude to the management, faculty, and staff for
                  their unwavering dedication. I wish all our students a fulfilling and
                  successful academic journey toward a bright future in healthcare.
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