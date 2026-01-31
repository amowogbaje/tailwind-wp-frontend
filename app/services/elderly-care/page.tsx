import React from 'react';
import { 
  Heart, 
  Activity, 
  Utensils, 
  Users, 
  Stethoscope, 
  UserCheck, 
  Smile, 
  Phone,
  LucideIcon,
  CheckCircle2
} from 'lucide-react';

// --- Types & Interfaces ---

interface TeamMember {
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const ElderlyCarePage: React.FC = () => {
  
  // --- Data Definitions ---
  
  const teamMembers: TeamMember[] = [
    {
      title: "Medical Doctors",
      role: "Led by Consultant Family Physician",
      description: "Overseeing health plans, medication management, and complex medical requirements.",
      icon: Stethoscope,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Experienced Nurses",
      role: "Clinical Care",
      description: "Professional nursing care providing safety, monitoring, and clinical expertise.",
      icon: Activity,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Home Care Assistants",
      role: "Daily Support",
      description: "Hands-on help with personal hygiene, mobility, and daily living activities.",
      icon: UserCheck,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Wellness Counsellors",
      role: "Lifestyle Support",
      description: "Ensuring mental and emotional vitality through professional counseling.",
      icon: Smile,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const services: ServiceItem[] = [
    {
      title: "Home Care Services",
      description: "Personal care assistance, medication reminders, companionship, and support with daily living activities—all delivered with respect and dignity.",
      icon: Heart,
      bgColor: "bg-rose-100",
      iconColor: "text-rose-600"
    },
    {
      title: "Comprehensive Health Monitoring",
      description: "Regular health assessments and wellness checks to ensure early detection of health concerns and continuous support for chronic conditions.",
      icon: CheckCircle2,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Nutrition & Physical Activity",
      description: "Guidance on balanced diets, meal planning, and gentle exercise routines tailored to maintain strength, mobility, and vitality.",
      icon: Utensils,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Social & Mental Wellness",
      description: "Structured social activities and emotional support designed to combat isolation and keep seniors connected, engaged, and mentally active.",
      icon: Users,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <main className="font-sans text-gray-700 antialiased bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" 
            alt="Caregiver holding hands with senior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Compassionate & Professional Support
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Aging well is possible. <br />
            <span className="text-blue-400">We’re here to help.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Our Elderly Care Program promotes active aging, independence, and emotional well-being through safe, reliable, and person-centered care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us Today
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              A Multidisciplinary Team You Can Trust
            </h2>
            <p className="text-lg text-slate-600">
              Services are delivered by a compassionate team committed to providing safe and reliable care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${member.bgColor} ${member.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.title}</h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Visual Side */}
            <div className="relative lg:sticky lg:top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Senior woman enjoying a healthy meal" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg italic">
                    "Healthy aging begins with good nutrition and appropriate physical activity."
                  </p>
                </div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
              <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700" />
            </div>

            {/* Content Side */}
            <div>
              <div className="mb-10">
                <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
                  What We Offer
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Comprehensive care tailored to individual needs.
                </h3>
              </div>

              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 ${service.bgColor} ${service.iconColor} rounded-full flex items-center justify-center`}>
                        <service.icon size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-blue-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-blue-700/50">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Whether you are planning ahead or responding to a current need...
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Loneliness and isolation can significantly impact health. Let us provide the connection and care your loved one deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center gap-2 bg-white text-blue-900 text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition duration-300">
              <Phone size={20} />
              Contact Us Now
            </button>
            <span className="text-blue-200 text-sm">or</span>
            <button className="text-white underline underline-offset-4 hover:text-blue-200 font-medium">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ElderlyCarePage;