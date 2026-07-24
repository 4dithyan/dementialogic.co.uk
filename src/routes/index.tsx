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
import caregiverImg from "@/assets/illustration.png";
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

      {/* Signs */}
      <section className="bg-background py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1200px] px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">What you might be noticing</h2>
          <p className="mt-4 text-muted-foreground">
            These changes can be small at first. You're not alone in noticing them.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {signs.map((s) => (
              <div
                key={s.label}
                className="flex w-[200px] flex-col items-center justify-start rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${s.tint}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-[14px] font-medium leading-tight text-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <button className="mt-12 inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:underline">
            See more signs and understanding <ArrowRight className="h-4 w-4" />
          </button>
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
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={caregiverImg} alt="Dementia basics" className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-[13px] font-semibold text-[#3b82f6]">Basics</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800">What is dementia?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    A simple guide to what dementia is and how it affects the brain.
                  </p>
                  <Link to="/blog/what-is-dementia" className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6] hover:underline">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={chairImg} alt="Managing daily life" className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-[13px] font-semibold text-emerald-600">Managing daily life</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800">Creating calm routines</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Small changes at home can reduce confusion and bring comfort.
                  </p>
                  <Link to="/blog/creating-calm-routines" className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6] hover:underline">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={handshakeImg} alt="Communication" className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-violet-50 px-3 py-1 text-[13px] font-semibold text-violet-600">Communication</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800">Talking in ways that help</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Tips to connect with kindness and reduce frustration.
                  </p>
                  <Link to="/blog/talking-in-ways-that-help" className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6] hover:underline">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={heroImg} alt="Emotional wellbeing" className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-6 flex flex-col flex-1">
                  <div className="w-fit rounded-full bg-slate-100 px-3 py-1 text-[13px] font-semibold text-slate-600">Emotional wellbeing</div>
                  <h3 className="mt-3 text-[17px] font-bold text-slate-800">Caring for your emotions too</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600 flex-1">
                    Your well-being matters. You can't pour from an empty cup.
                  </p>
                  <Link to="/blog/caring-for-your-emotions" className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#3b82f6] hover:underline">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
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

      {/* Support for caregivers */}
      <section className="bg-background py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-8 lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] font-bold text-slate-800">Support for caregivers</h2>
            <p className="mt-4 max-w-md text-[16px] text-slate-600">
              Caring for someone with dementia can be beautiful and overwhelming.
            </p>
            <ul className="mt-10 space-y-7">
              {caregiverPoints.map((c) => (
                <li key={c.title} className="flex items-start gap-5">
                  <div
                    className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full ${
                      c.color === "blue"
                        ? "bg-blue-50 text-blue-600"
                        : c.color === "purple"
                          ? "bg-purple-50 text-purple-600"
                          : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <c.icon className="h-[20px] w-[20px]" />
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-slate-800">{c.title}</div>
                    <div className="mt-1 text-[14px] text-slate-600">{c.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-[#1d4ed8]">
              Explore caregiver support <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-[20px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between pb-6">
                <div className="text-[18px] font-bold text-slate-800">Caregiver reminder</div>
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="border-t border-slate-100 py-6">
                <p className="text-[16px] font-medium text-slate-800">
                  You can't pour from an empty cup.
                </p>
                <p className="mt-2 text-[16px] text-slate-600">It's okay to take a break.</p>
              </div>
              <div className="grid grid-cols-4 divide-x divide-slate-100 border-t border-slate-100 pt-8">
                {reminders.map((r) => (
                  <div key={r.label} className="flex flex-col items-center justify-center text-center">
                    <r.icon className={`h-8 w-8 stroke-[1.5] ${r.color}`} />
                    <div className="mt-3 text-[13px] font-medium text-slate-700">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Learn at your pace */}
      <section className="bg-background py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[1200px] px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">Learn at your pace</h2>
          <p className="mt-3 text-muted-foreground">
            Simple guides and resources to help you understand and feel more in control.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 text-left">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${c.tint}`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-semibold text-foreground">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
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
