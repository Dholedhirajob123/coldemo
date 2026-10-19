import { PageTitleHeader } from "./PageTitleHeader";

const NON_TEACHING_STAFF = [
  { sr: 1, name: "Mr. Rahul Pakhale", designation: "Administrative Officer" },
  { sr: 2, name: "Mr. Sumit Gawai", designation: "Office Superintendent Cum PA to Principal" },
  { sr: 3, name: "Mr. Manoj Pakhale", designation: "Sr. Clerk" },
  { sr: 4, name: "Mr. Rahul Chopde", designation: "Sr. Clerk" },
  { sr: 5, name: "Mr. Purushottam Dolas", designation: "Jr. Clerk" },
  { sr: 6, name: "Mr. Babasaheb Chole", designation: "Jr. Clerk" },
  { sr: 7, name: "Mr. Suhas Naykal", designation: "Accountant/Cashier" },
  { sr: 8, name: "Mr. Dipak Shelke", designation: "Store Keeper" },
  { sr: 9, name: "Mr. Pravin Gawai", designation: "Assi. Store Keeper" },
  { sr: 10, name: "Mrs. Kiran Bhalerao", designation: "Laboratory Assistant" },
  { sr: 11, name: "Mr. Rushikesh Gaikwad", designation: "Laboratory Assistant" },
  { sr: 12, name: "Mr. Shubham Dhote", designation: "Laboratory Assistant" },
  { sr: 13, name: "Mr. Varad Thakur", designation: "Librarian" },
  { sr: 14, name: "Mr. Pramod Muradkar", designation: "Assi. Librarian" },
  { sr: 15, name: "Mr. Gajanan Dutonde", designation: "Att. Librarian" },
  { sr: 16, name: "Mr. Shravan Kakde", designation: "Driver" },
  { sr: 17, name: "Smt. Asha Wathore", designation: "Peon" },
  { sr: 18, name: "Smt. Asha Mairal", designation: "Peon" },
  { sr: 19, name: "Smt. Kavita Wasavkar", designation: "Peon" },
  { sr: 20, name: "Smt. Antkala Kokate", designation: "Peon" },
  { sr: 21, name: "Mr. Shivaji Wayal", designation: "Guard" },
  { sr: 22, name: "Mr. Rushikesh Metangale", designation: "Guard" },
];

export function NonTeachingStaffPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <PageTitleHeader
        title="Non-Teaching Staff"
        subtitle="Administrative, laboratory, library, and support team"
        onNavigate={onNavigate}
      />

      <section className="mx-auto max-w-5xl px-4 py-14">

      

        {/* Table Card Container */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th className="px-6 py-4 font-semibold w-20">Sr No</th>
                  <th className="px-6 py-4 font-semibold">Name of the Staff</th>
                  <th className="px-6 py-4 font-semibold">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {NON_TEACHING_STAFF.map((f) => (
                  <tr key={f.sr} className="hover:bg-sky/30 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">{f.sr}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {f.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {f.designation}
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