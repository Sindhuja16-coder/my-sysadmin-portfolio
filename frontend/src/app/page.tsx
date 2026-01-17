import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* RESTORED HERO SECTION */}
      <header className="max-w-6xl mx-auto px-4 pt-12">
        <div className="bg-[#0f172a] rounded-2xl p-12 text-white shadow-xl">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            System Administrator & Intune Engineer
          </h1>
          <p className="text-xl text-blue-400 font-mono">
            "Documenting the solutions to the problems I solve."
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 border-b border-slate-200 pb-4">
          Automation & Lab Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CareerOps */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Python Automation</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">CareerOps</h3>
            <p className="text-slate-600 mt-3 mb-6">A custom automation tool developed to streamline job applications and operational workflows.</p>
            <a href="/careerops" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Open Tool →</a>
          </div>

          {/* mnc-job-hunter - FIXED REPO LINK */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold text-green-600 tracking-widest uppercase">Web Scraping</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">mnc-job-hunter</h3>
            <p className="text-slate-600 mt-3 mb-6">Automated filtering and tracking for Multi-National Corporation job portals.</p>
            <a 
              href="https://github.com/Sindhuja16-coder/mnc-job-hunter" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View Repo →
            </a>
          </div>

          {/* Intune VM Lab */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">Cloud Infrastructure</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Intune VM Lab</h3>
            <p className="text-slate-600 mt-3 mb-6">Technical guide on resolving VT-x BIOS blocks and Windows OOBE enrollment loops.</p>
            <a href="/blog/intune-lab" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Read Lab Report →</a>
          </div>

        </div>
      </main>
    </div>
  );
}

