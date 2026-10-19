import { PageBackButton } from "./PageBackButton";

const FACULTY = [
  { name: "Prof. S. Deshmukh", designation: "Principal", qualification: "M.Sc. Nursing", department: "Administration", experience: "20+ years" },
  { name: "Mrs. A. Kulkarni", designation: "Vice Principal", qualification: "M.Sc. Nursing (Med-Surg)", department: "Medical Surgical Nursing", experience: "15 years" },
  { name: "Ms. R. Patil", designation: "Associate Professor", qualification: "M.Sc. Nursing (OBG)", department: "Obstetrics & Gynaecology", experience: "12 years" },
  { name: "Mr. V. Jadhav", designation: "Assistant Professor", qualification: "M.Sc. Nursing (CHN)", department: "Community Health Nursing", experience: "10 years" },
  { name: "Ms. P. More", designation: "Nursing Tutor", qualification: "B.Sc. Nursing", department: "Child Health Nursing", experience: "7 years" },
  { name: "Ms. K. Shinde", designation: "Nursing Tutor", qualification: "B.Sc. Nursing", department: "Mental Health Nursing", experience: "6 years" },
  { name: "Mr. S. Pawar", designation: "Clinical Instructor", qualification: "B.Sc. Nursing", department: "Clinical Training", experience: "8 years" },
  { name: "Mrs. N. Bhosale", designation: "Nursing Tutor", qualification: "GNM, B.Sc. Nursing", department: "Fundamentals of Nursing", experience: "9 years" },
];

export function FacultyPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 text-center text-navy-foreground">
        <h1 className="text-4xl font-bold">Our Faculty</h1>
        <p className="mt-2 text-navy-foreground/70">Experienced educators dedicated to student success</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <PageBackButton onNavigate={onNavigate} />
        
        {/* Table Card Container */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Name</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Designation</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Department</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Qualification</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {FACULTY.map((f) => (
                  <tr key={f.name} className="hover:bg-sky/30 transition-colors">
                    {/* Name & Avatar */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-royal">
                          {f.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </span>
                        <span className="font-semibold text-foreground">{f.name}</span>
                      </div>
                    </td>
                    {/* Designation */}
                    <td className="px-6 py-4 font-medium text-orange">
                      {f.designation}
                    </td>
                    {/* Department */}
                    <td className="px-6 py-4 text-muted-foreground">
                      {f.department}
                    </td>
                    {/* Qualification */}
                    <td className="px-6 py-4 text-muted-foreground">
                      {f.qualification}
                    </td>
                    {/* Experience */}
                    <td className="px-6 py-4">
                      <span className="inline-block whitespace-nowrap rounded-full bg-teal/15 px-3 py-1 text-xs font-medium text-teal">
                        {f.experience}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}