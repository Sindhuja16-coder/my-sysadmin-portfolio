import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section from your original UI */}
        <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-lg mb-12">
          <h1 className="text-4xl font-bold mb-2">System Administrator & Intune Engineer</h1>
          <p className="text-blue-400 font-mono italic">"Documenting the solutions to the problems I solve."</p>
        </div>

        {/* Featured Tools Grid (CareerOps focus) */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-slate-800 border-b pb-2">Automation & Lab Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CareerOps Tool */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-blue-600 font-bold text-xs uppercase mb-2">Python Automation</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">CareerOps</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A custom automation tool developed to streamline job applications and operational workflows.
              </p>
              <Link href="/careerops" className="text-blue-600 font-bold hover:underline">Open Tool →</Link>
            </div>

            {/* mnc-job-hunter */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-green-600 font-bold text-xs uppercase mb-2">Web Scraping</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">mnc-job-hunter</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Automated filtering and tracking for Multi-National Corporation job portals.
              </p>
              <Link href="#" className="text-blue-600 font-bold hover:underline">View Repo →</Link>
            </div>

            {/* Intune Lab */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-purple-600 font-bold text-xs uppercase mb-2">Cloud Infrastructure</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Intune VM Lab</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Technical guide on resolving VT-x BIOS blocks and Windows OOBE enrollment loops.
              </p>
              <Link href="/blog" className="text-blue-600 font-bold hover:underline">Read Lab Report →</Link>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}