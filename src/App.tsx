import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CourtPage from "./pages/CourtPage";
import DocumentPage from "./pages/DocumentPage";
import { Disclaimer, TermsAndConditions, PrivacyPolicy, RefundPolicy } from "./pages/LegalPages";
import { LanguageProvider } from "./contexts/LanguageContext";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(decodeURIComponent(hash.slice(1)));
    element?.scrollIntoView({ behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-full flex flex-col bg-[#020818]">
          <Navbar />
          <main className="flex-1">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/court/:courtId" element={<CourtPage />} />
            <Route path="/document/:docId" element={<DocumentPage />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
