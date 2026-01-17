import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Header Section */}
          <div className="bg-slate-900 text-white p-10">
            <h1 className="text-4xl font-bold mb-2">System Administrator & Intune Engineer</h1>
            <p className="text-blue-400 font-mono italic">"Documenting the solutions to the problems I solve."</p>
          </div>

          <div className="p-10 space-y-8">
            
            {/* Bio Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">Professional Profile</h2>
              <p className="text-slate-600 leading-relaxed">
                I am a technical professional dedicated to modernizing IT infrastructure and automating device management. I don't just "use" technology—I build environments to master it. Whether it's setting up complex <strong>Next.js</strong> frontends or architecting <strong>Intune</strong> deployment flows, I focus on creating scalable, secure, and well-documented systems.
              </p>
            </section>

            {/* Core Competencies */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🛠️</span> Technical Problem Solving
                </h3>
                <p className="text-sm text-slate-600">
                  Proven ability to troubleshoot hardware-level blocks like <strong>Intel VT-x virtualization</strong> in BIOS and bypass OS enrollment loops using <strong>Command Line (Shift+F10)</strong>.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>☁️</span> Cloud Management
                </h3>
                <p className="text-sm text-slate-600">
                  Expertise in Microsoft Endpoint Manager (Intune), Azure AD (Entra ID), and automated OOBE provisioning for modern workforces.
                </p>
              </div>
            </section>

            {/* Personal Lab Philosophy */}
            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-3">My "Learn by Doing" Approach</h2>
              <p className="text-blue-800 text-sm italic">
                "I believe the best documentation comes from the hardest errors. My Knowledge Hub features real-world lab reports because I value transparency in troubleshooting and clarity in technical writing."
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}