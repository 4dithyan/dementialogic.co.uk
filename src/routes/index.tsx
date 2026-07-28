import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ChevronDown,
  HelpCircle,
  MapPin,
  CloudSun,
  Puzzle,
  UsersRound,
  ArrowRight,
  ShieldCheck,
  Coffee,
  FileText,
  Home,
  MessagesSquare,
  Sparkles,
  Brain,
  Clock,
  CheckCircle2,
  Activity,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  BrainCircuit,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import handshakeImg from "@/assets/handshake.jpg";
import caregiverWellbeingImg from "@/assets/caregiver_wellbeing.png";
import caregiverBurnoutImg from "@/assets/caregiver_burnout_illustration.png";
import educationHubBannerImg from "@/assets/education_hub_banner.png";
import illustrationImg from "@/assets/illustration.png";




const features = [
  { icon: UsersRound, title: "Person-centred care", desc: "Every person is unique. So is our care." },
  { icon: Heart, title: "Support for families", desc: "Because caregivers deserve support too." },
  { icon: ShieldCheck, title: "Safe & supportive space", desc: "Guidance you can trust, whenever you need it." },
];

const faqs = [
  { icon: HelpCircle, q: "Is repeating the same question a sign of dementia?", a: "Occasionally forgetting something is a normal part of ageing. However, repeatedly asking the same question because the answer has been forgotten within a short period may be an early sign of memory changes associated with dementia." },
  { icon: MapPin, q: "Why might someone get lost in familiar places?", a: "People living with dementia may have difficulty recognising familiar surroundings or remembering directions. This can make everyday journeys confusing, even in places they have visited many times." },
  { icon: Puzzle, q: "Why does dementia affect communication?", a: "Dementia can affect language and communication. A person may pause frequently, substitute incorrect words, or have difficulty following conversations, making communication more challenging over time." },
  { icon: CloudSun, q: "When should memory changes become a concern?", a: "If memory or thinking changes become persistent, worsen over time, or begin affecting daily life, it's important to speak with a healthcare professional for an assessment and appropriate guidance." },
  { icon: ShieldCheck, q: "Does memory loss always mean dementia?", a: "No. Memory problems can have many causes, including stress, depression, poor sleep, medication side effects, or vitamin deficiencies. A medical assessment is the best way to understand the cause." },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q} className={`flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white border-[#6FA8E8] shadow-md shadow-[#6FA8E8]/10' : 'bg-white/50 border-slate-200 hover:border-[#6FA8E8]/50 hover:bg-white'}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center justify-between p-5 lg:p-6 w-full text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className={`flex shrink-0 h-10 w-10 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[#6FA8E8] text-white' : 'bg-[#EFF6FF] text-[#6FA8E8]'}`}>
                  <faq.icon className="h-5 w-5" />
                </div>
                <div className={`text-[16px] font-semibold transition-colors ${isOpen ? 'text-[#0F172A]' : 'text-[#334155]'}`}>
                  {faq.q}
                </div>
              </div>
              <div className={`shrink-0 ml-4 flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#EFF6FF] text-[#6FA8E8]' : 'text-slate-400'}`}>
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0 ml-[56px] text-[15px] leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const steps = [
  { n: 1, icon: MessageCircle, title: "Talk to us", desc: "Share your concerns in a safe and caring conversation.", color: "sky" },
  { n: 2, icon: ClipboardList, title: "Understand the situation", desc: "We listen, understand and guide you through what's happening.", color: "emerald" },
  { n: 3, icon: Heart, title: "Build a care plan together", desc: "Personalised support to help your loved one live with comfort and dignity.", color: "amber" },
];

const caregiverPoints = [
  { icon: Heart, title: "You are not alone.", desc: "We're here to listen and support you.", color: "blue" },
  { icon: Users, title: "Take care of yourself.", desc: "Explore tips to manage stress and burnout.", color: "purple" },
  { icon: FileText, title: "Learn and feel confident.", desc: "Practical guidance for everyday challenges.", color: "emerald" },
];

const reminders = [
  { icon: Coffee, label: "Pause", color: "text-[#3b82f6]" },
  { icon: Wind, label: "Breathe", color: "text-[#3b82f6]" },
  { icon: Leaf, label: "Reset", color: "text-[#22c55e]" },
  { icon: Heart, label: "You matter", color: "text-[#3b82f6]" },
];

const learnCards = [
  { icon: FileText, tint: "bg-blue-50 text-blue-600", title: "Understanding dementia", desc: "Clear, simple information to help you understand." },
  { icon: Home, tint: "bg-blue-50 text-blue-600", title: "Creating a safe home", desc: "Tips to make daily life safer and calmer." },
  { icon: MessagesSquare, tint: "bg-blue-50 text-blue-600", title: "Communication that helps", desc: "Ways to connect with kindness and patience." },
  { icon: Sparkles, tint: "bg-blue-50 text-blue-600", title: "Activities that bring joy", desc: "Ideas for meaningful moments together." },
];



function Logo() {
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

function InteractiveToolsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    {
      caption: "Interactive Tools",
      title: (
        <>
          Not sure why<br />behaviour changed?
        </>
      ),
      desc: "Our 2-minute Trigger Decoder helps you uncover what might be causing distress—and what to do next.",
      linkTo: "/dementia-trigger-decoder",
      linkText: "Start Trigger Decoder",
      img: caregiverBurnoutImg,
      floatIcon: Clock,
      floatText1: "2 min",
      floatText2: "assessment",
      bgClass: "bg-[#f0f7ff] border-blue-50/50",
      captionColor: "text-blue-700",
      captionBg: "bg-blue-100/60 border-blue-200/50",
      buttonClass: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
      floatTextClass: "text-[#3b82f6]",
      floatText2Class: "text-blue-600/70",
      shadowClass: "shadow-blue-900/5",
    },
    {
      caption: "Interactive Tools",
      title: (
        <>
          Are you nearing<br />burnout?
        </>
      ),
      desc: "Take our Caregiver Reality Check to understand your stress levels and find the right support for you.",
      linkTo: "/caregiver-reality-check",
      linkText: "Start Reality Check",
      img: illustrationImg,
      floatIcon: Heart,
      floatText1: "3 min",
      floatText2: "check-in",
      bgClass: "bg-[#f8faff] border-slate-100",
      captionColor: "text-blue-700",
      captionBg: "bg-blue-100/60 border-blue-200/50",
      buttonClass: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
      floatTextClass: "text-blue-600",
      floatText2Class: "text-blue-600/70",
      shadowClass: "shadow-blue-900/5",
    }
  ];

  const extendedSlides = [...slides, slides[0]];

  const nextSlide = () => {
    if (currentIndex >= slides.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(slides.length - 1);
      }, 50);
      return;
    }
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="relative overflow-hidden rounded-[2rem] shadow-sm border border-slate-100">
          <div 
            className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, idx) => (
              <div key={idx} className={`w-full shrink-0 ${slide.bgClass} p-6 md:p-10 lg:px-12 lg:py-10 flex flex-col md:flex-row items-center justify-between`}>
                {/* Left Content */}
                <div className="relative z-10 w-full md:w-[45%] flex flex-col items-start text-left mb-8 md:mb-0">
                  <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest mb-4 border ${slide.captionBg} ${slide.captionColor}`}>
                    {slide.caption}
                  </div>
                  <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-4xl mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-[16px] text-slate-600 leading-relaxed mb-6 max-w-[420px]">
                    {slide.desc}
                  </p>
                  <Link 
                    to={slide.linkTo}
                    className={`inline-flex w-fit items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${slide.buttonClass}`}
                  >
                    {slide.linkText} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                
                {/* Right Illustration */}
                <div className="relative w-full md:w-[55%] flex justify-end items-center">
                  <div className="relative w-full max-w-[420px]">
                    <img 
                      src={slide.img} 
                      alt="Illustration" 
                      className="w-full h-auto max-h-[260px] object-contain origin-right"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Floating card */}
                    <div className={`absolute top-[10%] -right-[5%] md:right-[2%] bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 animate-[bounce_3s_ease-in-out_infinite] ${slide.shadowClass}`}>
                      <div className={`flex items-center justify-center ${slide.floatTextClass}`}>
                        <slide.floatIcon className="h-5 w-5" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[13px] font-bold leading-tight ${slide.floatTextClass}`}>{slide.floatText1}</span>
                        <span className={`text-[12px] font-medium leading-tight ${slide.floatText2Class}`}>{slide.floatText2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          {slides.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
              <button 
                onClick={prevSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all focus:outline-none ${
                      (currentIndex % slides.length) === idx ? "w-6 bg-slate-800" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="w-full flex-grow flex flex-col bg-slate-50 overflow-hidden">
      
      {/* Hero Section */}
      {/* Replicated Image Layout Hero Section */}
      <section className="relative pt-24 pb-0 overflow-hidden min-h-[90vh] flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, #D4E5F4 0%, #8FBDF1 100%)' }}>
        
        {/* HUGE Background Text */}
        <div className="absolute top-[15%] md:top-[8%] left-0 w-full flex justify-center pointer-events-none select-none z-0">
          <span className="text-[18vw] font-bold text-white opacity-60 tracking-[0.05em] leading-none blur-[4px]">
            CARE
          </span>
        </div>

        {/* Central Layout Area */}
        {/* z-10 so the image tucks behind the white SVG shapes */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 lg:px-8 flex-grow flex flex-col items-center justify-center pt-2">
          
          {/* Main Central Image - Increased Size */}
          <div className="absolute -top-[5%] md:-top-[20%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-[600px] md:h-[850px] z-40 pointer-events-none">
            <img 
              src="/images/old_age.png" 
              alt="Hero"
              className="w-full h-full object-contain rounded-[100px]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)'
              }}
            />
            {/* Extremely soft blur over the bottom to blend seamlessly into background */}
            <div className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[60%] bg-[#8FBDF1] blur-[60px] rounded-full opacity-80 mix-blend-normal" />
          </div>

          {/* Connected Lines (SVG) */}
          <svg className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[300px] pointer-events-none z-0 hidden md:block opacity-60" viewBox="0 0 1200 300" fill="none" preserveAspectRatio="none">
             <path d="M 100 150 L 350 150 Q 370 150 380 170 L 410 220 Q 420 240 440 240 L 580 240 L 760 240 Q 780 240 790 220 L 820 170 Q 830 150 850 150 L 1100 150" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" />
             {/* Center Target circle */}
             <circle cx="600" cy="240" r="16" stroke="white" strokeWidth="1.5" fill="transparent" strokeDasharray="none" />
             <circle cx="600" cy="240" r="10" stroke="white" strokeWidth="1" fill="transparent" strokeDasharray="none" />
             <circle cx="600" cy="240" r="4" fill="white" />
          </svg>

        </div>

        {/* Floating Widgets Layer (Absolute Front) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none z-[60]">
          {/* Left Widget (Liquid Glass Card) */}
          <div className="pointer-events-auto absolute left-[2%] lg:left-[5%] top-[25%] bg-white/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[20px] p-4 pb-5 w-[190px] hidden md:block transition-all hover:bg-white/30">
            <div className="w-full aspect-square rounded-[16px] bg-gradient-to-tr from-[#4A85C5] to-[#8FBDF1] mb-3 flex items-center justify-center shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
               <Heart className="h-10 w-10 text-white drop-shadow-md" />
            </div>
            <h3 className="text-[13px] font-extrabold text-[#0F172A] leading-tight mb-1.5">Compassionate Care</h3>
            <p className="text-[10px] text-[#0F172A]/70 font-medium leading-relaxed">
              We support individuals living with dementia and their loved ones.
            </p>
          </div>

          {/* Right Widget (Stacked Liquid Glass Cards) */}
          <div className="pointer-events-auto absolute right-[2%] lg:right-[5%] top-[25%] w-[260px] h-[160px] hidden md:block group">
             {/* Top Dark Liquid Card */}
             <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A]/40 backdrop-blur-3xl backdrop-saturate-200 border border-white/20 rounded-[16px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col justify-between z-30 transform translate-y-0 translate-x-0 transition-transform group-hover:-translate-y-2">
                <div className="flex justify-between items-start relative z-10">
                   <div className="w-8 h-6 bg-white/30 rounded-[4px] backdrop-blur-sm" />
                   <Sparkles className="h-4 w-4 text-white/70" />
                </div>
                <div className="relative z-10">
                   <p className="text-white font-medium text-[12px] leading-snug tracking-wide drop-shadow-md">"Guidance you can trust, whenever you need it."</p>
                   <div className="flex items-center gap-2 mt-3 opacity-80">
                     <span className="text-white text-[10px] uppercase tracking-widest font-semibold drop-shadow-sm">Sarah H.</span>
                   </div>
                </div>
             </div>
             {/* Middle Liquid Card */}
             <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-2xl backdrop-saturate-150 rounded-[16px] z-20 transform translate-y-[-10px] scale-[0.95] shadow-lg border border-white/40 flex items-start justify-between p-3 transition-transform group-hover:translate-y-[-15px]">
                <div className="w-4 h-3 bg-white/50 backdrop-blur-sm rounded-[2px]" />
                <Heart className="h-3 w-3 text-[#6FA8E8] drop-shadow-sm" />
             </div>
             {/* Bottom Liquid Card */}
             <div className="absolute top-0 left-0 w-full h-full bg-[#8FBDF1]/30 backdrop-blur-xl backdrop-saturate-150 rounded-[16px] z-10 transform translate-y-[-20px] scale-[0.9] shadow-md border border-white/30 transition-transform group-hover:translate-y-[-25px]" />
          </div>
        </div>

        {/* Bottom Section with White Backgrounds on Sides & Transparent Center */}
        <div className="relative z-30 mt-auto w-full pt-[200px] hidden md:block">
          
          {/* SVG creating the white left and right blocks. The center is transparent. */}
          <div className="absolute top-[0px] left-0 w-full h-[500px] pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-0">
            <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,80 L350,80 Q420,80 440,150 L470,500 L0,500 Z" fill="white" />
              <path d="M1440,80 L1090,80 Q1020,80 1000,150 L970,500 L1440,500 Z" fill="white" />
            </svg>
          </div>

          {/* Content inside the bottom area */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-10 flex flex-col md:flex-row items-end justify-between h-full">
            
            {/* Left Content (now resting on the white SVG background) */}
            <div className="w-full md:w-[350px] pb-2 relative z-20">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center"><Heart className="w-3 h-3" /></div>
                <div className="w-8 h-8 rounded-full bg-[#6FA8E8] text-white flex items-center justify-center"><Activity className="w-3 h-3" /></div>
              </div>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[220px]">
                Find clarity, expert guidance, and a safe space to share your journey.
              </p>
              <div className="mt-4 text-[10px] font-bold text-[#0F172A] tracking-widest uppercase">Our Services</div>
            </div>

            {/* Center Content (inside the transparent valley, over blue background) */}
            <div className="flex-1 flex flex-col items-center text-center -mt-32 relative z-20">
              <Link to="/contact" className="bg-white rounded-full px-6 py-2.5 text-[12px] font-extrabold text-[#0F172A] shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2 mb-6 hover:scale-105 transition-transform uppercase tracking-wider">
                Speak to an expert <ArrowRight className="w-3 h-3" />
              </Link>
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] px-8 py-5 shadow-[0_8px_32px_rgba(31,38,135,0.1)] inline-block">
                <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-black bg-gradient-to-br from-[#0F172A] to-[#4A85C5] bg-clip-text text-transparent leading-[1.1] tracking-tighter uppercase">
                  When memory fades,<br/>compassion remains.
                </h1>
              </div>
            </div>

            {/* Right Content (now resting on the white SVG background) */}
            <div className="w-full md:w-[350px] pb-2 relative z-20 flex flex-col items-end text-right">
              <div className="border border-slate-200 rounded-full px-4 py-1 text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                Expert Resources
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[42px] font-light text-[#6FA8E8] leading-none tracking-tighter">24/7</div>
                <div className="text-[10px] font-bold text-slate-500 text-left leading-tight uppercase tracking-wider">
                  Expert<br/>Guidance &<br/>Support
                </div>
              </div>
              <Link to="/education-hub" className="mt-5 bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-[#6FA8E8] transition-colors shadow-lg hover:-translate-y-0.5">
                Understand the signs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
        
        {/* Mobile alternative for the bottom section */}
        <div className="md:hidden bg-[#8FBDF1] mt-12 pt-8 pb-12 px-6 flex flex-col gap-12 text-center rounded-t-[40px] z-30 relative">
            <div className="flex flex-col items-center">
              <Link to="/contact" className="bg-white rounded-full px-6 py-2.5 text-[13px] font-bold text-[#0F172A] shadow-sm flex items-center gap-2 mb-6">
                Speak to an expert <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-[24px] px-6 py-4 shadow-sm inline-block">
                <h1 className="text-[24px] font-black bg-gradient-to-br from-[#0F172A] to-[#4A85C5] bg-clip-text text-transparent leading-[1.1] tracking-tighter uppercase">
                  When memory fades,<br/>compassion remains.
                </h1>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
               <div className="text-left">
                  <div className="text-[32px] font-light text-[#6FA8E8] leading-none mb-1">24/7</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Expert Guidance</div>
               </div>
               <Link to="/education-hub" className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* Trigger Decoder & Reality Check Carousel */}
      <InteractiveToolsCarousel />

      {/* Learning Journey Timeline */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-8 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">Understanding dementia</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed mb-16 max-w-xl">A step-by-step learning journey for everyone.</p>

          <div className="relative flex justify-between items-start w-full">
            {/* Connecting Line */}
            <div className="absolute top-8 left-[7%] right-[7%] h-0.5 bg-blue-100 z-0"></div>

            {[
              { icon: Brain, label: "Understanding\nDementia" },
              { icon: Users, label: "Different\nTypes" },
              { icon: Eye, label: "Early\nSigns" },
              { icon: ClipboardList, label: "Diagnosis &\nAssessment" },
              { icon: Home, label: "Daily\nLiving" },
              { icon: BrainCircuit, label: "Behaviour\nChanges" },
              { icon: Heart, label: "Caregiver\nSupport" },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-blue-100 text-[#3b82f6] shadow-sm mb-4">
                  <step.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <div className="text-[13px] font-bold text-[#1e293b] leading-snug whitespace-pre-line text-center">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex flex-col items-center w-full">
            <h3 className="text-[26px] font-bold text-slate-800 mb-2">The different types of dementia</h3>
            <p className="text-[15px] text-slate-600 mb-12">Four main types. Different causes. Different experiences.</p>

            <div className="flex flex-col lg:flex-row gap-5 w-full text-left">
              {/* Left: 4 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
                {/* Card 1 */}
                <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                  <div className="mb-6 text-blue-500">
                    <Brain className="h-[72px] w-[72px]" strokeWidth={1} />
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-800 mb-4 leading-snug">Alzheimer's<br/>Disease</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-1">
                    The most common type.<br/>Affects memory first.
                  </p>
                  <Link to="/types/alzheimers" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 mt-auto">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                  <div className="mb-6 text-teal-600">
                    <Brain className="h-[72px] w-[72px]" strokeWidth={1} />
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-800 mb-4 leading-snug">Dementia with<br/>Lewy Bodies</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-1">
                    Causes fluctuations in thinking and attention.
                  </p>
                  <Link to="/types/lewy-bodies" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 mt-auto">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                
                {/* Card 3 */}
                <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                  <div className="mb-6 text-rose-400">
                    <Brain className="h-[72px] w-[72px]" strokeWidth={1} />
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-800 mb-4 leading-snug">Vascular<br/>Dementia</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-1">
                    Caused by reduced blood flow to the brain.
                  </p>
                  <Link to="/types/vascular" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 mt-auto">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                
                {/* Card 4 */}
                <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                  <div className="mb-6 text-purple-500">
                    <Brain className="h-[72px] w-[72px]" strokeWidth={1} />
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-800 mb-4 leading-snug">Frontotemporal<br/>Dementia</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-1">
                    Affects personality, behaviour and language.
                  </p>
                  <Link to="/types/frontotemporal" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 mt-auto">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: Quote Card */}
              <div className="w-full lg:w-[280px] shrink-0 rounded-2xl bg-[#f4f9ff] p-8 relative overflow-hidden flex flex-col justify-center border border-blue-50/50">
                <div className="text-[72px] font-serif text-blue-400/50 leading-[0] absolute top-12 left-6">
                  “
                </div>
                <div className="relative z-10 mt-8">
                  <p className="text-[16px] font-medium text-slate-800 leading-[1.6] mb-8 pr-4">
                    Accurate understanding leads to better care and better days.
                  </p>
                  <Heart className="h-6 w-6 text-blue-600 fill-blue-600" />
                </div>
                <Brain className="absolute -bottom-8 -right-8 h-48 w-48 text-blue-200/30" strokeWidth={0.5} />
              </div>
            </div>

            <div className="mt-8">
              <Link to="/types" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5">
                Explore all types of dementia <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Early Indicators */}
      <section className="bg-[#f8faff] py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-blue-50/40 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8 relative z-10"
        >
          {/* Section header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-700 mb-4 border border-blue-200/50">
              <Activity className="w-3.5 h-3.5" /> Early Indicators
            </div>
            
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">
              Recognising early signs<br />can make a difference
            </h2>
            
            <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl">
              Dementia changes often begin subtly. Knowing what to look for helps you take the right steps sooner.
            </p>
          </div>

          {/* Balanced two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Stats + Callout + CTA */}
            <div className="flex flex-col gap-5">
              {/* Clinical Stat Indicators — 3 cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[24px] font-extrabold text-slate-800 leading-none">1 in 14</div>
                    <div className="text-[12px] text-slate-500 mt-1">people over 65</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[24px] font-extrabold text-slate-800 leading-none">Early</div>
                    <div className="text-[12px] text-slate-500 mt-1">detection matters</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[24px] font-extrabold text-slate-800 leading-none">55M+</div>
                    <div className="text-[12px] text-slate-500 mt-1">people worldwide</div>
                  </div>
                </div>
              </div>

              {/* Did you know callout */}
              <div className="flex-1 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 border border-blue-200/40 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 mt-0.5">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-blue-800 mb-2">Did you know?</div>
                    <p className="text-[14px] leading-relaxed text-blue-700/80 mb-4">
                      Many early signs of dementia are often mistaken for normal ageing. A timely conversation with a healthcare professional can provide clarity and peace of mind.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[13px] text-blue-700/70">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        Memory changes that disrupt daily life
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-blue-700/70">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        Difficulty planning or solving problems
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-blue-700/70">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        Confusion with time, place, or familiar tasks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/education-hub" 
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore the Education Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="flex flex-col">
              <FAQAccordion />
            </div>
            
          </div>
        </motion.div>
      </section>
      {/* Dementia Trigger Decoder */}
      <section className="bg-white py-12 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:gap-16 px-8 lg:grid-cols-2"
        >
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-700 mb-4 border border-blue-200/50">
              <Activity className="w-3.5 h-3.5" /> Trigger Decoder
            </div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">
              Decode the distress.<br />Find the real trigger.
            </h2>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-8 max-w-xl">
              Aggression, confusion, and agitation often have a hidden cause. Our 2‑minute Trigger Decoder helps you identify what's really happening — and what to do next.
            </p>
            
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-[20px] font-bold text-blue-700">
                  01
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-slate-800 mb-3">Answer 5 quick questions</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600 max-w-sm">
                    About timing, behaviour patterns, and what happens during difficult episodes.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-[20px] font-bold text-blue-700">
                  02
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-slate-800 mb-3">Get your Trigger Profile</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600 max-w-sm">
                    We analyse your answers using clinical trigger protocols to identify the root cause.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-[20px] font-bold text-blue-700">
                  03
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-slate-800 mb-3">Receive a personalised action plan</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600 max-w-sm">
                    Practical next steps and de‑escalation guidance tailored to your situation.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/dementia-trigger-decoder"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
            >
              Start the Trigger Decoder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Right Side: Image and Quote */}
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[640px] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-slate-100">
            <img src={handshakeImg} alt="Supportive hands" className="w-full h-full object-cover" />
            
            {/* White Quote Box overlapping the image */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-[85%] max-w-[400px] rounded-[1.5rem] bg-white/95 backdrop-blur-sm p-10 shadow-2xl">
              <div className="font-serif text-[60px] font-bold leading-[0.5] text-blue-600 mb-4">&ldquo;</div>
              <p className="text-[22px] font-bold leading-snug text-slate-800 mb-5">
                It's not about the behaviour.<br />It's about what's<br />behind it.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Understanding triggers is the first step to calmer, more compassionate care.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Caregiver Well-being */}
      <section className="bg-blue-600 text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-8 py-12 lg:py-16 flex flex-col justify-center relative z-20 lg:pr-16">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-500/30 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-100 mb-4 border border-blue-400/30">
                <Heart className="w-3.5 h-3.5 text-white" /> Caregiver Well-being
              </div>
              
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl mb-5">
                Caring for someone else<br />starts with caring for you
              </h2>
              <p className="text-[17px] leading-relaxed text-blue-50 max-w-xl mb-8">
                Caregiving can be profoundly beautiful, but undeniably overwhelming. You don't have to navigate it alone.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Bento Item 1 - Full Width */}
                <div className="col-span-1 md:col-span-2 group bg-blue-500/20 backdrop-blur-md p-5 rounded-2xl border border-blue-400/20 hover:bg-blue-500/30 hover:border-blue-400/40 transition-all duration-300 flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold text-white mb-1">You are not alone</div>
                    <div className="text-[15px] leading-relaxed text-blue-100">We listen, understand, and provide a safe space to share your concerns.</div>
                  </div>
                </div>
                
                {/* Bento Item 2 - Half Width */}
                <div className="col-span-1 group bg-blue-500/20 backdrop-blur-md p-5 rounded-2xl border border-blue-400/20 hover:bg-blue-500/30 hover:border-blue-400/40 transition-all duration-300 flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner mb-5">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div className="text-[20px] font-bold text-white mb-3">Take care of yourself</div>
                  <div className="text-[15px] text-blue-100 leading-relaxed">Explore practical tips to manage stress and avoid burnout.</div>
                </div>

                {/* Bento Item 3 - Half Width */}
                <div className="col-span-1 group bg-blue-500/20 backdrop-blur-md p-5 rounded-2xl border border-blue-400/20 hover:bg-blue-500/30 hover:border-blue-400/40 transition-all duration-300 flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner mb-5">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="text-[20px] font-bold text-white mb-3">Learn and feel confident</div>
                  <div className="text-[15px] text-blue-100 leading-relaxed">Gain actionable guidance to handle everyday challenges.</div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-[600px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%] z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent w-32 z-10 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent h-32 z-10 lg:hidden top-auto bottom-0" />
              <img src={caregiverWellbeingImg} alt="Caregiver providing support" className="w-full h-full object-cover" />
              
              {/* Premium Floating Badge */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:-left-12 lg:translate-x-0 z-20 w-[90%] max-w-[320px]">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-blue-600 fill-blue-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-[16px]">Gentle Reminder</span>
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed text-slate-700 mb-2">
                    You can't pour from an empty cup.
                  </p>
                  <p className="text-[14px] text-slate-500">
                    It's perfectly okay to take a moment to reset and breathe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn at your pace (Clinical Redesign) */}
      <section className="bg-white py-16 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-700 mb-4 border border-blue-200/50">
              <FileText className="w-3.5 h-3.5" /> Educational Resources
            </div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">
              Learn at your pace
            </h2>
            <p className="text-[17px] leading-relaxed max-w-xl text-slate-600 mx-auto">
              Simple, clinically accurate guides and resources to help you understand dementia and feel more in control of your journey.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
            {/* Background blur decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/50 blur-3xl -z-10 rounded-full" />
            
            {learnCards.map((c, i) => (
              <Link 
                key={c.title} 
                to={i < 2 ? "/education-hub" : "/blog"}
                className="group relative flex flex-col rounded-[1.5rem] border border-slate-100 bg-white p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.tint} transition-transform duration-300 group-hover:scale-110 mb-6`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="text-[18px] font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">{c.title}</div>
                <div className="text-[15px] text-slate-600 leading-relaxed mb-8 flex-1">{c.desc}</div>
                
                <div className="mt-auto flex items-center gap-1.5 text-[14px] font-bold text-blue-600">
                  {i < 2 ? 'Visit Education Hub' : 'Read Blog'} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Hub Banner */}
      <section className="bg-[#f8faff] py-12 lg:py-16 border-y border-slate-100">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-blue-900/5 border border-slate-100">
            <div className="relative w-full overflow-hidden rounded-[2rem] shadow-lg border-8 border-slate-50">
              <img src={educationHubBannerImg} alt="Learning about dementia on a tablet" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="flex flex-col justify-center lg:pl-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-700 mb-4 border border-blue-200/50">
                <FileText className="w-3.5 h-3.5" /> Education Hub
              </div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">
                Knowledge brings clarity and confidence
              </h2>
              <p className="text-[17px] leading-relaxed text-slate-600 max-w-xl mb-10">
                Explore our clinically accurate guides, articles, and resources at your own pace to better understand the journey ahead.
              </p>
              <Link to="/education-hub" className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
                Visit Education Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learn at your pace */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-4">
                Educational Resources
              </div>
              <h2 className="text-[32px] font-bold leading-[1.2] tracking-tight text-slate-800 lg:text-[44px] mb-4">
                Understand dementia.<br />Feel more confident.
              </h2>
              <p className="text-[17px] font-medium leading-relaxed text-slate-500">
                Simple, clinically accurate guides and resources to help you navigate your journey at your own pace.
              </p>
            </div>
            <Link to="/education-hub" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#6FA8E8] hover:text-[#5A92CF] transition-colors bg-[#EFF6FF] px-6 py-3 rounded-full">
              View all resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { img: whatIsDementiaImg, tag: "BASICS", title: "Understanding dementia", link: "/blog/what-is-dementia" },
              { img: calmRoutinesImg, tag: "DAILY LIVING", title: "Managing daily life", link: "/blog/creating-calm-routines" },
              { img: talkingHelpImg, tag: "COMMUNICATION", title: "Talking in ways that help", link: "/blog/talking-in-ways-that-help" }
            ].map((article) => (
              <Link key={article.title} to={article.link} className="group flex flex-col bg-[#F8FAFC] rounded-[32px] p-4 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img src={article.img} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="px-4 pb-4">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-2">{article.tag}</div>
                  <h3 className="text-[22px] font-bold text-slate-800 group-hover:text-[#6FA8E8] transition-colors">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
