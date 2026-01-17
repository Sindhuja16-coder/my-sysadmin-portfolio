import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering IT Professionals <br />
            <span className="text-blue-400">with Automation & Insights</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl">
            A central hub for system administration tools, Intune lab experiments, and engineering logs.
          </p>
          
          <Link 
            href="/blog" 
            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Read Documentation →
          </Link>
        </div>
      </header>

      {/* Dashboard Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="mb-8 border-l-4 border-blue-600 pl-4">
          <h2 className="text-2xl font-bold text-slate-800">My Portfolio & Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: CareerOps - Job Application Suite */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl">🤖</div>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                LIVE PROJECT
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-1">CareerOps</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">
              Automated Job Application & Tracking Suite
            </p>
            
            <p className="text-slate-500 text-sm mb-6">
              A custom Python bot that aggregates job emails, automates URL redirects, and tracks every application in a central dashboard.
            </p>
            
            <Link href="/careerops" className="text-sm font-semibold text-white bg-slate-800 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              View Architecture
            </Link>
          </div>

          {/* Card 2: Intune DocuHub (Updated) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl">📚</div>
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full">
                KNOWLEDGE BASE
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">Intune DocuHub</h3>
            <p className="text-purple-600 font-medium text-sm mb-4">
              Engineering Logs & Config Guides
            </p>

            <p className="text-slate-500 text-sm mb-6">
              A centralized repository of technical guides covering Autopilot setups, Policy troubleshooting, and MDM best practices.
            </p>

            <Link href="/blog" className="text-sm font-semibold text-white bg-slate-800 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Read Guides
            </Link>
          </div>

          {/* Card 3: Quick Tools */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Tools & Resources</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-center gap-2">
                📄 <span>IT Change Log Template</span>
              </li>
              <li className="flex items-center gap-2">
                📎 <span>Automation Scripts</span>
              </li>
              <li className="flex items-center gap-2">
                🛠️ <span>Admin Tools</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}