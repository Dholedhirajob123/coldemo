import { useState } from "react";
import { PageTitleHeader } from "./PageTitleHeader";
import { FacultyTable, loadFaculty, type FacultyRow } from "./FacultyTable";

export function TeachingFacultyPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [rows] = useState<FacultyRow[]>(() => loadFaculty("teaching"));

  return (
    <div>
      <PageTitleHeader
        title="Teaching Faculty"
        subtitle="Our experienced educators"
        onNavigate={onNavigate}
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <FacultyTable rows={rows} />
      </section>
    </div>
  );
}