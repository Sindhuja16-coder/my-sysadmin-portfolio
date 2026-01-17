import Navbar from "../components/Navbar";
import Link from "next/link";

export default function CareerOps() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            Python Automation
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">
            CareerOps: Automated Job Hunter
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            An intelligent bot that scrapes email alerts, resolves redirects, and automatically tracks every job application in a central dashboard.
          </p>
          
          {/* YOUR ACTUAL GITHUB LINK */}
          <div className="flex justify-center gap-4">
            <Link 
              href="https://github.com/Sindhuja16-coder/CareerOps" 
              target="_blank" 
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-xl">📂</span> View Source Code on GitHub
            </Link>
          </div>
        </div>

        {/* WORKFLOW DIAGRAM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">📧</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">1. Email Aggregation</h3>
            <p className="text-slate-600 text-sm">
              The bot connects to email servers at scheduled times, scanning for relevant job alerts and filtering out noise.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm relative overflow-hidden ring-2 ring-blue-50">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🔗</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">2. Smart Redirect</h3>
            <p className="text-slate-600 text-sm">
              Users paste job links into the bot. It automatically resolves redirects (like Bit.ly or LinkedIn wrappers) to find the direct career site URL.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">📊</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">3. Auto-Tracking</h3>
            <p className="text-slate-600 text-sm">
              Once applied, the bot logs the job details (Title, Company, Date) into the main dashboard for easy status tracking.
            </p>
          </div>
        </div>

        {/* TECHNICAL DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Why I Built This</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong>The Problem:</strong> Managing hundreds of job applications manually is chaotic. Emails get lost, and tracking spreadsheets are tedious to update.
              </p>
              <p>
                <strong>The Solution:</strong> I built a centralized system that treats job hunting like a sales funnel. By automating the data entry, I can focus entirely on interview preparation.
              </p>
              <p>
                <strong>Key Challenge Solved:</strong> Handling dynamic URL redirects from email providers using Python's `requests` library to ensure the correct final URL is stored.
              </p>
            </div>
          </div>

          {/* Tech Stack Side Panel */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Tech Stack</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Python (Core Logic)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Selenium / BS4 (Scraping)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> PostgreSQL (Database)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span> FastAPI (Backend API)
                </li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}