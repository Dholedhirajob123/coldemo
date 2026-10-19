import { useState } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollMotion } from "./components/ScrollMotion";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PresidentMessage } from "./components/PresidentMessage";
import { SecretaryMessage } from "./components/SecretaryMessage";
import { PrincipalMessage } from "./components/PrincipalMessage";
import { VisionMissionPage } from "./components/VisionMissionPage";
import { CoursesPage } from "./components/CoursesPage";
import { AdmissionPage } from "./components/AdmissionPage";
import { TeachingFacultyPage } from "./components/TeachingFacultyPage";
import { NonTeachingStaffPage } from "./components/NonTeachingStaffPage";
import { GalleryPage } from "./components/GalleryPage";
import { AchievementsPage } from "./components/AchievementsPage";
import { DownloadsPage } from "./components/DownloadsPage";
import { NoticesPage } from "./components/NoticesPage";
import { FraFeeStructurePage } from "./components/FraFeeStructurePage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [page, setPage] = useState("/");

  const navigate = (p: string) => setPage(p);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollMotion currentPage={page} />
      <SiteHeader current={page} onNavigate={navigate} />

      <main className="flex-1">
        {page === "/" && <HomePage onNavigate={navigate} />}
        {page === "/about" && <AboutPage onNavigate={navigate} />}
        {page === "/president-message" && <PresidentMessage onNavigate={navigate} />}
        {page === "/secretary-message" && <SecretaryMessage onNavigate={navigate} />}
        {page === "/principal-message" && <PrincipalMessage onNavigate={navigate} />}
        {page === "/vision-mission" && <VisionMissionPage onNavigate={navigate} />}
        {page === "/courses" && <CoursesPage onNavigate={navigate} />}
        {page === "/admission" && <AdmissionPage onNavigate={navigate} />}
        
        {/* Faculty Routes */}
        {page === "/faculty/teaching" && <TeachingFacultyPage onNavigate={navigate} />}
        {page === "/faculty/non-teaching" && <NonTeachingStaffPage onNavigate={navigate} />}

        {/* Campus routes removed */}

        {page === "/gallery" && <GalleryPage onNavigate={navigate} />}
        {page === "/achievements" && <AchievementsPage onNavigate={navigate} />}
        {page === "/downloads" && <DownloadsPage onNavigate={navigate} />}
        {page === "/notices" && <NoticesPage onNavigate={navigate} />}
        {page === "/fra-fee-structure" && <FraFeeStructurePage onNavigate={navigate} />}
        {page === "/contact" && <ContactPage onNavigate={navigate} />}
        
      </main>

      <SiteFooter onNavigate={navigate} />
    </div>
  );
}