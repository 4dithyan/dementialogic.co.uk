import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Headphones, Heart } from "lucide-react";
import Logo from "./Logo";

const footerCols = [
  { 
    title: "Company", 
    links: [
      { label: "Home", to: "/" }, 
      { label: "About Us", to: "/about" },
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { label: "Education Hub", to: "/education-hub" },
    ] 
  },
  { 
    title: "Interactive Tools", 
    links: [
      { label: "Caregiver Reality Check", to: "/caregiver-reality-check" }, 
      { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder" }
    ] 
  },
];

export default function Footer() {
  return (
    <>
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We support individuals living with dementia and the people who care for them.
            </p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-primary transition-colors cursor-pointer">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-8 py-5 text-xs text-muted-foreground">
            <div>© 2026 DementiaLogic. All rights reserved.</div>
            <div className="flex gap-6">
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms of Use</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}
