import { Link } from "@tanstack/react-router";
import { FileCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBackButton } from "@/components/PageBackButton";

const DETAILS = [
  { label: "Course", value: "B.Sc. Nursing (4 Years)" },
  { label: "Academic Year", value: "2026–27" },
  { label: "Fee Authority", value: "Fees Regulating Authority (FRA), Maharashtra" },
  { label: "Approved Tuition Fee", value: "Awaiting official FRA document" },
  { label: "Approved Development Fee", value: "Awaiting official FRA document" },
  { label: "Total Approved Fee", value: "Awaiting official FRA document" },
];

export function FraFeeStructure() {
  return (
    <div>
      <section className="bg-navy px-4 py-12 text-center text-navy-foreground sm:py-16">
        <FileCheck className="mx-auto mb-4 h-9 w-9 text-teal" />
        <h1 className="text-3xl font-bold sm:text-4xl">FRA Fee Structure</h1>
        <p className="mt-3 text-navy-foreground/80">Rajashri College of Nursing, Mehkar · B.Sc. Nursing</p>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12">
        <PageBackButton />
        <h2 className="text-2xl font-bold text-navy">FRA-approved fees · 2026–27</h2>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">B.Sc. Nursing FRA fee details for 2026–27</caption>
            <thead className="bg-navy text-navy-foreground"><tr><th className="px-4 py-3">Particulars</th><th className="px-4 py-3">Details</th></tr></thead>
            <tbody>
              {DETAILS.map((item) => <tr key={item.label} className="border-t border-border"><th scope="row" className="w-2/5 px-4 py-4 font-medium text-foreground">{item.label}</th><td className="px-4 py-4 text-muted-foreground">{item.value}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="mt-5 leading-relaxed text-muted-foreground">The official FRA approval document has not yet been provided. Confirm the approved amount with the college office before making a payment.</p>
        <p className="mt-3 text-sm text-muted-foreground">Hostel, mess and other applicable charges should be confirmed separately with the college office.</p>
        <Button asChild className="mt-6"><Link to="/contact"><Phone className="h-4 w-4" /> Contact College Office</Link></Button>
      </section>
    </div>
  );
}