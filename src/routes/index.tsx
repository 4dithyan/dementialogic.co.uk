import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle2,
  Brain,
  Activity,
  Clock,
  AlertCircle,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import caringEmotionsImg from "@/assets/caring_emotions.png";
import chairImg from "@/assets/cozy-chair.jpg";
import handshakeImg from "@/assets/handshake.jpg";
import caregiverWellbeingImg from "@/assets/caregiver_wellbeing.png";
import educationHubBannerImg from "@/assets/education_hub_banner.png";




const features = [
  { icon: UsersRound, title: "Person-centred care", desc: "Every person is unique. So is our care." },
  { icon: Heart, title: "Support for families", desc: "Because caregivers deserve support too." },
  { icon: ShieldCheck, title: "Safe & supportive space", desc: "Guidance you can trust, whenever you need it." },
];

const faqs = [
  { icon: HelpCircle, tint: "bg-blue-50 text-blue-600", q: "Is repeating the same question a sign of dementia?", a: "Occasionally forgetting something is a normal part of ageing. However, repeatedly asking the same question because the answer has been forgotten within a short period may be an early sign of memory changes associated with dementia." },
  { icon: MapPin, tint: "bg-blue-50 text-blue-600", q: "Why might someone get lost in familiar places?", a: "People living with dementia may have difficulty recognising familiar surroundings or remembering directions. This can make everyday journeys confusing, even in places they have visited many times." },
  { icon: Puzzle, tint: "bg-blue-50 text-blue-600", q: "Why does dementia affect communication?", a: "Dementia can affect language and communication. A person may pause frequently, substitute incorrect words, or have difficulty following conversations, making communication more challenging over time." },
  { icon: CloudSun, tint: "bg-blue-50 text-blue-600", q: "When should memory changes become a concern?", a: "If memory or thinking changes become persistent, worsen over time, or begin affecting daily life, it's important to speak with a healthcare professional for an assessment and appropriate guidance." },
  { icon: ShieldCheck, tint: "bg-blue-50 text-blue-600", q: "Does memory loss always mean dementia?", a: "No. Memory problems can have many causes, including stress, depression, poor sleep, medication side effects, or vitamin deficiencies. A medical assessment is the best way to understand the cause." },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q} className={`flex flex-col transition-colors ${i !== faqs.length - 1 ? 'border-b border-slate-100' : ''}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center gap-5 p-6 w-full text-left hover:bg-slate-50 focus:outline-none transition-colors"
            >
              <div className={`flex shrink-0 h-12 w-12 items-center justify-center rounded-full ${faq.tint}`}>
                <faq.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className={`flex-1 text-[16px] font-bold transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                {faq.q}
              </div>
              <div className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-transparent'}`}>
                <ChevronDown className="h-5 w-5 text-slate-400" />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 ml-[68px] text-[15px] leading-relaxed text-slate-600">
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

      {/* Features Strip */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {features.map((f, i) => (
              <div key={f.title} className={`flex items-start gap-5 ${i === 0 ? 'pr-8' : i === 1 ? 'px-8' : 'pl-8'}`}>
                <div className="shrink-0">
                  <f.icon className="h-10 w-10 text-blue-600" strokeWidth={1.2} />
                </div>
                <div>
                  <div className="font-bold text-[17px] text-slate-800">{f.title}</div>
                  <div className="mt-1 text-[15px] leading-relaxed text-slate-600">{f.desc}</div>
                </div>
              </div>
            ))}
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
              
              <Link to="/caregiver-reality-check" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white border-2 border-transparent px-6 py-3 text-[15px] font-bold text-blue-700 shadow-lg shadow-black/10 hover:bg-blue-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                Explore caregiver support <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* Learn More */}
      <section className="bg-white py-16 lg:py-20 border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1400px] px-8"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-blue-700 mb-4 border border-blue-200/50">
                <Activity className="w-3.5 h-3.5" /> Learn More
              </div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 lg:text-5xl mb-5">
                Understand dementia.<br />Feel more confident.
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[15px] font-bold text-blue-700 hover:text-blue-800 transition-colors">
              View all resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
            
          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <Link to="/blog/what-is-dementia" className="group flex flex-col overflow-hidden rounded-[1.25rem] bg-[#f8faff] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img src={whatIsDementiaImg} alt="Dementia basics" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">BASICS</div>
                <h3 className="text-[20px] font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-3">Understanding dementia</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 flex-1">
                  Clear, simple information to help you understand what's happening.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[14px] font-bold text-blue-700">
                  Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/blog/creating-calm-routines" className="group flex flex-col overflow-hidden rounded-[1.25rem] bg-[#f8faff] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img src={calmRoutinesImg} alt="Managing daily life" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">DAILY LIVING</div>
                <h3 className="text-[20px] font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-3">Managing daily life</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 flex-1">
                  Practical tips to make everyday routines easier and calmer.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[14px] font-bold text-blue-700">
                  Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/blog/talking-in-ways-that-help" className="group flex flex-col overflow-hidden rounded-[1.25rem] bg-[#f8faff] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img src={talkingHelpImg} alt="Communication" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">COMMUNICATION</div>
                <h3 className="text-[20px] font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-3">Talking in ways that help</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 flex-1">
                  Communication tips to connect with kindness and reduce frustration.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[14px] font-bold text-blue-700">
                  Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      

      
    </div>
  );
}
