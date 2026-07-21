import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import heroImg from "@/assets/hero-embrace.jpg";
import caregiverImg from "@/assets/caregiver-illustration.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Demitia Care — Compassion. Clarity. Care." },
      {
        name: "description",
        content:
          "Support for individuals living with dementia and the people who care for them. Guidance, understanding and a safe space when you need it.",
      },
      { property: "og:title", content: "Demitia Care — Compassion. Clarity. Care." },
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
  { label: "I need help for someone", hasDropdown: true },
  { label: "Understand dementia", hasDropdown: true },
  { label: "For caregivers", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "About us", hasDropdown: false },
];

const features = [
  { icon: Heart, title: "Person-centred care", desc: "Every person is unique. So is our care." },
  { icon: Users, title: "Support for families", desc: "Because caregivers deserve support too." },
  { icon: Shield, title: "Safe & supportive space", desc: "Guidance you can trust, whenever you need it." },
  { icon: Leaf, title: "Hope and dignity", desc: "Focusing on well-being, not just symptoms." },
];

const signs = [
  { icon: HelpCircle, tint: "bg-sky-100 text-sky-600", label: "Repeating questions or stories" },
  { icon: MapPin, tint: "bg-emerald-100 text-emerald-600", label: "Getting lost in familiar places" },
  { icon: CloudSun, tint: "bg-amber-100 text-amber-600", label: "Confusion in the evening or about time and date" },
  { icon: Puzzle, tint: "bg-violet-100 text-violet-600", label: "Trouble finding the right words" },
  { icon: UsersRound, tint: "bg-rose-100 text-rose-600", label: "Withdrawal from activities they once enjoyed" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
        <Heart className="h-6 w-6 text-primary" fill="currentColor" />
      </div>
      <div className="leading-tight">
        <div className="text-xl font-bold text-foreground">Demitia Care</div>
        <div className="text-xs text-muted-foreground">Compassion. Clarity. Care.</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="w-full bg-background">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-[15px] font-medium text-foreground/90 hover:text-primary"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">
            <Headphones className="h-4 w-4" />
            Talk to someone
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--hero-bg)" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-8 pb-24 pt-12 lg:grid-cols-2 lg:pb-32">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-6xl">
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
          <div className="relative">
            <img
              src={heroImg}
              alt="A caregiver tenderly embracing an elderly woman"
              width={1024}
              height={1024}
              className="h-full max-h-[520px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-8">
          <div className="relative -mb-16 grid grid-cols-1 gap-6 rounded-2xl bg-card p-8 shadow-lg md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
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
      </section>

      <section className="bg-background pb-16 pt-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-8 lg:grid-cols-[1.4fr_1fr]">
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
