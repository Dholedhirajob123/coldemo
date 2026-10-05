import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/fee-structure")({
  head: () => ({
    meta: [
      { title: "Fee Structure — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "B.Sc. Nursing fee structure — tuition, hostel and other charges for the current academic year." },
      { property: "og:title", content: "Fee Structure — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "B.Sc. Nursing fee details and downloadable fee structure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeeStructurePage,
});

const ROWS = [
  { label: "Tuition Fee", value: "As per Fee Regulating Authority" },
  { label: "Other Fees", value: "As applicable" },
  { label: "Hostel Fee", value: "As applicable" },
  { label: "Other Charges", value: "As applicable" },
];

function FeeStructurePage() {
  return (
    <div>
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Fee Structure</h1>
        <p className="mt-2 text-navy-foreground/70">B.Sc. Nursing — Academic Year 2026–27</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-left text-navy-foreground">
                <th className="px-5 py-3 font-semibold">Particulars</th>
                <th className="px-5 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-5 py-3 font-medium text-foreground">Course</td>
                <td className="px-5 py-3 text-muted-foreground">B.Sc. Nursing (4 Years)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-5 py-3 font-medium text-foreground">Academic Year</td>
                <td className="px-5 py-3 text-muted-foreground">2026–27</td>
              </tr>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-medium text-foreground">{r.label}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Fee details are updated by the college administration. For exact figures, please contact the
          college office or download the official fee structure.
        </p>
        <button className="mt-6 flex items-center gap-2 rounded-md bg-orange px-6 py-3 font-semibold text-orange-foreground hover:opacity-90">
          <Download className="h-4 w-4" /> Download Fee Structure
        </button>
      </section>
    </div>
  );
}
