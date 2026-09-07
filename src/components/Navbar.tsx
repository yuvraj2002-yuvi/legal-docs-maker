import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("documents"), href: "/#documents" },
    { label: t("features"), href: "/#features" },
    { label: t("howItWorks"), href: "/#how-it-works" },
    { label: t("pricing"), href: "/#pricing" },
    { label: t("about"), href: "/#about" },
    { label: t("contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-blue-900/30 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Legal Docs Maker Logo"
                className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-display font-bold text-white text-lg leading-none tracking-tight">
                  Legal Docs
                </span>
                <span className="block text-[10px] font-sans font-semibold text-blue-400 tracking-widest uppercase leading-none">
                  Maker
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center glass rounded-full px-1 py-1 gap-0.5">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                    language === "en"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-300 hover:text-white"
                  }`}
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`text-xs font-devanagari font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                    language === "hi"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-300 hover:text-white"
                  }`}
                >
                  {t("hindi")}
                </button>
              </div>

              <button className="text-sm font-semibold text-blue-200 border border-blue-700/50 rounded-xl px-4 py-2 hover:border-blue-500 hover:text-white transition-all duration-200">
                {t("downloadApp")}
              </button>

              <button
                onClick={() => handleNav("/#documents")}
                className="text-sm font-semibold text-white blue-gradient rounded-xl px-5 py-2 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200 animate-pulse-glow"
              >
                {t("createDocument")}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg glass text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`hamburger-line block h-0.5 bg-white rounded ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`hamburger-line block h-0.5 bg-white rounded ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`hamburger-line block h-0.5 bg-white rounded ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-blue-900/30 lg:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-blue-100/90 hover:text-white hover:bg-blue-800/20 rounded-xl transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-blue-900/30 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <button onClick={() => setLanguage("en")} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${language === "en" ? "blue-gradient text-white" : "glass text-blue-300"}`}>{t("english")}</button>
                  <button onClick={() => setLanguage("hi")} className={`flex-1 py-2 rounded-xl text-sm font-devanagari font-semibold transition-all ${language === "hi" ? "blue-gradient text-white" : "glass text-blue-300"}`}>{t("hindi")}</button>
                </div>
                <button className="w-full py-3 text-sm font-semibold text-white blue-gradient rounded-xl shadow-lg">
                  {t("createDocument")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
