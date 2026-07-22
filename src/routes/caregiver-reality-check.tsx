import React, { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  ChevronDown,
  Headphones,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  AlertTriangle,
  Mail,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Lock
} from "lucide-react";

export const Route = createFileRoute("/caregiver-reality-check")({
  component: CaregiverRealityCheck,
  head: () => ({
    meta: [
      { title: "Caregiver Reality Check | DementiaLogic" },
      {
        name: "description",
        content: "Take this brutal, 2-minute reality check to measure your actual burnout level.",
      },
    ],
  }),
});

// ─── Constants for Navigation ──────────────────────────────
const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder", hasDropdown: false },
];

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

// ─── Quiz Data ─────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: "The Sleep Deficit",
    question: "When the house is finally quiet at night, what happens to you?",
    options: [
      { id: "A", text: "I sleep with one eye open, constantly listening for footsteps or a fall. I haven't had deep sleep in months." },
      { id: "B", text: "I crash from pure exhaustion, but wake up feeling just as tired as when I went to bed." },
      { id: "C", text: "I generally sleep okay, unless there is a specific bad night." },
    ]
  },
  {
    id: 2,
    title: "The Resentment Trap",
    question: "Let's be completely honest: When they ask the same question for the 20th time in an hour, what is your internal reaction?",
    options: [
      { id: "A", text: "I feel a flash of genuine anger or resentment toward them, followed immediately by crushing guilt." },
      { id: "B", text: "I feel incredibly frustrated, and I have to bite my tongue or walk away to avoid snapping." },
      { id: "C", text: "I can usually remind myself it's the disease talking, and answer calmly." },
    ]
  },
  {
    id: 3,
    title: "The Isolation Factor",
    question: "If you had a medical emergency right now and had to go to the hospital, who would step in to take over the care?",
    options: [
      { id: "A", text: "Absolutely no one. If I fall apart, the whole system collapses." },
      { id: "B", text: "I could probably beg a sibling or friend to help, but it would be a massive crisis." },
      { id: "C", text: "I have a plan in place with family or a professional respite agency." },
    ]
  },
  {
    id: 4,
    title: "The 'Fix It' Illusion",
    question: "How often do you catch yourself trying to use logic, arguments, or bargaining to make them behave 'normally'?",
    options: [
      { id: "A", text: "Every day. I keep thinking if I just explain it clearly enough, they will snap out of it and understand." },
      { id: "B", text: "Sometimes. I know it doesn't work, but in the heat of the moment, I forget and argue back." },
      { id: "C", text: "Rarely. I've learned to step into their reality instead of forcing them into mine." },
    ]
  },
  {
    id: 5,
    title: "The Physical Toll",
    question: "When was the last time you went to a doctor for your own health, or took a full day completely off from caregiving?",
    options: [
      { id: "A", text: "I can't remember. My health issues are entirely secondary to theirs right now." },
      { id: "B", text: "It's been a long time. I know I need a break, but the logistics of arranging it are too exhausting to deal with." },
      { id: "C", text: "Within the last few months. I actively protect my own medical appointments and time off." },
    ]
  }
];

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

// ─── Main Component ───────────────────────────────────────────────────
function CaregiverRealityCheck() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = start, 1-5 = questions, 6 = email wall, 7 = results
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 400); // Small delay for smooth transition
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setCurrentStep(7);
    }
  };

  const calculateResult = () => {
    let counts = { A: 0, B: 0, C: 0 };
    Object.values(answers).forEach((ans) => {
      if (ans === 'A') counts.A++;
      if (ans === 'B') counts.B++;
      if (ans === 'C') counts.C++;
    });

    if (counts.A >= 3) return "boiling";
    if (counts.B >= 3 || (counts.A === 2 && counts.B === 2)) return "fumes";
    return "sustainable";
  };

  const renderQuizContent = () => {
    if (currentStep === 0) {
      return (
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-50 via-white to-primary/5 px-8 py-10 md:p-12 text-left shadow-sm border border-border w-full">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"></div>
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-bold text-primary shadow-sm border border-sky-100">
                <Activity className="w-4 h-4 mr-2" /> Interactive Tool
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Are You Caring, or Are You <span className="text-primary italic">Drowning?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                Take this brutal, 2-minute reality check to measure your actual burnout level. No judgment, no sugar-coating—just the truth about where you stand right now.
              </p>
              <button 
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Start The Reality Check <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-sky-100 border-b-transparent border-r-transparent transform -rotate-45 opacity-80"></div>
                <div className="absolute inset-8 rounded-full border-8 border-primary/20 border-t-transparent border-l-transparent transform rotate-45 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-20 h-20 text-primary opacity-90 drop-shadow-sm" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentStep >= 1 && currentStep <= 5) {
      const q = QUIZ_QUESTIONS[currentStep - 1];
      return (
        <div className="w-full mx-auto py-2">
          {/* Progress Bar */}
          <div className="mb-6 flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary tracking-widest uppercase shadow-sm">
              Question {currentStep} of 5
            </div>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(step => (
                <div key={step} className={`h-1.5 rounded-full transition-all duration-500 ${step === currentStep ? 'w-8 bg-primary shadow-sm' : step < currentStep ? 'w-4 bg-primary/40' : 'w-4 bg-border'}`} />
              ))}
            </div>
          </div>
          
          <div className="relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 p-6 md:p-8 overflow-hidden">
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-sm font-black text-sky-600 uppercase tracking-widest mb-2">{q.title}</h3>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                {q.question}
              </h2>
            </div>
            
            <div className="relative z-10 space-y-3">
              {q.options.map((opt, idx) => {
                const letters = ["A", "B", "C"];
                const isSelected = answers[q.id] === opt.id;
                
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(q.id, opt.id)}
                    className={`w-full group relative flex items-center gap-4 p-4 md:p-5 rounded-2xl transition-all duration-300 text-left ${
                      isSelected 
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.01] ring-2 ring-primary ring-offset-2" 
                        : "bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected ? "bg-white text-primary" : "bg-white text-slate-400 border border-slate-200 group-hover:border-sky-300 group-hover:text-sky-600 shadow-sm"
                    }`}>
                      {letters[idx]}
                    </div>
                    <p className={`text-sm md:text-base font-semibold leading-relaxed ${isSelected ? "text-white" : "text-slate-700 group-hover:text-slate-900"}`}>
                      {opt.text}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 6) {
      return (
        <div className="max-w-4xl mx-auto py-8 text-center">
          <div className="bg-card rounded-[2rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-14">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Reality Check is Ready.</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              We've calculated your burnout threshold. Enter your email below to receive your unvarnished profile, along with a free, immediate action plan to pull yourself back from the edge. <br/><br/>
              <strong className="text-foreground">You cannot pour from an empty cup.</strong>
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                />
              </div>
              <button 
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
              >
                <Lock className="w-4 h-4" /> Give Me The Truth
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1">
              <ShieldAlert className="w-3 h-3" /> We respect your privacy. No spam.
            </p>
          </div>
        </div>
      );
    }

    if (currentStep === 7) {
      const result = calculateResult();
      
      return (
        <div className="max-w-5xl mx-auto py-2">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 mb-3">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Results unlocked & emailed to {email}
            </div>
            <h2 className="text-3xl font-bold text-foreground">Your Personal Profile</h2>
          </div>

          {result === "boiling" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-rose-200 shadow-xl">
              <div className="bg-rose-600 p-6 text-center text-white">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">The Boiling Point</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-rose-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    You are drowning. Your nervous system is stuck in "fight or flight," and you are experiencing severe compassion fatigue. You are operating as a single point of failure. If you do not change this dynamic, your body will eventually force you to stop through illness or collapse.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                  <h4 className="text-xs font-black text-rose-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-rose-900 leading-relaxed mb-4">
                    You need an immediate circuit breaker. Stop trying to manage every behavior on your own. You must begin the conversation about respite care today.
                  </p>
                  <button className="bg-rose-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-rose-700 transition-colors w-full sm:w-auto text-sm">
                    Download Crisis De-escalation Playbook
                  </button>
                </div>
              </div>
            </div>
          )}

          {result === "fumes" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-amber-200 shadow-xl">
              <div className="bg-amber-500 p-6 text-center text-white">
                <Activity className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Running on Fumes</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    You are surviving, but just barely. You know the rules of dementia care, but sheer exhaustion is making you reactive instead of proactive. The guilt is heavy, and the isolation is growing. You are at the exact stage where a single bad week could push you over the edge.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-amber-900 leading-relaxed mb-4">
                    You need to automate your responses so you don't have to think so hard during a crisis. Read our guide on The Mirror Match to stop wasting energy arguing with a broken brain.
                  </p>
                  <button className="bg-amber-500 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-amber-600 transition-colors w-full sm:w-auto text-sm">
                    Read The Mirror Match Guide
                  </button>
                </div>
              </div>
            </div>
          )}

          {result === "sustainable" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-emerald-200 shadow-xl">
              <div className="bg-emerald-600 p-6 text-center text-white">
                <ShieldAlert className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">The Sustainable Slog</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    You are managing an incredibly difficult situation with remarkable boundaries. You have accepted the reality of the disease and are protecting your own baseline. However, as the disease progresses, the demands will change.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="text-xs font-black text-emerald-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-emerald-900 leading-relaxed mb-4">
                    Stay ahead of the curve. Learn how to identify hidden physical triggers before they turn into behavioral crises by reading our PINCH ME framework. Keep your toolkit sharp.
                  </p>
                  <button className="bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-emerald-700 transition-colors w-full sm:w-auto text-sm">
                    Download PINCH ME Framework
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 font-sans text-foreground flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full bg-background border-b border-border/40 shadow-sm flex-shrink-0">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary [&.active]:text-primary ${
                    item.label === "Caregiver Reality Check" ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-[15px] font-medium text-foreground/90 hover:text-primary"
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

      <main className="flex-grow w-full px-4 md:px-8 py-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto">
          {renderQuizContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
              <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer">Terms of Use</span>
              <span className="hover:text-primary cursor-pointer">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
