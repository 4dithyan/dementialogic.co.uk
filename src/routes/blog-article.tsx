import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bookmark } from "lucide-react";

import sundowningImg from "@/assets/sundowning_care.png";
import mirrorMatchImg from "@/assets/mirror_match.png";
import familyHolidayImg from "@/assets/family_holiday.png";
import clinicalHealthImg from "@/assets/clinical_health.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import caringEmotionsImg from "@/assets/caring_emotions.png";

const BLOG_POSTS = {
  "sundowning-survival-guide": {
    title: "The Sundowning Survival Guide: 5 Practical Steps",
    category: "Caregiver Strategies",
    date: "Nov 12, 2026",
    readTime: "4 min read",
    image: sundowningImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          When the sun begins to set, does your loved one's anxiety, confusion, or agitation suddenly spike? You are not alone. This phenomenon, known as "sundowning," is one of the most exhausting challenges for dementia caregivers.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What is Sundowning?</h2>
        <p className="mb-6 leading-relaxed">
          Sundowning is not a disease in itself, but a group of symptoms that occur at a specific time of day. It is thought to be caused by damage to the brain's "internal clock," leading to a mix-up of sleep-wake cycles.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5 Steps to Manage the Evening Rush</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Maximize Light Exposure:</strong> During the day, open curtains and encourage sitting in natural light. As evening approaches, turn on indoor lights before it gets dark outside to minimize shadows.</li>
          <li><strong className="text-foreground">Schedule Wisely:</strong> Plan highly active tasks or appointments for the morning when energy and cognitive function are generally highest.</li>
          <li><strong className="text-foreground">Limit Afternoon Caffeine:</strong> Restrict coffee, tea, or soda consumption after lunch to prevent sleep disruption.</li>
          <li><strong className="text-foreground">Create an Evening Routine:</strong> Establish a calming, predictable routine. Soft music, a warm environment, and familiar activities can signal safety to a confused brain.</li>
          <li><strong className="text-foreground">Check Your Own Stress:</strong> They mirror your tension. If you are rushing around making dinner and feeling stressed, they will feel that anxiety and escalate.</li>
        </ul>
        <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary italic">
          "You cannot control the sun going down, but you can control the environment inside your home. Focus on creating an atmosphere of overwhelming safety."
        </div>
      </>
    )
  },
  "mirror-match-communication": {
    title: "Why Logic Fails: The 'Mirror Match' Communication Technique",
    category: "Communication",
    date: "Oct 28, 2026",
    readTime: "6 min read",
    image: mirrorMatchImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          "I need to go to work!" they insist, pacing the hallway at 8 PM. You reply, "You retired 20 years ago." They become furious. You become exhausted. Why does this keep happening?
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Broken Reality Tester</h2>
        <p className="mb-6 leading-relaxed">
          Dementia destroys the part of the brain responsible for fact-checking and logic. When you try to force them into your reality, their brain registers it as a threat. They are not being stubborn; they are terrified because the person they trust is telling them their absolute reality is wrong.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Enter The Mirror Match</h2>
        <p className="mb-6 leading-relaxed">
          Instead of correcting the fact, mirror the feeling. If they are panicked about getting to work, they are feeling a sense of duty, urgency, or anxiety.
        </p>
        <ol className="list-decimal pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Acknowledge the Emotion:</strong> "You look really worried about being late."</li>
          <li><strong className="text-foreground">Validate the Reality:</strong> "You always took your job so seriously. Tell me about what you need to do today."</li>
          <li><strong className="text-foreground">Redirect Gently:</strong> "The office actually called and said they are closed for maintenance today. Since we have a day off, would you help me sort these files?"</li>
        </ol>
      </>
    )
  },
  "navigating-family-holidays": {
    title: "Navigating Family Holidays with a Dementia Diagnosis",
    category: "Lifestyle & Support",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    image: familyHolidayImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          Holidays are supposed to be joyful, but for a family navigating dementia, they can be a minefield of sensory overload, disrupted routines, and unrealistic expectations.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Redefining the Celebration</h2>
        <p className="mb-6 leading-relaxed">
          The first step to a successful holiday is letting go of how things "used to be." A massive 20-person dinner might have been the tradition, but if it causes severe distress and agitation for your loved one, it is no longer a sustainable tradition.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Tips for the Day</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Create a Quiet Room:</strong> Designate one room in the house as a low-stimulus zone where they can retreat if the noise becomes too much.</li>
          <li><strong className="text-foreground">Educate Visitors:</strong> Send a gentle email to guests beforehand explaining the situation. Ask them to approach from the front, speak slowly, and avoid asking "Do you remember me?"</li>
          <li><strong className="text-foreground">Keep the Routine:</strong> Try to maintain regular meal and medication times, even on a holiday.</li>
        </ul>
      </>
    )
  },
  "pinch-me-hidden-triggers": {
    title: "PINCH ME: Identifying Hidden Physical Triggers",
    category: "Clinical Insights",
    date: "Sep 30, 2026",
    readTime: "7 min read",
    image: clinicalHealthImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          When someone with dementia suddenly becomes highly aggressive, paranoid, or confused out of nowhere, the first suspect should never be "the dementia getting worse." It is almost always a physical problem.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The PINCH ME Protocol</h2>
        <p className="mb-6 leading-relaxed">
          Because they can no longer accurately locate or communicate pain, their distress manifests as behavioral crises. Medical professionals use the acronym PINCH ME to rule out acute physical causes for sudden delirium.
        </p>
        <ul className="list-none space-y-6 mb-8">
          <li><strong className="text-foreground text-xl">P - Pain:</strong> Are they wincing when moving? Check for hidden injuries, arthritis flare-ups, or dental pain.</li>
          <li><strong className="text-foreground text-xl">I - Infection:</strong> Urinary Tract Infections (UTIs) are the number one cause of sudden, severe delirium in the elderly. Also check for chest infections.</li>
          <li><strong className="text-foreground text-xl">N - Nutrition:</strong> Have they eaten? Are they severely dehydrated? Dehydration shrinks brain tissue and exacerbates confusion.</li>
          <li><strong className="text-foreground text-xl">C - Constipation:</strong> Severe constipation causes massive discomfort and agitation.</li>
          <li><strong className="text-foreground text-xl">H - Hydration:</strong> Often overlooked, poor fluid intake is a primary driver of cognitive decline.</li>
          <li><strong className="text-foreground text-xl">M - Medication:</strong> Have any new medications been introduced? Were doses missed?</li>
          <li><strong className="text-foreground text-xl">E - Environment:</strong> Is the room too hot, too cold, too noisy, or too dark?</li>
        </ul>
        <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-500 mt-8">
          <strong className="text-rose-800">Clinical Warning:</strong> If you suspect an infection or severe pain, contact a medical professional immediately. Do not attempt to manage medical delirium with behavioral strategies alone.
        </div>
      </>
    )
  },
  "what-is-dementia": {
    title: "What is dementia?",
    category: "Basics",
    date: "Aug 14, 2026",
    readTime: "3 min read",
    image: whatIsDementiaImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          Dementia is not a single disease; it's an overall term — like heart disease — that covers a wide range of specific medical conditions, including Alzheimer's disease. Disorders grouped under the general term "dementia" are caused by abnormal brain changes.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">It's More Than Forgetting</h2>
        <p className="mb-6 leading-relaxed">
          While memory loss is a common symptom, dementia also affects thinking, behavior, and the ability to perform everyday tasks. These changes trigger a decline in cognitive abilities severe enough to impair daily life and independent function.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Common Types of Dementia</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Alzheimer's Disease:</strong> The most common cause of dementia, accounting for 60-80% of cases. It typically involves memory loss and confusion that gradually worsens over time.</li>
          <li><strong className="text-foreground">Vascular Dementia:</strong> Often caused by strokes or issues with blood supply to the brain. Symptoms can appear suddenly or gradually, often affecting executive function and decision-making first.</li>
          <li><strong className="text-foreground">Lewy Body Dementia:</strong> Characterized by abnormal protein deposits in the brain. Symptoms include sleep disturbances, visual hallucinations, and slowness of movement similar to Parkinson's.</li>
          <li><strong className="text-foreground">Frontotemporal Dementia:</strong> Affects the frontal and temporal lobes of the brain, leading to changes in personality, behavior, and language skills, often presenting earlier in life than other types.</li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Early Diagnosis Matters</h2>
        <p className="mb-6 leading-relaxed">
          While there is currently no cure for most types of dementia, an early diagnosis provides crucial time to plan for the future, access appropriate medical care, and explore treatments that may help manage symptoms. It also allows individuals and their families to build a support network before the disease progresses significantly.
        </p>
      </>
    )
  },
  "creating-calm-routines": {
    title: "Creating calm routines",
    category: "Managing daily life",
    date: "Jul 22, 2026",
    readTime: "4 min read",
    image: calmRoutinesImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          A predictable routine is one of the most powerful tools in dementia care. When the brain is struggling to process the world, knowing exactly what comes next provides a profound sense of safety.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Power of Predictability</h2>
        <p className="mb-6 leading-relaxed">
          Structure reduces anxiety. Try to keep meals, waking times, and activities as consistent as possible. If a change is necessary, introduce it slowly and gently, allowing plenty of time for adjustment. A disorganized environment can rapidly escalate confusion and agitation.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tips for a Calmer Home</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Declutter the Environment:</strong> Too much visual stimuli can be overwhelming. Keep surfaces clear and walkways open to reduce tripping hazards and sensory overload.</li>
          <li><strong className="text-foreground">Use Contrast for Clarity:</strong> As vision changes, contrast helps. Use a brightly colored plate on a dark tablecloth to make food easier to see. Ensure the toilet seat contrasts with the floor.</li>
          <li><strong className="text-foreground">Reduce Background Noise:</strong> The ability to filter out background noise diminishes with dementia. Turn off the TV or radio when trying to have a conversation or during meals to improve focus.</li>
          <li><strong className="text-foreground">Establish a Nighttime Wind-Down:</strong> Create a soothing evening routine. Dim the lights, play soft music, and avoid stimulating activities an hour before bed to promote better sleep and reduce sundowning.</li>
        </ul>
      </>
    )
  },
  "talking-in-ways-that-help": {
    title: "Talking in ways that help",
    category: "Communication",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    image: talkingHelpImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          Communication with someone living with dementia requires patience and adaptation. It is about connection, not correction.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Focus on Feelings</h2>
        <p className="mb-6 leading-relaxed">
          When words fail, emotions remain. Pay attention to tone of voice and body language. If they are expressing distress about something that isn't true, don't argue the facts; validate the distress and offer comfort.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Communication Strategies</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Avoid Arguing:</strong> Arguing with someone whose brain is physically incapable of logic only increases frustration for both of you. Step into their reality.</li>
          <li><strong className="text-foreground">Keep it Simple:</strong> Use short sentences and simple words. Ask one question at a time and wait patiently for an answer. Too much information at once can cause them to shut down.</li>
          <li><strong className="text-foreground">Offer Choices, Not Open-Ended Questions:</strong> Instead of asking "What do you want for lunch?", ask "Would you like soup or a sandwich?" This reduces the cognitive load required to make a decision.</li>
          <li><strong className="text-foreground">Use Non-Verbal Cues:</strong> A gentle touch on the arm, a warm smile, and maintaining eye contact often communicate safety and love more effectively than words ever could.</li>
        </ul>
      </>
    )
  },
  "caring-for-your-emotions": {
    title: "Caring for your emotions too",
    category: "Emotional wellbeing",
    date: "Jun 28, 2026",
    readTime: "4 min read",
    image: caringEmotionsImg,
    content: (
      <>
        <p className="text-lg leading-relaxed text-foreground/80 mb-6 font-medium">
          Caregiver burnout is a real and dangerous condition. You cannot pour from an empty cup, and prioritizing your own well-being is not selfish; it is essential for the person you are caring for.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Acknowledge Your Limits</h2>
        <p className="mb-6 leading-relaxed">
          It is completely normal to feel anger, frustration, grief, and guilt. Allow yourself to feel these emotions without judgment. Seek out support groups, therapy, and regular respite care so you can step away and recharge.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Protecting Your Emotional Health</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong className="text-foreground">Ask for Specific Help:</strong> People often say "let me know if you need anything," but rarely follow through. Give them a specific task: "Could you sit with Mom for two hours on Tuesday so I can go to the store?"</li>
          <li><strong className="text-foreground">Find Your Outlet:</strong> Whether it's a 10-minute walk, reading a book, or gardening, you must maintain a sliver of your own identity and engage in activities completely unrelated to caregiving.</li>
          <li><strong className="text-foreground">Forgive Yourself:</strong> You will lose your patience. You will make mistakes. You are a human being doing an impossibly difficult job. Forgive yourself quickly and move forward.</li>
          <li><strong className="text-foreground">Join a Community:</strong> Connect with other caregivers. The validation of hearing "I go through that exact same thing" from someone else who truly understands is immensely powerful.</li>
        </ul>
      </>
    )
  }
};

export default function BlogArticle() {
  const { slug } = useParams();
  
  const article = slug ? BLOG_POSTS[slug as keyof typeof BLOG_POSTS] : null;

  if (!article) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-[#f8fbff]">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">Article Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">The article you are looking for does not exist or may have been removed.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fbff] min-h-screen pb-24">
      
      {/* Universal Breadcrumb Bar */}
      <div className="w-full bg-background border-b border-slate-100">
        <div className="w-full max-w-[1400px] mx-auto px-6 pt-6 pb-4">
          <div className="text-sm font-medium text-slate-500 flex items-center flex-wrap gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="text-primary font-semibold">{article.title}</span>
          </div>
        </div>
      </div>

      {/* ── STUNNING HERO SECTION (CINEMATIC) ──────────────────────── */}
      <div className="relative w-full h-[55vh] min-h-[400px]">
        {/* Background Image full width */}
        <div className="absolute inset-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbff] via-transparent to-transparent opacity-90" />
        </div>
      </div>

      {/* ── CONTENT & SIDEBAR GRID ──────────────────────── */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 -mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">
          
          {/* Main Article Content (White Paper style) */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5 border border-slate-200/60 relative">
            
            {/* Article Header (inside the card) */}
            <div className="mb-12 pb-12 border-b border-slate-100">
              <span className="inline-block bg-blue-50 text-blue-600 px-3.5 py-1.5 rounded-full uppercase tracking-wider text-xs font-bold mb-6">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" /> {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" /> {article.readTime}
                </div>
              </div>
            </div>

            <article className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              {article.content}
            </article>
          </div>
          
          {/* Sticky Sidebar */}
          <div className="sticky top-28 flex flex-col gap-8">
            
            {/* Creative Widget: Interactive Tool Promo */}
            <Link to="/dementia-trigger-decoder" className="group relative bg-white border border-blue-100 rounded-3xl p-8 shadow-sm overflow-hidden block hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">Dementia Trigger Decoder</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Experiencing sudden behavioral changes? Use our interactive tool to decode the distress and find actionable solutions.
                  </p>
                </div>
              </div>
            </Link>

            {/* Creative Widget: Related Articles */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-blue-500" /> Keep reading
              </h3>
              <div className="flex flex-col gap-6">
                {Object.entries(BLOG_POSTS)
                  .filter(([key]) => key !== slug)
                  .slice(0, 3)
                  .map(([key, post]) => (
                    <Link key={key} to={`/blog/${key}`} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                        <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
