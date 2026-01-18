import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-800">
            NextGenAdmin Portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Cloud Infrastructure & <br/>
            <span className="text-blue-500">Automation Engineer.</span>
          </h1>
          
          <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
            Bridging the gap between Enterprise Cloud Management and Modern Web Development. 
            Building custom automation tools to streamline complex IT workflows.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/careerops" className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
              View Latest Projects →
            </Link>
            <a href="https://github.com/Sindhuja16-coder" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-800 text-white px-8 py-3.5 rounded-lg font-bold border border-slate-700 hover:bg-slate-700 transition-all">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Section Heading */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl font-bold text-slate-900">My Portfolio & Experience</h2>
          <p className="text-slate-500 mt-2">Engineering solutions for Cloud, Web, and Operations.</p>
        </div>

        {/* The 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: CareerOps */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              ⚙️
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">CareerOps</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20">
              A comprehensive automation platform designed to streamline job applications, track status, and manage career operational workflows.
            </p>
            <Link href="/careerops" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
              View Project <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 2: Automated Job Hunter */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Automated Job Hunter</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20">
              A Python automation bot that aggregates job alerts, automates email filtering, and organizes opportunities in a central dashboard.
            </p>
            <a href="https://github.com/Sindhuja16-coder/mnc-job-hunter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
              View Repository <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Card 3: Intune Expertise - UPDATED FOR WEEKLY SERIES */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
              ☁️
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Intune Expertise</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-auto">
              Hands-on documentation of Microsoft Intune & Autopilot. 
              <span className="block mt-2 font-medium text-blue-600">
                 Currently publishing a weekly technical series covering the journey from VM setup to Enterprise Policies.
              </span>
            </p>
            <Link href="/blog" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
              Read the Series <span className="ml-2">→</span>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
