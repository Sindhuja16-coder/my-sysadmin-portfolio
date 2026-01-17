import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          <div className="bg-slate-900 text-white p-10">
            <h1 className="text-4xl font-bold mb-2">System Administrator & Intune Engineer</h1>
            <p className="text-blue-400 font-mono italic">"Documenting the solutions to the problems I solve."</p>
          </div>

          <div className="p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">Professional Profile</h2>
              <p className="text-slate-600 leading-relaxed">
                I am an IT professional focused on modernizing infrastructure. I don't just use technology—I build environments to master it. From Next.js frontends to Intune deployment flows, I prioritize scalable and well-documented systems.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-3">🛠️ Technical Problem Solving</h3>
                <p className="text-sm text-slate-600">
                  Proven ability to troubleshoot hardware blocks like <strong>Intel VT-x</strong> in BIOS and bypass enrollment loops using <strong>Command Line (Shift+F10)</strong>.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-3">☁️ Cloud Management</h3>
                <p className="text-sm text-slate-600">
                  Hands-on experience with Microsoft Intune, Entra ID (Azure AD), and automated OOBE provisioning for modern devices.
                </p>
              </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-3">My "Learn by Doing" Approach</h2>
              <p className="text-blue-800 text-sm italic">
                "I believe the best documentation comes from the hardest errors. My Knowledge Hub features real-world lab reports because I value transparency in troubleshooting."
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Intune FAQ</h2>
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-600 mb-2">Enrollment vs Registration?</h3>
                  <p className="text-sm text-slate-600">Registration gives an identity; Enrollment gives the company full management control to push apps and security rules.</p>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-600 mb-2">How do devices check-in?</h3>
                  <p className="text-sm text-slate-600">Devices check-in automatically every 8 hours, but admins can force a manual sync from the device settings to apply policies immediately.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
