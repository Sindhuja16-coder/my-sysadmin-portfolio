import Navbar from "../components/Navbar";
import Link from "next/link";

export default function SentiaCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-5xl">🛡️</span>
             <h1 className="text-4xl font-bold text-slate-900">SENTIA</h1>
          </div>
          <h2 className="text-2xl text-slate-700 font-medium mb-6">
            The "Digital Intuition" for Personal Safety
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-bold">🏆 Hackathon Winner</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Vibe Coding</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Cerebras AI</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Privacy-First</span>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://lnkd.in/gatGiubJ" 
              target="_blank"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              View Live App
            </a>
            <a 
              href="https://lnkd.in/gRDU3mVp" 
              target="_blank"
              className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* The Challenge */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            In an era of digital coercion and phishing, identifying threats in real-time is difficult. 
            Traditional safety apps are reactive—they only help *after* you press a panic button. 
            We needed a solution that was <strong>proactive</strong>, identifying threats via voice patterns and context 
            without compromising the user's absolute privacy.
          </p>
        </section>

        {/* The Solution */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution: Vibe Coding & Agentic AI</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We built <strong>SENTIA</strong>, an AI agent that listens to call audio patterns to detect coercion. 
            By leveraging <strong>Cerebras AI</strong>, we achieved sub-millisecond inference speeds, allowing the AI to "intuit" a threat instantly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-purple-700 mb-2">⚡ Speed (Cerebras)</h4>
              <p className="text-slate-600 text-sm">
                Utilizing the Wafer-Scale Engine-3 to process audio tokens at record-breaking speeds (1,000+ TPS), ensuring no latency during live calls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-purple-700 mb-2">🔒 Zero-Knowledge Privacy</h4>
              <p className="text-slate-600 text-sm">
                A core architecture choice: audio is processed ephemerally. Once the inference is made (Safe/Threat), the data is immediately discarded. No recording is ever saved.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Architecture</h3>
          <ul className="space-y-4 bg-slate-100 p-6 rounded-xl border border-slate-200">
            <li className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Orchestrator:</span>
              <span className="text-slate-700"><strong>Cline (GLM 4.7)</strong> handles the agentic workflow and logic.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Inference:</span>
              <span className="text-slate-700"><strong>Cerebras</strong> Llama 3.1 70b model for pattern recognition.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Voice:</span>
              <span className="text-slate-700"><strong>Cartesia</strong> for generating natural-sounding AI alerts.</span>
            </li>
             <li className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Frontend:</span>
              <span className="text-slate-700">Next.js, React, Tailwind CSS deployed on Vercel.</span>
            </li>
          </ul>
        </section>

        {/* Demo Video Section - UPDATED PATH */}
        <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Demo</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <video 
                className="w-full aspect-video" 
                controls 
                autoPlay 
                muted 
                loop
                playsInline
              >
                {/* CORRECTED PATH: Points to the 'videos' folder inside public */}
                <source src="/videos/sentia-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-slate-500 mt-2 text-center">
              (Video auto-plays muted. Click controls to unmute)
            </p>
        </section>

        <div className="pt-8 border-t border-slate-200">
            <Link href="/" className="text-blue-600 font-medium hover:underline">← Back to Portfolio</Link>
        </div>

      </main>
    </div>
  );
}