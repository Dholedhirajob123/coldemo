import { PageTitleHeader } from "./PageTitleHeader";

const TEACHING_FACULTY = [
  { 
    sr: 1, 
    name: "Mrs. R Jyothi", 
    designation: "Principal", 
    qualification: "M.Sc. Nursing (OBGY)", 
    qualAsPerMuhs: "Yes", 
    experience: "24 yrs 02 Month 3 Days", 
    expAsPerMuhs: "Yes" 
  },
  { 
    sr: 2, 
    name: "Mrs. Kante Sirisha", 
    designation: "Vice-Principal", 
    qualification: "M.Sc. Nursing (CHN)", 
    qualAsPerMuhs: "Yes", 
    experience: "13 yr 05 Month 04 Days", 
    expAsPerMuhs: "Yes" 
  },
  { 
    sr: 3, 
    name: "Mrs. Lakshmi Sucharitha", 
    designation: "Assistant Professor", 
    qualification: "M.Sc. Nursing (MHN)", 
    qualAsPerMuhs: "Yes", 
    experience: "10 yrs 10 Month 12 days", 
    expAsPerMuhs: "Yes" 
  },
  { 
    sr: 4, 
    name: "Mr. Rahul Shamuwel Sathe", 
    designation: "Nursing Tutor", 
    qualification: "B.Sc. Nursing", 
    qualAsPerMuhs: "Yes", 
    experience: "4 Yrs", 
    expAsPerMuhs: "Yes" 
  },
  { 
    sr: 5, 
    name: "Mr. Vishal Shamuwel Sathe", 
    designation: "Nursing Tutor", 
    qualification: "B.Sc. Nursing", 
    qualAsPerMuhs: "Yes", 
    experience: "4 Yrs", 
    expAsPerMuhs: "Yes" 
  },
  { 
    sr: 6, 
    name: "Mr. Vivek Gajanan Ingle", 
    designation: "Nursing Tutor", 
    qualification: "B.Sc. Nursing", 
    qualAsPerMuhs: "Yes", 
    experience: "1 Yrs", 
    expAsPerMuhs: "Yes" 
  },
];

export function TeachingFacultyPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="Teaching Faculty"
        subtitle="Staff Information & Qualification Details (MUHS)"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">

      

        {/* Table Card Container */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th className="px-4 py-4 font-semibold">Sr No</th>
                  <th className="px-4 py-4 font-semibold">Name Of Staff</th>
                  <th className="px-4 py-4 font-semibold">Designation</th>
                  <th className="px-4 py-4 font-semibold">Educational Qualification</th>
                  <th className="px-4 py-4 font-semibold text-center">Whether Qualification As per MUHS</th>
                  <th className="px-4 py-4 font-semibold">Experience</th>
                  <th className="px-4 py-4 font-semibold text-center">Whether Experience As per MUHS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TEACHING_FACULTY.map((f) => (
                  <tr key={f.sr} className="hover:bg-sky/30 transition-colors">
                    <td className="px-4 py-4 text-muted-foreground">{f.sr}</td>
                    <td className="px-4 py-4 font-semibold text-foreground">
                      {f.name}
                    </td>
                    <td className="px-4 py-4 font-medium text-orange">
                      {f.designation}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {f.qualification}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal">
                        {f.qualAsPerMuhs}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {f.experience}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal">
                        {f.expAsPerMuhs}
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