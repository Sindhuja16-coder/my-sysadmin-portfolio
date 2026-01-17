import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">
            KNOWLEDGE BASE
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-4">Intune Engineering Logs</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of technical guides, troubleshooting notes, and configuration standards for Microsoft Endpoint Manager (Intune).
          </p>
        </div>

        {/* FEATURED GUIDE (NEW!) */}
        <div className="mb-12">
           <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Featured Tutorial</h2>
           <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
             <div className="bg-slate-900 text-white p-8 md:w-1/3 flex flex-col justify-center">
               <div className="text-5xl mb-4">🧪</div>
               <h3 className="text-2xl font-bold">The Home Lab</h3>
             </div>
             <div className="p-8 md:w-2/3">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">How to Build an Intune Lab & Deploy Your First Policy</h3>
               <p className="text-slate-600 mb-6">
                 A complete beginner's guide to setting up a Virtual Machine, getting free Intune access, and deploying patches without risking your personal PC.
               </p>
               <Link href="/blog/intune-vm-setup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                 Start Tutorial →
               </Link>
             </div>
           </div>
        </div>

        {/* EXISTING DOCS GRID */}
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Reference Logs</h2>
        <div className="space-y-6">

          {/* Doc 1: Autopilot */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
            <div className="flex gap-4 items-start">
              <div className="text-3xl shrink-0">🚀</div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Windows Autopilot: Zero Touch Deployment
                </h2>
                <p className="text-slate-600 text-sm mb-4">
                  Step-by-step breakdown of configuring deployment profiles to automate the Out-of-Box Experience (OOBE). Includes hardware hash extraction.
                </p>
              </div>
            </div>
          </article>

          {/* Doc 2: Compliance */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
            <div className="flex gap-4 items-start">
              <div className="text-3xl shrink-0">🛡️</div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Security Baselines & Compliance
                </h2>
                <p className="text-slate-600 text-sm mb-4">
                  Creating conditional access policies that block non-compliant devices. Covers BitLocker encryption enforcement and minimum OS versioning.
                </p>
              </div>
            </div>
          </article>

        </div>

      </main>
    </div>
  );
}