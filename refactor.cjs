const fs = require('fs');
const path = require('path');

const srcDir = 'd:/AsimovX_works/dementialogic.co.uk/src';
const compDir = path.join(srcDir, 'components');

if (!fs.existsSync(compDir)){
    fs.mkdirSync(compDir);
}

const aboutPath = path.join(srcDir, 'routes', 'about.tsx');
const aboutContent = fs.readFileSync(aboutPath, 'utf8');

// 1. Create Logo.tsx
const logoCode = `import { Heart } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
        <Heart className="h-6 w-6 text-primary" fill="currentColor" />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-bold text-foreground">DementiaLogic</div>
        <div className="text-xs text-muted-foreground">Compassion. Clarity. Care.</div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(path.join(compDir, 'Logo.tsx'), logoCode);

// 2. Create Header.tsx
const headerCode = `import { Link, useLocation } from "react-router-dom";
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
                className={\`flex items-center gap-1 text-[15px] font-medium hover:text-primary transition-colors \${
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-0.5" : "text-foreground/90"
                }\`}
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
`;
fs.writeFileSync(path.join(compDir, 'Header.tsx'), headerCode);

// 3. Create Footer.tsx
const footerCode = `import { Link } from "react-router-dom";
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

      {/* Sticky bottom bar */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-8 py-6">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">You don't have to face this alone.</span>{" "}
              <span className="text-muted-foreground">We're here to listen, guide and support you.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <div className="text-sm">
              <div>
                <span className="font-semibold text-foreground">Need to talk now?</span>{" "}
                <span className="font-semibold text-foreground">We're here.</span>
              </div>
              <div className="text-muted-foreground">Reach out for a caring conversation.</div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
              <Headphones className="h-4 w-4" />
              Talk to someone
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
`;
fs.writeFileSync(path.join(compDir, 'Footer.tsx'), footerCode);

// 4. Update App.tsx
const appPath = path.join(srcDir, 'App.tsx');
const appCode = `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './routes/index';
import About from './routes/about';
import CaregiverRealityCheck from './routes/caregiver-reality-check';
import DementiaTriggerDecoder from './routes/dementia-trigger-decoder';
import EducationHub from './routes/education-hub';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/caregiver-reality-check" element={<CaregiverRealityCheck />} />
            <Route path="/dementia-trigger-decoder" element={<DementiaTriggerDecoder />} />
            <Route path="/education-hub" element={<EducationHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
`;
fs.writeFileSync(appPath, appCode);

// 5. Clean up individual pages
const filesToClean = [
  'index.tsx',
  'about.tsx',
  'education-hub.tsx',
  'caregiver-reality-check.tsx',
  'dementia-trigger-decoder.tsx'
];

filesToClean.forEach(file => {
  const filePath = path.join(srcDir, 'routes', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove navItems, footerCols, Logo
  content = content.replace(/const navItems = \[[\s\S]*?\];/g, '');
  content = content.replace(/const footerCols = \[[\s\S]*?\];/g, '');
  content = content.replace(/function Logo\(\) \{[\s\S]*?\}\n/g, '');

  // Remove <header>
  content = content.replace(/<header [\s\S]*?<\/header>/g, '');

  // Remove <footer> and the sticky bottom bar <section> after it
  // This is tricky, let's just remove <footer> first
  content = content.replace(/<footer [\s\S]*?<\/footer>/g, '');
  
  // Remove sticky bottom bar (has "Sticky bottom bar" comment usually)
  content = content.replace(/\{\/\* Sticky bottom bar \*\/\}\s*<section [\s\S]*?<\/section>/g, '');

  // Remove outermost wrapper div if it's there
  content = content.replace(/<div className="min-h-screen[^>]*>/, '<div className="w-full flex-grow flex flex-col">');

  fs.writeFileSync(filePath, content);
});

console.log('Refactoring complete');
