import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Automation & Lab Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* CareerOps */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Python Automation</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">CareerOps</h3>
            <p className="text-slate-600 mt-3 mb-6">Custom automation tool to streamline job applications and workflows.</p>
            <a href="/careerops" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Open Tool →</a>
          </div>

          {/* mnc-job-hunter - FIXED LINK */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-green-600 tracking-widest uppercase">Web Scraping</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">mnc-job-hunter</h3>
            <p className="text-slate-600 mt-3 mb-6">Automated filtering and tracking for MNC job portals.</p>
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
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">Cloud Infrastructure</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">Intune VM Lab</h3>
            <p className="text-slate-600 mt-3 mb-6">Technical guide on resolving VT-x BIOS blocks and enrollment loops.</p>
            <a href="/blog/intune-lab" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Read Lab Report →</a>
          </div>

        </div>
      </main>
    </div>
  );
}
