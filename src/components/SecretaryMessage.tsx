import { User, Quote } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";
import secretaryImg from "@/assets/secretary.jpg";

export function SecretaryMessage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="overflow-hidden">
      <PageTitleHeader title="Secretary's Message" subtitle="Shri Rushikesh P. Jadhav" onNavigate={onNavigate} />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* 3D perspective wrapper */}
        <div className="mt-6 [perspective:1600px]">
          <div className="group grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out [transform-style:preserve-3d] hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(10px)] sm:p-8 lg:grid-cols-[300px_1fr] lg:gap-10">
            {/* LEFT: Image card (3D) */}
            <div className="relative [transform-style:preserve-3d]">
              {/* Glow behind */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal/40 via-orange/30 to-navy/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.45)] [transform:translateZ(40px)]">
                <img
                  src={secretaryImg}
                  alt="Shri Rushikesh P. Jadhav, Secretary"
                  className="h-[340px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                {/* Name plate floating in 3D */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 p-3 text-center shadow-lg backdrop-blur [transform:translateZ(60px)]">
                  <h2 className="text-lg font-bold text-navy">Shri Rushikesh P. Jadhav</h2>
                  <p className="text-xs font-medium text-orange">
                    Secretary, D.D.R. Shikshan Va Bahu-Uddeshiya Sanstha
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <span className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] [transform:translateZ(80px)]">
                <User className="h-6 w-6" />
              </span>
            </div>

            {/* RIGHT: Message */}
            <div className="flex flex-col justify-center">
              <Quote className="h-10 w-10 text-teal/40 [transform:translateZ(20px)]" />
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Service to humanity is the core foundation of the nursing profession. At
                  Rajashri College of Nursing, Mehkar, we strive to go beyond traditional
                  classroom teaching by instilling technical expertise, hands-on clinical
                  skills, and genuine empathy in our students.
                </p>
                <p>
                  Keeping pace with advancing medical technologies and global healthcare
                  needs, our institution focuses on holistic development. Along with
                  rigorous academic training, we encourage co-curricular activities,
                  sports, and community health initiatives to build confident healthcare
                  leaders of tomorrow.
                </p>
                <p>
                  Under the visionary guidance of our Hon'ble President, Shri Pratapraoji
                  Jadhav, our management is fully committed to supporting our students at
                  every step of the career. I wish all our aspiring nurses great success
                  as they prepare to serve society.
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