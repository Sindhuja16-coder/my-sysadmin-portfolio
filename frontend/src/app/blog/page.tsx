import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          Engineering Logs <span className="text-blue-600">.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Intune Lab - UPDATED LINK IS HERE */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-blue-600 font-bold mb-2">INFRASTRUCTURE</div>
            <h2 className="text-2xl font-bold mb-3">Building an Intune Lab from Scratch</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              A step-by-step documentation of setting up a Windows 11 VM, resolving VT-x virtualization errors, and preparing for Autopilot enrollment.
            </p>
            {/* The link below now points to your restored article */}
            <Link href="/blog/intune-vm-setup" className="inline-block bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-slate-800">
              Read Documentation
            </Link>
          </div>

          {/* Card 2: Python Automation */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm text-green-600 font-bold mb-2">AUTOMATION</div>
            <h2 className="text-2xl font-bold mb-3">Automating Job Applications</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              How I wrote a Python bot to parse emails, track application statuses, and organize my job hunt in a centralized dashboard.
            </p>
            <Link href="/careerops" className="inline-block bg-white text-slate-900 border border-slate-300 px-4 py-2 rounded text-sm font-semibold hover:bg-slate-50">
              View Project
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
