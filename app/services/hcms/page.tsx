import React from 'react';
import { 
  Activity, 
  Pill,      // Corrected from Pills
  LineChart, 
  BookOpen, 
  Stethoscope, 
  HeartPulse, 
  Target, 
  LifeBuoy,
  CheckCircle, // Corrected from CheckCircle2
  ChevronRight,
  LucideIcon
} from 'lucide-react';

// --- Types ---

interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface Benefit {
  title: string;
  description: string;
}

const HCMSPage: React.FC = () => {

  const pillars: Pillar[] = [
    {
      title: "Medication Adherence",
      description: "Developing reliable systems and routines to ensure you never miss a dose and follow your doctor's advice perfectly.",
      icon: Pill,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Monitoring 'Health Numbers'",
      description: "Teaching you how to track markers like blood pressure, glucose, and heart rate to detect trends early.",
      icon: LineChart,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Lifestyle Modification",
      description: "Using lifestyle medicine and holistic approaches to complement your clinical treatment plan.",
      icon: HeartPulse,
      color: "bg-rose-100 text-rose-600"
    }
  ];

  const benefits: Benefit[] = [
    { title: "Condition Education", description: "Deep dives into understanding your diagnosis and treatment options." },
    { title: "Self-Care Optimization", description: "Mastering the daily habits that keep your condition under control." },
    { title: "Goal Setting", description: "Personalized milestones for blood pressure, weight, or activity levels." },
    { title: "Ongoing Support", description: "Continuous guidance so you never feel alone in your health journey." },
  ];

  return (
    <main className="bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 lg:py-32 bg-indigo-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Activity size={14} className="animate-pulse" />
                Condition Management (HCMS)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                Control the Condition. <br />
                <span className="text-indigo-400">Don't let it control you.</span>
              </h1>
              <p className="text-lg text-indigo-100/80 mb-8 max-w-xl leading-relaxed">
                Whether it's hypertension, diabetes, asthma, or heart disease, our HCMS program provides the medical coaching you need to navigate the complexities of chronic health.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-900/40">
                  Join the Program
                </button>
                <div className="flex items-center gap-3 text-indigo-200">
                  <div className="w-10 h-10 rounded-full border border-indigo-700 flex items-center justify-center">
                    <Stethoscope size={18} />
                  </div>
                  <span className="text-sm italic">Complements your doctor's care</span>
                </div>
              </div>
            </div>

            {/* Right Side Visual Component */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                <h3 className="text-slate-900 font-bold text-xl mb-6">The HCMS Support Loop</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Glucose Tracking', icon: LineChart, val: 'Normal' },
                    { label: 'Medication Adherence', icon: Pill, val: 'On Time' },
                    { label: 'Lifestyle Goals', icon: Target, val: '80%' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><item.icon size={20} /></div>
                        <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md">{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <CheckCircle size={20} />
                   </div>
                   <p className="text-xs text-slate-500 font-medium italic">Continuous ongoing support enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE THREE PILLARS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Foundation of Self-Management</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Our health coaches provide intensive support across three critical areas to help you achieve optimal health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="flex items-center text-indigo-600 font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW WE HELP (FEATURES) --- */}
      <section className="py-24 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-950 mb-8 leading-tight">
                How our program empowers <br /> your daily life
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                      <CheckCircle size={16} />
                    </div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-2xl border border-indigo-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="p-3 bg-rose-50 text-rose-500 rounded-xl h-fit">
                    <LifeBuoy size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Ongoing Accountability</h4>
                    <p className="text-sm text-slate-500">
                      We provide the decision-making support needed to make healthy habits stick long-term, complementing your existing care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Health professional reviewing charts" 
                className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl max-w-xs shadow-xl hidden md:block">
                 <p className="text-xl font-bold mb-2">"A Bridge to Better Health"</p>
                 <p className="text-sm text-indigo-100 leading-relaxed">Our programs guide you as you navigate the daily demands associated with your health condition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HEALTH NUMBERS SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Master your 'Health Numbers'
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Understanding the markers of your condition is the first step to controlling it. We teach you the modalities and strategies for regular monitoring that make sense for your lifestyle.
                </p>
                <div className="space-y-4">
                  {[
                    'Set and reach health goals',
                    'Make informed decisions',
                    'Develop healthy habits',
                    'Optimize health outcomes'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle size={18} className="text-indigo-400" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Visualization Mockup */}
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                 <div className="flex items-end gap-3 h-48 mb-6">
                    {[45, 65, 30, 85, 55, 70, 40].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-500 rounded-t-lg opacity-80 hover:opacity-100 transition-all cursor-pointer" />
                    ))}
                 </div>
                 <div className="flex justify-between text-slate-500 text-xs uppercase font-mono tracking-tighter">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                 </div>
                 <div className="mt-8 text-center">
                    <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Markers Analysis</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 underline decoration-indigo-200 underline-offset-8 italic">Talk to us today to learn more</h2>
          <p className="text-lg text-slate-500 mb-10">
            Our health coaches are ready to provide the guidance you need to navigate the demands associated with your health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
              Schedule a Consultation
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
              Download Program Guide
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HCMSPage;