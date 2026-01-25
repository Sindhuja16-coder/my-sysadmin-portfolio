import Navbar from "../components/Navbar";

export default function AutomationHub() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-16">
        
        {/* ========================================= */}
        {/* PROJECT 1: CAREEROPS                      */}
        {/* ========================================= */}
        
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide mb-6">
            Python Automation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            CareerOps: Automated Job Hunter
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            An intelligent bot that scrapes email alerts, resolves redirects, and automatically tracks every job application in a central dashboard.
          </p>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://github.com/SindhujaMyadam/CareerOps" 
              target="_blank" 
              className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              📂 View Source Code on GitHub
            </a>
          </div>
        </div>

        {/* CareerOps Features - Reduced margin-bottom from mb-32 to mb-16 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">1.</span> Email Aggregation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              The bot connects to email servers at scheduled times, scanning for relevant job alerts and filtering out noise.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">2.</span> Smart Redirect
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Users paste job links into the bot. It automatically resolves redirects (like Bit.ly or LinkedIn wrappers) to find the direct career site URL.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">3.</span> Auto-Tracking
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Once applied, the bot logs the job details (Title, Company, Date) into the main dashboard for easy status tracking.
            </p>
          </div>
        </div>


        {/* ========================================= */}
        {/* DIVIDER - Reduced spacing                 */}
        {/* ========================================= */}
        <div className="w-full h-px bg-slate-200 mb-16"></div>


        {/* ========================================= */}
        {/* PROJECT 2: SENTIA                         */}
        {/* ========================================= */}

        <div className="text-center mb-12">
          {/* Tag is Purple to distinguish AI project */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-sm tracking-wide mb-6">
            AI Safety & Vibe Coding
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            SENTIA: Your Digital Intuition
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A real-time communication integrity tool providing proactive peace of mind. 
            Built with <strong>GLM 4.7</strong> and <strong>Cerebras</strong> for sub-millisecond threat detection.
          </p>
          
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a 
              href="https://sentia-sandy.vercel.app" 
              target="_blank" 
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              🌐 View Live App
            </a>
            <a 
              href="https://drive.google.com/file/d/1vRAPPd9Sj0oo27s5TAfO2SjB_j2a-0eG/view?usp=sharing" 
              target="_blank" 
              className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              🎥 Watch Demo Video
            </a>
          </div>
        </div>

        {/* Sentia Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">1.</span> Sub-ms Intuition
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Powered by the <strong>Cerebras Wafer-Scale Engine</strong>, Sentia achieves inference speeds of 1,000+ tokens per second, making safety checks feel instant.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">2.</span> Agentic Core
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Orchestrated using <strong>Cline</strong> and GLM 4.7. The system uses "interleaved thinking" to evaluate coercion risks before taking any action.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">3.</span> Zero-Knowledge
            </h3>
            <p className="text-slate-600 leading-relaxed">
              <strong>Privacy First:</strong> Audio data is processed in real-time memory and immediately discarded. No recordings are ever saved to disk or cloud.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}