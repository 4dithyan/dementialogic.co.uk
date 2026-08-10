import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, ArrowRight, Phone } from "lucide-react";
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
    <footer className="relative bg-slate-50 text-slate-600 border-t border-slate-200 flex-shrink-0 overflow-hidden">
      {/* Decorative large logo watermark - Increased Opacity */}
      <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] opacity-[0.08] pointer-events-none select-none mix-blend-multiply -rotate-12">
        <img src="/images/Dementia.png" alt="watermark" className="w-full h-full object-contain grayscale" />
      </div>
      
      {/* Soft gradient from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#6FA8E8]/10 to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 gap-16 lg:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-8">
            <Logo />
            <p className="text-[20px] leading-relaxed text-slate-500 font-medium max-w-sm">
              We support individuals living with dementia and the people who care for them, offering clarity, clinical insight, and deep compassion every step of the way.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100">
                  <Phone className="w-4 h-4 text-[#6FA8E8]" />
                </div>
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100">
                  <Mail className="w-4 h-4 text-[#6FA8E8]" />
                </div>
                <span>support@dementialogic.co.uk</span>
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          {footerCols.map((c) => (
            <div key={c.title}>
              <div className="text-[16px] font-bold text-slate-900 uppercase tracking-widest mb-8 relative inline-block">
                {c.title}
                <div className="absolute -bottom-3 left-0 w-8 h-[3px] bg-[#6FA8E8] rounded-full" />
              </div>
              <ul className="space-y-4">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[19px] font-medium text-slate-500 hover:text-[#6FA8E8] transition-all duration-300 inline-flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#6FA8E8] group-hover:translate-x-1 transition-all" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Unified Bottom Area */}
        <div className="mt-20 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[18px] text-slate-400 font-medium">
            © 2026 DementiaLogic. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-8 text-[16px] font-bold text-slate-400">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
