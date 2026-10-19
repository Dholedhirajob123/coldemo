import { CollegeInformation } from "./CollegeInformation";
import { PageTitleHeader } from "./PageTitleHeader";

export function AboutPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="About Rajashri College of Nursing"
        subtitle="Mehkar, Dist. Buldhana, Maharashtra – 443301"
        onNavigate={onNavigate}
      />
      <CollegeInformation onNavigate={onNavigate} />
    </div>
  );
}