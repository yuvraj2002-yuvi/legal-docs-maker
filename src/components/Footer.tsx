import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const year = 2026;
  const { language, t } = useLanguage();
  const hindi = language === "hi";
  return (
    <footer className="bg-navy-950 border-t border-blue-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="white" opacity="0.9"/>
                  <path d="M14 2v6h6" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M8 13h8M8 17h5" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl leading-none">Legal Docs Maker</span>
              </div>
            </div>
            <p className="text-blue-300/70 text-sm leading-relaxed max-w-xs">
              {hindi ? "अधिवक्ताओं, विधि छात्रों, क्लर्कों और पेशेवरों के लिए पेशेवर कानूनी दस्तावेज़ प्रारूपण और PDF तैयारी प्लेटफ़ॉर्म।" : "Professional legal document drafting and PDF preparation platform for advocates, law students, clerks, and professionals."}
            </p>
            <p className="mt-4 text-xs text-blue-400/50 font-devanagari">
              {hindi ? "हिंदी और अंग्रेज़ी में कानूनी दस्तावेज़" : "Legal documents in Hindi and English"}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">{hindi ? "प्लेटफ़ॉर्म" : "Platform"}</h4>
            <ul className="space-y-2.5">
              {[t("home"), t("documents"), t("features"), t("pricing"), t("downloadApp")].map(l => (
                <li key={l}><a href="#" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">{t("documents")}</h4>
            <ul className="space-y-2.5">
              {(hindi ? ["उच्च न्यायालय", "जिला न्यायालय", "पारिवारिक न्यायालय", "किशोर न्यायालय", "राजस्व न्यायालय", "फोरम न्यायालय"] : ["High Court", "District Court", "Family Court", "Juvenile Court", "Revenue Court", "Forum Court"]).map(l => (
                <li key={l}><span className="text-blue-300/70 text-sm">{l}</span></li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">{hindi ? "कंपनी" : "Company"}</h4>
            <ul className="space-y-2.5 mb-6">
              <li><Link to="/#about" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{t("about")}</Link></li>
              <li><Link to="/#contact" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{t("contact")}</Link></li>
            </ul>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">{hindi ? "कानूनी" : "Legal"}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{hindi ? "गोपनीयता नीति" : "Privacy Policy"}</Link></li>
              <li><Link to="/terms" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{hindi ? "नियम और शर्तें" : "Terms & Conditions"}</Link></li>
              <li><Link to="/disclaimer" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{hindi ? "अस्वीकरण" : "Disclaimer"}</Link></li>
              <li><Link to="/refund" className="text-blue-300/70 hover:text-blue-200 text-sm transition-colors">{hindi ? "रिफंड नीति" : "Refund Policy"}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-400/50 text-sm">
            © {year} Legal Docs Maker. All Rights Reserved.
          </p>
          <p className="text-blue-500/40 text-xs">
            {hindi ? "एक उत्पादकता उपकरण। पेशेवर कानूनी सलाह का विकल्प नहीं।" : "A productivity tool. Not a substitute for professional legal advice."}
          </p>
        </div>
      </div>
    </footer>
  );
}
