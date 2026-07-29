import { motion } from "framer-motion";
import { Sparkles, Circle, CircleDot } from "lucide-react";

export default function About() {
  return (
    <div className="w-full flex-grow flex flex-col font-sans bg-white text-slate-900 pb-20 overflow-hidden">
      
      {/* Hero Section (Brand Blue Background) */}
      <section className="relative pt-24 pb-40 bg-[#E6F3FF] overflow-hidden">
        {/* Soft lighting overlay to keep it premium */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Floating decorative shapes */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 left-1/2 ml-32 opacity-80">
          <Sparkles className="w-6 h-6 text-blue-500" />
        </motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 left-1/2 ml-56 opacity-50">
          <Circle className="w-3 h-3 text-cyan-500" strokeWidth={3} />
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-32 left-1/2 ml-48 opacity-60">
          <CircleDot className="w-5 h-5 text-blue-400" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px] mx-auto px-6 text-center relative z-10 flex flex-col items-center"
        >
          <div className="mt-4 mx-auto h-1 w-16 rounded bg-blue-600 mb-8" />
          
          <h1 className="text-7xl md:text-8xl font-extrabold mb-6 tracking-tighter text-slate-900 pb-2">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Meet the dedicated team working to bring clinical expertise directly to the caregivers who need it most.
          </p>
        </motion.div>
      </section>

      {/* Overlapping Image Gallery */}
      <section className="relative z-20 max-w-[1100px] mx-auto px-4 md:px-8 -mt-24 mb-20">
        <div className="flex flex-row justify-center items-center gap-3 md:gap-5 h-[200px] md:h-[320px]">
          {/* Image 1 - Medium */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="w-1/4 h-[80%] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 border-[6px] border-white ring-1 ring-slate-900/5 relative group"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" alt="Caring hands" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
          {/* Image 2 - Short */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="w-1/4 h-[60%] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 border-[6px] border-white ring-1 ring-slate-900/5 relative group"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img src="https://images.unsplash.com/photo-1573497491208-6f16f2ea8b4e?auto=format&fit=crop&w=800&q=80" alt="Nurse with senior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
          {/* Image 3 - Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="w-1/4 h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 border-[6px] border-white ring-1 ring-slate-900/5 relative group"
          >
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80" alt="Medical staff helping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
          {/* Image 4 - Medium */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="w-1/4 h-[70%] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 border-[6px] border-white ring-1 ring-slate-900/5 relative group"
          >
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80" alt="Doctor comforting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
        </div>
      </section>

      {/* Our Story / Mission Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
        className="max-w-[1100px] mx-auto px-6 lg:px-8 mb-24"
      >
        <h2 className="text-5xl md:text-[63px] font-bold text-slate-900 mb-10 max-w-[700px] leading-[1.1] tracking-tight">
          Our Story
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-[21px] text-slate-600 leading-relaxed font-light">
          <div className="space-y-6">
            <p>
              Manjunath kept encountering the same reality—walking into family homes where people were at their absolute breaking point. The hardest part of the job wasn't the disease itself, but the moment when a family, exhausted and frightened, was trying to cope with a severe behavioural crisis alone.
            </p>
            <p>
              Week after week, the pattern repeated. Patients in acute distress, often not because of sudden disease progression, but due to hidden physical triggers or escalating behavioural loops that no one knew how to safely de-escalate—especially in the middle of the night. The clinical knowledge to manage these behavioural and psychological symptoms of dementia (BPSD) exists, but it lives inside clinics, not in the homes where it's needed most.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              This company was built to change that. The goal is simple: to unlock frontline psychiatric expertise and translate complex clinical frameworks into immediate, practical guidance that caregivers can use in real time. Because in a crisis, sympathy is not a strategy—clarity and action are.
            </p>
            <p>
              This platform wasn't conceived in a boardroom. It was built at the intersection of frontline NHS care and advanced technology. Manjunath provides the clinical architecture—the same protocols and de-escalation approaches used in real-world practice—while business lead Jobin and team bring that knowledge to life through engineering.
            </p>
            <p className="font-semibold text-slate-900 mt-8 border-t border-blue-500/20 pt-8">
              Together, they have created a secure, offline-first, and intuitive platform designed to function like a "digital ward"—ensuring that whether it's an exhausted family member or a busy care home worker, the right guidance is available in under 60 seconds, exactly when it matters most.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Founder 1 Section */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80" alt="Dr Manjunadh Pillai" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="pt-8 md:pt-0"
          >
            <p className="text-xl font-bold tracking-widest text-slate-400 uppercase mb-3 block">Founder & Clinical Lead</p>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-8 tracking-tight">Dr Manjunadh Pillai</h2>
            
            <div className="space-y-6 text-[20px] text-slate-600 leading-relaxed font-light">
              <p>
                Dr. Manjunadh Pillai is an old age consultant liaison psychiatrist practising in NHS. With over a decade of specialised experience, he holds dual accreditation in old age and liaison psychiatry. He also holds a special interest in nutritional interventions in dementia. He doesn't just design care protocols; he lives them every day on the frontlines of the UK healthcare system.
              </p>
              
              <p>
                Beyond work, Dr. Pillai is a deeply active figure in the clinical and academic psychiatric communities. He serves as an honorary research fellow at Newcastle University, ensuring all clinical workflows in this platform are grounded in the latest evidence-based science. He is an MRCPsych Exam Panel Member and a College Assessor for the Royal College of Psychiatrists, helping to set the standards for the next generation of specialists. His extensive research portfolio includes serving as an investigator for major commercial drug trials and publishing original research on Lewy Body Dementia, Alzheimer's disease, and the management of dementia in primary care.
              </p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Founder 2 Section */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="order-2 md:order-1 pt-8 md:pt-0"
          >
            <p className="text-xl font-bold tracking-widest text-slate-400 uppercase mb-3 block">Founder & Business Lead</p>
            <h2 className="text-5xl md:text-6xl font-bold text-cyan-600 mb-8 tracking-tight">Jobin Mathew Joseph</h2>
            
            <div className="space-y-6 text-[20px] text-slate-600 leading-relaxed font-light">
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2 group"
          >
            <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Jobin Mathew Joseph" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
          
        </div>
      </section>

    </div>
  );
}
