import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ChevronDown,
  Headphones,
  MessageCircle,
  Users,
  Shield,
  Leaf,
  HelpCircle,
  MapPin,
  CloudSun,
  Puzzle,
  UsersRound,
  ArrowRight,
  Phone,
  ShieldCheck,
  ClipboardList,
  HandHeart,
  Coffee,
  Wind,
  FileText,
  Home,
  MessagesSquare,
  Sparkles,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import caringEmotionsImg from "@/assets/caring_emotions.png";
import chairImg from "@/assets/cozy-chair.jpg";
import handshakeImg from "@/assets/handshake.jpg";




const features = [
  { icon: HandHeart, title: "Person-centred care", desc: "Every person is unique. So is our care." },
  { icon: UsersRound, title: "Support for families", desc: "Because caregivers deserve support too." },
  { icon: ShieldCheck, title: "Safe & supportive space", desc: "Guidance you can trust, whenever you need it." },
  { icon: Leaf, title: "Hope and dignity", desc: "Focusing on well-being, not just symptoms." },
];

const signs = [
  { icon: HelpCircle, tint: "bg-sky-100 text-sky-600", label: "Repeating questions or stories" },
  { icon: MapPin, tint: "bg-emerald-100 text-emerald-600", label: "Getting lost in familiar places" },
  { icon: CloudSun, tint: "bg-amber-100 text-amber-600", label: "Confusion in the evening or about time and date" },
  { icon: Puzzle, tint: "bg-violet-100 text-violet-600", label: "Trouble finding the right words" },
  { icon: UsersRound, tint: "bg-rose-100 text-rose-600", label: "Withdrawal from activities they once enjoyed" },
];

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
  { icon: FileText, tint: "bg-sky-100 text-sky-600", title: "Understanding dementia", desc: "Clear, simple information to help you understand." },
  { icon: Home, tint: "bg-emerald-100 text-emerald-600", title: "Creating a safe home", desc: "Tips to make daily life safer and calmer." },
  { icon: MessagesSquare, tint: "bg-violet-100 text-violet-600", title: "Communication that helps", desc: "Ways to connect with kindness and patience." },
  { icon: Sparkles, tint: "bg-amber-100 text-amber-600", title: "Activities that bring joy", desc: "Ideas for meaningful moments together." },
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

export default function Index() {
  return (
    <div className="w-full flex-grow flex flex-col">
      {/* Nav */}
      

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-bg)" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-12 lg:py-20">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-5xl">
              When memory fades,
              <br />
              <span className="text-primary">care</span> shouldn't.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/80">
              We support individuals living with dementia —
              <br />
              and the people who care for them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95">
                <Heart className="h-4 w-4" fill="currentColor" />
                Understand what's happening
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5">
                <MessageCircle className="h-4 w-4" />
                Get support now
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary">
              <ShieldCheck className="h-4 w-4" />
              A safe space for guidance, understanding and support.
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50vw]">
            <img
              src={heroImg}
              alt="A caregiver tenderly embracing an elderly woman"
              width={1024}
              height={1024}
              className="h-full w-full max-h-[400px] object-cover animate-fade-in lg:max-h-none"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
              }}
            />
          </div>

        </div>
      </section>

      {/* Feature strip overlapping */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1400px] px-8"
      >
        <div className="relative z-10 -mt-16 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card shadow-xl md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className={`flex items-start gap-4 p-8 ${i >= 2 ? "md:border-t lg:border-t-0" : ""}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What you might be noticing (Clinical Redesign) */}
      <section className="bg-white py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Context & CTA */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6">
                <ShieldCheck className="w-4 h-4" /> Early Indicators
              </div>
              
              <h2 className="text-4xl font-bold leading-tight text-slate-800 mb-6">
                What you might be noticing
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Cognitive changes often begin subtly. Recognizing these early clinical indicators empowers you to seek the right support and build a proactive care plan. You are not alone in noticing these shifts.
              </p>
              
              <Link 
                to="/education-hub" 
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Access the Education Hub <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right Column: Indicator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 blur-3xl -z-10 rounded-full" />
              
              {signs.map((s, i) => (
                <div 
                  key={s.label} 
                  className={`group flex items-start gap-4 p-6 rounded-[1.25rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 ${i === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className={`flex shrink-0 h-14 w-14 items-center justify-center rounded-2xl ${s.tint} transition-transform duration-300 group-hover:scale-110`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col justify-center min-h-[56px]">
                    <div className="text-[16px] font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Learn and feel more confident */}
      <section className="bg-[#f8faff] py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr]">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-slate-800">
                Learn and feel<br />more confident
              </h2>
              <div className="mt-4 h-1 w-12 rounded bg-emerald-400" />
              <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
                Understanding dementia can<br />bring clarity and<br />help you feel more prepared.
              </p>
              <Link to="/blog" className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl border border-[#c1d3f0] bg-transparent px-6 py-3.5 text-[15px] font-semibold text-[#3b82f6] shadow-sm hover:bg-blue-50/50">
                Explore learning resources <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <Link to="/blog/what-is-dementia" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={whatIsDementiaImg} alt="Dementia basics" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-[13px] font-semibold text-[#3b82f6]">Basics</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors">What is dementia?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    A simple guide to what dementia is and how it affects the brain.
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6]">
                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              {/* Card 2 */}
              <Link to="/blog/creating-calm-routines" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={calmRoutinesImg} alt="Managing daily life" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-[13px] font-semibold text-emerald-600">Managing daily life</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Creating calm routines</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Small changes at home can reduce confusion and bring comfort.
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6]">
                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              {/* Card 3 */}
              <Link to="/blog/talking-in-ways-that-help" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={talkingHelpImg} alt="Communication" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-violet-50 px-3 py-1 text-[13px] font-semibold text-violet-600">Communication</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800 group-hover:text-violet-600 transition-colors">Talking in ways that help</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Tips to connect with kindness and reduce frustration.
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6]">
                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              {/* Card 4 */}
              <Link to="/blog/caring-for-your-emotions" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={caringEmotionsImg} alt="Emotional wellbeing" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-slate-100 px-3 py-1 text-[13px] font-semibold text-slate-600">Emotional wellbeing</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800 group-hover:text-slate-600 transition-colors">Caring for your emotions too</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Your well-being matters. You can't pour from an empty cup.
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6]">
                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How we help */}
      <section className="bg-background py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-24"
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground">How we help</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We walk beside you with a gentle, step-by-step approach.
            </p>
            <ol className="mt-10 space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-5">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold ${
                    s.color === 'sky' ? 'bg-[#e2edff] text-[#2563eb]' :
                    s.color === 'emerald' ? 'bg-[#dcfce7] text-[#16a34a]' :
                    'bg-[#fef3c7] text-[#d97706]'
                  }`}>
                    {s.n}
                  </div>
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-background ${
                    s.color === 'sky' ? 'border-[#e2edff] text-[#3b82f6]' :
                    s.color === 'emerald' ? 'border-[#dcfce7] text-[#22c55e]' :
                    'border-[#fef3c7] text-[#f59e0b]'
                  }`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <div className="text-lg font-semibold text-foreground">{s.title}</div>
                    <div className="mt-1.5 text-base text-muted-foreground">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
            <button className="mt-12 inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#1d4ed8]">
              Get started <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#f8fbff] p-10 shadow-sm lg:p-12">
            <div>
              <div className="font-serif text-5xl font-bold leading-none text-[#3b82f6]">“</div>
              <h3 className="mt-2 text-2xl font-bold leading-snug text-[#0f172a] lg:text-[28px]">
                It's not just about memory.<br />It's about moments that<br />still matter.
              </h3>
              <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-[#475569]">
                We focus on what brings joy, connection and meaning to each day.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-[80%] max-w-[360px]">
              <img
                src={chairImg}
                alt="A cozy blue armchair with a plant"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-auto w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Support for caregivers (Clinical Redesign) */}
      <section className="bg-[#f8faff] py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-center"
        >
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-6">
              <Heart className="w-4 h-4" /> Caregiver Well-being
            </div>
            
            <h2 className="text-4xl font-bold leading-tight text-slate-800 mb-6">
              Support for caregivers
            </h2>
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed mb-10">
              Caring for someone with dementia can be profoundly beautiful, yet undeniably overwhelming. We're here to support you.
            </p>
            
            <div className="flex flex-col gap-8 mb-10">
              {caregiverPoints.map((c) => (
                <div key={c.title} className="flex items-start gap-5 group">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      c.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : c.color === "purple"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[17px] font-bold text-slate-800 mb-1">{c.title}</div>
                    <div className="text-[15px] text-slate-600 leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/caregiver-reality-check" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white border border-blue-200 px-7 py-4 text-[15px] font-bold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors">
              Explore caregiver support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end relative">
            {/* Background blur decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-blue-400/20 blur-3xl -z-10 rounded-full" />
            
            <div className="w-full max-w-[500px] rounded-[2.5rem] bg-white border border-blue-100 p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden group/card">
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-8">
                  <div className="text-xl font-extrabold text-slate-800">Caregiver Reminder</div>
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110 group-hover/card:bg-rose-100">
                    <Heart className="h-6 w-6 text-rose-500" fill="currentColor" />
                  </div>
                </div>
                
                <div className="py-8">
                  <p className="text-2xl font-bold leading-snug text-slate-800 mb-3">
                    You can't pour from an empty cup.
                  </p>
                  <p className="text-lg text-slate-600">It's okay to take a break.</p>
                </div>
                
                <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
                  {reminders.map((r) => (
                    <div key={r.label} className="flex flex-col items-center justify-center text-center group">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                          r.color === 'text-blue-500' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100' :
                          r.color === 'text-sky-500' ? 'bg-sky-50 text-sky-600 group-hover:bg-sky-100' :
                          r.color === 'text-emerald-500' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100' : 'bg-purple-50 text-purple-600 group-hover:bg-purple-100'
                      }`}>
                        <r.icon className="h-6 w-6" />
                      </div>
                      <div className="text-[12px] font-bold text-slate-500 group-hover:text-slate-800 transition-colors">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Learn at your pace (Clinical Redesign) */}
      <section className="bg-white py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6">
              <FileText className="w-4 h-4" /> Educational Resources
            </div>
            <h2 className="text-4xl font-bold leading-tight text-slate-800 mb-6">
              Learn at your pace
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
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

      {/* Talk banner */}
      <section className="bg-background py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1200px] px-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-sky-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <img
                src={handshakeImg}
                alt="Two hands clasped in support"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-32 w-32 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Need to talk now? We're here.</h3>
                <p className="mt-2 text-muted-foreground">Reach out for a caring conversation.</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                  <Headphones className="h-4 w-4" /> Talk to someone
                </button>
              </div>
              <Leaf className="hidden h-24 w-24 text-emerald-300 md:block" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      

      
    </div>
  );
}
