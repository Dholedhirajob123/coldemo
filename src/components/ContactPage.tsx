import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageTitleHeader } from "./PageTitleHeader";

const PHONES = ["9881851514", "7720826503"];

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export function ContactPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageTitleHeader
        title="Contact Us"
        subtitle="We're here to help with admissions and enquiries"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-orange" />
              <h3 className="mt-2 font-semibold">Address</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Rajashri College of Nursing,<br />
                Mehkar, Dist. Buldhana, Maharashtra – 443301
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Phone className="h-6 w-6 text-teal" />
              <h3 className="mt-2 font-semibold">Phone</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {PHONES.map((p) => (
                  <a key={p} href={`tel:${p}`} className="rounded-full bg-sky px-3 py-1.5 text-sm font-medium text-royal hover:opacity-80">
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Mail className="h-6 w-6 text-royal" />
              <h3 className="mt-2 font-semibold">Email</h3>
              <a href="mailto:rajshreensgmehkar@gmail.com" className="mt-1 block text-sm text-royal hover:underline">
                rajshreensgmehkar@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:9881851514" className="flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground hover:opacity-90">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="https://wa.me/919881851514" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-teal-foreground hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Mehkar,+Buldhana,+Maharashtra+443301&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy">Send Us a Message</h2>
            {submitted ? (
              <div className="mt-6 rounded-lg bg-teal/15 p-4 text-center font-medium text-teal">
                Thank you! We will get back to you soon.
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input required placeholder="Name" className={inputCls} />
                <input required type="tel" placeholder="Mobile" className={inputCls} />
                <input type="email" placeholder="Email" className={inputCls} />
                <input placeholder="Subject" className={inputCls} />
                <textarea required placeholder="Message" rows={5} className={inputCls} />
                <button type="submit" className="rounded-md bg-orange px-6 py-2.5 font-semibold text-orange-foreground hover:opacity-90">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}