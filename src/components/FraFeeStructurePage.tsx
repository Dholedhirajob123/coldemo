import { FileCheck, Phone } from "lucide-react";
import { PageTitleHeader } from "./PageTitleHeader";

const DETAILS = [
  { label: "Course", value: "B.Sc. Nursing (4 Years)" },
  { label: "Academic Year", value: "2026–27" },
  { label: "Fee Authority", value: "Fees Regulating Authority (FRA), Maharashtra" },
  { label: "Approved Tuition Fee", value: "Awaiting official FRA document" },
  { label: "Approved Development Fee", value: "Awaiting official FRA document" },
  { label: "Total Approved Fee", value: "Awaiting official FRA document" },
];

export function FraFeeStructurePage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="FRA Fee Structure"
        subtitle="Rajashri College of Nursing · B.Sc. Nursing"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-navy">FRA-approved fees · 2026–27</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-4 py-3">Particulars</th>
                <th className="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {DETAILS.map((item) => (
                <tr key={item.label} className="border-t border-border">
                  <th scope="row" className="w-2/5 px-4 py-4 font-medium">{item.label}</th>
                  <td className="px-4 py-4 text-muted-foreground">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          The official FRA approval document has not yet been provided. Confirm the approved amount with the college office.
        </p>
        <button
          onClick={() => onNavigate("/contact")}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 font-semibold text-navy-foreground hover:opacity-90"
        >
          <Phone className="h-4 w-4" /> Contact College Office
        </button>
      </section>
    </div>
  );
}