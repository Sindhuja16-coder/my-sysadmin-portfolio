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

          {/* --- FEATURED PROJECT: SENTIA --- */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8 rounded-2xl shadow-md border border-purple-200 relative overflow-hidden group">
            
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl drop-shadow-sm">🛡️</span>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">SENTIA: Your Digital Intuition</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-purple-700 font-bold text-sm tracking-wide">🤝 HACKATHON PARTICIPANT</span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-600 font-medium text-sm">24-Hour Sprint</span>
                      <span className="text-slate-400 text-sm">•</span>
                      <span className="text-slate-600 font-medium text-sm">AI Safety</span>
                    </div>
                  </div>
                </div>
                
                {/* Updated Buttons with Drive Video Link */}
                <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
                  <a 
                    href="https://sentia-sandy.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-sm flex items-center gap-2"
                  >
                    🌐 View Live <span>→</span>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1vRAPPd9Sj0oo27s5TAfO2SjB_j2a-0eG/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-purple-700 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors flex items-center gap-2"
                  >
                    🎥 Watch Video <span>→</span>
                  </a>
                  {/* Link to the new Detail Page we are about to create */}
                  <Link 
                    href="/sentia"
                    className="px-5 py-2 text-slate-600 font-medium hover:text-purple-700 transition-colors flex items-center gap-2"
                  >
                    📖 Read Case Study <span>→</span>
                  </Link>
                </div>
              </div>

              <p className="text-slate-700 mb-8 text-lg leading-relaxed max-w-4xl">
                An AI-powered "Digital Intuition" app built during the <strong>GLM 4.7 x Cerebras Hackathon</strong>. 
                It uses <strong>Cerebras AI</strong> for sub-millisecond pattern recognition to detect threats dynamically, ensuring 
                <strong> Zero-Knowledge privacy</strong> (audio is discarded immediately).
              </p>

              {/* Specs Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                <div>
                  <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Architecture</span>
                  <span className="text-sm font-semibold text-slate-800">Agentic Orchestration (Cline)</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Inference Speed</span>
                  <span className="text-sm font-semibold text-slate-800">Cerebras (1,000+ TPS)</span>
                </div>
                <div className="flex flex-col">
                  <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Links & Stack</span>
                  <span className="text-sm font-semibold text-slate-800">
                    <a href="https://github.com/Sindhuja16-coder/sentia" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline flex items-center gap-1">
                      💻 GitHub Repo <span>↗</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- EXISTING CARD: CareerOps --- */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">CareerOps</h3>
            <p className="text-slate-600 mb-4 text-sm">
              Comprehensive automation platform for tracking job applications and managing career workflows.
            </p>
            <Link href="/careerops" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
              View Project <span>→</span>
            </Link>
          </div>

          {/* --- EXISTING CARD: Automated Job Hunter --- */}
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

          {/* --- EXISTING CARD: Intune Expertise --- */}
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