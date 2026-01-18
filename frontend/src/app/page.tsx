import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            System Administration & <br/>
            <span className="text-blue-400">Engineering Logs.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            A centralized dashboard for managing cloud infrastructure, documenting technical fixes, and building automation tools.
          </p>
          <Link href="/blog" className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            Read Documentation →
          </Link>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Section Heading with Blue Accent Bar */}
        <div className="mb-10 border-l-4 border-blue-600 pl-4">
          <h2 className="text-3xl font-bold text-slate-900">My Portfolio & Experience</h2>
        </div>

        {/* The 3-Column Grid from your Image */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Automated Job Hunter */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Automated Job Hunter</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A Python bot that aggregates job emails, automates redirects, and tracks applications in a central dashboard.
            </p>
            <Link href="/careerops" className="inline-block bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-slate-800">
              View Architecture
            </Link>
          </div>

          {/* Card 2: Intune Expertise */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-3">Intune Expertise</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Hands-on experience in MDM/MAM, Autopilot deployment, and policy management.
            </p>
            <Link href="/blog" className="inline-block bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-slate-800">
              View Guides
            </Link>
          </div>

          {/* Card 3: Tools & Resources */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4">Tools & Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-slate-600">
                <span className="mr-2">📄</span> IT Change Log Template
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <span className="mr-2">📎</span> Automation Scripts
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <span className="mr-2">🛠️</span> Admin Tools
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
