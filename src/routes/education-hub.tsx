import React from "react";
import { Link } from "react-router-dom";
import {
  Heart, Facebook, Instagram, Youtube, Brain, Search, TestTube, Smartphone, Microscope, AlertTriangle, FileText, NotebookPen, ClipboardCheck, Shield, Users, ArrowRight, Video, Download, HeartHandshake, FlaskConical, Map, MoveRight, Stethoscope, Pill, Cookie, Activity, MessageCircleWarning, ScanLine, ArrowUpRight, ChevronDown, Headphones
} from "lucide-react";

import educationHeroImg from "@/assets/education-hero.png";

const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Education Hub", to: "/education-hub", hasDropdown: false },
  { label: "Caregiver Reality Check", to: "/caregiver-reality-check", hasDropdown: false },
  { label: "Dementia Trigger Decoder", to: "/dementia-trigger-decoder", hasDropdown: false },
];

const footerCols = [
  { title: "DementiaLogic", links: [{ label: "Compassion. Clarity. Care", to: "/" }, { label: "About Us", to: "/about" }, { label: "Resources", to: "/education-hub" }, { label: "Events", to: "/" }] },
  { title: "Explore", links: [{ label: "Talk to an Expert", to: "/" }, { label: "Find Local Help", to: "/" }, { label: "Caregiver Support", to: "/caregiver-reality-check" }] },
  { title: "Support", links: [{ label: "Help Centre", to: "/" }, { label: "Treatment Options", to: "/education-hub" }, { label: "Research Updates", to: "/" }] },
  { title: "Medical Info Hub", links: [{ label: "Help Centre", to: "/" }, { label: "Treatment Options", to: "/education-hub" }, { label: "Research Updates", to: "/" }] },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Heart className="h-6 w-6 text-primary/80" fill="currentColor" />
      <div className="text-lg font-bold text-foreground">
        Dementia<span className="text-primary/80">Logic</span>
      </div>
    </div>
  );
}

export default function EducationHub() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ── Header / Nav ──────────────────────────────────────────── */}
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
                    item.label === "Education Hub" ? "text-primary" : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className={`flex items-center gap-1 text-[15px] font-medium hover:text-primary ${
                    item.label === "Education Hub" ? "text-primary" : "text-foreground/90"
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

      {/* ── Main Layout: 2 Columns ────────────────────────────────── */}
      <main className="mx-auto max-w-[1400px] px-6 py-12">
        
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* ── LEFT COLUMN: MAIN CONTENT ───────────────────────────── */}
          <div className="lg:w-[70%] space-y-20">
             
            {/* Breadcrumb / Title Area */}
            <div className="mb-8">
               <div className="text-sm font-medium text-foreground/60 mb-6 flex items-center gap-2">
                 <Link to="/" className="hover:text-primary">Home</Link>
                 <span>/</span>
                 <span className="text-primary">Education Hub</span>
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 max-w-4xl">
                  The Dementia Education Hub:<br/>
                  <span className="text-primary/90">Clear Answers for a Complex Journey</span>
               </h1>
               <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">
                  The raw, unvarnished reality of dementia care is something we see every day working in the community and care homes across Newcastle upon Tyne. When a behavioral crisis happens at 2 AM, sympathy won't help you. You don't need platitudes; you need a strategy.
               </p>
               <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed mt-4 font-semibold border-l-4 border-primary pl-4">
                  This hub is designed to strip away the jargon and give you the clinical truth about what this disease is, how it works, and how to fight back.
               </p>
            </div>
             
            {/* Section 1 */}
            <section id="understanding" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">1. Understanding Dementia – It’s a Disease, Not Just "Getting Old"</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  Let’s clear up the most common misconception right now: <strong>dementia is not a normal or inevitable part of aging.</strong> Getting older means your joints might ache and it might take you a few seconds longer to remember a name. Dementia is different. It is an umbrella term for a group of progressive diseases that physically damage the brain’s structure and chemistry.
                </p>
                <p>
                  Currently, there are over <strong>900,000 people</strong> living with dementia in the UK. Yet, despite how common it is, the line between normal aging and early dementia often confuses families.
                </p>

                <div className="bg-muted/30 rounded-2xl p-8 my-10 border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-4">Normal Aging vs. Dementia: What's the Difference?</h3>
                  <p className="italic text-foreground/70 mb-6">Think of the brain as a massive, complex filing cabinet.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <div className="flex items-center gap-2 mb-3 text-primary/90 font-bold">
                           <Shield className="w-5 h-5"/> Normal Aging
                        </div>
                        <p className="text-sm">You walk into a room and forget why you went in there, or you temporarily misplace your car keys. The "file" is still in the cabinet; it just took you a minute to find it.</p>
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-3 text-destructive font-bold">
                           <AlertTriangle className="w-5 h-5"/> Dementia
                        </div>
                        <p className="text-sm">You look at the car keys and no longer understand what they are used for, or you get lost walking home from the local shop you’ve visited for thirty years. The "file" hasn't just been misplaced; the paper it was written on has been destroyed.</p>
                     </div>
                  </div>
                </div>

                <p>
                  Dementia affects more than just memory. It attacks cognitive functions like reasoning, language, spatial awareness, and the ability to regulate emotions. Recognizing that this is a physical breakdown of brain tissue—not someone "being difficult"—is the first and most crucial step in providing the right care.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="faces" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">2. The Different Faces of Dementia</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 mb-8">
                <p>
                  "Dementia" is just the broad category. To get the right help, you need to understand the specific disease driving the symptoms. While there are over 100 types, four main subtypes account for the vast majority of cases. They each attack the brain differently.
                </p>
              </div>

              <div className="space-y-6">
                 {[
                   { name: "Alzheimer's Disease (The Memory Thief)", icon: <Brain className="w-8 h-8" />, what: "The most common form, caused by an abnormal build-up of proteins (amyloid plaques and tau tangles) that strangle and kill brain cells.", sym: "It usually begins in the hippocampus, the brain's memory center. The hallmark is short-term memory loss—asking the same question repeatedly—while memories from forty years ago remain crystal clear.", prog: "The decline is typically a slow, steady downward slope." },
                   { name: "Vascular Dementia (The Step-wise Decline)", icon: <Heart className="w-8 h-8" />, what: "Caused by reduced blood flow to the brain, often due to a series of mini-strokes (TIAs) or diseased small blood vessels.", sym: "Rather than profound memory loss, the first signs are often problems with planning, organizing, making decisions, or a sudden slowing of thought.", prog: "It is often 'step-wise.' A person might remain stable for months, have a sudden drop in ability due to another minor vascular event, and then stabilize at that new, lower level." },
                   { name: "Dementia with Lewy Bodies (DLB) (The Fluctuation)", icon: <Activity className="w-8 h-8" />, what: "Caused by protein deposits called Lewy bodies in nerve cells. It is closely related to Parkinson's disease.", sym: "Memory is often intact early on. Instead, individuals experience vivid visual hallucinations, severe sleep disturbances (acting out dreams), and physical symptoms like a shuffling walk or stiffness.", prog: "Symptoms fluctuate wildly. A person might be completely lucid on Tuesday and profoundly confused on Wednesday. They are also highly sensitive to certain anti-psychotic medications, making accurate diagnosis critical." },
                   { name: "Frontotemporal Dementia (FTD) (The Personality Shift)", icon: <Users className="w-8 h-8" />, what: "Involves damage to the frontal and temporal lobes. It frequently strikes younger people, often between 45 and 65.", sym: "Memory remains strong, but personality changes drastically. A polite person might become impulsive, socially inappropriate, or develop compulsions. It can also severely impact language.", prog: "It presents as a behavioral or psychiatric issue first, often leading to misdiagnoses of depression before the brain disease is identified." },
                 ].map((type, i) => (
                   <div key={i} className="flex flex-col md:flex-row gap-6 bg-background border border-border p-6 rounded-2xl shadow-sm">
                      <div className="w-16 h-16 flex-shrink-0 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                         {type.icon}
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-foreground mb-4">{type.name}</h3>
                         <ul className="space-y-3 text-sm text-foreground/80 list-disc pl-4">
                            <li><strong className="text-foreground">What it is:</strong> {type.what}</li>
                            <li><strong className="text-foreground">Typical Symptoms:</strong> {type.sym}</li>
                            <li><strong className="text-foreground">The Progression:</strong> {type.prog}</li>
                         </ul>
                      </div>
                   </div>
                 ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="action" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">3. Taking Action – When You Suspect Something is Wrong</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  <strong>Denial is the most common first reaction to dementia symptoms.</strong> Families often cover up the gaps to avoid an uncomfortable truth. But ignoring the signs is the worst option. Early diagnosis opens the door to treatments that buy time, legal planning, and vital support systems.
                </p>
                
                <div className="space-y-8 mt-10">
                   <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><NotebookPen className="text-primary w-5 h-5"/> 1. Keep a "Symptom Diary"</h3>
                      <p className="pl-7">Doctors need patterns, not just anecdotes. Write down specific incidents: “Tuesday, 4 PM: Dad got lost driving back from the post office.” Having this concrete evidence makes the GP appointment vastly more productive.</p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><Stethoscope className="text-primary w-5 h-5"/> 2. Contacting the GP</h3>
                      <p className="pl-7">Your GP is the gatekeeper. Book a double appointment if possible. The GP’s first job isn’t to diagnose dementia—it’s to rule out everything else. They will order blood tests and check urine because severe vitamin B12 deficiency, underactive thyroids, and urinary tract infections (UTIs) can perfectly mimic dementia symptoms.</p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><FileText className="text-primary w-5 h-5"/> 3. The Specialist Referral</h3>
                      <p className="pl-7">If basic tests are clear, the GP will initiate a referral to a Memory Assessment Service, an Old Age Psychiatry clinic, or a neurologist. Use the waiting time to gather financial and legal documents (like Lasting Power of Attorney) while your loved one still has full capacity to sign them.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="clinic" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">4. Inside the Memory Clinic – Assessments and Scans</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  Walking into a memory clinic can be intimidating. Understanding what happens behind those doors strips away the fear. The goal is to paint a complete picture of how the brain is functioning.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Cognitive Assessments</h3>
                <p>You will be asked to complete puzzles using standardized tools like the ACE-III or the MoCA.</p>
                <div className="bg-muted/30 p-5 rounded-xl border border-border border-l-4 border-l-primary my-4">
                  <strong className="text-foreground block mb-2">What they look for:</strong>
                  <span className="text-sm">You might be asked to draw a clock face, remember an address for five minutes, or name animals. These rigorously test executive function, visuospatial skills, language, and memory recall.</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Inside the Brain: The Scans</h3>
                <p>To confirm the type of dementia, we look at the hardware.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                   <li><strong>CT Scan:</strong> Takes X-ray slices of the brain to check for major structural issues like tumors, old strokes, or obvious shrinkage.</li>
                   <li><strong>MRI:</strong> A highly detailed scan that shows specific areas where tissue is dying (e.g., shrinkage in the hippocampus points to Alzheimer’s).</li>
                   <li><strong>PET or DAT Scans:</strong> Used for complex diagnoses. A DAT scan looks at dopamine systems to confirm Lewy Body Dementia, while a PET scan looks at how the brain metabolizes glucose.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="toolkit" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">5. The Current Toolkit – Treatments, Nutrition, and UK Support</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  While we do not yet have a cure, modern care relies on a powerful blend of pharmacological tools, therapeutic interventions, and robust community support.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Medications and Therapies</h3>
                <p>
                  Medications known as Acetylcholinesterase inhibitors (like Donepezil) are often prescribed to temporarily boost cognitive function and stabilize symptoms. Alongside medication, Cognitive Stimulation Therapy (CST) is an evidence-based group therapy proven to improve quality of life and cognition.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Mechanical Reality of Nutrition</h3>
                <p>As dementia progresses, eating becomes a mechanical and sensory challenge.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                   <li><strong>The "White Plate" Problem:</strong> Dementia damages visual perception. Mashed potatoes on a white plate are invisible. Use brightly colored plates (like red or blue) to create high contrast.</li>
                   <li><strong>Finger Foods:</strong> As fine motor skills decline, switch to high-calorie finger foods so they can maintain independence and eat while pacing.</li>
                   <li><strong>The Sweet Craving:</strong> Damage to the brain can dull taste buds, leaving "sweet" as the only flavor they register. If they refuse dinner but will eat dessert, fortify the sweet foods with protein or cream. Calories trump strict nutritional rules at this stage.</li>
                   <li><strong>Hydration:</strong> Dehydration causes delirium. The brain's thirst mechanism often breaks, so don't just ask if they are thirsty. Hand them a cup or offer high-water foods like watermelon regularly.</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-10 mb-6 bg-primary/10 inline-block px-4 py-2 rounded-lg text-primary">Your UK Support Network (Save These Numbers)</h3>
                <p>You should not do this alone. Program these into your phone right now:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { name: "Dementia UK (Admiral Nurses)", d: "Specialist clinical nurses for complex challenges.", p: "0800 888 6678", e: "helpline@dementiauk.org" },
                    { name: "Alzheimer’s Society", d: "For local carer groups and navigating social care.", p: "0333 150 3456", e: "alzheimers.org.uk" },
                    { name: "Carers UK", d: "Focused on your rights and financial benefits.", p: "0808 808 7777", e: "advice@carersuk.org" },
                    { name: "Newcastle Carers", d: "Localized, face-to-face support in the North East.", p: "0191 275 5060" },
                  ].map(c => (
                     <div key={c.name} className="bg-background border border-border p-4 rounded-xl shadow-sm">
                        <strong className="block text-foreground">{c.name}</strong>
                        <span className="text-xs block mb-2">{c.d}</span>
                        <span className="font-bold text-primary block">{c.p}</span>
                        {c.e && <span className="text-xs block text-foreground/60">{c.e}</span>}
                     </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="behavioral" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">6. The Behavioral Challenge – Decoding BPSD</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p>
                  As memory loss progresses, it often takes a back seat to behavioral changes. We call these Behavioral and Psychological Symptoms of Dementia (BPSD). This includes extreme agitation, wandering, paranoia, and sleep inversion.
                </p>
                
                <div className="bg-destructive/10 border-l-4 border-destructive p-5 rounded-r-xl my-6">
                   <p className="text-destructive font-bold">
                     Let's be blunt: attempting to use logic or arguing to stop these behaviors is a losing battle. The person’s frontal lobes—the part of the brain responsible for impulse control—are physically damaged. Behavior is their only remaining language. When they hit out or pace relentlessly, it is almost always driven by an unmet need.
                   </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Becoming a Care Detective</h3>
                <p>
                  When called out to a care home or a family's living room, we don't rush to sedate a person who is agitated. We assume it is a physical cry for help. A brain with dementia cannot always localize pain or articulate illness.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-2xl border border-border my-6">
                   <h4 className="font-bold text-primary text-lg mb-2">The PINCH ME Protocol</h4>
                   <p className="text-sm leading-relaxed mb-2">We utilize clinical frameworks like the PINCH ME protocol to rapidly scan for hidden triggers. We look for unexpressed <strong>Pain</strong>, hidden <strong>Infections</strong> (like a UTI), severe <strong>Constipation</strong>, or <strong>Hydration</strong> issues.</p>
                   <p className="text-sm leading-relaxed">Once we rule out the physical, we audit the environment. Is the TV too loud? Is the lighting casting terrifying shadows?</p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The De-escalation Gap</h3>
                <p>
                  Knowing that behavior has a root cause is one thing; knowing exactly what to say and do in the heat of a crisis is another. Families often escalate a situation accidentally by arguing with the dementia or letting their own stress visibly show (the "Mirror Match" effect).
                </p>
                <p>
                  Professional caregivers use specific verbal scripts, distraction techniques, and personalized "Identity Anchors" to safely ground a person in distress. Our goal is to take those exact, proprietary clinical playbooks and put them directly into your hands when you need them most.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="horizon" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">7. The Horizon – The Future of Dementia Care is Already Here</h2>
              <div className="prose prose-lg max-w-none text-foreground/80">
                <p className="lead font-medium text-foreground mb-8">
                  For decades, a dementia diagnosis felt like walking off a map. The medical advice often boiled down to "get your affairs in order." Today, we are standing on the edge of a clinical revolution. Care is shifting from reactive crisis management to proactive, personalized intervention.
                </p>

                <div className="space-y-8">
                   <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2"><TestTube className="w-5 h-5 text-primary"/> 1. The Blood Test Revolution</h3>
                      <p>Historically, diagnosis required expensive brain scans. Soon, simple blood tests at your GP surgery will detect the toxic proteins associated with Alzheimer’s years before the first memory slip occurs. Treating dementia early is like fighting a fire: if you attack it while it’s still in the kitchen, you can save the house.</p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2"><Microscope className="w-5 h-5 text-primary"/> 2. Disease-Modifying Therapies</h3>
                      <p>We are entering the era of drugs (like Lecanemab) that actually clear amyloid plaques from the brain, slowing clinical decline. However, these are not silver bullets. They do not reverse existing damage and require heavy monitoring. They represent a major breakthrough, but they do not eliminate the daily, grinding reality of behavioral challenges at home.</p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2"><Smartphone className="w-5 h-5 text-primary"/> 3. The Digital Ward: Real-Time Care in the Living Room</h3>
                      <p>The greatest gap in dementia care isn't a lack of medical knowledge; it’s that the knowledge is trapped in the hospital. When a family faces severe agitation in the middle of the night, waiting three weeks for a clinic appointment is useless.</p>
                      
                      <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mt-4 text-sm">
                         <p className="mb-4">The future of care is digital. We are building technology that takes the clinical decision-making protocols used by specialist psychiatrists and puts them into your smartphone.</p>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Predictive Tracking:</strong> Smart applications will help families and care home staff track daily patterns to spot the early warning signs of a UTI or constipation before it turns into an explosion.</li>
                            <li><strong>Real-Time Playbooks:</strong> When distress hits, caregivers will access rapid de-escalation scripts proven to work for their loved one's specific profile.</li>
                            <li><strong>Clinical Safety:</strong> By relying on "Human-in-the-Loop" architecture, algorithms process complex data, but every care plan is verified by human logic.</li>
                         </ul>
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                   <p className="text-xl italic font-bold text-foreground text-center">
                     The defining shift in the next decade of dementia care isn't just about extending life; it is about fiercely protecting dignity. By combining biological detection with powerful digital support in the community, we are stripping away the guesswork.
                   </p>
                </div>
              </div>
            </section>

          </div>


          {/* ── RIGHT COLUMN: STICKY SIDEBAR ──────────────────────── */}
          <div className="lg:w-[30%] hidden lg:block">
            <div className="sticky top-24 space-y-5">
              
              {/* Table of Contents Card */}
              <div className="bg-background rounded-2xl p-5 border border-border shadow-sm">
                 <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary"/> On this page
                 </h3>
                 <ul className="space-y-2 text-sm font-medium">
                    <li><button onClick={() => scrollTo('understanding')} className="text-foreground/70 hover:text-primary transition-colors text-left">1. Understanding Dementia</button></li>
                    <li><button onClick={() => scrollTo('faces')} className="text-foreground/70 hover:text-primary transition-colors text-left">2. Different Faces of Dementia</button></li>
                    <li><button onClick={() => scrollTo('action')} className="text-foreground/70 hover:text-primary transition-colors text-left">3. Taking Action</button></li>
                    <li><button onClick={() => scrollTo('clinic')} className="text-foreground/70 hover:text-primary transition-colors text-left">4. Inside the Memory Clinic</button></li>
                    <li><button onClick={() => scrollTo('toolkit')} className="text-foreground/70 hover:text-primary transition-colors text-left">5. The Current Toolkit</button></li>
                    <li><button onClick={() => scrollTo('behavioral')} className="text-foreground/70 hover:text-primary transition-colors text-left">6. The Behavioral Challenge</button></li>
                    <li><button onClick={() => scrollTo('horizon')} className="text-foreground/70 hover:text-primary transition-colors text-left">7. The Horizon</button></li>
                 </ul>
              </div>

              {/* Action CTA Card */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-5 shadow-lg">
                 <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5"/>
                 </div>
                 <h3 className="font-bold text-lg mb-2">Need Immediate Answers?</h3>
                 <p className="text-sm text-primary-foreground/80 mb-5 leading-relaxed">
                   Use our clinical tool to decode behavioral triggers and find the right strategy instantly.
                 </p>
                 <Link to="/dementia-trigger-decoder" className="w-full rounded-xl bg-primary-foreground text-primary py-2.5 px-4 font-bold text-sm flex justify-center items-center gap-2 hover:bg-primary-foreground/90 transition-colors">
                    Try Trigger Decoder <ArrowUpRight className="w-4 h-4" />
                 </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────── */}
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
