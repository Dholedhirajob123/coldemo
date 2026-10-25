import { useEffect, useState } from "react";

// ── Site components ──
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

// ── Admin components ──
import { AdminLogin } from "./admin/AdminLogin";
import { AdminLayout } from "./admin/AdminLayout";
import { AdminDashboard } from "./admin/AdminDashboard";
import { AdminGallery } from "./admin/AdminGallery";
import { AdminFaculty } from "./admin/AdminFaculty";
import { AdminNotices } from "./admin/AdminNotices";
import { AdminDownloads } from "./admin/AdminDownloads"; // <-- NEW

export default function App() {
  // Read URL on first load
  const [page, setPage] = useState(() => window.location.pathname || "/");

  const [isAdmin, setIsAdmin] = useState(
    () => sessionStorage.getItem("rcn_admin") === "1"
  );

  // Keep URL in sync whenever page changes
  useEffect(() => {
    if (window.location.pathname !== page) {
      window.history.pushState({}, "", page);
    }
    window.scrollTo(0, 0);
  }, [page]);

  // Handle browser back / forward
  useEffect(() => {
    const onPop = () => setPage(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (p: string) => setPage(p);

  const login = () => {
    sessionStorage.setItem("rcn_admin", "1");
    setIsAdmin(true);
    navigate("/admin");
  };

  const logout = () => {
    sessionStorage.removeItem("rcn_admin");
    setIsAdmin(false);
    navigate("/");
  };

  // ── /admin routes ──
  if (page.startsWith("/admin")) {
    if (!isAdmin) return <AdminLogin onLogin={login} />;

    return (
      <AdminLayout current={page} onNavigate={navigate} onLogout={logout}>
        {page === "/admin" && <AdminDashboard onNavigate={navigate} />}
        {page === "/admin/gallery" && <AdminGallery />}
        {page === "/admin/faculty" && <AdminFaculty />}
        {page === "/admin/notices" && <AdminNotices />}
        {page === "/admin/downloads" && <AdminDownloads />} {/* <-- NEW */}
      </AdminLayout>
    );
  }

  // ── Public routes ──
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
        {page === "/faculty/teaching" && <TeachingFacultyPage onNavigate={navigate} />}
        {page === "/faculty/non-teaching" && <NonTeachingStaffPage onNavigate={navigate} />}
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