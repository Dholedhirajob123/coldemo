import { createFileRoute } from "@tanstack/react-router";
import { CollegeInformation } from "@/components/about/CollegeInformation";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Rajashri College of Nursing, Mehkar" },
      { name: "description", content: "Learn about Rajashri College of Nursing, Mehkar — our vision, mission, principal's message and why students choose us." },
      { property: "og:title", content: "About Us — Rajashri College of Nursing, Mehkar" },
      { property: "og:description", content: "Our vision, mission and commitment to excellence in nursing education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-navy px-4 py-12 text-center text-navy-foreground sm:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">About Rajashri College of Nursing</h1>
        <p className="mt-3 text-navy-foreground/80">Mehkar, Dist. Buldhana, Maharashtra – 443301</p>
      </section>
      <CollegeInformation />
    </div>
  );
}
