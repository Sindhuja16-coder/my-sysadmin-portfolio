import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Portfolio & Experience</h1>
          <p className="text-lg text-slate-600">Engineering solutions for Cloud, Web, and Operations.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* --- FEATURED PROJECT: SENTIA (Premium Purple Tint) --- */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-lg transition-all relative overflow-hidden">
            
            {/* Optional: Subtle decorative blur for premium feel */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl drop-shadow-sm">🛡️</span>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">SENTIA: Your Digital Intuition</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-purple-700 font-bold text-sm tracking-wide">🏆 HACKATHON WINNER</span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-600 font-medium text-sm">Vibe Coding</span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-600 font-medium text-sm">AI Safety</span>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://lnkd.in/gatGiubJ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 md:mt-0 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  View Live App <span>→</span>
                </a>
              </div>
              
              <p className="text-slate-700 mb-8 text-lg leading-relaxed max-w-4xl">
                An AI-powered "Digital Intuition" app built with <strong>Vibe Coding</strong> and <strong>Agentic AI</strong>. 
                It uses <strong>Cerebras AI</strong> for sub-millisecond pattern recognition to detect threats during calls while maintaining 
                <strong> Zero-Knowledge privacy</strong> (audio is discarded immediately).
              </p>

              {/* Specs Box - Now White for Contrast */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                 <div>
                   <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Architecture</span>
                   <span className="text-sm font-semibold text-slate-800">Agentic Orchestration (Cline)</span>
                 </div>
                 <div>
                   <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Inference</span>
                   <span className="text-sm font-semibold text-slate-800">Cerebras (1,000+ TPS)</span>
                 </div>
                 <div>
                   <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Stack</span>
                   <span className="text-sm font-semibold text-slate-800">React, Tailwind, Vercel</span>
                 </div>
              </div>
            </div>
          </div>

          {/* --- EXISTING CARD 1: CareerOps --- */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">CareerOps</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Comprehensive automation platform for tracking job applications and managing career workflows.
            </p>
            <a href="https://github.com/SindhujaMyadam/CareerOps" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
              View Project <span>→</span>
            </a>
          </div>

          {/* --- EXISTING CARD 2: Automated Job Hunter --- */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Job Hunter</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Python automation bot that aggregates job alerts and filters emails into a central dashboard.
            </p>
            <a href="https://github.com/Sindhuja16-coder/mnc-job-hunter" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
              View Repository <span>→</span>
            </a>
          </div>

          {/* --- EXISTING CARD 3: Intune Expertise --- */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Intune Expertise</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Technical series covering the journey from VM setup to Enterprise Policy management.
            </p>
            <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
              Read the Series <span>→</span>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}