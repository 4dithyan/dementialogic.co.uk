import { Link } from "react-router-dom";
import {
  Heart,
  ChevronDown,
  Headphones,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";






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

export default function About() {
  return (
    <div className="w-full flex-grow flex flex-col">
      {/* Nav */}
      

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
      

      
    </div>
  );
}
