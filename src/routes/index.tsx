import { useState } from "react";
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
  Play,
  Star
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import handshakeImg from "@/assets/handshake.jpg";
import caregiverWellbeingImg from "@/assets/caregiver_wellbeing.png";

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
                <div className={`text-[20px] font-semibold transition-colors ${isOpen ? 'text-[#0F172A]' : 'text-[#334155]'}`}>
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
                  <div className="px-6 pb-6 pt-0 ml-[56px] text-[19px] leading-relaxed text-slate-600">
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
        {/* z-10 so the image tucks behind the white SVG */}
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
          <div className="pointer-events-auto absolute left-[2%] lg:left-[5%] top-[25%] bg-white/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[16px] p-3 pb-4 w-[160px] hidden md:block transition-all hover:bg-white/30">
            <div className="w-full aspect-square rounded-[12px] bg-gradient-to-tr from-[#4A85C5] to-[#8FBDF1] mb-2 flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <Heart className="h-8 w-8 text-white drop-shadow-md" />
            </div>
            <h3 className="text-[13px] font-extrabold text-[#0F172A] leading-tight mb-1">Compassionate Care</h3>
            <p className="text-[10px] text-[#0F172A]/70 font-medium leading-relaxed">
              We support individuals living with dementia and their loved ones.
            </p>
          </div>

          {/* Right Widget (Stacked Liquid Glass Cards) */}
          <div className="pointer-events-auto absolute right-[2%] lg:right-[5%] top-[25%] w-[200px] h-[120px] hidden md:block group">
            {/* Top Dark Liquid Card */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A]/40 backdrop-blur-3xl backdrop-saturate-200 border border-white/20 rounded-[14px] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col justify-between z-30 transform translate-y-0 translate-x-0 transition-transform group-hover:-translate-y-2">
              <div className="flex justify-between items-start relative z-10">
                <div className="w-6 h-4 bg-white/30 rounded-[3px] backdrop-blur-sm" />
                <Sparkles className="h-3 w-3 text-white/70" />
              </div>
              <div className="relative z-10">
                <p className="text-white font-medium text-[11px] leading-snug tracking-wide drop-shadow-md">"Guidance you can trust, whenever you need it."</p>
                <div className="flex items-center gap-2 mt-2 opacity-80">
                  <span className="text-white text-[9px] uppercase tracking-widest font-semibold drop-shadow-sm">Sarah H.</span>
                </div>
              </div>
            </div>
            {/* Middle Liquid Card */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-2xl backdrop-saturate-150 rounded-[14px] z-20 transform translate-y-[-8px] scale-[0.95] shadow-lg border border-white/40 flex items-start justify-between p-2 transition-transform group-hover:translate-y-[-12px]">
              <div className="w-3 h-2 bg-white/50 backdrop-blur-sm rounded-[2px]" />
              <Heart className="h-2 w-2 text-[#6FA8E8] drop-shadow-sm" />
            </div>
            {/* Bottom Liquid Card */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#8FBDF1]/30 backdrop-blur-xl backdrop-saturate-150 rounded-[14px] z-10 transform translate-y-[-16px] scale-[0.9] shadow-md border border-white/30 transition-transform group-hover:translate-y-[-20px]" />
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
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-lg"><Brain className="w-5 h-5" /></div>
              </div>
              <p className="text-[20px] text-[#0F172A] font-extrabold mb-1">
                Why are they suddenly upset?
              </p>
              <p className="text-[16px] text-slate-500 font-medium leading-relaxed max-w-[220px]">
                Decode unexpected anger or confusion in 2 minutes to find the real cause.
              </p>
              <Link to="/dementia-trigger-decoder" className="mt-5 inline-flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-[14px] font-bold tracking-widest uppercase hover:bg-[#6FA8E8] transition-colors shadow-lg hover:-translate-y-0.5">
                Trigger Decoder <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Center Content (inside the transparent valley, over blue background) */}
            <div className="flex-1 flex flex-col items-center text-center -mt-32 relative z-20">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] px-8 py-5 shadow-[0_8px_32px_rgba(31,38,135,0.1)] inline-block">
                <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-black bg-gradient-to-br from-[#0F172A] to-[#4A85C5] bg-clip-text text-transparent leading-[1.1] tracking-tighter uppercase">
                  When memory fades,<br />compassion remains.
                </h1>
              </div>
            </div>

            {/* Right Content (now resting on the white SVG background) */}
            <div className="w-full md:w-[350px] pb-2 relative z-20 flex flex-col items-end text-right">
              <div className="flex gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#6FA8E8] text-white flex items-center justify-center shadow-lg"><Heart className="w-5 h-5" /></div>
              </div>
              <p className="text-[20px] text-[#0F172A] font-extrabold mb-1">
                Is the stress becoming too much?
              </p>
              <p className="text-[16px] text-slate-500 font-medium leading-relaxed max-w-[220px]">
                Take our 3-minute well-being check to see if you need more support right now.
              </p>
              <Link to="/caregiver-reality-check" className="mt-5 inline-flex items-center gap-2 bg-[#6FA8E8] text-white px-5 py-2.5 rounded-full text-[14px] font-bold tracking-widest uppercase hover:bg-[#0F172A] transition-colors shadow-lg hover:-translate-y-0.5">
                Reality Check <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* Mobile alternative for the bottom section */}
        <div className="md:hidden mt-0 z-30 relative flex flex-col items-center pb-12">

          {/* Title in a liquid glass box */}
          <div className="px-4 mb-10 text-center -mt-40 relative z-20">
            <div className="bg-white/20 backdrop-blur-3xl backdrop-saturate-200 border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-[32px] px-6 py-5 inline-block relative overflow-hidden">
              {/* Light reflection effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <h1 className="text-[26px] font-black text-[#0F172A] leading-[1.15] tracking-tighter uppercase drop-shadow-sm relative z-10">
                When memory fades,<br />
                <span className="text-white drop-shadow-md">compassion remains.</span>
              </h1>
            </div>
          </div>

          {/* Action 1: Minimalist floating pill */}
          <div className="w-full px-6 mb-4">
            <Link to="/dementia-trigger-decoder" className="flex items-center justify-between bg-white/50 backdrop-blur-md border border-white/60 p-2 pl-6 rounded-full shadow-lg hover:bg-white/60 transition-colors">
              <div className="flex flex-col text-left py-1">
                <span className="text-[17px] font-black text-[#0F172A]">Why are they suddenly upset?</span>
                <span className="text-[13px] font-bold text-slate-600">Trigger Decoder</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center shrink-0 shadow-md">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Action 2: Minimalist, light, floating pill to create contrast */}
          <div className="w-full px-6">
            <Link to="/caregiver-reality-check" className="flex items-center justify-between bg-white/50 backdrop-blur-md border border-white/60 p-2 pl-6 rounded-full shadow-lg hover:bg-white/60 transition-colors">
              <div className="flex flex-col text-left py-1">
                <span className="text-[17px] font-black text-[#0F172A]">Is the stress too much?</span>
                <span className="text-[13px] font-bold text-slate-600">3-min Reality Check</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#6FA8E8] text-white flex items-center justify-center shrink-0 shadow-md">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip - Floating Cards */}
      <section className="relative z-20 mt-12 mb-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={f.title}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] mb-5 shadow-inner text-[#6FA8E8]">
                  <f.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[20px] text-slate-800 mb-2">{f.title}</h3>
                <p className="text-[16px] leading-relaxed text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Indicators */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-white">
        {/* Animated Background Orbs */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] pointer-events-none animate-float-around">
          <div className="w-full h-full bg-[#6FA8E8]/40 blur-[90px] animate-[spin_15s_linear_infinite]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
        </div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] pointer-events-none animate-float-around-reverse">
          <div className="w-full h-full bg-[#6FA8E8]/30 blur-[120px] animate-[spin_20s_linear_infinite_reverse]" style={{ borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' }} />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column - Content & Stats */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-4">
                  <Activity className="h-4 w-4" /> Early Indicators
                </div>
                <h2 className="text-[40px] font-bold leading-[1.2] tracking-tight text-slate-800 lg:text-[55px] mb-6">
                  Recognising early signs makes a difference.
                </h2>
                <p className="text-[21px] text-slate-600 leading-relaxed">
                  Dementia changes often begin subtly. Knowing what to look for helps you take the right steps sooner, offering clarity and peace of mind for everyone involved.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col justify-center rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#EFF6FF]">
                      <Brain className="h-6 w-6 text-[#6FA8E8]" />
                    </div>
                  </div>
                  <div className="text-[40px] font-extrabold text-slate-800 leading-none mb-2">1 in 14</div>
                  <div className="text-[18px] font-medium text-slate-500">People over 65 affected</div>
                </div>

                <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#6FA8E8] to-[#5A92CF] p-6 shadow-lg shadow-[#6FA8E8]/30 text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                    <Clock className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-[40px] font-extrabold leading-none mb-2">Early</div>
                    <div className="text-[18px] font-medium text-white/90">Detection matters most</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Beautiful Accordion */}
            <div className="flex flex-col relative">
              <div className="absolute -inset-6 bg-[#EFF6FF]/50 rounded-[40px] -z-10" />
              <div className="p-2 mb-4 font-bold text-slate-800 text-xl">Frequently Asked Questions</div>
              <FAQAccordion />
            </div>

          </div>
        </div>
      </section>

      {/* Dementia Trigger Decoder - Valley Layout */}
      <section className="relative w-full bg-white pt-24 overflow-hidden">
        {/* Top White Section */}
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-4">
                <CheckCircle2 className="h-4 w-4" /> Trigger Decoder
              </div>
              <h2 className="text-[40px] font-bold leading-[1.2] tracking-tight text-slate-800 lg:text-[55px] mb-6">
                Decode the distress.<br />Find the real trigger.
              </h2>
              <p className="text-[21px] text-slate-600 leading-relaxed mb-10 max-w-lg">
                Aggression, confusion, and agitation often have a hidden cause. Our clinical Trigger Decoder helps you identify what's really happening in just 2 minutes.
              </p>
              <div>
                <Link
                  to="/dementia-trigger-decoder"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-[19px] font-bold text-white shadow-xl hover:bg-[#6FA8E8] transition-all hover:-translate-y-1"
                >
                  Start the Trigger Decoder <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Top Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#6FA8E8] rounded-[40px] transform rotate-3 scale-[1.02] opacity-10" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl shadow-slate-300">
                <img src={handshakeImg} alt="Supportive hands" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    "It's not about the behaviour. It's about what's behind it."
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The Massive SVG Valley Transition */}
        <div className="relative w-full h-[250px] md:h-[350px] -mt-[150px] md:-mt-[200px] z-20 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-full text-[#6FA8E8]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,160 L450,160 C550,160 600,320 720,320 C840,320 890,160 990,160 L1440,160 L1440,320 L0,320 Z" />
          </svg>

          {/* Central Glowing Orb (Nested inside the valley) */}
          <div className="absolute left-1/2 bottom-[50px] md:bottom-[70px] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-auto">
            {/* Rotating Outer Rings */}
            <div className="absolute inset-[-8px] md:inset-[-12px] rounded-full border border-dashed border-[#6FA8E8]/60 animate-[spin_10s_linear_infinite] z-20 pointer-events-none" />
            <div className="absolute inset-[-16px] md:inset-[-24px] rounded-full border border-[#6FA8E8]/30 animate-[spin_15s_linear_infinite_reverse] z-10 pointer-events-none">
              {/* Little orbiting dot */}
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#6FA8E8] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(111,168,232,0.8)]" />
            </div>

            <div className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#4A85C5] to-[#8FBDF1] shadow-[0_10px_30px_rgba(111,168,232,0.5)] border-4 border-white z-30 overflow-hidden transform hover:scale-105 transition-transform duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <Brain className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-md relative z-10" />
            </div>
          </div>
        </div>

        {/* Bottom Light Blue Section */}
        <div className="w-full bg-[#6FA8E8] relative z-10 -mt-2 pb-24 pt-8 md:pt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-[1400px]">

            {/* 3 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-8 relative z-20">
              {[
                { n: "1", title: "Answer 5 quick questions", desc: "About timing and behaviour patterns during difficult episodes." },
                { n: "2", title: "Get your Trigger Profile", desc: "We analyse your answers using clinical trigger protocols." },
                { n: "3", title: "Receive an action plan", desc: "Practical next steps and de-escalation guidance." }
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg text-[30px] font-black text-[#6FA8E8] mb-6">
                    {step.n}
                  </div>
                  <h3 className="text-[25px] font-bold text-[#0F172A] mb-3">{step.title}</h3>
                  <p className="text-[19px] leading-relaxed text-[#0F172A]/80 max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="w-full bg-white py-4 overflow-hidden border-y border-slate-100 flex whitespace-nowrap relative z-30">
        <div className="flex animate-marquee items-center text-[#0F172A] font-serif italic font-medium text-[20px] lg:text-[25px] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="mx-10 lg:mx-16">Compassion</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Understanding</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Support</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Clarity</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Care</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Empathy</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Guidance</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Patience</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Strength</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
              <span className="mx-10 lg:mx-16">Connection</span><span className="text-[#6FA8E8]/40 not-italic text-base">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Caregiver Well-being - Attractive Split Layout */}
      <section className="relative py-16 lg:py-24 bg-[#6FA8E8] overflow-hidden">
        {/* Soft Background Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-2xl shadow-black/20 border border-white/40">
                <img src={caregiverWellbeingImg} alt="Caregiver providing support" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6FA8E8] via-[#6FA8E8]/40 to-transparent" />
              </div>

              {/* Floating Reality Check Badge */}
              <div className="absolute bottom-10 left-10 lg:-left-10 bg-white/80 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white max-w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] shadow-lg">
                    <Heart className="h-6 w-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-[20px] font-bold text-[#0F172A]">Reality Check</div>
                    <div className="text-[16px] text-[#0F172A]/70">Takes only 3 minutes</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-[#0F172A]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0F172A] w-1/3 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            <div className="flex flex-col order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                Caregiver Support
              </div>
              <h2 className="text-[40px] font-bold leading-[1.2] tracking-tight text-white lg:text-[60px] mb-6 drop-shadow-sm">
                Are you burning out without realising it?
              </h2>
              <p className="text-[21px] font-medium leading-relaxed text-white/90 mb-10">
                Caregiving is an act of profound love, but it can also be physically and emotionally exhausting. You don't have to navigate it alone. Take a moment to assess your own well-being.
              </p>

              <div className="flex flex-col gap-6 mb-12">
                {[
                  { icon: Coffee, title: "Recognise the signs of burnout early" },
                  { icon: Heart, title: "Find a safe space to share your feelings" },
                  { icon: FileText, title: "Get practical tips to manage daily stress" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/40 hover:bg-white/30 transition-colors shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
                      <item.icon className="h-5 w-5 text-[#6FA8E8]" />
                    </div>
                    <div className="text-[20px] font-bold text-white">{item.title}</div>
                  </div>
                ))}
              </div>

              <div>
                <Link to="/caregiver-reality-check" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0F172A] px-10 py-5 text-[20px] font-bold text-white shadow-xl hover:bg-[#1E293B] hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Take the Reality Check</span>
                  <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="mt-4 text-[16px] font-medium text-[#0F172A]/70 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0F172A]" /> Free, confidential, and instantly helpful.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learn at your pace */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-4">
                Educational Resources
              </div>
              <h2 className="text-[40px] font-bold leading-[1.2] tracking-tight text-slate-800 lg:text-[55px] mb-4">
                Understand dementia.<br />Feel more confident.
              </h2>
              <p className="text-[21px] font-medium leading-relaxed text-slate-500">
                Simple, clinically accurate guides and resources to help you navigate your journey at your own pace.
              </p>
            </div>
            <Link to="/education-hub" className="inline-flex items-center gap-2 text-[19px] font-bold text-[#6FA8E8] hover:text-[#5A92CF] transition-colors bg-[#EFF6FF] px-6 py-3 rounded-full">
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
                  <div className="text-[15px] font-bold uppercase tracking-wider text-[#6FA8E8] mb-2">{article.tag}</div>
                  <h3 className="text-[28px] font-bold text-slate-800 group-hover:text-[#6FA8E8] transition-colors">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
