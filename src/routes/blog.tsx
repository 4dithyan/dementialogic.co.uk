import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

import sundowningImg from "@/assets/sundowning_care.png";
import mirrorMatchImg from "@/assets/mirror_match.png";
import familyHolidayImg from "@/assets/family_holiday.png";
import clinicalHealthImg from "@/assets/clinical_health.png";
import whatIsDementiaImg from "@/assets/what_is_dementia.png";
import calmRoutinesImg from "@/assets/calm_routines.png";
import talkingHelpImg from "@/assets/talking_help.png";
import caringEmotionsImg from "@/assets/caring_emotions.png";

const BLOG_POSTS = [
  {
    id: "sundowning-survival-guide",
    title: "The Sundowning Survival Guide: 5 Practical Steps",
    excerpt: "When the sun goes down, the confusion goes up. Learn actionable steps to manage late-afternoon agitation effectively.",
    category: "Caregiver Strategies",
    date: "Nov 12, 2026",
    readTime: "4 min read",
    image: sundowningImg,
  },
  {
    id: "mirror-match-communication",
    title: "Why Logic Fails: The 'Mirror Match' Communication Technique",
    excerpt: "You cannot win an argument with a broken brain. Discover how validating feelings instantly lowers the temperature of a crisis.",
    category: "Communication",
    date: "Oct 28, 2026",
    readTime: "6 min read",
    image: mirrorMatchImg,
  },
  {
    id: "navigating-family-holidays",
    title: "Navigating Family Holidays with a Dementia Diagnosis",
    excerpt: "Holidays bring joy, but also noise and sensory overload. Here is how to create a safe, accessible holiday environment.",
    category: "Lifestyle & Support",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    image: familyHolidayImg,
  },
  {
    id: "pinch-me-hidden-triggers",
    title: "PINCH ME: Identifying Hidden Physical Triggers",
    excerpt: "Sudden spikes in aggression are often physical. Learn the PINCH ME protocol to identify underlying pain or infection.",
    category: "Clinical Insights",
    date: "Sep 30, 2026",
    readTime: "7 min read",
    image: clinicalHealthImg,
  },
  {
    id: "what-is-dementia",
    title: "What is dementia?",
    excerpt: "A simple guide to what dementia is and how it affects the brain.",
    category: "Basics",
    date: "Aug 14, 2026",
    readTime: "3 min read",
    image: whatIsDementiaImg,
  },
  {
    id: "creating-calm-routines",
    title: "Creating calm routines",
    excerpt: "Small changes at home can reduce confusion and bring comfort.",
    category: "Managing daily life",
    date: "Jul 22, 2026",
    readTime: "4 min read",
    image: calmRoutinesImg,
  },
  {
    id: "talking-in-ways-that-help",
    title: "Talking in ways that help",
    excerpt: "Tips to connect with kindness and reduce frustration.",
    category: "Communication",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    image: talkingHelpImg,
  },
  {
    id: "caring-for-your-emotions",
    title: "Caring for your emotions too",
    excerpt: "Your well-being matters. You can't pour from an empty cup.",
    category: "Emotional wellbeing",
    date: "Jun 28, 2026",
    readTime: "4 min read",
    image: caringEmotionsImg,
  },
];

export default function Blog() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 pt-6 pb-12">
      {/* Breadcrumb / Title Area */}
      <div className="mb-12">
        <div className="text-base font-medium text-foreground/60 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary">Blog</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 max-w-4xl">
          Clinical Insights & <span className="text-primary/90 italic">Real Talk</span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl leading-relaxed">
          No sugar-coating. Just practical strategies, clinical truths, and support for the reality of dementia care.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="group flex flex-col bg-background rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden relative bg-muted/20">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-primary flex items-center gap-1.5 shadow-sm">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-foreground/70 text-base leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border flex items-center text-primary font-semibold text-base">
                Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
