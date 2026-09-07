import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { courts, searchDocuments, type Document } from "../data/documents";
import { useCounter } from "../hooks/useScrollReveal";
import { useLanguage } from "../contexts/LanguageContext";
import { hindiCategoryNames, hindiCourtNames } from "../data/documents";
import logoImg from "../assets/logo.png";

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useCounter(to, suffix);
  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Section wrapper with reveal ─── */
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Hero ─── */
function Hero() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const badges = [
    { icon: "📄", text: `129+ ${t("templates")}` },
    { icon: "🌐", text: "हिंदी + English" },
    { icon: "📑", text: t("pdfReady") },
    { icon: "✏️", text: t("easyEditing") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-[#020818] grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-navy-900 to-[#020818]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-xs font-semibold text-blue-200 tracking-wider uppercase ${language === "hi" ? "font-devanagari" : ""}`}>{t("platformBadge")}</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6">
              {t("heroTitle")}
            </h1>

            <p className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-xl">
              {t("heroDescription")}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(37,99,235,0.5)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 blue-gradient text-white font-semibold px-7 py-4 rounded-2xl shadow-xl shadow-blue-900/40 text-base"
              >
                {t("createDocument")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-blue-200 border border-blue-600/40 font-semibold px-7 py-4 rounded-2xl hover:border-blue-400/60 transition-colors text-base"
              >
                {t("exploreTemplates")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              {badges.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 glass rounded-full px-4 py-2"
                >
                  <span className="text-base">{b.icon}</span>
                  <span className="text-xs font-semibold text-blue-200">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative animate-float">
              {/* Main card */}
              <div className="glass rounded-3xl p-6 w-72 sm:w-80 shadow-2xl shadow-black/40 border border-blue-500/20">
                {/* Header bar */}
                <div className="flex items-center gap-3 mb-5">
                  <img src={logoImg} alt="Legal Docs Maker Logo" className="w-9 h-9 rounded-xl object-contain shadow-md shrink-0" />
                  <div>
                    <div className="text-white font-semibold text-sm font-display">Legal Docs Maker</div>
                    <div className="text-blue-400 text-xs">{t("selectDocument")}</div>
                  </div>
                  <div className="ml-auto glass rounded-lg px-2 py-1">
                    <span className="text-xs text-blue-300 font-devanagari">हिंदी</span>
                  </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 bg-blue-950/50 rounded-xl px-3 py-2.5 mb-4 border border-blue-800/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span className="text-blue-400/60 text-xs">{t("searchDrafts")}</span>
                </div>

                {/* Court categories */}
                <div className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">{t("courts")}</div>
                {[
                  { icon: "⚖️", name: language === "hi" ? hindiCourtNames["High Court"] : "High Court", count: `46 ${t("templates")}`, color: "from-blue-600/20 to-blue-800/10" },
                  { icon: "🏛️", name: language === "hi" ? hindiCourtNames["District Court"] : "District Court", count: `129 ${t("templates")}`, color: "from-indigo-600/20 to-indigo-800/10" },
                  { icon: "👨‍👩‍👧", name: language === "hi" ? hindiCourtNames["Family Court"] : "Family Court", count: `22 ${t("templates")}`, color: "from-purple-600/20 to-purple-800/10" },
                ].map((c) => (
                  <div key={c.name} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 mb-2 bg-gradient-to-r ${c.color} border border-white/5`}>
                    <span className="text-lg">{c.icon}</span>
                    <div>
                      <div className="text-white text-xs font-semibold">{c.name}</div>
                      <div className="text-blue-400 text-[10px]">{c.count}</div>
                    </div>
                    <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                ))}

                {/* CTA */}
                <button className="w-full mt-3 blue-gradient text-white text-xs font-semibold py-2.5 rounded-xl shadow-lg">
                  {t("createPdfPrice")}
                </button>
              </div>

              {/* Floating decorative card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-8 glass rounded-2xl p-3 shadow-xl border border-blue-500/20 w-36"
              >
                <div className="text-xs text-blue-300 font-semibold mb-1">{t("pdfGenerated")}</div>
                <div className="text-[10px] text-blue-400/70">{language === "hi" ? "किराया अनुबंध.pdf" : "Rent Agreement.pdf"}</div>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[10px] text-green-400">{t("ready")}</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-14 bottom-12 glass rounded-2xl p-3 shadow-xl border border-gold/20 w-32"
              >
                <div className="text-xs text-yellow-400 font-semibold mb-0.5">₹350/month</div>
                <div className="text-[10px] text-blue-400/70">{t("unlimitedPdfs")}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-blue-500/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  const { t } = useLanguage();
  const stats = [
    { value: 129, suffix: "+", label: t("districtCourtTemplates"), icon: "🏛️" },
    { value: 46, suffix: "+", label: t("highCourtTemplates"), icon: "⚖️" },
    { value: 15, suffix: "+", label: t("revenueCourtTemplates"), icon: "📋" },
    { value: 2, suffix: "", label: t("languageSupport"), icon: "🌐" },
  ];
  return (
    <Section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass rounded-2xl p-6 text-center border border-blue-800/20 hover:border-blue-500/30 transition-colors group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="font-display font-bold text-3xl lg:text-4xl text-white mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-blue-400/70 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Search ─── */
function SearchSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Document[]>([]);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const suggestions = language === "hi" ? ["किराया अनुबंध", "RTI आवेदन प्रपत्र", "जमानत आवेदन", "ऋण अनुबंध", "पावर ऑफ अटॉर्नी"] : ["Rent Agreement", "RTI Application", "Bail Application", "Loan Agreement", "Power of Attorney"];

  useEffect(() => {
    setResults(searchDocuments(query));
  }, [query]);

  return (
    <Section id="search" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {t("findDocument")}
        </h2>
        <p className="text-blue-300/70 mb-10 text-lg">{t("searchDescription")}</p>

        <div className="relative">
          <div className={`flex items-center glass rounded-2xl border transition-all duration-300 ${focused ? "border-blue-500/60 shadow-lg shadow-blue-500/10" : "border-blue-800/30"}`}>
            <svg className="ml-4 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              placeholder={t("searchPlaceholder")}
              className="flex-1 bg-transparent px-4 py-4 text-white placeholder-blue-400/50 outline-none text-base"
            />
            {query && (
              <button onClick={() => setQuery("")} className="mr-2 p-1.5 rounded-lg hover:bg-blue-800/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            )}
          </div>

          {/* Results dropdown */}
          <AnimatePresence>
            {focused && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl border border-blue-800/30 overflow-hidden z-30 text-left max-h-72 overflow-y-auto"
              >
                {!query && (
                  <div className="p-4">
                    <div className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-3">{t("popular")}</div>
                    {suggestions.map(s => (
                      <button key={s} onClick={() => setQuery(s)} className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-blue-800/20 rounded-xl transition-colors group">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        <span className="text-blue-200 text-sm group-hover:text-white transition-colors">{s}</span>
                      </button>
                    ))}
                  </div>
                )}
                {query && results.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="text-3xl mb-3">🔍</div>
                    <div className="text-blue-300 font-semibold">{t("noDocuments")}</div>
                    <div className="text-blue-500/60 text-sm mt-1">{t("tryDifferentKeywords")}</div>
                  </div>
                )}
                {query && results.slice(0, 8).map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => navigate(`/document/${doc.id}`)}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-blue-800/20 transition-colors border-b border-blue-900/20 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-lg blue-gradient flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <div className={`text-white text-sm font-medium truncate ${language === "hi" ? "font-devanagari" : ""}`}>{language === "hi" ? doc.titleHi || doc.title : doc.title}</div>
                      <div className="text-blue-400/60 text-xs">{language === "hi" ? hindiCourtNames[doc.court] || doc.court : doc.court} · {language === "hi" ? hindiCategoryNames[doc.category] || doc.category : doc.category}</div>
                    </div>
                    <svg className="ml-auto shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

/* ─── Court Categories ─── */
const courtIcons: Record<string, string> = {
  "high-court": "⚖️",
  "district-court": "🏛️",
  "family-court": "👨‍👩‍👧",
  "juvenile-court": "🔒",
  "revenue-court": "📋",
  "forum-court": "🏢",
};

const courtColors: Record<string, string> = {
  "high-court": "from-blue-600/20 to-blue-800/5",
  "district-court": "from-indigo-600/20 to-indigo-800/5",
  "family-court": "from-purple-600/20 to-purple-800/5",
  "juvenile-court": "from-cyan-600/20 to-cyan-800/5",
  "revenue-court": "from-teal-600/20 to-teal-800/5",
  "forum-court": "from-sky-600/20 to-sky-800/5",
};

function CourtCategories() {
  const { language, t } = useLanguage();
  return (
    <Section id="documents" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("legalDocumentsByCourt")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court, i) => (
            <motion.div
              key={court.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`glass rounded-3xl p-6 border border-blue-800/20 group bg-gradient-to-br ${courtColors[court.id]}`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {courtIcons[court.id]}
                </div>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-blue-200 transition-colors">
                  {language === "hi" ? hindiCourtNames[court.name] || court.name : court.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Bilingual Section ─── */
function BilingualSection() {
  const { t } = useLanguage();
  return (
    <Section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("bilingualTitle")}
            </h2>
            <p className="text-blue-300/70 text-lg mb-8">
              {t("bilingualDescription")}
            </p>
            <ul className="space-y-3">
              {t("bilingualFeatures").split("|").map(f => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full blue-gradient flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span className="text-blue-200/80 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const { t } = useLanguage();
  const steps = [
    { num: "01", title: t("chooseDocument"), desc: t("chooseDocumentDescription"), icon: "📂" },
    { num: "02", title: t("enterDetails"), desc: t("enterDetailsDescription"), icon: "✏️" },
    { num: "03", title: t("editReview"), desc: t("editReviewDescription"), icon: "✍️" },
    { num: "04", title: t("downloadPdf"), desc: t("downloadPdfDescription"), icon: "📥" },
  ];

  return (
    <Section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t("howItWorks")}</h2>
          <p className="text-blue-300/70 text-lg max-w-xl mx-auto">{t("howDescription")}</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl blue-gradient flex items-center justify-center text-3xl shadow-lg shadow-blue-900/40 mx-auto"
                  >
                    {step.icon}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#020818] border-2 border-blue-600 flex items-center justify-center">
                    <span className="text-blue-400 text-[9px] font-bold">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-blue-400/70 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Features ─── */
function Features() {
  const { language, t } = useLanguage();
  const features = [
    { icon: "⚡", title: t("easyCreation"), desc: t("easyCreationDescription") },
    { icon: "🌐", title: t("bilingualSupport"), desc: t("bilingualSupportDescription") },
    { icon: "📋", title: t("professionalTemplates"), desc: t("professionalTemplatesDescription") },
    { icon: "✏️", title: t("editingTools"), desc: t("editingToolsDescription") },
    { icon: "📥", title: t("downloadPdf"), desc: language === "hi" ? "न्यायालय में प्रस्तुत करने के लिए उच्च गुणवत्ता वाली PDF तुरंत डाउनलोड करें।" : "Instant high-quality PDF download ready for court submission." },
    { icon: "💾", title: t("saveEdit"), desc: t("saveEditDescription") },
    { icon: "🏛️", title: t("organizedCategories"), desc: t("organizedCategoriesDescription") },
    { icon: "🔍", title: t("fastSearch"), desc: t("fastSearchDescription") },
    { icon: "📱", title: t("mobileFriendly"), desc: t("mobileFriendlyDescription") },
    { icon: "📐", title: t("professionalFormatting"), desc: t("professionalFormattingDescription") },
    { icon: "⭐", title: t("premiumTemplates"), desc: t("premiumTemplatesDescription") },
  ];

  return (
    <Section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("featureHeading")}
          </h2>
          <p className="text-blue-300/70 text-lg max-w-2xl mx-auto">
            {t("featureDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 border border-blue-800/20 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-1.5 group-hover:text-blue-200 transition-colors">{f.title}</h3>
              <p className="text-blue-400/60 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── PDF Workflow ─── */
function PDFWorkflow() {
  const { language, t } = useLanguage();
  const steps = language === "hi" ? ["प्रारूप", "उपयोगकर्ता विवरण", "संपादन", "PDF"] : ["Template", "User Details", "Edit", "PDF"];
  return (
    <Section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 lg:p-14 border border-blue-800/20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("workflowHeading")}
          </h2>
          <p className="text-blue-300/70 text-lg mb-12 max-w-xl mx-auto">
            {t("workflowDescription")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-3 rounded-2xl font-semibold text-sm ${
                    i === steps.length - 1
                      ? "gold-gradient text-navy-950"
                      : "blue-gradient text-white"
                  } shadow-lg`}
                >
                  {step}
                </motion.div>
                {i < steps.length - 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                )}
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="blue-gradient text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-xl shadow-blue-900/40"
          >
            {t("createPdf")}
          </motion.button>
        </div>
      </div>
    </Section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  const { language, t } = useLanguage();
  const payPerFeatures = [
    language === "hi" ? "कोई भी कानूनी दस्तावेज़" : "Any legal document",
    language === "hi" ? "हिंदी और अंग्रेज़ी" : "Hindi & English",
    language === "hi" ? "दस्तावेज़ संपादन" : "Document editing",
    language === "hi" ? "PDF डाउनलोड" : "PDF download",
    "₹10 per PDF",
    language === "hi" ? "कोई मासिक सदस्यता नहीं" : "No monthly subscription",
  ];
  const monthlyFeatures = [
    language === "hi" ? "सभी कानूनी दस्तावेज़ प्रारूप" : "All legal document templates",
    language === "hi" ? "हिंदी और अंग्रेज़ी" : "Hindi & English",
    language === "hi" ? "असीमित दस्तावेज़ निर्माण" : "Unlimited document creation",
    language === "hi" ? "असीमित PDF डाउनलोड" : "Unlimited PDF downloads",
    language === "hi" ? "प्रति PDF कोई अतिरिक्त शुल्क नहीं" : "No extra charge per PDF",
    language === "hi" ? "पूर्ण संपादन उपकरण" : "Full editing tools",
    language === "hi" ? "दस्तावेज़ सहेजें और संपादित करें" : "Save & edit documents",
    language === "hi" ? "प्रीमियम सुविधाएँ" : "Premium features",
  ];
  const tableRows = [
    [language === "hi" ? "कानूनी दस्तावेज़" : "Legal Documents", true, true],
    [language === "hi" ? "हिंदी और अंग्रेज़ी" : "Hindi & English", true, true],
    [language === "hi" ? "दस्तावेज़ संपादन" : "Document Editing", true, true],
    [language === "hi" ? "PDF डाउनलोड" : "PDF Download", true, "Unlimited"],
    [language === "hi" ? "असीमित निर्माण" : "Unlimited Creation", false, true],
    [language === "hi" ? "PDF का अतिरिक्त शुल्क नहीं" : "No Extra PDF Charge", false, true],
    [language === "hi" ? "सहेजें और संपादित करें" : "Save & Edit", false, true],
    [language === "hi" ? "प्रीमियम सुविधाएँ" : "Premium Features", false, true],
  ];

  return (
    <Section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("simplePricing")}
          </h2>
          <p className="text-blue-300/70 text-lg">{t("pricingDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {/* Pay Per PDF */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-blue-800/30"
          >
            <div className="mb-6">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">{t("payPerPdf")}</p>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-white">₹10</span>
                <span className="text-blue-400/70 mb-2 text-sm">{language === "hi" ? "प्रति PDF" : "per PDF"}</span>
              </div>
              <p className="text-blue-300/50 text-sm mt-1">{language === "hi" ? "एक PDF = ₹10" : "One PDF = ₹10"}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {payPerFeatures.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-600/30 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span className="text-blue-200/70 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 rounded-2xl border border-blue-600/40 text-blue-200 font-semibold hover:border-blue-500 hover:text-white transition-all duration-200">
              {t("createPdf")} – ₹10
            </button>
          </motion.div>

          {/* Monthly Subscription */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-8 border border-blue-500/30 bg-gradient-to-br from-blue-900/40 via-blue-950/60 to-navy-900 shadow-xl shadow-blue-900/30"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="gold-gradient text-navy-950 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg">
                ⭐ {language === "hi" ? "सबसे अच्छा मूल्य" : "Best Value"}
              </div>
            </div>
            <div className="mb-6 mt-2">
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">Monthly Subscription</p>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-white">₹350</span>
                <span className="text-blue-400/70 mb-2 text-sm">/month</span>
              </div>
              <p className="text-blue-300/50 text-sm mt-1">{language === "hi" ? "असीमित PDF सुविधा" : "Unlimited PDF Access"}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {monthlyFeatures.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full blue-gradient flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span className="text-blue-100/80 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-2xl blue-gradient text-white font-bold shadow-lg"
            >
              {language === "hi" ? "अभी सदस्यता लें" : "Subscribe Now"} – ₹350/month
            </motion.button>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto glass rounded-3xl border border-blue-800/20 overflow-hidden">
          <div className="grid grid-cols-3 bg-blue-950/40 px-6 py-4 text-xs font-bold uppercase tracking-wider">
            <div className="text-blue-400">Feature</div>
            <div className="text-center text-blue-400">{t("payPerPdf")}</div>
            <div className="text-center text-blue-300">{language === "hi" ? "मासिक" : "Monthly"}</div>
          </div>
          {tableRows.map(([feature, pay, monthly], i) => (
            <div key={String(feature)} className={`grid grid-cols-3 px-6 py-4 border-t border-blue-900/20 ${i % 2 === 0 ? "" : "bg-blue-950/10"}`}>
              <div className="text-blue-200 text-sm">{feature}</div>
              <div className="text-center">
                {pay === true ? <svg className="inline w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  : pay === false ? <svg className="inline w-4 h-4 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  : <span className="text-blue-300 text-xs font-semibold">{pay}</span>}
              </div>
              <div className="text-center">
                {monthly === true ? <svg className="inline w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  : monthly === false ? <svg className="inline w-4 h-4 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  : <span className="text-green-400 text-xs font-semibold">{monthly}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── App Download ─── */
function AppDownload() {
  const { language } = useLanguage();
  return (
    <Section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl border border-blue-800/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="p-10 lg:p-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                {language === "hi" ? "Legal Docs Maker को अपने साथ रखें" : "Take Legal Docs Maker With You"}
              </h2>
              <p className="text-blue-300/70 text-lg mb-8">
                {language === "hi" ? "अपने मोबाइल से कानूनी दस्तावेज़ बनाएँ और प्रबंधित करें। 200+ प्रारूप आपकी जेब में।" : "Create and manage legal documents directly from your mobile. 200+ templates in your pocket."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 blue-gradient text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M3.18 23.76a2 2 0 0 0 2.83 0l9.07-9.07-2.83-2.83L3.18 20.93a2 2 0 0 0 0 2.83zM20.82.24a2 2 0 0 0-2.83 0l-7.07 7.07 2.83 2.83L20.82 3.07a2 2 0 0 0 0-2.83zM3.18.24A2 2 0 0 0 .35 3.07l9.07 9.07 2.83-2.83L3.18.24zM20.82 20.93l-7.07-7.07-2.83 2.83 7.07 7.07a2 2 0 0 0 2.83-2.83z"/>
                  </svg>
                  <div>
                    <div className="text-[10px] opacity-75">{language === "hi" ? "यहाँ पाएँ" : "Get it on"}</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-3 glass border border-blue-700/30 px-6 py-3.5 rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                    <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`rounded-sm ${i % 3 === 0 ? "bg-blue-600" : "bg-navy-900"}`} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{language === "hi" ? "डाउनलोड करने के लिए स्कैन करें" : "Scan to Download"}</div>
                    <div className="text-blue-400/60 text-xs">{language === "hi" ? "QR कोड पर कैमरा रखें" : "Point camera at QR code"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center items-center p-10 lg:py-0 lg:pr-14 relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-52 h-96 rounded-[2.5rem] bg-gradient-to-b from-navy-800 to-navy-950 border-4 border-blue-800/50 shadow-2xl shadow-black/60 overflow-hidden">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#020818] flex flex-col">
                    <div className="h-6 bg-navy-900 flex items-center justify-center">
                      <div className="w-12 h-1 bg-blue-800/50 rounded-full" />
                    </div>
                    <div className="flex-1 p-3 space-y-2">
                      <div className="flex items-center gap-2 bg-blue-900/30 rounded-xl p-2.5">
                        <img src={logoImg} alt="App Logo" className="w-6 h-6 rounded-lg object-contain shrink-0" />
                        <div>
                          <div className="h-1.5 w-20 bg-blue-300/30 rounded mb-1" />
                          <div className="h-1 w-14 bg-blue-500/20 rounded" />
                        </div>
                      </div>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2 bg-blue-950/40 rounded-xl p-2.5 border border-blue-800/20">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600/40 to-blue-800/20" />
                          <div>
                            <div className="h-1.5 rounded bg-blue-300/30 mb-1" style={{ width: `${48 + i * 8}px` }} />
                            <div className="h-1 w-12 bg-blue-500/20 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── About ─── */
function About() {
  const { language, t } = useLanguage();
  const audience = [
    { icon: "⚖️", label: language === "hi" ? "अधिवक्ता" : "Advocates" },
    { icon: "📚", label: language === "hi" ? "विधि छात्र" : "Law Students" },
    { icon: "🗂️", label: language === "hi" ? "न्यायालय क्लर्क" : "Court Clerks" },
    { icon: "💼", label: language === "hi" ? "पेशेवर" : "Professionals" },
    { icon: "👤", label: language === "hi" ? "व्यक्ति" : "Individuals" },
  ];
  return (
    <Section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("aboutTitle")}
            </h2>
            <p className="text-blue-200/70 text-lg leading-relaxed mb-6">
              {language === "hi" ? "Legal Docs Maker कानूनी दस्तावेज़ तैयार करने, प्रारूपित करने और PDF बनाने को सरल बनाने वाला तकनीकी प्लेटफ़ॉर्म है। हमारा मानना है कि सही कानूनी प्रारूप तक पहुँचना सभी के लिए तेज़, सरल और किफायती होना चाहिए।" : "Legal Docs Maker is a technology platform designed to simplify legal document drafting, formatting, and PDF preparation. We believe that accessing the right legal document format should be fast, simple, and affordable for everyone."}
            </p>
            <p className="text-blue-200/70 text-base leading-relaxed mb-8">
              {language === "hi" ? "हमारा प्लेटफ़ॉर्म कानूनी सलाह, प्रतिनिधित्व या पेशेवर कानूनी परामर्श नहीं देता। हम दस्तावेज़ उत्पादकता उपकरण हैं — कानूनी विशेषज्ञता आपकी है।" : "Our platform does not provide legal advice, legal representation, or professional legal consultancy. We are a document productivity tool — the legal expertise is yours."}
            </p>
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">{language === "hi" ? "इनके लिए बनाया गया" : "Designed for"}</p>
              <div className="flex flex-wrap gap-3">
                {audience.map(a => (
                  <div key={a.label} className="flex items-center gap-2 glass rounded-xl px-4 py-2.5">
                    <span className="text-xl">{a.icon}</span>
                    <span className="text-blue-200 text-sm font-medium">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 border border-blue-800/20 space-y-6">
            {[
              { icon: "🔒", title: "Secure & Private", desc: "Your documents stay on your device. No unauthorized data collection." },
              { icon: "⚡", title: "Fast & Reliable", desc: "Generate court-ready PDFs instantly with our optimized platform." },
              { icon: "🌟", title: "Trusted Formats", desc: "Templates based on standard Indian court formats and legal conventions." },
            ].map(card => (
              <div key={card.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl blue-gradient flex items-center justify-center text-xl shrink-0">{card.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-blue-400/70 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/anandsahu7862@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setSubmitted(true);
    } catch {
      window.alert("We couldn't send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full bg-blue-950/40 border border-blue-800/40 text-white placeholder-blue-500/50 rounded-xl px-4 py-3 outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 text-sm";

  return (
    <Section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t("contactTitle")}</h2>
            <p className="text-blue-300/70 text-lg mb-8">{t("contactDescription")}</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl blue-gradient flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="text-blue-400 text-xs uppercase tracking-wider mb-0.5">{t("emailSupport")}</div>
                  <div className="text-white text-sm font-medium">anandsahu7862@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl blue-gradient flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-blue-400 text-xs uppercase tracking-wider mb-0.5">{t("jurisdiction")}</div>
                  <div className="text-white text-sm font-medium">Guna, Madhya Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 border border-blue-800/20">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{t("messageSent")}</h3>
                <p className="text-blue-300/70 text-sm">{t("thankYou")}</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-400 text-sm hover:text-blue-200 transition-colors">{t("sendAnother")}</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder={t("fullName")} className={inputCls} />
                  <input required name="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder={t("emailAddress")} className={inputCls} />
                </div>
                <input required name="phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder={t("phoneNumber")} className={inputCls} />
                <textarea required name="message" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder={t("yourMessage")} rows={4} className={`${inputCls} resize-none`} />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending}
                  className="w-full blue-gradient text-white font-bold py-3.5 rounded-2xl shadow-lg"
                >
                  {t("sendMessage")}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Main Home ─── */
export default function Home() {
  return (
    <div className="bg-[#020818]">
      <Hero />
      <Stats />
      <SearchSection />
      <CourtCategories />
      <BilingualSection />
      <HowItWorks />
      <Features />
      <PDFWorkflow />
      <Pricing />
      <AppDownload />
      <About />
      <Contact />
    </div>
  );
}
