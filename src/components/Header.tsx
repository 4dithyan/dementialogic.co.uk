import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Blog", to: "/blog", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
];

export default function Header() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setIsAtTop(currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header className={`${isHomePage ? 'fixed' : 'sticky'} top-0 left-0 z-[100] w-full flex-shrink-0 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isAtTop ? (isHomePage ? 'bg-transparent border-transparent' : 'bg-background border-transparent') : 'bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm'}`}>
        <div className={`mx-auto flex max-w-[1400px] items-center justify-between px-8 transition-all duration-300 ${isAtTop ? 'py-6' : 'py-3'}`}>
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary transition-colors ${
                    isActive ? "text-primary font-bold border-b-2 border-primary pb-0.5" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-[15px] font-medium text-foreground/90 hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+448001234567" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-opacity">
              <Phone className="h-4 w-4 fill-current" />
              Contact Us: 0800 123 4567
            </a>
            <button 
              className="lg:hidden p-2 text-foreground/90 hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-[72px] z-[90] bg-background/95 backdrop-blur-xl border-t border-border/40 lg:hidden flex flex-col p-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-primary font-bold" : "text-foreground/90 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    className="flex items-center gap-2 text-lg font-medium text-foreground/90 hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-5 w-5" />}
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-12 pt-6 border-t border-border/40">
              <a 
                href="tel:+448001234567" 
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:opacity-95 transition-opacity"
              >
                <Phone className="h-5 w-5 fill-current" />
                Contact Us: 0800 123 4567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
