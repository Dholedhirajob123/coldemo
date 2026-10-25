import { useState } from "react";
import { PageTitleHeader } from "./PageTitleHeader";
import { FacultyTable, loadFaculty, type FacultyRow } from "./FacultyTable";

export function NonTeachingStaffPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [rows] = useState<FacultyRow[]>(() => loadFaculty("non-teaching"));

  return (
    <div>
      <PageTitleHeader
        title="Non-Teaching Staff"
        subtitle="Supporting our campus"
        onNavigate={onNavigate}
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <FacultyTable rows={rows} />
      </section>
    </div>
  );
}