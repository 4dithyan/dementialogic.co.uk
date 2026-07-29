import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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


// ─── Constants for Navigation ──────────────────────────────




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
        <div className="text-2xl font-bold text-foreground">DementiaLogic</div>
        <div className="text-sm text-muted-foreground">Compassion. Clarity. Care.</div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
export default function CaregiverRealityCheck() {
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
        <motion.div 
          key="step-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full flex flex-col lg:flex-row z-50 bg-[#FAFAFA]"
        >
           {/* Image Half */}
           <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-full">
              <img src="/images/old_age3.jpg" alt="Caregiver Burnout" className="absolute inset-0 w-full h-full object-cover" />
           </div>
           
           {/* Text Half */}
           <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-8 py-16 lg:px-24 bg-[#FAFAFA]">
              <div className="text-sm font-medium text-slate-500 mb-6 flex items-center gap-2 tracking-wide uppercase mt-8 lg:mt-16">
                <Link to="/" className="hover:text-[#6FA8E8] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#6FA8E8] font-bold">Reality Check</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                 Are You Caring, or Are You <br/><span className="text-[#6FA8E8] italic">Drowning?</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 max-w-lg">
                 Take this gentle, 2-minute wellness check to reflect on your current caregiving capacity. Finding balance is essential, and this tool will help you identify the support and rest you truly deserve right now.
              </p>

              <button 
                 onClick={() => setCurrentStep(1)}
                 className="group flex items-center gap-4 bg-slate-900 px-10 py-5 rounded-full text-lg font-medium text-white transition-all duration-300 hover:bg-[#6FA8E8] hover:scale-[1.02]"
              >
                 <span>Start The Reality Check</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>
      );
    }

    if (currentStep >= 1 && currentStep <= 5) {
      const q = QUIZ_QUESTIONS[currentStep - 1];
      return (
        <div className="w-full mx-auto py-2">
          {/* Progress Bar */}
          <div className="mb-6 flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-widest uppercase shadow-sm">
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
              <h3 className="text-base font-black text-sky-600 uppercase tracking-widest mb-2">{q.title}</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
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
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-colors ${
                      isSelected ? "bg-white text-primary" : "bg-white text-slate-400 border border-slate-200 group-hover:border-sky-300 group-hover:text-sky-600 shadow-sm"
                    }`}>
                      {letters[idx]}
                    </div>
                    <p className={`text-base md:text-lg font-semibold leading-relaxed ${isSelected ? "text-white" : "text-slate-700 group-hover:text-slate-900"}`}>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Your Reality Check is Ready.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
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
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg"
                />
              </div>
              <button 
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
              >
                <Lock className="w-4 h-4" /> Give Me The Truth
              </button>
            </form>
            <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-1">
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
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-700 mb-3">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Results unlocked & emailed to {email}
            </div>
            <h2 className="text-4xl font-bold text-foreground">Your Personal Profile</h2>
          </div>

          {result === "boiling" && (
            <div className="bg-card rounded-[2rem] overflow-hidden border-2 border-rose-200 shadow-xl">
              <div className="bg-rose-600 p-6 text-center text-white">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Boiling Point</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-black text-rose-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                    You are drowning. Your nervous system is stuck in "fight or flight," and you are experiencing severe compassion fatigue. You are operating as a single point of failure. If you do not change this dynamic, your body will eventually force you to stop through illness or collapse.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                  <h4 className="text-sm font-black text-rose-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-base md:text-lg text-rose-900 leading-relaxed mb-4">
                    You need an immediate circuit breaker. Stop trying to manage every behavior on your own. You must begin the conversation about respite care today.
                  </p>
                  <button className="bg-rose-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-rose-700 transition-colors w-full sm:w-auto text-base">
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
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Running on Fumes</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                    You are surviving, but just barely. You know the rules of dementia care, but sheer exhaustion is making you reactive instead of proactive. The guilt is heavy, and the isolation is growing. You are at the exact stage where a single bad week could push you over the edge.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <h4 className="text-sm font-black text-amber-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-base md:text-lg text-amber-900 leading-relaxed mb-4">
                    You need to automate your responses so you don't have to think so hard during a crisis. Read our guide on The Mirror Match to stop wasting energy arguing with a broken brain.
                  </p>
                  <button className="bg-amber-500 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-amber-600 transition-colors w-full sm:w-auto text-base">
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
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Sustainable Slog</h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2">The Blunt Truth</h4>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                    You are managing an incredibly difficult situation with remarkable boundaries. You have accepted the reality of the disease and are protecting your own baseline. However, as the disease progresses, the demands will change.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="text-sm font-black text-emerald-800 uppercase tracking-widest mb-2">Your Next Step</h4>
                  <p className="text-base md:text-lg text-emerald-900 leading-relaxed mb-4">
                    Stay ahead of the curve. Learn how to identify hidden physical triggers before they turn into behavioral crises by reading our PINCH ME framework. Keep your toolkit sharp.
                  </p>
                  <button className="bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:bg-emerald-700 transition-colors w-full sm:w-auto text-base">
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
    <div className="w-full flex-grow flex flex-col">
      {/* Nav */}
      

      <main className="flex-grow w-full py-4 flex flex-col items-center justify-start">
        <div className="w-full">
          {renderQuizContent()}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}
