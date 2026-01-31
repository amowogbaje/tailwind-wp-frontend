import React from 'react';
import { 
  ClipboardList, 
  Stethoscope, 
  Search, 
  Activity, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  UserCheck,
  HeartPulse,
  Microscope,
  CheckCircle,
  LucideIcon,
  ArrowRight
} from 'lucide-react';

// --- Interfaces ---

interface ScreeningItem {
  name: string;
  category: "Basic" | "Specialized" | "Gender-Specific";
}

const HealthAssessmentPage: React.FC = () => {

  const screeningTests: ScreeningItem[] = [
    { name: "BMI (Height/Weight)", category: "Basic" },
    { name: "Blood Pressure", category: "Basic" },
    { name: "Blood Glucose", category: "Basic" },
    { name: "Lipid Profile", category: "Basic" },
    { name: "Urine Testing", category: "Basic" },
    { name: "Full Blood Count", category: "Basic" },
    { name: "Kidney Function (Electrolytes)", category: "Basic" },
    { name: "Cervical Pap Smear", category: "Gender-Specific" },
    { name: "Clinical Breast Exam", category: "Gender-Specific" },
    { name: "Prostate-Specific Antigen", category: "Gender-Specific" },
    { name: "Eye Check (Glaucoma)", category: "Specialized" },
    { name: "Dental Check", category: "Specialized" },
    { name: "Hepatitis B & HIV Status", category: "Specialized" },
    { name: "ECG & Chest Radiography", category: "Specialized" },
  ];

  return (
    <main className="bg-white font-sans text-slate-800 antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-8">
            <Search size={16} /> Awareness is the First Step
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your health journey <br />
            <span className="text-sky-400 font-light italic">begins with awareness.</span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10">
            Get a clear snapshot of your current health status through our secure assessments and expert guidance, tailored to your busy schedule.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              Start Online Assessment <ArrowRight size={18} />
            </button>
            <button className="bg-blue-800 text-white border border-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Book a PHE Check-up
            </button>
          </div>
        </div>
      </section>

      {/* --- THE PAIN POINT (WHY US?) --- */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="p-4 bg-white rounded-2xl shadow-sm inline-block mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Busy schedule? <br />Skip the hospital hassle.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                If you've been putting off your routine check-up due to concerns about long waiting times or hospital clinics, we are here to help. We bring the assessment to you—virtually or on-site.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "No Waiting", icon: CheckCircle },
                { title: "Secure Results", icon: ShieldCheck },
                { title: "Virtual Support", icon: Activity },
                { title: "Personalized Advice", icon: UserCheck }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
                  <item.icon className="text-blue-500" size={24} />
                  <span className="font-bold text-blue-950">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BASIC VS COMPREHENSIVE --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Assessment Options</h2>
            <p className="text-slate-500">Choose the depth of insight that fits your current needs.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Option 1: Basic */}
            <div className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] hover:border-blue-200 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FileText size={32} />
                </div>
                <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Initial Entry</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Basic Health Status & Lifestyle</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                A non-rigorous alternative to comprehensive check-ups. Covers family history, eating patterns, physical activity, sleep, and emotional health.
              </p>
              <ul className="space-y-4 mb-10">
                {['Bio-physical Profile', 'Lifestyle History', 'Stress Management Assessment', 'Social Support Review'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-blue-500" size={18} /> {t}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>

            {/* Option 2: Comprehensive */}
            <div className="bg-blue-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Microscope size={120} />
               </div>
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-blue-800 text-white rounded-2xl">
                  <Stethoscope size={32} />
                </div>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Recommended Periodic</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Health Check (PHE)</h3>
              <p className="text-blue-100/70 mb-8 leading-relaxed">
                The general medical check-up (PHE) is a powerful tool for screening risk factors and preventing the onset or worsening of diseases.
              </p>
              <ul className="space-y-4 mb-10">
                {['Full Physical Examination', 'Specific Screening Tests', 'General Wellness Counselling', 'Preventive Recommendations'].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="text-sky-400" size={18} /> {t}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all">
                Book PHE Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SCREENING CHECKLIST (IMAGE INTEGRATION) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Periodic Screening Checklist</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Depending on your age, gender, and last check-up results, these are the basic markers you should have evaluated every 1-2 years.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {screeningTests.map((test, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-2 border-b border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold text-slate-700">{test.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-100/50 rounded-2xl border border-blue-200">
                <p className="text-sm text-blue-900 italic">
                  * Note: Specialized tests like ECG or Mammography are indicated based on specific risk factors or age milestones.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              
              <div className="mt-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h4 className="font-bold text-blue-950 mb-4 flex items-center gap-2 text-xl">
                  <HeartPulse className="text-rose-500" /> Holistic Dimensions
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our assessment isn't just about numbers. We educate you on how the <strong>physical, mental, emotional,</strong> and <strong>social</strong> dimensions of your life impact your overall well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ClipboardList className="text-blue-600" size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6">Start Your Assessment Today</h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Get a clear picture of where you stand. Our virtual or on-site support is ready to guide you through your routine medical check-up without the hassle.
          </p>
          <button className="px-12 py-5 bg-blue-600 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all">
            Talk to us today!!
          </button>
        </div>
      </section>

    </main>
  );
};

export default HealthAssessmentPage;