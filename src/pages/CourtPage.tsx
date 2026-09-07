import { useParams, useNavigate } from "react-router-dom";
import { courts, hindiCourtNames } from "../data/documents";
import { useLanguage } from "../contexts/LanguageContext";

export default function CourtPage() {
  const { courtId } = useParams<{ courtId: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const court = courts.find(c => c.id === courtId);

  if (!court) return (
    <div className="min-h-screen bg-[#020818] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">⚖️</div>
        <h2 className="font-display text-2xl text-white mb-2">{language === "hi" ? "न्यायालय नहीं मिला" : "Court not found"}</h2>
        <button onClick={() => navigate("/")} className="text-blue-400 hover:text-blue-200 transition-colors">← {t("backToHome")}</button>
      </div>
    </div>
  );

  const courtName = language === "hi" ? hindiCourtNames[court.name] || court.name : court.name;

  return (
    <div className="min-h-screen bg-[#020818] flex items-center justify-center px-4 pt-20 pb-12">
      <h1 className={`font-display text-4xl sm:text-5xl font-bold text-white text-center ${language === "hi" ? "font-devanagari" : ""}`}>
        {courtName}
      </h1>
    </div>
  );
}
