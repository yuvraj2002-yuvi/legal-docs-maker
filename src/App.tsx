import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CourtPage from "./pages/CourtPage";
import DocumentPage from "./pages/DocumentPage";
import { Disclaimer, TermsAndConditions, PrivacyPolicy, RefundPolicy } from "./pages/LegalPages";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
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
