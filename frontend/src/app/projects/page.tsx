import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">All Projects</h1>
        <p className="text-slate-600 mb-8">
          A showcase of my technical work in AI, Automation, and Cloud Infrastructure.
        </p>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* --- PROJECT 1: SENTIA (Detailed Hackathon Entry) --- */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🛡️</span>
                <h2 className="text-2xl font-bold text-slate-900">SENTIA: Your Digital Intuition</h2>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                🏆 Hackathon Winner
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-700 mb-6 text-base leading-relaxed">
              Sentia is an AI-powered "Digital Intuition" providing proactive communication integrity and real-time peace of mind. 
              Leveraging ultra-fast <strong>GLM 4.7 on Cerebras inference</strong> for sub-millisecond pattern recognition, it identifies secure interactions under a <strong>Zero-Knowledge privacy policy</strong>. 
              A seamless background guardian, Sentia ensures every connection is verified, private, and confident.
            </p>

            {/* Hackathon Highlights */}
            <div className="bg-slate-50 p-5 rounded-lg mb-6 border border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-3">🌟 Hackathon Highlights:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>GLM 4.7 Interleaved Thinking:</strong> We utilized GLM 4.7’s native reasoning to identify threats before any tool calls are made.</li>
                <li>• <strong>Cerebras Speed:</strong> Sub-millisecond "Intuition" is only possible thanks to the Wafer-Scale Engine-3, delivering real-time safety checks.</li>
                <li>• <strong>Cline Workflow:</strong> Built entirely through agentic "Vibe Coding," moving from concept to a production-ready UI in record time.</li>
                <li>• <strong>Zero-Knowledge Privacy:</strong> 100% ephemeral processing—audio is discarded immediately.</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">🛠️ Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">Agentic Orchestration: @Cline</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">Inference: @Cerebras (1,000+ TPS)</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">Voice: @Cartesia</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">Frontend: React & Tailwind CSS</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <a 
                href="https://lnkd.in/gatGiubJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                🌐 Live App
              </a>
              <a 
                href="https://lnkd.in/gE_mek4Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-purple-600 font-medium transition-colors text-sm flex items-center gap-1"
              >
                🎥 Demo Video
              </a>
              <a 
                href="https://lnkd.in/gRDU3mVp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm flex items-center gap-1"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* --- PROJECT 2: NextGenAdmin (Dashboard) --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">NextGenAdmin: Cloud Dashboard</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Centralized dashboard for Intune engineering logs and hardware validation. Automates 100% of virtualization blocks and device provisioning.
            </p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Live Project
            </span>
          </div>

          {/* --- PROJECT 3: CareerOps --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">CareerOps: Automation Utility</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Standalone Windows application built with <strong>Python & Selenium</strong>. Automates repetitive desktop workflows, reducing manual effort by 70%.
            </p>
            <a 
              href="https://github.com/SindhujaMyadam/CareerOps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              View Source Code →
            </a>
          </div>

          {/* --- PROJECT 4: Intune Lab (ORIGINAL) --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">☁️</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Intune Lab</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Virtual Machine automation scripts for setting up Intune testing environments.
            </p>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Completed</span>
          </div>

          {/* --- PROJECT 5: MNC Job Hunter --- */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">MNC Job Hunter</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Automated filtering and tracking for Multi-National Corporation job portals.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Sindhuja16-coder/mnc-job-hunter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Repo →
              </a>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}