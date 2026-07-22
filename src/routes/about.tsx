import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  ChevronDown,
  Headphones,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | DementiaLogic" },
      {
        name: "description",
        content: "Learn more about DementiaLogic and our founders.",
      },
    ],
  }),
});

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

function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="w-full bg-background border-b border-border/40">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary [&.active]:text-primary ${
                    item.label === "About Us" ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary ${
                    item.label === "About Us" ? "text-primary" : "text-foreground/90"
                  }`}
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

      {/* Main Content */}
      <main className="py-20">
        <div className="mx-auto max-w-[1200px] px-8">
          
          <div className="mb-20 text-center">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-5xl">About Us</h1>
            <div className="mt-4 mx-auto h-1 w-16 rounded bg-primary" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team working to bring clinical expertise directly to the caregivers who need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-foreground">Founder & Clinical Lead</h2>
              <h3 className="text-xl font-semibold text-primary mt-2">Dr Manjunadh Pillai</h3>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Dr. Manjunadh Pillai is an old age consultant liaison psychiatrist practising in NHS. With over a decade of specialised experience, he holds dual accreditation in old age and liaison psychiatry. He also holds a special interest in nutritional interventions in dementia. He doesn't just design care protocols; he lives them every day on the frontlines of the UK healthcare system.
                </p>
                <p>
                  Beyond work, Dr. Pillai is a deeply active figure in the clinical and academic psychiatric communities. He serves as an honorary research fellow at Newcastle University, ensuring all clinical workflows in this platform are grounded in the latest evidence-based science. He is an MRCPsych Exam Panel Member and a College Assessor for the Royal College of Psychiatrists, helping to set the standards for the next generation of specialists. His extensive research portfolio includes serving as an investigator for major commercial drug trials and publishing original research on Lewy Body Dementia, Alzheimer's disease, and the management of dementia in primary care.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full aspect-[4/3] rounded-2xl bg-muted border border-border shadow-sm flex items-center justify-center overflow-hidden">
                <div className="text-muted-foreground text-sm font-medium">Image Space for Dr Manjunadh Pillai</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-start">
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl bg-muted border border-border shadow-sm flex items-center justify-center overflow-hidden">
                <div className="text-muted-foreground text-sm font-medium">Image Space for Jobin Mathew Joseph</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Founder & Business Lead</h2>
              <h3 className="text-xl font-semibold text-primary mt-2">Jobin Mathew Joseph</h3>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Jobin is a UK-based Management Consulting Manager with 18+ years of experience leading digital transformation for global organisations. With an MBA and engineering background, he specialises in solving complex operational and technology challenges at scale.
                </p>
                <p>
                  His focus on dementia care is deeply personal — shaped by seeing within his own family how difficult caregiving can be, often without clear guidance in critical moments. Alongside supporting ageing parents while raising two young daughters, he realised a simple truth: caregivers are often doing their best without the right support when it matters most.
                </p>
                <p>
                  He co-founded this venture to change that — equipping caregivers with timely, practical support to make confident, compassionate decisions.
                </p>
                <p>
                  Outside of work, he enjoys motorbiking, hiking, and being thoroughly outpaced by his daughters.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[900px] mx-auto bg-sky-50 rounded-[2rem] p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Manjunath kept encountering the same reality—walking into family homes where people were at their absolute breaking point. The hardest part of the job wasn't the disease itself, but the moment when a family, exhausted and frightened, was trying to cope with a severe behavioural crisis alone.
              </p>
              <p>
                Week after week, the pattern repeated. Patients in acute distress, often not because of sudden disease progression, but due to hidden physical triggers or escalating behavioural loops that no one knew how to safely de-escalate—especially in the middle of the night. The clinical knowledge to manage these behavioural and psychological symptoms of dementia (BPSD) exists, but it lives inside clinics, not in the homes where it's needed most.
              </p>
              <p>
                This company was built to change that. The goal is simple: to unlock frontline psychiatric expertise and translate complex clinical frameworks into immediate, practical guidance that caregivers can use in real time. Because in a crisis, sympathy is not a strategy—clarity and action are.
              </p>
              <p>
                This platform wasn't conceived in a boardroom. It was built at the intersection of frontline NHS care and advanced technology. Manjunath provides the clinical architecture—the same protocols and de-escalation approaches used in real-world practice—while business lead Jobin and team bring that knowledge to life through engineering.
              </p>
              <p className="font-semibold text-foreground text-lg mt-8 border-t border-primary/20 pt-8">
                Together, they have created a secure, offline-first, and intuitive platform designed to function like a "digital ward"—ensuring that whether it's an exhausted family member or a busy care home worker, the right guidance is available in under 60 seconds, exactly when it matters most.
              </p>
            </div>
          </div>
        </div>
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
