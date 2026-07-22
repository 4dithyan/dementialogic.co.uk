import { Link, createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DementiaLogic — Compassion. Clarity. Care." },
      {
        name: "description",
        content:
          "Support for individuals living with dementia and the people who care for them. Guidance, understanding and a safe space when you need it.",
      },
      { property: "og:title", content: "DementiaLogic — Compassion. Clarity. Care." },
      {
        property: "og:description",
        content:
          "Support for individuals living with dementia and the people who care for them.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", hasDropdown: false },
  { label: "Caregiver Reality Check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", hasDropdown: false },
];

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
  { icon: Heart, title: "You are not alone.", desc: "We're here to listen and support you." },
  { icon: Users, title: "Take care of yourself.", desc: "Explore tips to manage stress and burnout." },
  { icon: FileText, title: "Learn and feel confident.", desc: "Practical guidance for everyday challenges." },
];

const reminders = [
  { icon: Coffee, label: "Pause" },
  { icon: Wind, label: "Breathe" },
  { icon: Leaf, label: "Reset" },
  { icon: Heart, label: "You matter" },
];

const learnCards = [
  { icon: FileText, tint: "bg-sky-100 text-sky-600", title: "Understanding dementia", desc: "Clear, simple information to help you understand." },
  { icon: Home, tint: "bg-emerald-100 text-emerald-600", title: "Creating a safe home", desc: "Tips to make daily life safer and calmer." },
  { icon: MessagesSquare, tint: "bg-violet-100 text-violet-600", title: "Communication that helps", desc: "Ways to connect with kindness and patience." },
  { icon: Sparkles, tint: "bg-amber-100 text-amber-600", title: "Activities that bring joy", desc: "Ideas for meaningful moments together." },
];

const footerCols = [
  { title: "Home", links: ["Waitlist"] },
  { title: "About Us", links: ["Founder profiles", "Clinical credentials", "Our Story"] },
  { title: "Education Hub", links: ["Clinically authored articles"] },
  { title: "Interactive Tools", links: ["Caregiver Reality Check", "Dementia Trigger Decoder"] },
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

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="w-full bg-background">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center gap-1 text-[15px] font-medium text-foreground/90 hover:text-primary [&.active]:text-primary"
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
            ))}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">
            <Headphones className="h-4 w-4" />
            Talk to someone
          </button>
        </div>
      </header>

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
      <div className="mx-auto max-w-[1400px] px-8">
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
      </div>

      {/* Signs */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-foreground">What you might be noticing</h2>
            <div className="mt-2 h-1 w-16 rounded bg-emerald-400" />
            <p className="mt-4 text-muted-foreground">
              These changes can be small at first. You're not alone in noticing them.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {signs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${s.tint}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-sm font-medium text-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              See more signs and understanding <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <aside className="rounded-2xl bg-sky-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-foreground">
                  Caring for someone is a journey.
                </h3>
                <p className="mt-4 text-sm text-foreground/80">
                  We're here to walk with you through the good days and the hard ones.
                </p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                  <Users className="h-4 w-4" />
                  Support for caregivers
                </button>
              </div>
              <img
                src={caregiverImg}
                alt="Illustration of a caregiver embracing an older woman"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-background pb-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
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
        </div>
      </section>

      {/* Support for caregivers */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Support for caregivers</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Caring for someone with dementia can be beautiful and overwhelming.
            </p>
            <ul className="mt-8 space-y-5">
              {caregiverPoints.map((c) => (
                <li key={c.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Explore caregiver support <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-foreground">Caregiver reminder</div>
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-lg font-medium text-foreground">
                You can't pour from an empty cup.
              </p>
              <p className="mt-1 text-muted-foreground">It's okay to take a break.</p>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {reminders.map((r) => (
                <div key={r.label} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-2 text-xs font-medium text-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learn at your pace */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
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
        </div>
      </section>

      {/* Talk banner */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1200px] px-8">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 py-14 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We support individuals living with dementia and the people who care for them.
            </p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <Facebook className="h-5 w-5 hover:text-primary" />
              <Instagram className="h-5 w-5 hover:text-primary" />
              <Youtube className="h-5 w-5 hover:text-primary" />
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l} className="hover:text-primary">
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
              <span className="hover:text-primary">Privacy Policy</span>
              <span className="hover:text-primary">Terms of Use</span>
              <span className="hover:text-primary">Accessibility</span>
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
