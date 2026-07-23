import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  Headphones,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Brain,
  Activity,
  Stethoscope,
  Pill,
  Search,
  Zap,
  TestTube,
  Smartphone,
  Eye,
  Microscope,
  AlertTriangle,
  FileText,
  Sparkles,
  NotebookPen,
  Compass,
  CircleAlert,
  HandHeart,
  Puzzle,
  Waves,
  Theater,
  ClipboardCheck,
  ScanLine,
  BrainCircuit,
  Palette,
  Cookie,
  GlassWater,
  Shield,
  Users,
  Clock,
  BadgeCheck,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Dumbbell,
} from "lucide-react";

import educationHeroImg from "@/assets/education-hero.png";
import horizonBgImg from "@/assets/horizon-bg.png";

// ─── Constants ──────────────────────────────────────────────────────────
const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder", hasDropdown: false },
];

const footerCols = [
  {
    title: "DementiaLogic",
    links: [
      { label: "Compassion. Clarity. Care", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Resources", to: "/education-hub" },
      { label: "Events", to: "/" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Talk to an Expert", to: "/" },
      { label: "Find Local Help", to: "/" },
      { label: "Caregiver Support", to: "/caregiver-reality-check" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", to: "/" },
      { label: "Treatment Options", to: "/education-hub" },
      { label: "Research Updates", to: "/" },
    ],
  },
  {
    title: "Medical Info Hub",
    links: [
      { label: "Help Centre", to: "/" },
      { label: "Treatment Options", to: "/education-hub" },
      { label: "Research Updates", to: "/" },
    ],
  },
];

const SECTIONS = [
  { id: "understanding", label: "Understanding Dementia", icon: <Brain className="w-4 h-4" /> },
  { id: "types", label: "Different Types", icon: <Puzzle className="w-4 h-4" /> },
  { id: "action", label: "Taking Action", icon: <Compass className="w-4 h-4" /> },
  { id: "clinic", label: "Inside the Memory Clinic", icon: <Stethoscope className="w-4 h-4" /> },
  { id: "toolkit", label: "Current Toolkit", icon: <Pill className="w-4 h-4" /> },
  { id: "bpsd", label: "Behavioral Challenge", icon: <Activity className="w-4 h-4" /> },
  { id: "horizon", label: "The Horizon", icon: <Sparkles className="w-4 h-4" /> },
];

const DEMENTIA_TYPES = [
  {
    id: "alzheimers",
    name: "Alzheimer's Disease",
    colorClass: "bg-sky-500",
    bgLight: "bg-sky-50",
    textColor: "text-sky-700",
    icon: <Brain className="w-6 h-6 text-white" />,
    desc: "Most common form of dementia.",
  },
  {
    id: "vascular",
    name: "Vascular Dementia",
    colorClass: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-700",
    icon: <Heart className="w-6 h-6 text-white" />,
    desc: "Caused by reduced blood flow to the brain.",
  },
  {
    id: "lewy-body",
    name: "Dementia with Lewy Bodies (DLB)",
    colorClass: "bg-amber-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-700",
    icon: <Waves className="w-6 h-6 text-white" />,
    desc: "Vivid hallucinations, fluctuations, sleep disturbances.",
  },
  {
    id: "ftd",
    name: "Frontotemporal Dementia (FTD)",
    colorClass: "bg-violet-500",
    bgLight: "bg-violet-50",
    textColor: "text-violet-700",
    icon: <Theater className="w-6 h-6 text-white" />,
    desc: "Changes in personality & behaviour.",
  },
];

const SUPPORT_CONTACTS = [
  {
    name: "Dementia UK (Admiral Nurses)",
    desc: "Specialist clinical nurses for complex challenges.",
    phone: "0800 888 6678",
    email: "helpline@dementiauk.org",
  },
  {
    name: "Alzheimer's Society",
    desc: "For local carer groups and navigating social care.",
    phone: "0333 150 3456",
    url: "alzheimers.org.uk",
  },
  {
    name: "Carers UK",
    desc: "Focused on your rights and financial benefits.",
    phone: "0808 808 7777",
    email: "advice@carersuk.org",
  },
  {
    name: "Newcastle Carers",
    desc: "Localized, face-to-face support in the North East.",
    phone: "0191 275 5060",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(`edu-${id}`);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// ─── Shared UI ──────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
        <Heart className="h-6 w-6 text-primary" fill="currentColor" />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-bold text-foreground">
          Dementia<span className="text-primary">Logic</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function EducationHub() {
  const [activeSection, setActiveSection] = useState("understanding");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      let currentSection = "understanding";
      for (const section of SECTIONS) {
        const el = document.getElementById(`edu-${section.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));

      // Track scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.round((window.scrollY / totalHeight) * 100), 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ── Header / Nav ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary transition-colors ${
                  item.label === "Education Hub"
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-foreground/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-opacity">
            <Headphones className="h-4 w-4" />
            Talk to an Expert
          </button>
        </div>
      </header>

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-primary/5">
        {/* Decorative blobs */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-sky-100/40 to-transparent"></div>

        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
            {/* Hero Content */}
            <div className="relative z-10 py-10 lg:py-14 space-y-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Education Hub
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                Clear answers for<br />
                a <span className="text-primary">complex</span> journey
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Evidence-based knowledge, practical tools, and compassionate care support — designed for caregivers, families, and professionals walking this path together.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5" /> 10 min read
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" /> Evidence-based
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> Updated May 2025
                </span>
              </div>
              <button
                onClick={() => scrollToSection("understanding")}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-95 transition-opacity"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Hero Image */}
            <div className="hidden lg:block relative py-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={educationHeroImg}
                  alt="Education Hub Hero"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ─────────────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          {/* Sticky Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[80px] py-8">
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); scrollToSection(s.id); }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all text-left ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {s.icon}
                    {s.label}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-foreground">Your Progress</span>
                  <span className="text-xs font-bold text-primary">{scrollProgress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">Keep going, you're doing great!</p>
              </div>
            </div>
          </aside>

          {/* Mobile sticky nav */}
          <div className="lg:hidden sticky top-[72px] z-30 bg-background/80 backdrop-blur-md rounded-2xl border border-border shadow-sm p-3 my-4">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setActiveSection(s.id); scrollToSection(s.id); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeSection === s.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {s.icon}
                  <span className="hidden md:inline">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div className="py-8 space-y-16 min-w-0">

            {/* ── Statistics Bar ──────────────────────────────────── */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl border border-border shadow-sm p-8">
              <div className="flex items-center gap-5 flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">900,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">people in the UK are living with dementia today.</p>
                  <p className="text-xs text-muted-foreground">You are not alone in this journey.</p>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border"></div>
              <div className="flex items-start gap-3 flex-grow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dementia is not a normal part of ageing.</p>
                  <p className="text-xs text-muted-foreground mt-1">It is caused by diseases of the brain. — Alzheimer's Society / NHS England</p>
                </div>
              </div>
            </div>

            {/* ── Section 1: Understanding Dementia ───────────────── */}
            <section id="edu-understanding">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 01
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Main content */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Understanding Dementia</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Dementia is an umbrella term for a range of conditions affecting memory, thinking, and social abilities. It can impact daily life, but understanding it is the first step towards support and care.
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Explore in detail <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right: Normal Aging vs Dementia */}
                <div className="space-y-5">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    Normal Aging vs Dementia
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Shield className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-emerald-800">Normal Aging</h5>
                      </div>
                      <p className="text-sm text-emerald-900/80 leading-relaxed">
                        Occasional forgetfulness, slower recall, but independent in daily life.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-rose-800">Dementia</h5>
                      </div>
                      <p className="text-sm text-rose-900/80 leading-relaxed">
                        Memory loss that disrupts daily life, changes in behaviour, memory, and communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 2: Types of Dementia ────────────────────── */}
            <section id="edu-types">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 02
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    The Different<br />Faces of Dementia
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Different diseases, Different patterns.<br />
                    Understanding the type helps guide the right care.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline whitespace-nowrap">
                  Learn about each type <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {DEMENTIA_TYPES.map((type) => (
                  <div
                    key={type.id}
                    className={`${type.bgLight} rounded-2xl border ${type.id === 'alzheimers' ? 'border-sky-200' : type.id === 'vascular' ? 'border-emerald-200' : type.id === 'lewy-body' ? 'border-amber-200' : 'border-violet-200'} p-5 text-center space-y-3 hover:shadow-md transition-shadow cursor-pointer`}
                  >
                    <div className={`w-12 h-12 rounded-2xl ${type.colorClass} flex items-center justify-center mx-auto shadow-sm`}>
                      {type.icon}
                    </div>
                    <h4 className="text-sm font-bold text-foreground leading-tight">{type.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 3: Taking Action ────────────────────────── */}
            <section id="edu-action">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 03
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">Taking Action</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Small steps today can make a big difference tomorrow. Every action counts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    step: 1,
                    title: "Keep a Symptom Diary",
                    icon: <NotebookPen className="w-5 h-5 text-primary" />,
                    desc: "Track changes in memory, behaviour, and daily routines to share with your doctor.",
                    color: "bg-sky-50 border-sky-200",
                  },
                  {
                    step: 2,
                    title: "Contacting the GP",
                    icon: <Stethoscope className="w-5 h-5 text-primary" />,
                    desc: "Your GP will run tests for assessment and guide referrals.",
                    color: "bg-emerald-50 border-emerald-200",
                  },
                  {
                    step: 3,
                    title: "The Specialist Referral",
                    icon: <FileText className="w-5 h-5 text-primary" />,
                    desc: "Specialist clinics help confirm the diagnosis and create a care plan.",
                    color: "bg-violet-50 border-violet-200",
                  },
                ].map((item) => (
                  <div key={item.step} className={`rounded-2xl border ${item.color} p-6 space-y-4 hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm">
                        {item.step}
                      </div>
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4: Inside the Memory Clinic ─────────────── */}
            <section id="edu-clinic">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 04
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
                {/* Left: Intro */}
                <div className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Inside the<br />Memory Clinic
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Assessments and scans help consultants look at every factor to guide the right path.
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    See the process <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right: Two sub-cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Cognitive Assessments */}
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 space-y-4">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-emerald-600" />
                      The Cognitive Assessments
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">A series of tools to measure memory, problem-solving, language and communication.</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">What they look at:</p>
                      <ul className="space-y-1.5">
                        {[
                          "Memory and concentration",
                          "Language and communication",
                          "Problem solving and planning",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Brain Scans */}
                  <div className="bg-sky-50 rounded-2xl border border-sky-100 p-6 space-y-4">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <ScanLine className="w-5 h-5 text-primary" />
                      Looking Inside the Brain: The Scans
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">Imaging tests allow clinical and other experts to diagnose conditions.</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <Eye className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">CT Scan</p>
                          <p className="text-[11px] text-muted-foreground">Quick and easily available to rule out other conditions.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <BrainCircuit className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">MRI</p>
                          <p className="text-[11px] text-muted-foreground">Detailed images of brain structure.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <TestTube className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">PET / SPECT Scan</p>
                          <p className="text-[11px] text-muted-foreground">Shows brain activity and changes in real-time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 5: Current Toolkit ──────────────────────── */}
            <section id="edu-toolkit">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 05
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">The Current Toolkit</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Treatments, therapies and community support to maintain quality of life and coping strategies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-md transition-shadow">
                  <Pill className="w-7 h-7 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">Medications and Therapies</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Medications can help manage symptoms and slow the progression of dementia.</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-md transition-shadow">
                  <Cookie className="w-7 h-7 text-emerald-600" />
                  <h4 className="text-sm font-bold text-foreground">The Mechanical Reality of Nutrition</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Nutrition matters. As skills change, simple mealtime changes make a real difference.</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-md transition-shadow">
                  <Dumbbell className="w-7 h-7 text-amber-500" />
                  <h4 className="text-sm font-bold text-foreground">Brain Healthy Habits</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Nutrition, exercise and sleep habits to keep the brain as healthy as possible.</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-md transition-shadow">
                  <Phone className="w-7 h-7 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">Your UK Support Network</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Reach out. There is help for you too as a caregiver.
                  </p>
                </div>
              </div>

              {/* UK Support Contacts */}
              <div className="mt-8 bg-sky-50 rounded-2xl border border-sky-100 p-6">
                <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" /> Key Support Numbers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SUPPORT_CONTACTS.map((c) => (
                    <div key={c.name} className="bg-white rounded-xl p-4 space-y-1.5">
                      <h5 className="font-bold text-foreground text-xs leading-tight">{c.name}</h5>
                      <p className="text-[11px] text-foreground/60">{c.desc}</p>
                      <p className="text-sm font-bold text-primary">{c.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Explore tools <ArrowRight className="w-4 h-4" />
              </button>
            </section>

            {/* ── Section 6: Behavioral Challenge ─────────────────── */}
            <section id="edu-bpsd">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 06
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-6 items-start">
                {/* Left: card with image hint */}
                <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">The Behavioral Challenge</h2>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Understanding behaviour is key to caring. It may look challenging but there's always a reason behind it.
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Learn how to respond <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right: Care Detective + PINCH ME */}
                <div className="space-y-5">
                  {/* Care Detective */}
                  <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <Search className="w-5 h-5 text-primary" />
                      Becoming a Care Detective
                    </h3>
                    <p className="text-sm text-muted-foreground">Observe. Understand. Respond.</p>

                    {/* PINCH ME Protocol */}
                    <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                      <h5 className="font-bold text-foreground mb-3 text-sm">The PINCH ME Framework</h5>
                      <div className="grid grid-cols-7 gap-2">
                        {[
                          { letter: "P", word: "Pain", color: "bg-rose-500" },
                          { letter: "I", word: "Infection", color: "bg-orange-500" },
                          { letter: "N", word: "Nutrition", color: "bg-amber-500" },
                          { letter: "C", word: "Constipation", color: "bg-yellow-500" },
                          { letter: "H", word: "Hydration", color: "bg-emerald-500" },
                          { letter: "M", word: "Medication", color: "bg-sky-500" },
                          { letter: "E", word: "Environment", color: "bg-indigo-500" },
                        ].map((item) => (
                          <div key={item.letter} className="text-center">
                            <div className={`${item.color} text-white rounded-xl p-2.5 text-lg font-black leading-none`}>
                              {item.letter}
                            </div>
                            <div className="text-[9px] font-bold uppercase tracking-wider text-foreground/60 mt-1.5">{item.word}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* De-escalation Gap */}
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5 flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">The De-escalation Gap</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed">
                        Learn why the practice of problem behaviour — it's the presence of understanding, connection, and the right environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ── Section 7: The Horizon (full-width dark) ──────────────── */}
      <section id="edu-horizon" className="relative mt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={horizonBgImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-8 py-16 lg:py-20">
          <div className="max-w-2xl space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              The Horizon
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              The future of dementia care<br />is <span className="text-emerald-400">already here.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <TestTube className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-xs font-bold">01</span>
              </div>
              <h4 className="text-lg font-bold text-white">The Blood Test Revolution</h4>
              <p className="text-sm text-white/70 leading-relaxed">Simple blood tests at your GP surgery will soon detect the toxic proteins associated with Alzheimer's years before the first memory slip.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-xs font-bold">02</span>
              </div>
              <h4 className="text-lg font-bold text-white">Disease-Modifying Therapies</h4>
              <p className="text-sm text-white/70 leading-relaxed">Breakthrough drugs that clear amyloid plaques from the brain, bringing us closer to slowing the progression of dementia.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-xs font-bold">03</span>
              </div>
              <h4 className="text-lg font-bold text-white">The Digital Ward</h4>
              <p className="text-sm text-white/70 leading-relaxed">Technology, AI, and digital care are rapidly changing outcomes, delivering real-time clinical decisions every day.</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-emerald-500 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-white" />
              <p className="text-sm font-semibold text-white">The next chapter is being written today. And you're part of it.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white text-emerald-700 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
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

      {/* ── Sticky Bottom Bar ─────────────────────────────────────── */}
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
    </div>
  );
}
