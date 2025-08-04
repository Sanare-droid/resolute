import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollProgress from "./ScrollProgress";
import ClientOnly from "./ClientOnly";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Safe language context usage with fallback
  let language: string = "en";
  let setLanguage: (lang: string) => void = () => {};
  let t: (key: string) => string = (key: string) => key;

  try {
    const languageContext = useLanguage();
    language = languageContext.language;
    setLanguage = languageContext.setLanguage;
    t = languageContext.t;
  } catch (error) {
    // LanguageContext not available, using fallbacks
  }

  const location = useLocation();

  // Ensure client-side hydration safety
  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigation = [
    { name: "nav.home", href: "/" },
    { name: "nav.about", href: "/about" },
    { name: "nav.programs", href: "/programs" },
    { name: "nav.impact", href: "/impact" },
    { name: "nav.news", href: "/news" },
    { name: "nav.support", href: "/support" },
    { name: "nav.civic", href: "/civic-education" },
    { name: "nav.contact", href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-white">
      <ClientOnly>
        <ScrollProgress />
      </ClientOnly>
      {/* Enhanced Navigation Header */}
      <nav className="bg-white/98 backdrop-blur-xl shadow-xl border-b border-resolute-green/20 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Enhanced Logo Section */}
            <div className="flex items-center">
              <Link
                to="/"
                className="group flex items-center space-x-4 hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F2baba01fb4ae4072a6e748153e9d1c79?format=webp&width=800"
                    alt="ResoluteRise Logo"
                    className="h-16 w-auto drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-resolute-green/10 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-2xl font-semibold text-gray-900 tracking-tight group-hover:text-resolute-green transition-colors duration-300">
                    ResoluteRise
                  </span>
                  <span className="text-sm text-gray-600 font-medium tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                    {t("nav.tagline")}
                  </span>
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-resolute-green to-resolute-light-green shadow-lg shadow-resolute-green/25 scale-105"
                      : "text-gray-700 hover:text-resolute-green hover:bg-resolute-green/8 hover:shadow-md hover:scale-105"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{t(item.name)}</span>
                  {!isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-resolute-green/0 via-resolute-green/5 to-resolute-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  {isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-resolute-green via-resolute-light-green to-resolute-green animate-shimmer"></div>
                  )}
                </Link>
              ))}

              {/* Enhanced Language Toggle */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="group flex items-center space-x-2 px-4 py-3 rounded-2xl text-sm font-medium text-gray-700 hover:text-resolute-green hover:bg-resolute-green/8 transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">
                    {language === "en" ? "SW" : "EN"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-resolute-green/0 via-resolute-green/5 to-resolute-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </button>
              </div>
            </div>

            {/* Enhanced Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-resolute-green hover:bg-resolute-green/8 transition-all duration-300"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">
                  {language === "en" ? "SW" : "EN"}
                </span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative p-3 rounded-xl text-gray-700 hover:text-resolute-green hover:bg-resolute-green/8 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`absolute top-4 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-4 py-6 bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-inner">
            <div className="space-y-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`group block px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 transform ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-resolute-green to-resolute-light-green shadow-lg shadow-resolute-green/25 scale-105"
                      : "text-gray-700 hover:text-resolute-green hover:bg-resolute-green/8 hover:shadow-md hover:scale-105 hover:translate-x-2"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isMenuOpen
                      ? "translateY(0)"
                      : "translateY(-10px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease-in-out ${index * 50}ms`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {t(item.name)}
                    <span className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                  {!isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-resolute-green/0 via-resolute-green/10 to-resolute-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200/50">
              <div className="text-center">
                <p className="text-sm text-gray-600 font-medium">
                  {t("nav.tagline")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F2baba01fb4ae4072a6e748153e9d1c79?format=webp&width=800"
                  alt="ResoluteRise Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">ResoluteRise</span>
              </div>
              <p className="text-gray-300 mb-4">{t("footer.about")}</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1CGdzzkwvV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-resolute-yellow transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/resoluterise_cbo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-resolute-yellow transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C8.396 0 7.876.011 6.638.06 2.356.316-.316 2.99.06 6.638.11 7.876 0 8.396 0 12.017c0 3.624.011 4.141.06 5.38.316 4.281 2.99 6.954 6.638 6.577 1.238-.05 1.758-.06 5.38-.06 3.624 0 4.141-.011 5.38-.06 4.281-.316 6.954-2.99 6.577-6.638C23.989 16.158 24 15.638 24 12.017c0-3.624-.011-4.141-.06-5.38C23.684 2.356 21.01-.316 17.362.06 16.124.11 15.604 0 12.017 0zm0 2.16c3.557 0 3.98.014 5.38.061 3.788.2 5.599 2.011 5.8 5.8.047 1.4.061 1.823.061 5.38 0 3.557-.014 3.98-.061 5.38-.2 3.788-2.011 5.599-5.8 5.8-1.4.047-1.823.061-5.38.061-3.557 0-3.98-.014-5.38-.061-3.788-.2-5.599-2.011-5.8-5.8-.047-1.4-.061-1.823-.061-5.38 0-3.557.014-3.98.061-5.38.2-3.788 2.011-5.599 5.8-5.8 1.4-.047 1.823-.061 5.38-.061zM5.838 12.017a6.179 6.179 0 1 1 12.356-.002 6.179 6.179 0 0 1-12.356.002zM12.017 16a3.984 3.984 0 1 0-.002-7.968 3.984 3.984 0 0 0 .002 7.968zm6.624-10.157a1.44 1.44 0 1 1-2.881-.001 1.44 1.44 0 0 1 2.881.001z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/resoluterise-organization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-resolute-yellow transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@resoluterisecbo.com"
                  className="text-gray-300 hover:text-resolute-yellow transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 11.39l9.455-7.568h.909c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.links")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-resolute-yellow transition-colors"
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className="text-gray-300 hover:text-resolute-yellow transition-colors"
                  >
                    {t("nav.programs")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/impact"
                    className="text-gray-300 hover:text-resolute-yellow transition-colors"
                  >
                    {t("nav.impact")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-300 hover:text-resolute-yellow transition-colors"
                  >
                    {t("nav.support")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("footer.contact")}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@resoluterisecbo.com</p>
                <p>Phone: +254758771683 / +254721513749</p>
                <p>Address: Maasai Mara Talek, Narok County Kenya</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 ResoluteRise. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
