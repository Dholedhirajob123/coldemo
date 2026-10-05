import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Download, ClipboardList } from "lucide-react";
import { useState } from "react";
import { PageBackButton } from "@/components/PageBackButton";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "B.Sc. Nursing admission process, required documents and admission enquiry form. CET Code 9501, MUHS Code 155193." },
      { property: "og:title", content: "Admission — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "B.Sc. Nursing admission process, documents and enquiry form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionPage,
});

const STEPS = [
  { n: 1, title: "Entrance / CET", desc: "Appear for the applicable entrance / CET process." },
  { n: 2, title: "CAP Round / Online Allotment", desc: "Participate in the Centralised Admission Process and secure allotment." },
  { n: 3, title: "Document Verification", desc: "Get your original documents verified at the college." },
  { n: 4, title: "Final Admission & Fee Payment", desc: "Confirm your seat with admission and fee payment." },
];

const DOCUMENTS = [
  "CET Admit Card & Result",
  "CAP Allotment Letter",
  "HSC / SSC Marksheet",
  "Caste Certificate (where applicable)",
  "Passport Size Photos",
  "Identity Proof",
  "Other required documents as per admission authority",
];

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Admission</h1>
        <p className="mt-2 text-navy-foreground/70">B.Sc. Nursing — Admissions Open</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <PageBackButton />
        {/* Process */}
        <h2 className="text-2xl font-bold text-navy">Admission Process</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange font-bold text-orange-foreground">
                {s.n}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="mt-10 rounded-xl border border-border bg-sky p-6">
          <h2 className="text-xl font-bold text-navy">Required Documents</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {DOCUMENTS.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-foreground">
                <ClipboardList className="h-4 w-4 shrink-0 text-teal" /> {d}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="tel:9881851514" className="flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-semibold text-navy-foreground hover:opacity-90">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href="https://wa.me/919881851514" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-teal px-6 py-3 font-semibold text-teal-foreground hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="#enquiry" className="flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-orange-foreground hover:opacity-90">
            Apply Now
          </a>
          <button className="flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground hover:bg-accent">
            <Download className="h-4 w-4" /> Download Admission Form
          </button>
        </div>

        {/* Enquiry form */}
        <div id="enquiry" className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-navy">Admission Enquiry</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fill in your details and our admission team will contact you.</p>
          {submitted ? (
            <div className="mt-6 rounded-lg bg-teal/15 p-4 text-center font-medium text-teal">
              Thank you! Your enquiry has been submitted. We will contact you soon.
            </div>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder="Student Name" className={inputCls} />
              <input required placeholder="Parent Name" className={inputCls} />
              <input required type="tel" placeholder="Mobile Number" className={inputCls} />
              <input type="email" placeholder="Email" className={inputCls} />
              <select className={inputCls} defaultValue="B.Sc. Nursing">
                <option>B.Sc. Nursing</option>
              </select>
              <input placeholder="12th Percentage" className={inputCls} />
              <input placeholder="City" className={inputCls} />
              <textarea placeholder="Message" rows={3} className={`${inputCls} sm:col-span-2`} />
              <button type="submit" className="rounded-md bg-orange px-6 py-2.5 font-semibold text-orange-foreground hover:opacity-90 sm:col-span-2">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
