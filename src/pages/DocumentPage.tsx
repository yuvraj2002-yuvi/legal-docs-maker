import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { allDocuments, hindiCategoryNames, hindiCourtNames } from "../data/documents";
import { useLanguage } from "../contexts/LanguageContext";

export default function DocumentPage() {
  const { docId } = useParams<{ docId: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const doc = allDocuments.find(d => d.id === docId);
  const [plan, setPlan] = useState<"pay" | "sub">("pay");
  const [fileName, setFileName] = useState("");
  const [pdfReady, setPdfReady] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && doc) {
      editorRef.current.innerText = language === "hi" ? doc.titleHi || doc.title : doc.title;
    }
  }, [doc?.id]);

  if (!doc) return (
    <div className="min-h-screen bg-[#020818] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">📄</div>
        <h2 className="font-display text-2xl text-white mb-2">{t("documentNotFound")}</h2>
        <button onClick={() => navigate("/")} className="text-blue-400 hover:text-blue-200 transition-colors">← {t("backToHome")}</button>
      </div>
    </div>
  );

  const inputCls = "w-full bg-blue-950/40 border border-blue-800/40 text-white placeholder-blue-500/40 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 text-sm";

  const formatText = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  const downloadPdf = () => {
    const previousTitle = document.title;
    document.title = fileName.trim() || (language === "hi" ? doc.titleHi || doc.title : doc.title);
    setPdfReady(true);
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#020818] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors mb-6 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            {t("back")}
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Doc header */}
              <div className="glass rounded-3xl p-8 border border-blue-800/20">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl blue-gradient flex items-center justify-center text-3xl shadow-xl shrink-0">📄</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider">{language === "hi" ? hindiCourtNames[doc.court] || doc.court : doc.court}</span>
                      <span className="text-blue-800">·</span>
                      <span className="text-xs text-blue-500">{language === "hi" ? hindiCategoryNames[doc.category] || doc.category : doc.category}</span>
                    </div>
                    <h1 className={`font-display text-2xl sm:text-3xl font-bold text-white ${language === "hi" ? "font-devanagari" : ""}`}>{language === "hi" ? doc.titleHi || doc.title : doc.title}</h1>
                  </div>
                </div>

                <p className={`text-blue-300/70 text-sm leading-relaxed mb-6 ${language === "hi" ? "font-devanagari" : ""}`}>{language === "hi" ? doc.descriptionHi || doc.description : doc.description}</p>

              </div>

              {/* File name */}
              <div className="glass rounded-3xl p-8 border border-blue-800/20">
                <label htmlFor="file-name" className="block text-blue-400 text-xs mb-1.5">{t("fileName")}</label>
                <input
                  id="file-name"
                  value={fileName}
                  onChange={e => setFileName(e.target.value)}
                  placeholder={t("enterFileName")}
                  dir={language === "hi" ? "auto" : "ltr"}
                  className={inputCls}
                />
              </div>

              <div className="glass rounded-3xl p-8 border border-blue-800/20 print-document">
                <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className={`font-semibold text-white text-sm uppercase tracking-wider ${language === "hi" ? "font-devanagari" : ""}`}>{t("editor")}</h2>
                    <p className={`text-blue-400/60 text-xs mt-1 ${language === "hi" ? "font-devanagari" : ""}`}>{t("editorHint")}</p>
                  </div>
                  <button type="button" onClick={downloadPdf} className="blue-gradient rounded-xl px-4 py-2 text-xs font-semibold text-white print:hidden">
                    {t("downloadPdfAction")}
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-1 mb-4 print:hidden" role="toolbar" aria-label={t("editor")}>
                  {[
                    ["bold", "Bold", t("bold")],
                    ["italic", "Italic", t("italic")],
                    ["underline", "Underline", t("underline")],
                    ["justifyLeft", "Align left", t("alignLeft")],
                    ["justifyCenter", "Align center", t("alignCenter")],
                    ["justifyRight", "Align right", t("alignRight")],
                    ["insertUnorderedList", "Bullet list", t("bulletList")],
                    ["undo", "Undo", t("undo")],
                    ["redo", "Redo", t("redo")],
                  ].map(([command, label, title]) => (
                    <button key={command} type="button" title={title} aria-label={title} onClick={() => formatText(command)} className="glass rounded-lg px-2.5 py-2 text-xs font-semibold text-blue-200 hover:text-white hover:border-blue-500/50">
                      {label === "Bold" ? "B" : label === "Italic" ? "I" : label === "Underline" ? "U" : label === "Align left" ? "L" : label === "Align center" ? "C" : label === "Align right" ? "R" : label === "Bullet list" ? "•" : label === "Undo" ? "↶" : "↷"}
                    </button>
                  ))}
                  <label className="sr-only" htmlFor="font-size">{t("fontSize")}</label>
                  <select id="font-size" title={t("fontSize")} onChange={event => formatText("fontSize", event.target.value)} className="glass rounded-lg px-2 py-2 text-xs text-blue-200 bg-blue-950/60">
                    <option value="3">{t("fontSize")}</option>
                    <option value="2">{language === "hi" ? "छोटा" : "Small"}</option>
                    <option value="3">{language === "hi" ? "सामान्य" : "Normal"}</option>
                    <option value="5">{language === "hi" ? "बड़ा" : "Large"}</option>
                  </select>
                  <label className="sr-only" htmlFor="line-spacing">{t("lineSpacing")}</label>
                  <select id="line-spacing" title={t("lineSpacing")} onChange={event => {
                    if (editorRef.current) editorRef.current.style.lineHeight = event.target.value;
                  }} className="glass rounded-lg px-2 py-2 text-xs text-blue-200 bg-blue-950/60">
                    <option value="1.5">{t("lineSpacing")}</option>
                    <option value="1.2">1.2</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2.0</option>
                  </select>
                </div>
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  dir="auto"
                  spellCheck
                  className="min-h-64 rounded-2xl border border-blue-800/40 bg-blue-950/30 p-5 text-blue-100 outline-none focus:border-blue-500/60 leading-relaxed whitespace-pre-wrap"
                />
                <p className={`mt-3 text-xs text-blue-400/60 print:hidden ${language === "hi" ? "font-devanagari" : ""}`}>{t("pdfPrintHint")}</p>
                {pdfReady && <p className={`mt-2 text-xs text-green-300 print:hidden ${language === "hi" ? "font-devanagari" : ""}`}>{t("pdfReadyStatus")}</p>}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Plan select */}
              <div className="glass rounded-3xl p-6 border border-blue-800/20">
                <h3 className="font-semibold text-white mb-4 text-sm">{t("selectPlan")}</h3>
                <div className="space-y-3 mb-5">
                  <button onClick={() => setPlan("pay")} className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all text-sm ${plan === "pay" ? "border-blue-500/60 bg-blue-900/30 text-white" : "border-blue-800/30 text-blue-300 hover:border-blue-700/40"}`}>
                    <span>{t("payPerPdf")}</span>
                    <span className="font-bold text-blue-300">₹10</span>
                  </button>
                  <button onClick={() => setPlan("sub")} className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all text-sm ${plan === "sub" ? "border-blue-500/60 bg-blue-900/30 text-white" : "border-blue-800/30 text-blue-300 hover:border-blue-700/40"}`}>
                    <span>{t("monthlyPlan")}</span>
                    <span className="font-bold text-yellow-400">₹350/mo</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <button onClick={() => editorRef.current?.focus()} className="w-full py-3 rounded-2xl border border-blue-600/40 text-blue-200 font-semibold text-sm hover:border-blue-500 hover:text-white transition-all">
                    {t("editDocument")}
                  </button>
                  <motion.button
                    onClick={downloadPdf}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-2xl blue-gradient text-white font-bold text-sm shadow-lg"
                  >
                    {plan === "pay" ? `${t("createPdf")} – ₹10` : `${t("createPdf")} – ${t("includedSubscription")}`}
                  </motion.button>
                </div>
              </div>

              {/* Document info */}
              <div className="glass rounded-3xl p-6 border border-blue-800/20">
                <h3 className="font-semibold text-white mb-4 text-sm">{t("documentDetails")}</h3>
                <dl className="space-y-3">
                  {[
                    [t("court"), language === "hi" ? doc.courtHi || doc.court : doc.court],
                    [t("category"), language === "hi" ? doc.categoryHi || doc.category : doc.category],
                    [t("languages"), language === "hi" ? "हिंदी और English" : "Hindi & English"],
                    [t("format"), t("pdf")],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <dt className="text-blue-400/60 text-xs">{k}</dt>
                      <dd className="text-blue-200 text-xs font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Disclaimer */}
              <div className="glass rounded-2xl p-4 border border-yellow-700/20 bg-yellow-900/5">
                <p className="text-yellow-600/70 text-xs leading-relaxed">
                  {t("disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
