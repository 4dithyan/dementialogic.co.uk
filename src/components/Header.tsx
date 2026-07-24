import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Headphones } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder", hasDropdown: false },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40 shadow-sm flex-shrink-0">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
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
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">
          <Headphones className="h-4 w-4" />
          Talk to someone
        </button>
      </div>
    </header>
  );
}
