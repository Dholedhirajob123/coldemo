import { createFileRoute } from "@tanstack/react-router";
import { FraFeeStructure } from "@/components/fra-fee-structure/FraFeeStructure";

export const Route = createFileRoute("/fra-fee-structure/")({
  head: () => ({ meta: [
    { title: "FRA Fee Structure — Rajashri College of Nursing, Mehkar" },
    { name: "description", content: "FRA fee information for B.Sc. Nursing at Rajashri College of Nursing, Mehkar, for academic year 2026–27." },
    { property: "og:title", content: "FRA Fee Structure — Rajashri College of Nursing, Mehkar" },
    { property: "og:description", content: "Fees Regulating Authority information and college office contact for B.Sc. Nursing fees." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FraFeeStructure,
});