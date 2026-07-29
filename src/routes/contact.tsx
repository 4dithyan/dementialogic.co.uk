import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Youtube, ArrowRight, Activity, ChevronUp, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import healthBanner from "@/assets/health_care_banner.png";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white flex flex-col font-sans relative">
      
      {/* Floating Action Button */}
      <div className="fixed top-1/3 right-4 md:right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors z-50">
        <ChevronUp className="w-5 h-5 text-white" />
      </div>

      {/* Top Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-10 shadow-sm">
        {/* Background Image & Overlay */}
        <img src={healthBanner} alt="Health Care Support" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        {/* Abstract Logo top left */}
        <div className="absolute top-10 left-8 md:top-16 md:left-24 flex items-center gap-2">
          <Activity className="w-6 h-6 text-white" />
        </div>

        {/* Decorative Outlined "Contacts" Text (Right Side) */}
        <div className="absolute top-1/2 right-[-180px] md:right-[-250px] -translate-y-1/2 -rotate-90 origin-center pointer-events-none select-none hidden lg:block">
          <span 
            className="text-[150px] md:text-[225px] font-medium text-transparent tracking-tighter" 
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.7)' }}
          >
            Contacts
          </span>
        </div>

        {/* Main "Contacts" Heading */}
        <div className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2">
          <h1 className="text-6xl md:text-7xl lg:text-[113px] font-medium text-white tracking-tight drop-shadow-sm">
            Contacts
          </h1>
        </div>

        {/* Breadcrumb Tab */}
        <div className="absolute bottom-0 right-12 md:right-40 bg-white rounded-t-3xl px-8 py-3.5 flex items-center justify-center">
          <span className="text-[16px] text-slate-800 font-medium">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2 text-slate-400">&middot;</span>
            Contacts
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-24 pt-20 md:pt-28 pb-32 relative z-0">
        
        {/* No background grid lines */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-16 relative z-10">
          
          {/* Left Column: Text & Info */}
          <div className="w-full flex flex-col">
            <span className="text-[16px] font-medium text-slate-500 tracking-wider mb-6 italic block">
              // get in touch //
            </span>
            <h2 className="text-5xl md:text-[58px] leading-[1.1] font-medium text-[#111827] tracking-tight mb-8">
              We are always ready to help you and answer your questions
            </h2>
            <p className="text-[19px] text-slate-500 leading-relaxed mb-16 max-w-[500px]">
              Pacific hake false trevally queen parrotfish black prickleback 
              mosshead warbonnet sweeper! Greenling sleeper.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
              
              <div className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111827] mb-3">Call Center</h4>
                <div className="text-[18px] text-slate-500 font-medium flex flex-col gap-1.5">
                  <a href="tel:8001009752034" className="hover:text-slate-900 transition-colors">800 100 975 20 34</a>
                  <a href="tel:+12310002345678" className="hover:text-slate-900 transition-colors">+ (123) 1000-234-5678</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111827] mb-3">Our Location</h4>
                <div className="text-[18px] text-slate-500 font-medium flex flex-col gap-1.5">
                  <span>USA, New York - 1000</span>
                  <span>Str. First Avenue 1</span>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111827] mb-3">Email</h4>
                <a href="mailto:neuron@mail.co" className="text-[18px] text-slate-500 font-medium hover:text-slate-900 transition-colors">
                  neuron@mail.co
                </a>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111827] mb-3">Social network</h4>
                <div className="flex items-center gap-4 text-[#111827]">
                  <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} /></a>
                  <a href="#" className="hover:opacity-70 transition-opacity"><Twitter className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} /></a>
                  <a href="#" className="hover:opacity-70 transition-opacity"><Linkedin className="w-[18px] h-[18px]" fill="currentColor" strokeWidth={0} /></a>
                  <a href="#" className="hover:opacity-70 transition-opacity"><Youtube className="w-[18px] h-[18px]" /></a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full">
            <div className="bg-[#F8F9FA] rounded-[32px] p-8 md:p-12 w-full h-full flex flex-col justify-center">
              <h3 className="text-[28px] font-bold text-[#111827] mb-3 tracking-tight">Get in Touch</h3>
              <p className="text-[16px] text-slate-500 mb-10 leading-relaxed max-w-[300px]">
                Define your goals and identify areas where Aican add value to your business
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start text-left py-8"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#111827] mb-2">Message Sent</h4>
                    <p className="text-[18px] text-slate-500 mb-8 max-w-[250px] leading-relaxed">
                      We have received your inquiry and will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[16px] font-bold text-slate-800 hover:text-slate-500 underline underline-offset-4 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="Full name"
                        className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[18px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                      />
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[18px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="Subject"
                        className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[18px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                      />
                    </div>

                    <div className="relative mb-4">
                      <textarea 
                        required
                        rows={2}
                        placeholder="Message"
                        className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[18px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        className="inline-flex items-center gap-3 bg-[#262626] hover:bg-black text-white px-5 py-3 rounded-full text-[16px] font-medium transition-colors"
                      >
                        Send a message 
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
