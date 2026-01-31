'use client'
import React from 'react';
import { 
  BookOpen, 
  Video, 
  Mic, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Megaphone, 
  Newspaper,
  ArrowRight,
  Search,
  MessageSquare,
  Globe,
  LucideIcon
} from 'lucide-react';
import BlogSearch from '@/components/blog/BlogSearch';

// --- Interfaces ---

interface ContentChannel {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
}

interface Activity {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const HealthEducationPage: React.FC = () => {

  const channels: ContentChannel[] = [
    { title: "Articles & Blogs", description: "Deep dives into wellness topics.", icon: Newspaper, action: "Read Blog" },
    { title: "Video Series", description: "Visual guides to healthy living.", icon: Video, action: "Watch Now" },
    { title: "Podcasts", description: "Health tips for your commute.", icon: Mic, action: "Listen Now" },
    { title: "Resources", description: "Downloadable health guides.", icon: BookOpen, action: "Download" },
  ];

  const activities: Activity[] = [
    {
      title: "Seminars & Retreats",
      description: "Organized events focused on immersive health education and rejuvenation.",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Speaking Engagements",
      description: "Invite our experts to speak at your meetings, corporate events, or community gatherings.",
      icon: Megaphone,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Community Outreach",
      description: "Medical and health programs conducted directly across local communities.",
      icon: Globe,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Conferences",
      description: "Large-scale gatherings bringing together experts and wellness enthusiasts.",
      icon: Users,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <main className="bg-white font-sans text-slate-800 antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={14} /> Reliable • Fact-Checked • Trustworthy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl mb-6">
              The right knowledge is the <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">foundation of healthy living.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              In a world of "expert" noise and conflicting advice, we provide the clarity 
              and peace of mind you need to set the right health goals.
            </p>
          </div>

          {/* Search/Filter Simulation */}
          <BlogSearch />
        </div>
      </section>

      {/* --- THE "WHY" SECTION: THE PROBLEM --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 leading-snug">
                Bothered by <span className="text-rose-500 italic">conflicting</span> health info?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Many parading as "health experts" are mainly interested in your pocket, pushing expensive 
                supplements and herbal products. We believe that access to <strong>adequate, reliable information</strong> 
                is the only way to prevent non-communicable diseases like diabetes and hypertension.
              </p>
              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <p className="italic text-slate-300 border-l-4 border-blue-50 pl-4">
                  "Knowledge is not just power; it is peace of mind."
                </p>
                <p className="mt-4 text-sm font-bold uppercase text-blue-400">— Foundational Mission, MaxLife</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500">
                   <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" alt="Seminar" className="h-full w-full object-cover" />
                </div>
                <div className="h-48 bg-blue-600 rounded-3xl flex items-center justify-center p-6 text-white text-center shadow-lg">
                  <p className="font-bold">Fact-Based Research</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-amber-400 rounded-3xl flex items-center justify-center p-6 text-slate-900 text-center shadow-lg">
                   <p className="font-bold">Community Driven</p>
                </div>
                <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Workshop" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT CHANNELS --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Educational Resources</h2>
            <p className="text-slate-400 max-w-xl">Explore our diverse media channels designed to provide the basics of healthy living.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <channel.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{channel.description}</p>
                <div className="flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                  {channel.action} <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTIVITIES & EVENTS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Engage with us in the community</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't just stay online. Our mission is to meet you where you are—in seminars, 
                community centers, and your own corporate spaces.
              </p>
              <button className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                View Event Calendar <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {activities.map((activity, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-white hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${activity.color}`}>
                    <activity.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{activity.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INVITATION / SPEAKING CTA --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[3rem] overflow-hidden bg-blue-600 shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" 
                alt="Speaker on stage" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 p-10 md:p-20 flex flex-col items-center text-center text-white">
              <MessageSquare size={48} className="mb-8 opacity-50" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
                Have an event? Invite us to speak.
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl">
                Whether it's a corporate meeting or a community retreat, our team is available 
                to speak on any health and wellness theme of your choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-all">
                  Book a Speaker
                </button>
                <button className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HealthEducationPage;