import Navbar from "../components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* PROFILE HEADER */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* AVATAR (You can replace this emoji with an <img src="..." /> later!) */}
            <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center text-6xl shadow-inner shrink-0 border-4 border-white ring-2 ring-slate-100">
              👩‍💻
            </div>
            
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">
                [M. Sindhuja]
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                System Administrator & Automation Engineer
              </p>
              <p className="text-slate-600 max-w-xl">
                I bridge the gap between IT Operations and Software Development. My focus is on automating manual workflows using Python, PowerShell, and Modern Web Tech to save time and reduce errors.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
                <Link href="https://github.com/Sindhuja16-coder" target="_blank" className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-sm font-medium transition-colors">
                  GitHub Profile
                </Link>
                <Link href="https://www.linkedin.com/in/sindhuja2025" className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 text-sm font-medium transition-colors">
                  LinkedIn
                </Link>
                <Link href="sindhujamyadam123@gmail.com" className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm font-medium transition-colors">
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED SKILLS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Technical Arsenal</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Automation & Coding</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm">PowerShell</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">Bash</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded text-sm">Next.js</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Infrastructure & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded text-sm">Microsoft Intune</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded text-sm">Azure AD</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded text-sm">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Git</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience / Philosophy */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">My Philosophy</h2>
            <div className="prose text-slate-600 text-sm leading-relaxed">
              <p className="mb-3">
                <strong>"If you have to do it more than twice, automate it."</strong>
              </p>
              <p className="mb-3">
                I started my journey in traditional IT support, but I quickly realized that manual tasks were the enemy of efficiency.
              </p>
              <p>
                Today, I build tools like <strong>CareerOps</strong> to solve real-world problems. I don't just fix servers; I build the systems that keep them running smoothly without human intervention.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}