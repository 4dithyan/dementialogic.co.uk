import React, { useState, useEffect, useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
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
  Users
} from "lucide-react";

export const Route = createFileRoute("/education-hub")({
  component: EducationHub,
  head: () => ({
    meta: [
      { title: "Education Hub | DementiaLogic" },
      {
        name: "description",
        content: "Clear answers for a complex journey. Learn the clinical truth about dementia, its types, and how to fight back.",
      },
    ],
  }),
});

// ─── Constants for Navigation & Contacts ──────────────────────────────
const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", hasDropdown: false },
];

const footerCols = [
  { title: "Home", links: ["Waitlist"] },
  { title: "About Us", links: ["Founder profiles", "Clinical credentials", "Our Story"] },
  { title: "Education Hub", links: ["Clinically authored articles"] },
  { title: "Interactive Tools", links: ["Caregiver Reality Check", "Dementia Trigger Decoder"] },
];

const SECTIONS = [
  { id: "understanding", label: "Understanding Dementia", icon: <Brain className="w-4 h-4" /> },
  { id: "types", label: "Types of Dementia", icon: <Puzzle className="w-4 h-4" /> },
  { id: "action", label: "Taking Action", icon: <Compass className="w-4 h-4" /> },
  { id: "clinic", label: "Memory Clinic", icon: <Stethoscope className="w-4 h-4" /> },
  { id: "toolkit", label: "Current Toolkit", icon: <Pill className="w-4 h-4" /> },
  { id: "bpsd", label: "Behavioral Challenge", icon: <Activity className="w-4 h-4" /> },
  { id: "horizon", label: "The Horizon", icon: <Sparkles className="w-4 h-4" /> },
];

const DEMENTIA_TYPES = [
  {
    id: "alzheimers",
    name: "Alzheimer's Disease",
    nickname: "The Memory Thief",
    colorClass: "bg-sky-500",
    bgLight: "bg-sky-50",
    textColor: "text-sky-700",
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
    textColor: "text-emerald-700",
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
    textColor: "text-amber-700",
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
    textColor: "text-violet-700",
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
    // Offset for header + sticky nav
    const y = el.getBoundingClientRect().top + window.scrollY - 160;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// ─── Shared UI Components ─────────────────────────────────────────────
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

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <span className="inline-flex items-center gap-2 bg-sky-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
        Section {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h3>
      {subtitle && <p className="text-base text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function ContentCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-3xl border border-border shadow-sm p-8 md:p-10 ${className}`}>
      {children}
    </div>
  );
}

function DementiaTypeCard({ type }: { type: typeof DEMENTIA_TYPES[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-2xl border ${expanded ? 'border-primary shadow-md' : type.borderColor + ' shadow-sm'} overflow-hidden transition-all duration-300 bg-background`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-4 p-6 text-left ${type.bgLight} transition-colors hover:opacity-90`}
      >
        <div className={`w-12 h-12 rounded-2xl ${type.colorClass} flex items-center justify-center flex-shrink-0 shadow-sm`}>
          {type.icon}
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="text-lg font-bold text-foreground truncate">{type.name}</h4>
          <p className={`text-sm font-semibold ${type.textColor}`}>{type.nickname}</p>
        </div>
        <div className={`flex-shrink-0 ${type.textColor}`}>
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-4 border-t border-border space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">What it is</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{type.what}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Typical Symptoms</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{type.symptoms}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">The Progression</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{type.progression}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
function EducationHub() {
  const [activeSection, setActiveSection] = useState("understanding");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "understanding";
      for (const section of SECTIONS) {
        const el = document.getElementById(`edu-${section.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 170) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-muted/20 font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full bg-background border-b border-border/40 shadow-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary [&.active]:text-primary ${
                    item.label === "Education Hub" ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary ${
                    item.label === "Education Hub" ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              )
            )}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">
            <Headphones className="h-4 w-4" />
            Talk to someone
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-8 py-10 space-y-8">
        
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-50 via-white to-primary/5 px-8 py-8 md:px-14 md:py-10 text-left shadow-sm border border-border">
          {/* Subtle Decorative Blobs */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"></div>
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-200/20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
                The Dementia Education Hub
              </h2>
              <p className="text-xl md:text-3xl text-primary font-semibold tracking-tight">
                Clear Answers for a Complex Journey
              </p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl text-balance">
              The raw, unvarnished reality of dementia care is something we see every day working in the community and care homes across Newcastle upon Tyne. When a behavioral crisis happens at 2 AM, sympathy won't help you. You don't need platitudes; you need a strategy. This hub is designed to strip away the jargon and give you the clinical truth about what this disease is, how it works, and how to fight back.
            </p>
          </div>
        </div>

        {/* Section Navigation */}
        <nav className="sticky top-[80px] z-30 bg-background/80 backdrop-blur-md rounded-2xl border border-border shadow-sm p-3">
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
        </nav>

        {/* Section 1: Understanding Dementia */}
        <section id="edu-understanding">
          <ContentCard>
            <SectionHeading number="1" title="Understanding Dementia" subtitle="It's a Disease, Not Just 'Getting Old'" />
            <div className="space-y-8">
              <div className="bg-sky-50 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-base text-foreground/80 leading-relaxed">
                  Let's clear up the most common misconception right now: <strong className="text-foreground">dementia is not a normal or inevitable part of aging.</strong> Getting older means your joints might ache and it might take you a few seconds longer to remember a name. Dementia is different. It is an umbrella term for a group of progressive diseases that physically damage the brain's structure and chemistry.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 bg-muted/50 rounded-2xl p-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">900,000+</p>
                  <p className="text-sm text-muted-foreground mt-1">people living with dementia in the UK. Yet, despite how common it is, the line between normal aging and early dementia often confuses families.</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Normal Aging vs. Dementia: What's the Difference?
                </h4>
                <p className="text-sm text-muted-foreground mb-6 italic">Think of the brain as a massive, complex filing cabinet.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-emerald-800 text-lg">Normal Aging</h5>
                    </div>
                    <p className="text-sm text-emerald-900/80 leading-relaxed">
                      You walk into a room and forget why you went in there, or you temporarily misplace your car keys. The "file" is still in the cabinet; it just took you a minute to find it.
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-rose-800 text-lg">Dementia</h5>
                    </div>
                    <p className="text-sm text-rose-900/80 leading-relaxed">
                      You look at the car keys and no longer understand what they are used for, or you get lost walking home from the local shop you've visited for thirty years. The "file" hasn't just been misplaced; the paper it was written on has been destroyed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <CircleAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong>Key Insight:</strong> Dementia affects more than just memory. It attacks cognitive functions like reasoning, language, spatial awareness, and the ability to regulate emotions. Recognizing that this is a physical breakdown of brain tissue—not someone "being difficult"—is the first and most crucial step in providing the right care.
                </p>
              </div>
            </div>
          </ContentCard>
        </section>

        {/* Section 2: Types of Dementia */}
        <section id="edu-types">
          <ContentCard>
            <SectionHeading
              number="2"
              title="The Different Faces of Dementia"
              subtitle="While there are over 100 types, four main subtypes account for the vast majority of cases."
            />
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              "Dementia" is just the broad category. To get the right help, you need to understand the specific disease driving the symptoms. They each attack the brain differently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEMENTIA_TYPES.map((type) => (
                <DementiaTypeCard key={type.id} type={type} />
              ))}
            </div>
          </ContentCard>
        </section>

        {/* Section 3: Taking Action */}
        <section id="edu-action">
          <ContentCard>
            <SectionHeading number="3" title="Taking Action" subtitle="When You Suspect Something is Wrong" />
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 mb-8">
              <p className="text-sm text-rose-900 leading-relaxed">
                <strong>Denial is the most common first reaction</strong> to dementia symptoms. Families often cover up the gaps to avoid an uncomfortable truth. But ignoring the signs is the worst option. Early diagnosis opens the door to treatments that buy time, legal planning, and vital support systems.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { step: 1, title: "Keep a 'Symptom Diary'", icon: <NotebookPen className="w-5 h-5 text-primary" />, desc: "Doctors need patterns, not just anecdotes. Write down specific incidents: 'Tuesday, 4 PM: Dad got lost driving back from the post office.' Having this concrete evidence makes the GP appointment vastly more productive." },
                { step: 2, title: "Contacting the GP", icon: <Stethoscope className="w-5 h-5 text-primary" />, desc: "Your GP is the gatekeeper. Book a double appointment if possible. The GP's first job isn't to diagnose dementia—it's to rule out everything else. They will order blood tests and check urine because severe vitamin B12 deficiency, underactive thyroids, and urinary tract infections (UTIs) can perfectly mimic dementia symptoms." },
                { step: 3, title: "The Specialist Referral", icon: <FileText className="w-5 h-5 text-primary" />, desc: "If basic tests are clear, the GP will initiate a referral to a Memory Assessment Service, an Old Age Psychiatry clinic, or a neurologist. Use the waiting time to gather financial and legal documents (like Lasting Power of Attorney) while your loved one still has full capacity to sign them." }
              ].map((item, idx) => (
                <React.Fragment key={item.step}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {idx !== 2 && <div className="ml-7 border-l-2 border-dashed border-border h-4" />}
                </React.Fragment>
              ))}
            </div>
          </ContentCard>
        </section>

        {/* Section 4: Memory Clinic */}
        <section id="edu-clinic">
          <ContentCard>
            <SectionHeading number="4" title="Inside the Memory Clinic" subtitle="Assessments and Scans" />
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Walking into a memory clinic can be intimidating. Understanding what happens behind those doors strips away the fear. The goal is to paint a complete picture of how the brain is functioning.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-emerald-600" />
                  The Cognitive Assessments
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  You will be asked to complete puzzles using standardized tools like the <strong>ACE-III</strong> or the <strong>MoCA</strong>.
                </p>
                <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">What they look for</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    You might be asked to draw a clock face, remember an address for five minutes, or name animals. These rigorously test executive function, visuospatial skills, language, and memory recall.
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <ScanLine className="w-5 h-5 text-primary" />
                  Looking Inside the Brain: The Scans
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  To confirm the type of dementia, we look at the hardware.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-primary flex-shrink-0 mt-0.5"><Eye className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold text-foreground">CT Scan</p>
                      <p className="text-xs text-muted-foreground">Takes X-ray slices of the brain to check for tumors, old strokes, or obvious shrinkage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5"><BrainCircuit className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold text-foreground">MRI</p>
                      <p className="text-xs text-muted-foreground">Highly detailed scan showing specific areas where tissue is dying (e.g., hippocampal shrinkage points to Alzheimer's).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5"><TestTube className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold text-foreground">PET or DAT Scans</p>
                      <p className="text-xs text-muted-foreground">A DAT scan checks dopamine systems to confirm Lewy Body Dementia. A PET scan shows how the brain metabolizes glucose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>
        </section>

        {/* Section 5: Current Toolkit */}
        <section id="edu-toolkit">
          <ContentCard>
            <SectionHeading number="5" title="The Current Toolkit" subtitle="Treatments, Nutrition, and UK Support" />
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              While we do not yet have a cure, modern care relies on a powerful blend of pharmacological tools, therapeutic interventions, and robust community support.
            </p>
            <div className="mb-10">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-primary" /> Medications and Therapies
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Medications known as <strong>Acetylcholinesterase inhibitors</strong> (like Donepezil) are often prescribed to temporarily boost cognitive function and stabilize symptoms. Alongside medication, <strong>Cognitive Stimulation Therapy (CST)</strong> is an evidence-based group therapy proven to improve quality of life and cognition.
              </p>
            </div>
            <div className="mb-10">
              <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-emerald-600" /> The Mechanical Reality of Nutrition
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                As dementia progresses, eating becomes a mechanical and sensory challenge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Palette className="w-5 h-5 text-rose-500" />, title: "The 'White Plate' Problem", desc: "Dementia damages visual perception. Mashed potatoes on a white plate are invisible. Use brightly colored plates (like red or blue) to create high contrast." },
                  { icon: <HandHeart className="w-5 h-5 text-amber-500" />, title: "Finger Foods", desc: "As fine motor skills decline, switch to high-calorie finger foods so they can maintain independence and eat while pacing." },
                  { icon: <Sparkles className="w-5 h-5 text-purple-500" />, title: "The Sweet Craving", desc: "Damage to the brain can dull taste buds, leaving 'sweet' as the only flavor they register. If they refuse dinner but eat dessert, fortify sweet foods with protein or cream." },
                  { icon: <GlassWater className="w-5 h-5 text-blue-500" />, title: "Hydration", desc: "Dehydration causes delirium. The brain's thirst mechanism often breaks, so don't just ask if they are thirsty. Hand them a cup or offer high-water foods regularly." }
                ].map((n) => (
                  <div key={n.title} className="rounded-2xl bg-muted/30 p-5 border border-border space-y-2 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-2">
                      {n.icon}
                      <h5 className="font-bold text-foreground text-sm">{n.title}</h5>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" /> Your UK Support Network
              </h4>
              <p className="text-sm text-muted-foreground mb-6">You should not do this alone. Save these numbers.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SUPPORT_CONTACTS.map((c) => (
                  <div key={c.name} className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-2 hover:shadow-sm transition-shadow">
                    <h5 className="font-bold text-foreground text-sm leading-tight">{c.name}</h5>
                    <p className="text-xs text-foreground/70 h-10">{c.desc}</p>
                    <p className="text-sm font-bold text-primary">{c.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
        </section>

        {/* Section 6: BPSD */}
        <section id="edu-bpsd">
          <ContentCard>
            <SectionHeading number="6" title="The Behavioral Challenge" subtitle="Decoding BPSD" />
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              As memory loss progresses, it often takes a back seat to behavioral changes. We call these <strong>Behavioral and Psychological Symptoms of Dementia (BPSD)</strong>. This includes extreme agitation, wandering, paranoia, and sleep inversion.
            </p>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 mb-8">
              <p className="text-sm text-rose-900 leading-relaxed">
                <strong>Let's be blunt:</strong> attempting to use logic or arguing to stop these behaviors is a losing battle. The person's frontal lobes—the part of the brain responsible for impulse control—are physically damaged. <strong>Behavior is their only remaining language.</strong> When they hit out or pace relentlessly, it is almost always driven by an unmet need.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" /> Becoming a Care Detective
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                When called out to a care home or a family's living room, we don't rush to sedate a person who is agitated. We assume it is a physical cry for help. A brain with dementia cannot always localize pain or articulate illness.
              </p>
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <h5 className="font-bold text-foreground mb-4 text-base">The PINCH ME Protocol</h5>
                <p className="text-xs text-muted-foreground mb-5">A clinical framework to rapidly scan for hidden triggers.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                  {[
                    { letter: "P", word: "Pain", color: "bg-rose-100 text-rose-700" },
                    { letter: "I", word: "Infection", color: "bg-orange-100 text-orange-700" },
                    { letter: "N", word: "Nutrition", color: "bg-amber-100 text-amber-700" },
                    { letter: "C", word: "Constipation", color: "bg-yellow-100 text-yellow-700" },
                    { letter: "H", word: "Hydration", color: "bg-emerald-100 text-emerald-700" },
                    { letter: "M", word: "Medication", color: "bg-sky-100 text-sky-700" },
                    { letter: "E", word: "Environment", color: "bg-indigo-100 text-indigo-700" },
                  ].map((item) => (
                    <div key={item.letter} className={`${item.color} rounded-xl p-3 text-center`}>
                      <div className="text-2xl font-black">{item.letter}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider mt-1">{item.word}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Once we rule out the physical, we audit the environment. Is the TV too loud? Is the lighting casting terrifying shadows?</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> The De-escalation Gap
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Knowing that behavior has a root cause is one thing; knowing exactly what to say and do in the heat of a crisis is another. Families often escalate a situation accidentally by arguing with the dementia or letting their own stress visibly show (the <strong>"Mirror Match" effect</strong>).
              </p>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Professional caregivers use specific <strong>verbal scripts</strong>, <strong>distraction techniques</strong>, and personalized <strong>"Identity Anchors"</strong> to safely ground a person in distress. Our goal is to take those exact, proprietary clinical playbooks and put them directly into your hands when you need them most.
                </p>
              </div>
            </div>
          </ContentCard>
        </section>

        {/* Section 7: The Horizon */}
        <section id="edu-horizon">
          <ContentCard className="overflow-hidden">
            <div className="bg-primary -mx-8 md:-mx-10 -mt-8 md:-mt-10 px-8 md:px-10 py-10 mb-8">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Section 7
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">The Horizon</h3>
              <p className="text-base text-white/80 mt-2 max-w-2xl">The Future of Dementia Care is Already Here</p>
            </div>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              For decades, a dementia diagnosis felt like walking off a map. The medical advice often boiled down to "get your affairs in order." Today, we are standing on the edge of a clinical revolution. Care is shifting from reactive crisis management to proactive, personalized intervention.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <TestTube className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground text-lg mb-2">1. The Blood Test Revolution</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">Historically, diagnosis required expensive brain scans. Soon, simple blood tests at your GP surgery will detect the toxic proteins associated with Alzheimer's years before the first memory slip occurs. Treating dementia early is like fighting a fire: if you attack it while it's still in the kitchen, you can save the house.</p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <Microscope className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground text-lg mb-2">2. Disease-Modifying Therapies</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">We are entering the era of drugs (like Lecanemab) that actually clear amyloid plaques from the brain, slowing clinical decline. However, these are not silver bullets. They do not reverse existing damage and require heavy monitoring. They represent a major breakthrough, but they do not eliminate the daily, grinding reality of behavioral challenges at home.</p>
              </div>
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <Smartphone className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-primary text-lg mb-2">3. The Digital Ward</h4>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">The greatest gap in dementia care isn't a lack of medical knowledge; it's that the knowledge is trapped in the hospital. When a family faces severe agitation in the middle of the night, waiting three weeks for a clinic appointment is useless.</p>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">The future of care is digital. We are building technology that takes the clinical decision-making protocols used by specialist psychiatrists and puts them into your smartphone.</p>
                <ul className="text-xs text-foreground/70 space-y-2 list-disc list-inside">
                  <li><strong>Predictive Tracking:</strong> Smart applications will help track daily patterns to spot early warning signs of a UTI or constipation before it turns into an explosion.</li>
                  <li><strong>Real-Time Playbooks:</strong> When distress hits, caregivers will access rapid de-escalation scripts proven to work.</li>
                  <li><strong>Clinical Safety:</strong> Relying on "Human-in-the-Loop" architecture, algorithms process complex data, but every care plan is verified by human logic.</li>
                </ul>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <p className="text-sm text-emerald-900 leading-relaxed font-semibold">
                The defining shift in the next decade of dementia care isn't just about extending life; it is about fiercely protecting dignity. By combining biological detection with powerful digital support in the community, we are stripping away the guesswork.
              </p>
            </div>
          </ContentCard>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We support individuals living with dementia and the people who care for them.
            </p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-primary cursor-pointer" />
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l} className="hover:text-primary cursor-pointer">
                    {l}
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
              <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer">Terms of Use</span>
              <span className="hover:text-primary cursor-pointer">Accessibility</span>
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
            <button className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
              <Headphones className="h-4 w-4" />
              Talk to someone
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
