import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Header Section - The Biggest Font on the Page */}
        <div className="mb-12 border-l-8 border-blue-600 pl-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            My Portfolio & Experience
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Engineering solutions for Cloud, Web, and Operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* --- FEATURED PROJECT: SENTIA --- */}
          {/* Visual Fix: White background, Title reduced to text-xl to match others */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-purple-600 hover:shadow-md transition-all">
            
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🛡️</span> 
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    SENTIA: Your Digital Intuition
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <span className="text-purple-700 font-bold uppercase text-xs tracking-wider">Hackathon Winner</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">AI Safety & Vibe Coding</span>
                  </div>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="mt-4 md:mt-0 flex gap-3">
                 <a 
                  href="https://lnkd.in/gatGiubJ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  View Live App
                </a>
                <Link 
                  href="/sentia"
                  className="px-4 py-2 rounded-md font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors text-sm"
                >
                  Read Case Study
                </Link>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-5xl">
              An AI-powered application built with <strong>Vibe Coding</strong> and <strong>Agentic AI</strong>. 
              It uses <strong>Cerebras AI</strong> for sub-millisecond pattern recognition to detect threats during calls, maintaining strict <strong>Zero-Knowledge privacy</strong>.
            </p>

            {/* Tech Stack - Compact Row */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                 <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-slate-400 uppercase">Engine:</span>
                   <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">Cerebras</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-slate-400 uppercase">Agent:</span>
                   <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">Cline (GLM 4.7)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-slate-400 uppercase">Stack:</span>
                   <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">Next.js / Tailwind</span>
                 </div>
            </div>
          </div>

          {/* --- CARD 2: CareerOps --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all border-l-4 border-l-transparent hover:border-l-blue-500">
            <div className="text-3xl mb-4 text-slate-700">⚙️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">CareerOps</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Comprehensive automation platform for tracking job applications and managing career workflows.
            </p>
            <a href="https://github.com/SindhujaMyadam/CareerOps" className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center gap-1">
              View Project <span>→</span>
            </a>
          </div>

          {/* --- CARD 3: Automated Job Hunter --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all border-l-4 border-l-transparent hover:border-l-blue-500">
            <div className="text-3xl mb-4 text-slate-700">🤖</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Job Hunter</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Python automation bot that aggregates job alerts and filters emails into a central dashboard.
            </p>
            <a href="https://github.com/Sindhuja16-coder/mnc-job-hunter" className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center gap-1">
              View Repository <span>→</span>
            </a>
          </div>

          {/* --- CARD 4: Intune Expertise --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all border-l-4 border-l-transparent hover:border-l-blue-500">
            <div className="text-3xl mb-4 text-slate-700">☁️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Intune Expertise</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Technical series covering the journey from VM setup to Enterprise Policy management.
            </p>
            <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center gap-1">
              Read the Series <span>→</span>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}