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
            
            {/* Contact Details - NEW */}
            <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <p><strong>📧 Email:</strong> sindhujamyadam123@gmail.com</p>
                <p><strong>🔗 LinkedIn:</strong> https://www.linkedin.com/in/sindhuja2025</p>
                <p><strong>💻 GitHub:</strong> https://github.com/Sindhuja16-coder</p>
                <p><strong>📍 Location:</strong> India</p>
              </div>
            </section>

            {/* Troubleshooting Skills */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">🛠️ Troubleshooting</h3>
                <p className="text-sm text-slate-600">
                  Fixed hardware-level blocks like <strong>Intel VT-x</strong> in BIOS and bypassed Windows enrollment loops using <strong>Command Line (Shift+F10)</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">☁️ Cloud Expert</h3>
                <p className="text-sm text-slate-600">
                  Hands-on experience with Microsoft Intune, Entra ID (Azure AD), and automated OOBE device setup.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Intune FAQ</h2>
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-600 mb-2">Enrollment vs Registration?</h3>
                  <p className="text-sm text-slate-600">Registration is for identity (SSO); Enrollment gives Intune full control to push security policies and apps.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
