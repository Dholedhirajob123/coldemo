// import {
//   Building2, Microscope, Library, Monitor, FlaskConical, Hospital, MapPin,
//   Users, Stethoscope, Briefcase, Ambulance, Home, Wifi, Utensils, Bus,
//   ShieldCheck, Droplets
// } from "lucide-react";
// import { PageBackButton } from "./PageBackButton";

// const CAMPUS_INFRA = [
//   { icon: Building2, title: "Main Academic Block", desc: "Spacious, well-ventilated classrooms with smart boards." },
//   { icon: Microscope, title: "Nursing Skill Labs", desc: "Fundamentals, anatomy, and simulation labs." },
//   { icon: Library, title: "Central Library", desc: "5,000+ nursing books, journals, and e-resources." },
//   { icon: Monitor, title: "Digital Classrooms", desc: "Projector-enabled classrooms with AV aids." },
//   { icon: FlaskConical, title: "Science Laboratories", desc: "Anatomy, physiology, and microbiology labs." },
//   { icon: Hospital, title: "Clinical Training Wing", desc: "Attached hospital for hands-on patient care." },
//   { icon: MapPin, title: "Rural & Urban Exposure", desc: "Community health postings in various settings." },
// ];

// const HIGHLIGHTS = [
//   { icon: Users, title: "Experienced Professors", desc: "Qualified and dedicated faculty guiding every student." },
//   { icon: Stethoscope, title: "Practical Clinical Training", desc: "Supervised clinical postings throughout the course." },
//   { icon: Briefcase, title: "Internship & Placement", desc: "Career support and placement assistance." },
//   { icon: Ambulance, title: "Emergency Training", desc: "Training in emergency response and critical care." },
// ];

// const SUPPORT = [
//   { icon: Home, title: "Hostel Facility", desc: "Safe and comfortable accommodation for girls." },
//   { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed internet across the campus." },
//   { icon: Utensils, title: "Canteen / Mess", desc: "Hygienic and affordable meals." },
//   { icon: Bus, title: "Transport", desc: "Bus facility for nearby towns and villages." },
//   { icon: ShieldCheck, title: "Security & CCTV", desc: "24×7 security with CCTV surveillance." },
//   { icon: Droplets, title: "RO Drinking Water", desc: "Clean and safe drinking water." },
// ];

// export function CampusInfrastructurePage({ onNavigate }: { onNavigate: (p: string) => void }) {
//   return (
//     <div>
//       <section className="bg-navy py-16 text-center text-navy-foreground">
//         <h1 className="text-4xl font-bold">Campus &amp; Infrastructure</h1>
//         <p className="mt-2 text-navy-foreground/70">
//           Everything a nursing student needs to excel — from labs to hostels.
//         </p>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 py-14">
//         <PageBackButton onNavigate={onNavigate} />

//         {/* Campus Infrastructure */}
//         <div>
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-navy">Campus Infrastructure</h2>
//             <p className="mt-1 text-muted-foreground">Purpose-built academic and clinical spaces for modern nursing education.</p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {CAMPUS_INFRA.map((f) => (
//               <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
//                   <f.icon className="h-6 w-6" />
//                 </span>
//                 <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="my-14 border-t border-border" />

//         {/* Facility Highlights */}
//         <div>
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-navy">Facility Highlights</h2>
//             <p className="mt-1 text-muted-foreground">Key features that make Rajashri a preferred choice.</p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {HIGHLIGHTS.map((f) => (
//               <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange/15 text-orange">
//                   <f.icon className="h-6 w-6" />
//                 </span>
//                 <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="my-14 border-t border-border" />

//         {/* Student Support */}
//         <div>
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-navy">Student Support Facilities</h2>
//             <p className="mt-1 text-muted-foreground">Comfort and convenience for everyday campus life.</p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {SUPPORT.map((f) => (
//               <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/15 text-teal">
//                   <f.icon className="h-6 w-6" />
//                 </span>
//                 <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }