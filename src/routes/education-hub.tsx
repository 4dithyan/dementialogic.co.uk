import React, { useState, useEffect } from "react";
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
  { id: "understanding", label: "Understanding Dementia", icon: <Brain className="w-5 h-5" /> },
  { id: "types", label: "Different Types", icon: <Puzzle className="w-5 h-5" /> },
  { id: "action", label: "Taking Action", icon: <Compass className="w-5 h-5" /> },
  { id: "clinic", label: "Inside the Memory Clinic", icon: <Stethoscope className="w-5 h-5" /> },
  { id: "toolkit", label: "Current Toolkit", icon: <Pill className="w-5 h-5" /> },
  { id: "bpsd", label: "Behavioral Challenge", icon: <Activity className="w-5 h-5" /> },
  { id: "horizon", label: "The Horizon", icon: <Sparkles className="w-5 h-5" /> },
];

const DEMENTIA_TYPES = [
  {
    id: "alzheimers",
    name: "Alzheimer's Disease",
    nickname: "The Memory Thief",
    colorClass: "bg-sky-500",
    bgLight: "bg-sky-50",
    textColor: "text-sky-800",
    borderColor: "border-sky-200",
    icon: <Brain className="w-6 h-6 text-white" />,
    what: "The most common form, caused by an abnormal build-up of proteins (amyloid plaques and tau tangles) that strangle and kill brain cells.",
    symptoms: "It usually begins in the hippocampus, the brain's memory center. The hallmark is short-term memory loss—asking the same question repeatedly—while memories from forty years ago remain crystal clear.",
    progression: "The decline is typically a slow, steady downward slope.",
  },
  {
    id: "vascular",
    name: "Vascular Dementia",
    nickname: "The Step-wise Decline",
    colorClass: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-200",
    icon: <Heart className="w-6 h-6 text-white" />,
    what: "Caused by reduced blood flow to the brain, often due to a series of mini-strokes (TIAs) or diseased small blood vessels.",
    symptoms: "Rather than profound memory loss, the first signs are often problems with planning, organizing, making decisions, or a sudden slowing of thought.",
    progression: 'It is often "step-wise." A person might remain stable for months, have a sudden drop in ability due to another minor vascular event, and then stabilize at that new, lower level.',
  },
  {
    id: "lewy-body",
    name: "Dementia with Lewy Bodies (DLB)",
    nickname: "The Fluctuation",
    colorClass: "bg-amber-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-800",
    borderColor: "border-amber-200",
    icon: <Waves className="w-6 h-6 text-white" />,
    what: "Caused by protein deposits called Lewy bodies in nerve cells. It is closely related to Parkinson's disease.",
    symptoms: "Memory is often intact early on. Instead, individuals experience vivid visual hallucinations, severe sleep disturbances (acting out dreams), and physical symptoms like a shuffling walk or stiffness.",
    progression: "Symptoms fluctuate wildly. A person might be completely lucid on Tuesday and profoundly confused on Wednesday. They are also highly sensitive to certain anti-psychotic medications, making accurate diagnosis critical.",
  },
  {
    id: "ftd",
    name: "Frontotemporal Dementia (FTD)",
    nickname: "The Personality Shift",
    colorClass: "bg-violet-500",
    bgLight: "bg-violet-50",
    textColor: "text-violet-800",
    borderColor: "border-violet-200",
    icon: <Theater className="w-6 h-6 text-white" />,
    what: "Involves damage to the frontal and temporal lobes. It frequently strikes younger people, often between 45 and 65.",
    symptoms: "Memory remains strong, but personality changes drastically. A polite person might become impulsive, socially inappropriate, or develop compulsions. It can also severely impact language.",
    progression: "It presents as a behavioral or psychiatric issue first, often leading to misdiagnoses of depression before the brain disease is identified.",
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

function DementiaTypeCard({ type }: { type: typeof DEMENTIA_TYPES[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-2xl border-2 ${expanded ? 'border-primary shadow-md' : type.borderColor + ' shadow-sm'} overflow-hidden transition-all duration-300 bg-background`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-4 p-5 text-left ${type.bgLight} transition-colors hover:opacity-90`}
      >
        <div className={`w-14 h-14 rounded-2xl ${type.colorClass} flex items-center justify-center flex-shrink-0 shadow-sm`}>
          {type.icon}
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="text-lg font-bold text-foreground">{type.name}</h4>
          <p className={`text-base font-semibold ${type.textColor}`}>{type.nickname}</p>
        </div>
        <div className={`flex-shrink-0 ${type.textColor}`}>
          {expanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-4 border-t border-border space-y-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">What it is</p>
              <p className="text-base text-foreground/90 leading-relaxed">{type.what}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">Typical Symptoms</p>
              <p className="text-base text-foreground/90 leading-relaxed">{type.symptoms}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">The Progression</p>
              <p className="text-base text-foreground/90 leading-relaxed">{type.progression}</p>
            </div>
          </div>
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
          <Link to="/about" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-opacity">
            <Headphones className="h-4 w-4" />
            Talk to an Expert
          </Link>
        </div>
      </header>

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-primary/5">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-sky-100/40 to-transparent"></div>

        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
            {/* Hero Content */}
            <div className="relative z-10 py-10 lg:py-14 space-y-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                Education Hub
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                Clear answers for<br />
                a <span className="text-primary">complex</span> journey
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                Evidence-based knowledge, practical tools, and compassionate care support — designed for caregivers, families, and professionals walking this path together.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <Clock className="w-4 h-4" /> 10 min read
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-500" /> Evidence-based
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1.5">
                  <CalendarDays className="w-4 h-4" /> Updated May 2025
                </span>
              </div>
              <button
                onClick={() => scrollToSection("understanding")}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:opacity-95 transition-opacity"
              >
                Start Exploring
                <ArrowRight className="w-5 h-5" />
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
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          {/* Sticky Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[80px] py-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">On this page</h4>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); scrollToSection(s.id); }}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all text-left ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {s.icon}
                    {s.label}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Your Progress</span>
                  <span className="text-sm font-bold text-primary">{scrollProgress}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Keep going, you're doing great!</p>
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
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {s.icon}
                  <span className="hidden md:inline">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div className="py-8 space-y-20 min-w-0">

            {/* ── Statistics Bar ──────────────────────────────────── */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl border border-border shadow-sm p-8">
              <div className="flex items-center gap-5 flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">900,000+</p>
                  <p className="text-base text-foreground/80 mt-0.5">people in the UK are living with dementia today.</p>
                  <p className="text-sm text-foreground/70">You are not alone in this journey.</p>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border"></div>
              <div className="flex items-start gap-3 flex-grow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">Dementia is not a normal part of ageing.</p>
                  <p className="text-sm text-foreground/70 mt-1">It is caused by diseases of the brain. — Alzheimer's Society / NHS England</p>
                </div>
              </div>
            </div>

            {/* ── Section 1: Understanding Dementia ───────────────── */}
            <section id="edu-understanding">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 01
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">Understanding Dementia</h2>

              {/* Key callout */}
              <div className="bg-sky-50 rounded-2xl p-6 border-l-4 border-primary mb-8">
                <p className="text-base text-foreground leading-relaxed">
                  Let's clear up the most common misconception right now: <strong className="text-foreground">dementia is not a normal or inevitable part of aging.</strong> Getting older means your joints might ache and it might take you a few seconds longer to remember a name. Dementia is different. It is an umbrella term for a group of progressive diseases that physically damage the brain's structure and chemistry.
                </p>
              </div>

              {/* Two-column: Intro left / Comparison right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <p className="text-base text-foreground/90 leading-relaxed">
                    Dementia is an umbrella term for a range of conditions affecting memory, thinking, and social abilities. It can impact daily life, but understanding it is the first step towards support and care.
                  </p>
                  <p className="text-base text-foreground/90 leading-relaxed italic">
                    Think of the brain as a massive, complex filing cabinet.
                  </p>
                </div>

                {/* Normal Aging vs Dementia */}
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    Normal Aging vs Dementia
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h5 className="font-bold text-emerald-900 text-lg">Normal Aging</h5>
                      </div>
                      <p className="text-base text-emerald-900/90 leading-relaxed">
                        You walk into a room and forget why you went in there, or you temporarily misplace your car keys. The "file" is still in the cabinet; it just took you a minute to find it.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <h5 className="font-bold text-rose-900 text-lg">Dementia</h5>
                      </div>
                      <p className="text-base text-rose-900/90 leading-relaxed">
                        You look at the car keys and no longer understand what they are used for, or you get lost walking home from the local shop you've visited for thirty years. The "file" hasn't just been misplaced; the paper it was written on has been destroyed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight callout */}
              <div className="flex items-start gap-4 bg-amber-50 rounded-2xl p-6 border border-amber-200 mt-8">
                <CircleAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-base text-amber-900 leading-relaxed">
                  <strong>Key Insight:</strong> Dementia affects more than just memory. It attacks cognitive functions like reasoning, language, spatial awareness, and the ability to regulate emotions. Recognizing that this is a physical breakdown of brain tissue—not someone "being difficult"—is the first and most crucial step in providing the right care.
                </p>
              </div>
            </section>

            {/* ── Section 2: Types of Dementia ────────────────────── */}
            <section id="edu-types">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 02
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                The Different Faces of Dementia
              </h2>
              <p className="text-base text-foreground/80 mb-4">
                Different diseases, different patterns. Understanding the type helps guide the right care.
              </p>
              <p className="text-base text-foreground/90 mb-8 leading-relaxed">
                "Dementia" is just the broad category. To get the right help, you need to understand the specific disease driving the symptoms. While there are over 100 types, four main subtypes account for the vast majority of cases. They each attack the brain differently. <strong>Tap on each type below to learn more.</strong>
              </p>

              {/* Icon cards row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {DEMENTIA_TYPES.map((type) => (
                  <div
                    key={type.id}
                    className={`${type.bgLight} rounded-2xl border ${type.borderColor} p-5 text-center space-y-3 cursor-default`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${type.colorClass} flex items-center justify-center mx-auto shadow-sm`}>
                      {type.icon}
                    </div>
                    <h4 className="text-base font-bold text-foreground leading-tight">{type.name}</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{type.nickname}</p>
                  </div>
                ))}
              </div>

              {/* Expandable detail cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEMENTIA_TYPES.map((type) => (
                  <DementiaTypeCard key={type.id} type={type} />
                ))}
              </div>
            </section>

            {/* ── Section 3: Taking Action ────────────────────────── */}
            <section id="edu-action">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 03
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">Taking Action</h2>
              <p className="text-base text-foreground/80 mb-4">When You Suspect Something is Wrong</p>

              {/* Denial warning */}
              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 mb-8">
                <p className="text-base text-rose-900 leading-relaxed">
                  <strong>Denial is the most common first reaction</strong> to dementia symptoms. Families often cover up the gaps to avoid an uncomfortable truth. But ignoring the signs is the worst option. Early diagnosis opens the door to treatments that buy time, legal planning, and vital support systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: 1,
                    title: "Keep a 'Symptom Diary'",
                    icon: <NotebookPen className="w-6 h-6 text-primary" />,
                    desc: "Doctors need patterns, not just anecdotes. Write down specific incidents: 'Tuesday, 4 PM: Dad got lost driving back from the post office.' Having this concrete evidence makes the GP appointment vastly more productive.",
                    color: "bg-sky-50 border-sky-200",
                  },
                  {
                    step: 2,
                    title: "Contacting the GP",
                    icon: <Stethoscope className="w-6 h-6 text-primary" />,
                    desc: "Your GP is the gatekeeper. Book a double appointment if possible. The GP's first job isn't to diagnose dementia—it's to rule out everything else. They will order blood tests and check urine because severe vitamin B12 deficiency, underactive thyroids, and urinary tract infections (UTIs) can perfectly mimic dementia symptoms.",
                    color: "bg-emerald-50 border-emerald-200",
                  },
                  {
                    step: 3,
                    title: "The Specialist Referral",
                    icon: <FileText className="w-6 h-6 text-primary" />,
                    desc: "If basic tests are clear, the GP will initiate a referral to a Memory Assessment Service, an Old Age Psychiatry clinic, or a neurologist. Use the waiting time to gather financial and legal documents (like Lasting Power of Attorney) while your loved one still has full capacity to sign them.",
                    color: "bg-violet-50 border-violet-200",
                  },
                ].map((item) => (
                  <div key={item.step} className={`rounded-2xl border ${item.color} p-6 space-y-4 hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">
                        {item.step}
                      </div>
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-base text-foreground/85 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4: Inside the Memory Clinic ─────────────── */}
            <section id="edu-clinic">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 04
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
                {/* Left: Intro */}
                <div className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Inside the<br />Memory Clinic
                  </h2>
                  <p className="text-base text-foreground/85 leading-relaxed">
                    Walking into a memory clinic can be intimidating. Understanding what happens behind those doors strips away the fear. The goal is to paint a complete picture of how the brain is functioning.
                  </p>
                  <p className="text-base text-foreground/85 leading-relaxed">
                    Assessments and scans help consultants look at every factor to guide the right path.
                  </p>
                </div>

                {/* Right: Two sub-cards side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Cognitive Assessments */}
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-emerald-600" />
                      The Cognitive Assessments
                    </h3>
                    <p className="text-base text-foreground/85 leading-relaxed">
                      A series of tools to measure memory, problem-solving, language and communication. You will be asked to complete puzzles using standardized tools like the <strong>ACE-III</strong> or the <strong>MoCA</strong>.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-foreground">What they look for:</p>
                      <ul className="space-y-2">
                        {[
                          "Drawing a clock face to test visuospatial skills",
                          "Remembering an address for five minutes",
                          "Naming animals to test language recall",
                          "Memory and concentration tests",
                          "Problem solving and planning exercises",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-base text-foreground/85">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Brain Scans */}
                  <div className="bg-sky-50 rounded-2xl border border-sky-100 p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <ScanLine className="w-5 h-5 text-primary" />
                      Looking Inside the Brain: The Scans
                    </h3>
                    <p className="text-base text-foreground/85 leading-relaxed">
                      To confirm the type of dementia, imaging tests allow clinicians to look at the brain's hardware directly.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-primary flex-shrink-0 mt-0.5"><Eye className="w-5 h-5" /></div>
                        <div>
                          <p className="text-base font-bold text-foreground">CT Scan</p>
                          <p className="text-sm text-foreground/80">Takes X-ray slices of the brain to check for tumors, old strokes, or obvious shrinkage.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5"><BrainCircuit className="w-5 h-5" /></div>
                        <div>
                          <p className="text-base font-bold text-foreground">MRI</p>
                          <p className="text-sm text-foreground/80">Highly detailed scan showing specific areas where tissue is dying (e.g., hippocampal shrinkage points to Alzheimer's).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5"><TestTube className="w-5 h-5" /></div>
                        <div>
                          <p className="text-base font-bold text-foreground">PET / DAT Scans</p>
                          <p className="text-sm text-foreground/80">A DAT scan checks dopamine systems to confirm Lewy Body Dementia. A PET scan shows how the brain metabolizes glucose.</p>
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
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 05
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">The Current Toolkit</h2>
              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                While we do not yet have a cure, modern care relies on a powerful blend of pharmacological tools, therapeutic interventions, and robust community support.
              </p>

              {/* Medications */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Pill className="w-6 h-6 text-primary" /> Medications and Therapies
                </h3>
                <p className="text-base text-foreground/85 leading-relaxed">
                  Medications known as <strong>Acetylcholinesterase inhibitors</strong> (like Donepezil) are often prescribed to temporarily boost cognitive function and stabilize symptoms. Alongside medication, <strong>Cognitive Stimulation Therapy (CST)</strong> is an evidence-based group therapy proven to improve quality of life and cognition.
                </p>
              </div>

              {/* Nutrition */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-emerald-600" /> The Mechanical Reality of Nutrition
                </h3>
                <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                  As dementia progresses, eating becomes a mechanical and sensory challenge.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <Palette className="w-6 h-6 text-rose-500" />, title: "The 'White Plate' Problem", desc: "Dementia damages visual perception. Mashed potatoes on a white plate are invisible. Use brightly colored plates (like red or blue) to create high contrast." },
                    { icon: <HandHeart className="w-6 h-6 text-amber-500" />, title: "Finger Foods", desc: "As fine motor skills decline, switch to high-calorie finger foods so they can maintain independence and eat while pacing." },
                    { icon: <Sparkles className="w-6 h-6 text-purple-500" />, title: "The Sweet Craving", desc: "Damage to the brain can dull taste buds, leaving 'sweet' as the only flavor they register. If they refuse dinner but eat dessert, fortify sweet foods with protein or cream." },
                    { icon: <GlassWater className="w-6 h-6 text-blue-500" />, title: "Hydration", desc: "Dehydration causes delirium. The brain's thirst mechanism often breaks, so don't just ask if they are thirsty. Hand them a cup or offer high-water foods regularly." },
                  ].map((n) => (
                    <div key={n.title} className="rounded-2xl bg-muted/30 p-6 border border-border space-y-3 hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-3">
                        {n.icon}
                        <h5 className="font-bold text-foreground text-base">{n.title}</h5>
                      </div>
                      <p className="text-base text-foreground/85 leading-relaxed">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UK Support Contacts */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary" /> Your UK Support Network
                </h3>
                <p className="text-base text-foreground/80 mb-6">You should not do this alone. Save these numbers.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SUPPORT_CONTACTS.map((c) => (
                    <div key={c.name} className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-2 hover:shadow-sm transition-shadow">
                      <h5 className="font-bold text-foreground text-base leading-tight">{c.name}</h5>
                      <p className="text-sm text-foreground/80">{c.desc}</p>
                      <p className="text-lg font-bold text-primary">{c.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 6: Behavioral Challenge ─────────────────── */}
            <section id="edu-bpsd">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Section 06
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-6 items-start">
                {/* Left: Intro card */}
                <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">The Behavioral Challenge</h2>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    As memory loss progresses, it often takes a back seat to behavioral changes. We call these <strong>Behavioral and Psychological Symptoms of Dementia (BPSD)</strong>. This includes extreme agitation, wandering, paranoia, and sleep inversion.
                  </p>
                  <div className="bg-white/60 rounded-xl p-4 border border-rose-100">
                    <p className="text-base text-rose-900 leading-relaxed">
                      <strong>Let's be blunt:</strong> attempting to use logic or arguing to stop these behaviors is a losing battle. The person's frontal lobes—the part of the brain responsible for impulse control—are physically damaged. <strong>Behavior is their only remaining language.</strong> When they hit out or pace relentlessly, it is almost always driven by an unmet need.
                    </p>
                  </div>
                </div>

                {/* Right: Care Detective + PINCH ME */}
                <div className="space-y-5">
                  {/* Care Detective */}
                  <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Search className="w-5 h-5 text-primary" />
                      Becoming a Care Detective
                    </h3>
                    <p className="text-base text-foreground/85 leading-relaxed">
                      When called out to a care home or a family's living room, we don't rush to sedate a person who is agitated. We assume it is a physical cry for help. A brain with dementia cannot always localize pain or articulate illness.
                    </p>

                    {/* PINCH ME Protocol */}
                    <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                      <h5 className="font-bold text-foreground mb-2 text-base">The PINCH ME Framework</h5>
                      <p className="text-sm text-foreground/80 mb-4">A clinical framework to rapidly scan for hidden triggers.</p>
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
                            <div className={`${item.color} text-white rounded-xl p-3 text-xl font-black leading-none`}>
                              {item.letter}
                            </div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/70 mt-1.5">{item.word}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-foreground/80 mt-4">Once we rule out the physical, we audit the environment. Is the TV too loud? Is the lighting casting terrifying shadows?</p>
                    </div>
                  </div>

                  {/* De-escalation Gap */}
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500" />
                      The De-escalation Gap
                    </h4>
                    <p className="text-base text-foreground/85 leading-relaxed mb-4">
                      Knowing that behavior has a root cause is one thing; knowing exactly what to say and do in the heat of a crisis is another. Families often escalate a situation accidentally by arguing with the dementia or letting their own stress visibly show (the <strong>"Mirror Match" effect</strong>).
                    </p>
                    <p className="text-base text-emerald-900 leading-relaxed">
                      Professional caregivers use specific <strong>verbal scripts</strong>, <strong>distraction techniques</strong>, and personalized <strong>"Identity Anchors"</strong> to safely ground a person in distress. Our goal is to take those exact, proprietary clinical playbooks and put them directly into your hands when you need them most.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ── Section 7: The Horizon (full-width dark) ──────────────── */}
      <section id="edu-horizon" className="relative mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={horizonBgImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-8 py-16 lg:py-20">
          <div className="max-w-2xl space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              The Horizon
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              The future of dementia care<br />is <span className="text-emerald-400">already here.</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              For decades, a dementia diagnosis felt like walking off a map. The medical advice often boiled down to "get your affairs in order." Today, we are standing on the edge of a clinical revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <TestTube className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-sm font-bold">01</span>
              </div>
              <h4 className="text-xl font-bold text-white">The Blood Test Revolution</h4>
              <p className="text-base text-white/80 leading-relaxed">
                Historically, diagnosis required expensive brain scans. Soon, simple blood tests at your GP surgery will detect the toxic proteins associated with Alzheimer's years before the first memory slip occurs. Treating dementia early is like fighting a fire: if you attack it while it's still in the kitchen, you can save the house.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-sm font-bold">02</span>
              </div>
              <h4 className="text-xl font-bold text-white">Disease-Modifying Therapies</h4>
              <p className="text-base text-white/80 leading-relaxed">
                We are entering the era of drugs (like Lecanemab) that actually clear amyloid plaques from the brain, slowing clinical decline. However, these are not silver bullets. They do not reverse existing damage and require heavy monitoring. They represent a major breakthrough, but they do not eliminate the daily, grinding reality of behavioral challenges at home.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/60 text-sm font-bold">03</span>
              </div>
              <h4 className="text-xl font-bold text-white">The Digital Ward</h4>
              <p className="text-base text-white/80 leading-relaxed mb-4">
                The greatest gap in dementia care isn't a lack of medical knowledge; it's that the knowledge is trapped in the hospital. When a family faces severe agitation in the middle of the night, waiting three weeks for a clinic appointment is useless. The future of care is digital.
              </p>
              <ul className="text-base text-white/75 space-y-2 list-disc list-inside">
                <li><strong className="text-white/90">Predictive Tracking:</strong> Smart applications will help track daily patterns to spot early warning signs.</li>
                <li><strong className="text-white/90">Real-Time Playbooks:</strong> When distress hits, caregivers will access rapid de-escalation scripts.</li>
                <li><strong className="text-white/90">Clinical Safety:</strong> "Human-in-the-Loop" architecture — algorithms process data, but every care plan is verified by human logic.</li>
              </ul>
            </div>
          </div>

          {/* Closing statement */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6">
            <p className="text-lg text-white/90 leading-relaxed font-semibold">
              The defining shift in the next decade of dementia care isn't just about extending life; it is about fiercely protecting dignity. By combining biological detection with powerful digital support in the community, we are stripping away the guesswork.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-emerald-500 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-white" />
              <p className="text-base font-semibold text-white">The next chapter is being written today. And you're part of it.</p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-emerald-700 px-5 py-2.5 text-base font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-base text-foreground/70">
              We support individuals living with dementia and the people who care for them.
            </p>
            <div className="mt-4 flex gap-3 text-foreground/60">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <div className="text-base font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-3 text-base text-foreground/70">
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
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-8 py-5 text-sm text-foreground/60">
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
            <div className="text-base">
              <span className="font-semibold text-foreground">You don't have to face this alone.</span>{" "}
              <span className="text-foreground/80">We're here to listen, guide and support you.</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <div className="text-base">
              <div>
                <span className="font-semibold text-foreground">Need to talk now?</span>{" "}
                <span className="font-semibold text-foreground">We're here.</span>
              </div>
              <div className="text-foreground/80">Reach out for a caring conversation.</div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-5 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors">
              <Headphones className="h-4 w-4" />
              Talk to someone
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
