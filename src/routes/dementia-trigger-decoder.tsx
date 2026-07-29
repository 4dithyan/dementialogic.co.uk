import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowRight,
  AlertTriangle,
  Mail,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Lock,
  Search,
  Brain,
  Sparkles,
  ChevronRight,
  Stethoscope,
  Eye,
  Crosshair
} from "lucide-react";

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

// ─── Main Component ───────────────────────────────────────────────────
export default function DementiaTriggerDecoder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 500);
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
        <motion.div 
          key="step-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="w-full flex flex-col lg:flex-row bg-[#FAFAFA] min-h-[calc(100vh-100px)]"
        >
           {/* Image Half */}
           <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-auto lg:min-h-full">
              <img src="/images/old_age2.jpg" alt="Compassionate Care" className="absolute inset-0 w-full h-full object-cover" />
           </div>
           
           {/* Text Half */}
           <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-start lg:justify-center items-start px-8 pt-8 pb-12 lg:py-16 lg:px-24 bg-[#FAFAFA]">
              {/* Breadcrumbs */}
              <div className="text-sm font-medium text-slate-500 mb-6 flex items-center gap-2 tracking-wide uppercase mt-0 lg:mt-16">
                <Link to="/" className="hover:text-[#6FA8E8] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#6FA8E8] font-bold">Trigger Decoder</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
                 Decode the <br/><span className="text-[#6FA8E8]">Distress Pattern.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 max-w-lg">
                 Behavior is the only language left when the brain is failing. Take this 2-minute clinical reality check to pinpoint what is actually driving the crisis.
              </p>

              <button 
                 onClick={() => setCurrentStep(1)}
                 className="group flex items-center gap-4 bg-slate-900 px-10 py-5 rounded-full text-lg font-medium text-white transition-all duration-300 hover:bg-[#6FA8E8] hover:scale-[1.02]"
              >
                 <span>Initiate The Decoder</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>
      );
    }

    if (currentStep >= 1 && currentStep <= 5) {
      const q = QUIZ_QUESTIONS[currentStep - 1];
      return (
        <motion.div 
          key={`step-${currentStep}`}
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} exit={{ opacity: 0, x: -40, filter: "blur(10px)" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto pt-2 pb-6 px-4 relative z-10"
        >
          {/* Progress Bar Container */}
          <div className="mb-6 w-full max-w-lg mx-auto">
             <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                <span>Diagnostic Phase</span>
                <span className="text-[#6FA8E8]">0{currentStep} / 05</span>
             </div>
             <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-[#6FA8E8]"
                   initial={{ w: 0 }}
                   animate={{ width: `${(currentStep / 5) * 100}%` }}
                   transition={{ duration: 0.5 }}
                />
             </div>
          </div>
          
          {/* Main Quiz Card (Ultra Minimal & Tight) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6FA8E8]/10 border border-[#6FA8E8]/20 rounded-full text-[#6FA8E8] text-xs font-bold uppercase tracking-widest mb-3">
                <Brain className="w-3.5 h-3.5" /> {q.title}
              </div>
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                {q.question}
              </h2>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3">
              {q.options.map((opt, idx) => {
                const letters = ["A", "B", "C"];
                const isSelected = answers[q.id] === opt.id;
                
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(q.id, opt.id)}
                    className={`w-full group/btn relative flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl transition-all duration-200 text-left border ${
                      isSelected 
                        ? "bg-[#6FA8E8] border-[#6FA8E8] text-white shadow-md scale-[1.01]" 
                        : "bg-slate-50 border-slate-200 hover:border-[#6FA8E8]/50 hover:bg-[#6FA8E8]/5"
                    }`}
                  >
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors border ${
                      isSelected 
                        ? "bg-[#5b95d6] text-white border-transparent" 
                        : "bg-white text-[#6FA8E8] border-slate-200 group-hover/btn:border-[#6FA8E8]/50 group-hover/btn:bg-white"
                    }`}>
                      {letters[idx]}
                    </div>
                    <p className={`relative z-10 text-base font-medium leading-relaxed ${
                      isSelected ? "text-white" : "text-slate-700 group-hover/btn:text-slate-900"
                    }`}>
                      {opt.text}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>
      );
    }

    if (currentStep === 6) {
      return (
        <motion.div 
          key="step-email"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="w-full max-w-xl mx-auto pt-2 pb-6 px-4 relative z-10 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group">
            
            <div className="w-16 h-16 bg-[#6FA8E8]/10 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-[#6FA8E8]/20">
               <Lock className="w-8 h-8 text-[#6FA8E8]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight relative z-10">Analysis Complete</h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium relative z-10 max-w-sm mx-auto">
              We have identified the primary driver behind the behavioral distress. Enter your email to immediately unlock your custom clinical de-escalation playbook.
            </p>

            <form onSubmit={handleEmailSubmit} className="relative z-10 space-y-4 max-w-sm mx-auto">
              <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6FA8E8]" />
                 <input 
                   type="email" 
                   required
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   placeholder="Enter your email address" 
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#6FA8E8] focus:ring-1 focus:ring-[#6FA8E8] transition-all font-medium"
                 />
              </div>
              <button 
                 type="submit"
                 className="w-full bg-[#6FA8E8] text-white py-3 rounded-xl font-bold text-base hover:bg-[#5b95d6] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                 Unlock Playbook <ChevronRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4 relative z-10 font-bold uppercase tracking-widest">100% Secure. No spam.</p>
          </div>
        </motion.div>
      );
    }

    if (currentStep === 7) {
      const resultType = calculateResult();
      return (
        <motion.div 
          key="step-result"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mx-auto pt-2 pb-6 px-4 relative z-10"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
             
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 relative z-10 border-b border-slate-100 pb-6">
                <div className="w-16 h-16 bg-[#6FA8E8]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#6FA8E8]/20">
                   <CheckCircle2 className="w-8 h-8 text-[#6FA8E8]" />
                </div>
                <div>
                   <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">Your Custom Playbook.</h2>
                   <p className="text-xs text-[#6FA8E8] font-bold uppercase tracking-widest flex items-center gap-2">
                     <Eye className="w-4 h-4" /> Primary Driver: {resultType === 'physical' ? "Hidden Physical Distress" : resultType === 'communication' ? "The Reality Gap" : "Sensory Overload"}
                   </p>
                </div>
             </div>

             <div className="relative z-10 prose max-w-none">
                {resultType === 'physical' && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      Your answers strongly indicate that the sudden behavioral distress is driven by an underlying physical cause, rather than the dementia disease progression itself. When someone with dementia acts entirely out of character suddenly, they are often trying to communicate physical pain or illness that their damaged brain can no longer articulate.
                    </p>
                    <div className="bg-[#6FA8E8]/5 border border-[#6FA8E8]/20 rounded-2xl p-5 mt-4">
                       <h3 className="text-[#6FA8E8] font-black text-base mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Immediate Action Required: The "PINCH ME" Check</h3>
                       <p className="text-slate-700 font-medium text-sm mb-3">Before attempting behavioral de-escalation, you must systematically rule out the clinical "PINCH ME" triggers:</p>
                       <ul className="list-disc pl-5 text-slate-700 space-y-1.5 text-sm font-medium">
                         <li><strong className="text-slate-900">Pain:</strong> Are they favoring a limb? Check their teeth/gums.</li>
                         <li><strong className="text-slate-900">Infection:</strong> A Urinary Tract Infection (UTI) is the #1 hidden cause of sudden delirium. Call the GP for a urine dip.</li>
                         <li><strong className="text-slate-900">Constipation:</strong> Severe constipation can cause extreme agitation. Check their output.</li>
                         <li><strong className="text-slate-900">Hydration:</strong> Severe dehydration rapidly accelerates confusion.</li>
                       </ul>
                    </div>
                  </div>
                )}

                {resultType === 'communication' && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      Your answers indicate that the distress is stemming from a collision of realities. When your loved one demands to "go home," they are experiencing a profoundly real emotional truth. Correcting them with logic forces a confrontation because their damaged brain can no longer process reason.
                    </p>
                    <div className="bg-[#6FA8E8]/5 border border-[#6FA8E8]/20 rounded-2xl p-5 mt-4">
                       <h3 className="text-[#6FA8E8] font-black text-base mb-2 flex items-center gap-2"><Activity className="w-4 h-4"/> Clinical Tactic: Enter Their Reality</h3>
                       <p className="text-slate-700 font-medium text-sm mb-3">You must stop trying to drag them into your reality, and instead step into theirs using validation therapy:</p>
                       <ul className="list-disc pl-5 text-slate-700 space-y-1.5 text-sm font-medium">
                         <li><strong className="text-slate-900">Never Argue:</strong> Stop saying "you are home." This only breeds panic.</li>
                         <li><strong className="text-slate-900">The "Tell Me" Bridge:</strong> Say: "Tell me about your home. What is your favorite room?" This validates the emotion driving the request (a need for safety).</li>
                         <li><strong className="text-slate-900">The Pivot:</strong> Once they are calm and talking about the past, gently pivot to a physical need: "Before we go, let's have a cup of tea."</li>
                       </ul>
                    </div>
                  </div>
                )}

                {resultType === 'environmental' && (
                  <div className="space-y-4">
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      Your answers suggest the behavioral distress is heavily influenced by the environment (often referred to as 'Sundowning' or sensory overload). Dementia damages the brain's ability to filter out background noise, process shadows, and manage fatigue.
                    </p>
                    <div className="bg-[#6FA8E8]/5 border border-[#6FA8E8]/20 rounded-2xl p-5 mt-4">
                       <h3 className="text-[#6FA8E8] font-black text-base mb-2 flex items-center gap-2"><Search className="w-4 h-4"/> Clinical Tactic: Environmental Audit</h3>
                       <p className="text-slate-700 font-medium text-sm mb-3">You need to aggressively control the sensory input in the home, especially late in the day:</p>
                       <ul className="list-disc pl-5 text-slate-700 space-y-1.5 text-sm font-medium">
                         <li><strong className="text-slate-900">The Lighting Shift:</strong> At 3 PM, turn on all lights and close the curtains before dusk. Shadows trigger hallucinations and panic.</li>
                         <li><strong className="text-slate-900">Eliminate The TV:</strong> Background television noise (especially news) is processed as a real threat by a failing brain. Turn it off.</li>
                         <li><strong className="text-slate-900">Reduce Demands:</strong> Stop asking questions or attempting difficult tasks (like bathing) in the late afternoon. Shift demanding tasks to mid-morning.</li>
                       </ul>
                    </div>
                  </div>
                )}
             </div>
             
             <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between relative z-10">
                <p className="text-slate-500 text-xs font-medium">
                  A detailed PDF copy of this playbook has been sent to your email.
                </p>
                <Link to="/" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 rounded-xl text-white text-sm font-medium transition-colors">
                  Return Home
                </Link>
             </div>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative bg-[#FAFAFA] overflow-x-hidden selection:bg-blue-100">
      
      {/* Ultra Minimal Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[100px]"></div>
      </div>



      {/* Main Content Area */}
      <main className="flex-grow flex items-start justify-center relative z-10 w-full pt-4 pb-8">
        <AnimatePresence mode="wait">
          {renderQuizContent()}
        </AnimatePresence>
      </main>
      
    </div>
  );
}
