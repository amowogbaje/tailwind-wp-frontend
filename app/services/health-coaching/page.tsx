import React from 'react';
import { 
  Target, 
  ClipboardCheck, 
  BookOpen, 
  MessageCircle, 
  Users, 
  Stethoscope, 
  Apple, 
  Dumbbell, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Video,
  MapPin,
  LucideIcon
} from 'lucide-react';

// --- Interfaces ---

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FocusArea {
  label: string;
  icon: LucideIcon;
  color: string;
}

const HealthCoachingPage: React.FC = () => {

  // --- Data ---

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by ascertaining your unique needs, interests, and deep-seated motivations.",
      icon: Target
    },
    {
      number: "02",
      title: "Assessment",
      description: "A qualified professional conducts a basic assessment of your current health status.",
      icon: ClipboardCheck
    },
    {
      number: "03",
      title: "Action Plan",
      description: "Jointly drawing up a tailored roadmap to find the best ways to reach your goals.",
      icon: MapPin
    },
    {
      number: "04",
      title: "Education",
      description: "Providing you with the knowledge and instructional materials to understand your body.",
      icon: BookOpen
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Continuous encouragement and adjustment of the plan to ensure you stay on track.",
      icon: MessageCircle
    }
  ];

  const focusAreas: FocusArea[] = [
    { label: "Eat Healthier", icon: Apple, color: "text-blue-600 bg-blue-50" },
    { label: "Physical Exercise", icon: Dumbbell, color: "text-indigo-600 bg-indigo-50" },
    { label: "Manage Stress", icon: Brain, color: "text-cyan-600 bg-cyan-50" },
    { label: "Quit Smoking", icon: CheckCircle, color: "text-rose-600 bg-rose-50" },
    { label: "Control BP", icon: Stethoscope, color: "text-blue-700 bg-blue-100" },
    { label: "Boost Energy", icon: ArrowRight, color: "text-sky-600 bg-sky-50" },
  ];

  return (
    <main className="font-sans text-slate-700 antialiased bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-blue-950 overflow-hidden">
        {/* Abstract Background Shapes - Now Indigo and Sky Blue */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-500 blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Holistic & Lifestyle Medicine
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bridge the gap between <br />
                <span className="text-sky-400">knowing</span> and <span className="text-sky-400">doing</span>.
              </h1>
              
              <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
                Living healthy isn't always easy, but personalized guidance significantly helps. 
                Our research-backed coaching program puts you on the path toward optimal health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-blue-950 font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50">
                  Start Your Journey
                </button>
                <div className="flex items-center gap-4 text-sm font-medium text-blue-200 px-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-800 border-2 border-blue-900 flex items-center justify-center text-xs">
                        <Users size={12} />
                      </div>
                    ))}
                  </div>
                  <span>Join our community</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Illustration */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-800/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Health coach talking to client" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
                    <p className="font-bold">Flexible Coaching</p>
                    <p className="text-sm text-blue-100 flex items-center gap-2 mt-1">
                      <Smartphone size={14} /> Phone
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      <Video size={14} /> Online
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      <Users size={14} /> In-Person
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TEAM / EXPERTISE SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertise You Can Lean On</h2>
          <p className="text-lg text-slate-600 mb-12">
            This isn't just advice; it's medical science applied to lifestyle. Our team is led by a 
            <span className="font-bold text-blue-700"> Consultant Family Physician</span> with specialized 
            training in holistic and lifestyle medicine.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Qualified Doctors', 'Registered Nurses', 'Expert Dieticians', 'Exercise Trainers'].map((role, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500 mx-auto mb-3" />
                <p className="font-semibold text-slate-800">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE PROCESS (TIMELINE/STEPS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Your Personal Roadmap</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Arrow connector for desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-blue-200">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOALS / WHAT WE COVER --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Whatever your goal, <br />
                <span className="text-blue-600">we have a plan for it.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you want to lose weight, gain energy, or manage a chronic condition, 
                our ultimate goal is helping you improve and maintain your health sustainability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className={`p-2 rounded-md ${area.color}`}>
                      <area.icon size={18} />
                    </div>
                    <span className="font-semibold text-slate-700">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1700801936521-348308ae2db3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Group of people jogging in park" 
                className="relative rounded-3xl shadow-lg w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                    <Apple size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Nutrition + Activity</p>
                    <p className="text-sm text-slate-500">The foundation of active aging.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-blue-950 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl overflow-hidden relative">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl mix-blend-screen"></div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-sky-500 rounded-full blur-3xl mix-blend-screen"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to take control of your health?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              You don't have to do it alone. Contact us today to learn more about how our 
              medical coaching team can support your transformation.
            </p>
            <button className="bg-sky-500 text-blue-950 text-lg font-bold py-4 px-12 rounded-full hover:bg-sky-400 transform hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
              Get Started
            </button>
            <p className="mt-6 text-blue-300 text-sm">
              Available Online • In-Person • Over the Phone
            </p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HealthCoachingPage;