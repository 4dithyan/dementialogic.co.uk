import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Facebook, Instagram, Youtube, Brain, Search, TestTube, Smartphone, Microscope, AlertTriangle, FileText, NotebookPen, ClipboardCheck, Shield, Users, ArrowRight, Video, Download, HeartHandshake, FlaskConical, Map, MoveRight, Stethoscope, Pill, Cookie, Activity, MessageCircleWarning, ScanLine, ArrowUpRight, ChevronDown, Headphones, Sparkles, Circle, CircleDot, BookOpen, CheckCircle2, Phone
} from "lucide-react";

export default function EducationHub() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full flex-grow flex flex-col relative bg-slate-50">
      {/* Universal Premium Mesh Background for the whole page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-slate-50 to-white"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[100px]"></div>
      </div>

      <main className="mx-auto max-w-[1400px] px-6 py-4 w-full relative z-10">
        
        {/* Breadcrumb Area */}
        <div className="mb-6 flex items-center gap-3 text-base font-medium text-slate-500">
           <Link to="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors"><Heart className="w-4 h-4" /> Home</Link>
           <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
           <span className="text-slate-900 font-bold bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">Education Hub</span>
        </div>

        {/* Editorial Wide Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="w-full h-[300px] md:h-[450px] mb-12 rounded-[2.5rem] overflow-hidden relative shadow-2xl"
        >
           <img 
             src="/images/old_age1.jpg" 
             alt="Caregiver holding hands" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          
          {/* ── LEFT COLUMN: MAIN CONTENT ───────────────────────────── */}
          <div className="lg:w-[70%] space-y-16">
             
            {/* Title Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="mb-12 relative"
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200/60 text-blue-600 text-[16px] font-bold tracking-wide uppercase mb-6">
                 <BookOpen className="w-4 h-4" />
                 Knowledge Base
               </div>
               
               <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 leading-[1.1] tracking-tight mb-6 max-w-4xl">
                  The Dementia Education Hub:<br/>
                  <span className="text-blue-600 italic">Clear Answers for a Complex Journey</span>
               </h1>
               <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light mb-6">
                  The raw, unvarnished reality of dementia care is something we see every day working in the community and care homes across Newcastle upon Tyne. When a behavioral crisis happens at 2 AM, sympathy won't help you. You don't need platitudes; you need a strategy.
               </p>
               
               <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border-l-4 border-blue-500 shadow-sm border-y border-r border-slate-100 max-w-3xl">
                 <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
                    This hub is designed to strip away the jargon and give you the clinical truth about what this disease is, how it works, and how to fight back.
                 </p>
               </div>
            </motion.div>
             
            {/* Section 1 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="understanding" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">1. Understanding Dementia – It’s a Disease, Not Just "Getting Old"</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light leading-relaxed">
                <p>
                  Let’s clear up the most common misconception right now: <strong className="text-slate-900">dementia is not a normal or inevitable part of aging.</strong> Getting older means your joints might ache and it might take you a few seconds longer to remember a name. Dementia is different. It is an umbrella term for a group of progressive diseases that physically damage the brain’s structure and chemistry.
                </p>
                <p>
                  Currently, there are over <strong className="text-slate-900">900,000 people</strong> living with dementia in the UK. Yet, despite how common it is, the line between normal aging and early dementia often confuses families.
                </p>

                <div className="bg-white rounded-[2rem] p-8 my-10 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Normal Aging vs. Dementia: What's the Difference?</h3>
                  <p className="italic text-slate-500 mb-8 relative z-10 text-lg">Think of the brain as a massive, complex filing cabinet.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                     <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold tracking-wide uppercase text-base">
                           <Shield className="w-5 h-5"/> Normal Aging
                        </div>
                        <p className="text-lg text-slate-700">You walk into a room and forget why you went in there, or you temporarily misplace your car keys. The "file" is still in the cabinet; it just took you a minute to find it.</p>
                     </div>
                     <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100">
                        <div className="flex items-center gap-2 mb-4 text-rose-600 font-bold tracking-wide uppercase text-base">
                           <AlertTriangle className="w-5 h-5"/> Dementia
                        </div>
                        <p className="text-lg text-slate-700">You look at the car keys and no longer understand what they are used for, or you get lost walking home from the local shop you’ve visited for thirty years. The "file" hasn't just been misplaced; the paper it was written on has been destroyed.</p>
                     </div>
                  </div>
                </div>

                <p>
                  Dementia affects more than just memory. It attacks cognitive functions like reasoning, language, spatial awareness, and the ability to regulate emotions. Recognizing that this is a physical breakdown of brain tissue—not someone "being difficult"—is the first and most crucial step in providing the right care.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="faces" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">2. The Different Faces of Dementia</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light mb-10">
                <p>
                  "Dementia" is just the broad category. To get the right help, you need to understand the specific disease driving the symptoms. While there are over 100 types, four main subtypes account for the vast majority of cases. They each attack the brain differently.
                </p>
              </div>

              <div className="space-y-6">
                 {[
                   { name: "Alzheimer's Disease", sub: "The Memory Thief", icon: <Brain className="w-8 h-8" />, color: "text-blue-600", bg: "bg-blue-50", what: "The most common form, caused by an abnormal build-up of proteins (amyloid plaques and tau tangles) that strangle and kill brain cells.", sym: "It usually begins in the hippocampus, the brain's memory center. The hallmark is short-term memory loss—asking the same question repeatedly—while memories from forty years ago remain crystal clear.", prog: "The decline is typically a slow, steady downward slope." },
                   { name: "Vascular Dementia", sub: "The Step-wise Decline", icon: <Heart className="w-8 h-8" />, color: "text-rose-500", bg: "bg-rose-50", what: "Caused by reduced blood flow to the brain, often due to a series of mini-strokes (TIAs) or diseased small blood vessels.", sym: "Rather than profound memory loss, the first signs are often problems with planning, organizing, making decisions, or a sudden slowing of thought.", prog: "It is often 'step-wise.' A person might remain stable for months, have a sudden drop in ability due to another minor vascular event, and then stabilize at that new, lower level." },
                   { name: "Dementia with Lewy Bodies", sub: "The Fluctuation", icon: <Activity className="w-8 h-8" />, color: "text-amber-500", bg: "bg-amber-50", what: "Caused by protein deposits called Lewy bodies in nerve cells. It is closely related to Parkinson's disease.", sym: "Memory is often intact early on. Instead, individuals experience vivid visual hallucinations, severe sleep disturbances (acting out dreams), and physical symptoms like a shuffling walk or stiffness.", prog: "Symptoms fluctuate wildly. A person might be completely lucid on Tuesday and profoundly confused on Wednesday. They are also highly sensitive to certain anti-psychotic medications, making accurate diagnosis critical." },
                   { name: "Frontotemporal Dementia", sub: "The Personality Shift", icon: <Users className="w-8 h-8" />, color: "text-emerald-600", bg: "bg-emerald-50", what: "Involves damage to the frontal and temporal lobes. It frequently strikes younger people, often between 45 and 65.", sym: "Memory remains strong, but personality changes drastically. A polite person might become impulsive, socially inappropriate, or develop compulsions. It can also severely impact language.", prog: "It presents as a behavioral or psychiatric issue first, often leading to misdiagnoses of depression before the brain disease is identified." },
                 ].map((type, i) => (
                   <div key={i} className="flex flex-col md:flex-row gap-8 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className={`w-20 h-20 flex-shrink-0 ${type.bg} ${type.color} rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                         {type.icon}
                      </div>
                      <div>
                         <h3 className="text-3xl font-bold text-slate-900 mb-1">{type.name}</h3>
                         <p className={`text-base font-bold uppercase tracking-widest ${type.color} mb-5`}>{type.sub}</p>
                         <ul className="space-y-4 text-lg text-slate-600 font-light">
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0"/> <div><strong className="text-slate-900 font-medium">What it is:</strong> {type.what}</div></li>
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0"/> <div><strong className="text-slate-900 font-medium">Typical Symptoms:</strong> {type.sym}</div></li>
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0"/> <div><strong className="text-slate-900 font-medium">The Progression:</strong> {type.prog}</div></li>
                         </ul>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="action" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">3. Taking Action – When You Suspect Something is Wrong</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light">
                <p>
                  <strong className="text-slate-900">Denial is the most common first reaction to dementia symptoms.</strong> Families often cover up the gaps to avoid an uncomfortable truth. But ignoring the signs is the worst option. Early diagnosis opens the door to treatments that buy time, legal planning, and vital support systems.
                </p>
                
                <div className="space-y-6 mt-10">
                   {[
                     { icon: <NotebookPen className="text-white w-5 h-5"/>, title: "1. Keep a 'Symptom Diary'", desc: "Doctors need patterns, not just anecdotes. Write down specific incidents: “Tuesday, 4 PM: Dad got lost driving back from the post office.” Having this concrete evidence makes the GP appointment vastly more productive." },
                     { icon: <Stethoscope className="text-white w-5 h-5"/>, title: "2. Contacting the GP", desc: "Your GP is the gatekeeper. Book a double appointment if possible. The GP’s first job isn’t to diagnose dementia—it’s to rule out everything else. They will order blood tests and check urine because severe vitamin B12 deficiency, underactive thyroids, and urinary tract infections (UTIs) can perfectly mimic dementia symptoms." },
                     { icon: <FileText className="text-white w-5 h-5"/>, title: "3. The Specialist Referral", desc: "If basic tests are clear, the GP will initiate a referral to a Memory Assessment Service, an Old Age Psychiatry clinic, or a neurologist. Use the waiting time to gather financial and legal documents (like Lasting Power of Attorney) while your loved one still has full capacity to sign them." }
                   ].map((item, i) => (
                      <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center shadow-md">
                           {item.icon}
                         </div>
                         <div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                           <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="clinic" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">4. Inside the Memory Clinic – Assessments and Scans</h2>
              
              <div className="prose prose-lg max-w-none text-slate-600 font-light mb-10">
                 <p className="text-xl leading-relaxed">
                   Walking into a memory clinic can be intimidating. Understanding what happens behind those doors strips away the fear. The goal is to paint a complete picture of how the brain is functioning.
                 </p>
              </div>
                 
              {/* Massive Editorial Image */}
              <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl mb-12 relative">
                 <img 
                   src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80" 
                   alt="Doctor in clinic" 
                   className="w-full h-full object-cover"
                 />
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 font-light">
                 <h3 className="text-3xl font-bold text-slate-900 mt-6 mb-4">The Cognitive Assessments</h3>
                 <p className="text-lg">You will be asked to complete puzzles using standardized tools like the ACE-III or the MoCA.</p>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 border-l-[6px] border-l-blue-500 my-6">
                  <strong className="text-slate-900 block mb-2 font-bold text-xl">What they look for:</strong>
                  <span className="text-lg text-slate-700">You might be asked to draw a clock face, remember an address for five minutes, or name animals. These rigorously test executive function, visuospatial skills, language, and memory recall.</span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Looking Inside the Brain: The Scans</h3>
                <p>To confirm the type of dementia, we look at the hardware.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                     <strong className="text-slate-900 block mb-2 text-xl">CT Scan</strong>
                     <p className="text-base">Takes X-ray slices of the brain to check for major structural issues like tumors, old strokes, or obvious shrinkage.</p>
                  </div>
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                     <strong className="text-slate-900 block mb-2 text-xl">MRI</strong>
                     <p className="text-base">A highly detailed scan that shows specific areas where tissue is dying (e.g., shrinkage in the hippocampus).</p>
                  </div>
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                     <strong className="text-slate-900 block mb-2 text-xl">PET / DAT Scans</strong>
                     <p className="text-base">Checks how the brain metabolizes glucose or looks at dopamine systems for complex diagnoses.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="toolkit" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">5. The Current Toolkit – Treatments, Nutrition, and UK Support</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light">
                <p>
                  While we do not yet have a cure, modern care relies on a powerful blend of pharmacological tools, therapeutic interventions, and robust community support.
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-10 mb-4">Medications and Therapies</h3>
                <p>
                  Medications known as Acetylcholinesterase inhibitors (like Donepezil) are often prescribed to temporarily boost cognitive function and stabilize symptoms. Alongside medication, Cognitive Stimulation Therapy (CST) is an evidence-based group therapy proven to improve quality of life and cognition.
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mt-10 mb-6">The Mechanical Reality of Nutrition</h3>
                <p>As dementia progresses, eating becomes a mechanical and sensory challenge.</p>
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm my-6 space-y-6">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold flex-shrink-0">1</div>
                      <div>
                         <strong className="text-slate-900 block text-xl mb-1">The "White Plate" Problem</strong>
                         <p className="text-lg text-slate-600">Dementia damages visual perception. Mashed potatoes on a white plate are invisible. Use brightly colored plates (like red or blue) to create high contrast.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold flex-shrink-0">2</div>
                      <div>
                         <strong className="text-slate-900 block text-xl mb-1">Finger Foods</strong>
                         <p className="text-lg text-slate-600">As fine motor skills decline, switch to high-calorie finger foods so they can maintain independence and eat while pacing.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold flex-shrink-0">3</div>
                      <div>
                         <strong className="text-slate-900 block text-xl mb-1">The Sweet Craving</strong>
                         <p className="text-lg text-slate-600">Damage to the brain can dull taste buds, leaving "sweet" as the only flavor. Fortify sweet foods with protein. Calories trump strict nutritional rules here.</p>
                      </div>
                   </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-14 mb-6 inline-flex items-center gap-3">
                   <Phone className="w-6 h-6 text-blue-500"/> Your UK Support Network
                </h3>
                <p className="mb-6">You should not do this alone. Program these into your phone right now:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { name: "Dementia UK", d: "Specialist Admiral Nurses", p: "0800 888 6678", e: "helpline@dementiauk.org" },
                    { name: "Alzheimer’s Society", d: "Local carer groups & social care", p: "0333 150 3456", e: "alzheimers.org.uk" },
                    { name: "Carers UK", d: "Rights and financial benefits", p: "0808 808 7777", e: "advice@carersuk.org" },
                    { name: "Newcastle Carers", d: "Face-to-face support in North East", p: "0191 275 5060" },
                  ].map(c => (
                     <div key={c.name} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                        <strong className="block text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">{c.name}</strong>
                        <span className="text-base block text-slate-500 mb-4">{c.d}</span>
                        <span className="font-bold text-blue-600 text-xl block">{c.p}</span>
                        {c.e && <span className="text-sm font-medium block text-slate-400 mt-1">{c.e}</span>}
                     </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="behavioral" className="scroll-mt-24">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">6. The Behavioral Challenge – Decoding BPSD</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light">
                <p>
                  As memory loss progresses, it often takes a back seat to behavioral changes. We call these Behavioral and Psychological Symptoms of Dementia (BPSD). This includes extreme agitation, wandering, paranoia, and sleep inversion.
                </p>
                
                <div className="bg-rose-50 border-l-[6px] border-rose-500 p-6 rounded-r-2xl my-8 shadow-sm">
                   <p className="text-rose-900 font-medium text-xl leading-relaxed">
                     Let's be blunt: attempting to use logic or arguing to stop these behaviors is a losing battle. The person’s frontal lobes—the part of the brain responsible for impulse control—are physically damaged. Behavior is their only remaining language. When they hit out or pace relentlessly, it is almost always driven by an unmet need.
                   </p>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-10 mb-4">Becoming a Care Detective</h3>
                <p>
                  When called out to a care home or a family's living room, we don't rush to sedate a person who is agitated. We assume it is a physical cry for help. A brain with dementia cannot always localize pain or articulate illness.
                </p>
                
                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] my-8">
                   <h4 className="font-bold text-blue-600 text-2xl mb-4 flex items-center gap-2"><ScanLine className="w-5 h-5"/> The PINCH ME Protocol</h4>
                   <p className="text-lg leading-relaxed mb-4 text-slate-700">We utilize clinical frameworks like the PINCH ME protocol to rapidly scan for hidden triggers. We look for unexpressed <strong>Pain</strong>, hidden <strong>Infections</strong> (like a UTI), severe <strong>Constipation</strong>, or <strong>Hydration</strong> issues.</p>
                   <p className="text-lg leading-relaxed text-slate-700">Once we rule out the physical, we audit the environment. Is the TV too loud? Is the lighting casting terrifying shadows?</p>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-10 mb-4">The De-escalation Gap</h3>
                <p>
                  Knowing that behavior has a root cause is one thing; knowing exactly what to say and do in the heat of a crisis is another. Families often escalate a situation accidentally by arguing with the dementia or letting their own stress visibly show (the "Mirror Match" effect).
                </p>
                <p>
                  Professional caregivers use specific verbal scripts, distraction techniques, and personalized "Identity Anchors" to safely ground a person in distress. Our goal is to take those exact, proprietary clinical playbooks and put them directly into your hands when you need them most.
                </p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} id="horizon" className="scroll-mt-24 mb-10">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">7. The Horizon – The Future of Care is Here</h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-light">
                <p className="text-2xl font-medium text-slate-800 mb-10 leading-relaxed">
                  For decades, a dementia diagnosis felt like walking off a map. The medical advice often boiled down to "get your affairs in order." Today, we are standing on the edge of a clinical revolution. Care is shifting from reactive crisis management to proactive, personalized intervention.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                        <TestTube className="w-6 h-6"/>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">The Blood Test Revolution</h3>
                      <p className="text-lg">Historically, diagnosis required expensive brain scans. Soon, simple blood tests at your GP surgery will detect toxic proteins associated with Alzheimer’s years before the first memory slip occurs.</p>
                   </div>
                   
                   <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                        <Microscope className="w-6 h-6"/>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Disease-Modifying Therapies</h3>
                      <p className="text-lg">We are entering the era of drugs that actually clear amyloid plaques, slowing clinical decline. While not a cure, they represent a massive leap forward in neurological science.</p>
                   </div>
                </div>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] mt-8 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                   <h3 className="text-3xl font-bold flex items-center gap-3 mb-6 relative z-10"><Smartphone className="w-6 h-6 text-blue-400"/> The Digital Ward: Real-Time Care</h3>
                   <p className="text-xl text-slate-300 mb-8 relative z-10 font-light">The greatest gap in dementia care isn't a lack of medical knowledge; it’s that the knowledge is trapped in the hospital. We are building technology that puts psychiatric decision-making protocols into your smartphone.</p>
                   
                   <ul className="space-y-4 relative z-10">
                      <li className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle2 className="w-4 h-4"/></div>
                        <p className="text-slate-300 text-lg"><strong className="text-white">Predictive Tracking:</strong> Spot early warning signs of UTI or constipation before it turns into an explosion.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1"><CheckCircle2 className="w-4 h-4"/></div>
                        <p className="text-slate-300 text-lg"><strong className="text-white">Real-Time Playbooks:</strong> Access rapid de-escalation scripts proven to work for specific distress profiles.</p>
                      </li>
                   </ul>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-200">
                   <p className="text-3xl italic font-bold text-slate-900 text-center leading-relaxed">
                     "The defining shift in the next decade of dementia care isn't just about extending life; it is about fiercely protecting dignity. By combining biological detection with powerful digital support, we are stripping away the guesswork."
                   </p>
                </div>
              </div>
            </motion.section>

          </div>


          {/* ── RIGHT COLUMN: STICKY SIDEBAR ──────────────────────── */}
          <div className="lg:w-[30%] hidden lg:block">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents Card - Glassmorphism */}
              <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-6 border border-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
                 <h3 className="font-bold text-slate-900 text-base uppercase tracking-widest mb-6 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600"/> On this page
                 </h3>
                 <ul className="space-y-3 text-[19px] font-medium">
                    <li><button onClick={() => scrollTo('understanding')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Understanding Dementia</button></li>
                    <li><button onClick={() => scrollTo('faces')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Different Faces of Dementia</button></li>
                    <li><button onClick={() => scrollTo('action')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Taking Action</button></li>
                    <li><button onClick={() => scrollTo('clinic')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Inside the Memory Clinic</button></li>
                    <li><button onClick={() => scrollTo('toolkit')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> The Current Toolkit</button></li>
                    <li><button onClick={() => scrollTo('behavioral')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> The Behavioral Challenge</button></li>
                    <li><button onClick={() => scrollTo('horizon')} className="text-slate-500 hover:text-blue-600 transition-colors text-left flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> The Horizon</button></li>
                 </ul>
              </div>

              {/* Action CTA Card - Premium Dark */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-colors duration-500"></div>
                 
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 relative z-10 backdrop-blur">
                    <Brain className="w-6 h-6 text-blue-400"/>
                 </div>
                 <h3 className="font-bold text-3xl mb-3 relative z-10 tracking-tight">Need Immediate Answers?</h3>
                 <p className="text-base text-slate-300 mb-8 leading-relaxed font-light relative z-10">
                   Use our clinical tool to decode behavioral triggers and find the exact strategy to de-escalate the situation instantly.
                 </p>
                 <Link to="/dementia-trigger-decoder" className="w-full rounded-2xl bg-blue-600 text-white py-4 px-4 font-bold text-base flex justify-center items-center gap-2 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all relative z-10">
                    Try Trigger Decoder <ArrowUpRight className="w-4 h-4" />
                 </Link>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
