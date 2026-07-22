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
  Lock,
  Search
} from "lucide-react";

export const Route = createFileRoute("/dementia-trigger-decoder")({
  component: DementiaTriggerDecoder,
  head: () => ({
    meta: [
      { title: "Dementia Trigger Decoder | DementiaLogic" },
      {
        name: "description",
        content: "Take this 2-minute reality check to find out what is actually driving the distress in your home—and how to stop it.",
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
    title: "The Timing",
    question: "When do the most difficult behavioral episodes usually happen?",
    options: [
      { id: "A", text: "Late afternoon or early evening, as the light starts to change." },
      { id: "B", text: "It is completely random and happens suddenly out of nowhere." },
      { id: "C", text: "Usually when I am trying to help them with a task, like washing or dressing." },
    ]
  },
  {
    id: 2,
    title: "The Reality Gap",
    question: "If they are insisting they need to 'go to work' or 'go home' (even if they are already home), how do you usually respond?",
    options: [
      { id: "A", text: "I try to gently remind them that they are retired or already at home." },
      { id: "B", text: "I try to distract them with a cup of tea or the television." },
      { id: "C", text: "I ask them what they did at work or ask them to tell me about their home." },
    ]
  },
  {
    id: 3,
    title: "The Physical Baseline",
    question: "Think about the last major episode of severe confusion or agitation. Did it happen alongside any of the following?",
    options: [
      { id: "A", text: "A slight fever, a change in how their urine smells, or a cough." },
      { id: "B", text: "A change in their medication or missing a dose." },
      { id: "C", text: "Neither. They seemed physically fine, just highly distressed." },
    ]
  },
  {
    id: 4,
    title: "The Escalation Pattern",
    question: "When they become angry or agitated, what happens to your own stress levels?",
    options: [
      { id: "A", text: "I get panicked or frustrated, and my voice usually gets louder." },
      { id: "B", text: "I feel overwhelmed, but I try to hide it and rush through what we are doing." },
      { id: "C", text: "I physically step back, take a breath, and lower my voice to a whisper." },
    ]
  },
  {
    id: 5,
    title: "The Shadowing",
    question: "Does your loved one follow you from room to room, becoming anxious if you are out of sight for even a minute?",
    options: [
      { id: "A", text: "Yes, constantly. I feel like I have no personal space left." },
      { id: "B", text: "Sometimes, usually when the house is noisy or busy." },
      { id: "C", text: "Rarely. They are usually content to sit in their own space." },
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
function DementiaTriggerDecoder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 400);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setCurrentStep(7);
    }
  };

  const calculateResult = () => {
    let physical = 0;
    let communication = 0;
    let environmental = 0;

    if (answers[1] === 'B') physical++;
    if (answers[3] === 'A' || answers[3] === 'B') physical++;

    if (answers[2] === 'A') communication++;
    if (answers[4] === 'A' || answers[4] === 'B') communication++;

    if (answers[1] === 'A') environmental++;
    if (answers[5] === 'A' || answers[5] === 'B') environmental++;

    if (physical >= communication && physical >= environmental && physical > 0) return "physical";
    if (communication >= physical && communication >= environmental) return "communication";
    return "environmental";
  };

  const renderQuizContent = () => {
    if (currentStep === 0) {
      return (
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-50 via-white to-primary/5 px-8 py-10 md:p-12 text-left shadow-sm border border-border w-full">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"></div>
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-bold text-primary shadow-sm border border-indigo-100">
                <Search className="w-4 h-4 mr-2" /> Interactive Tool
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Decode the <span className="text-primary italic">Distress</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                Take this 2-minute reality check to find out what is actually driving the distress in your home—and how to stop it.
              </p>
              <button 
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Start The Decoder <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-indigo-100 border-b-transparent border-r-transparent transform -rotate-45 opacity-80"></div>
                <div className="absolute inset-8 rounded-full border-8 border-primary/20 border-t-transparent border-l-transparent transform rotate-45 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="w-20 h-20 text-primary opacity-90 drop-shadow-sm" />
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">{q.title}</h3>
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
                        : "bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected ? "bg-white text-primary" : "bg-white text-slate-400 border border-slate-200 group-hover:border-indigo-300 group-hover:text-indigo-600 shadow-sm"
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Trigger Profile is Ready.</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              We’ve analyzed your responses based on our clinical trigger support protocols. Enter your email below to instantly receive your personalized Trigger Profile, plus a free 60-second de-escalation playbook tailored to your specific challenges.
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
                <Lock className="w-4 h-4" /> Reveal My Profile
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
            <h2 className="text-3xl font-bold text-foreground">Your Trigger Profile</h2>
          </div>

          {result === "physical" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-rose-200 shadow-xl">
              <div className="bg-rose-600 p-6 text-center text-white">
                <Activity className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">The Sudden Spike</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-rose-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    The behaviors you are seeing are highly likely to be driven by a physical issue, not just "the dementia progressing." Sudden spikes in confusion or aggression are classic signs of a hidden infection (like a UTI) or pain.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                  <h4 className="text-xs font-black text-rose-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-rose-900 leading-relaxed mb-4">
                    Use our free PINCH ME Protocol right now to scan for physical issues. If you suspect an infection, contact your GP or 111 immediately. Do not try to manage medical delirium with behavioral tricks.
                  </p>
                  <button className="bg-rose-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-rose-700 transition-colors w-full sm:w-auto text-sm">
                    Download PINCH ME Protocol
                  </button>
                </div>
              </div>
            </div>
          )}

          {result === "communication" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-amber-200 shadow-xl">
              <div className="bg-amber-500 p-6 text-center text-white">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">The Mirror Match</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    You are exhausted, and your loved one can feel it. When you try to use logic or correct their reality, it triggers a "fight or flight" panic response. They are mirroring your tension.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-amber-900 leading-relaxed mb-4">
                    You must change the script. Read our guide on "Stepping Into Their Reality". You cannot win an argument with a broken brain, but you can instantly lower the temperature by validating their feelings.
                  </p>
                  <button className="bg-amber-500 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-amber-600 transition-colors w-full sm:w-auto text-sm">
                    Read "Stepping Into Their Reality"
                  </button>
                </div>
              </div>
            </div>
          )}

          {result === "environmental" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-indigo-200 shadow-xl">
              <div className="bg-indigo-600 p-6 text-center text-white">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">The Sensory Overload</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                    Your loved one's brain is losing the ability to filter out background noise, shadows, and changes in routine. This leads to Sundowning and constant shadowing because they feel unanchored in space and time.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <h4 className="text-xs font-black text-indigo-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-sm md:text-base text-indigo-900 leading-relaxed mb-4">
                    It's time to modify the environment. Use our "Living Room Audit" to identify the hidden sensory triggers in your home, and learn how to use an "Identity Anchor" to give them a sense of safety.
                  </p>
                  <button className="bg-indigo-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-indigo-700 transition-colors w-full sm:w-auto text-sm">
                    Download Living Room Audit
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
                    item.label === "Dementia Trigger Decoder" ? "text-primary" : "text-foreground/90"
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
