export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Professional Header Section */}
      <section className="bg-[#0f172a] text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-2">System Administrator & Intune Engineer</h1>
        <p className="text-blue-400 italic font-mono">"Documenting the solutions to the problems I solve."</p>
      </section>

      {/* Philosophy Section - Restoration of Original Look */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-2 mb-6">Philosophy: The NextGenAdmin Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-600">Innovation Over Observation</h3>
            <p className="text-slate-600 leading-relaxed">
              I believe that modern System Administration requires a developer's mindset. Instead of manually managing tasks, 
              I build dashboards to centralize operations and provide a "Single Pane of Glass" for infrastructure health.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-600">Documentation as Code</h3>
            <p className="text-slate-600 leading-relaxed">
              Every technical hurdle—from BIOS virtualization blocks to OOBE enrollment loops—is an opportunity to improve the system. 
              A solution isn't finished until it is documented and repeatable.
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Contact Box */}
      <section className="bg-slate-50 p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Connect With Me</h2>
        <div className="grid md:grid-cols-2 gap-4 text-slate-700">
          <p><strong>📧 Email:</strong> sindhujamyadam123@gmail.com</p>
          <p><strong>🔗 LinkedIn:</strong> /in/sindhuja2025</p>
          <p><strong>💻 GitHub:</strong> /sindhuja16-coder</p>
          <p><strong>📍 Location:</strong> India</p>
        </div>
      </section>

      {/* FAQ Tagline */}
      <footer className="text-center pt-8 border-t">
        <p className="text-slate-500 font-medium italic">FAQ: Automation-first, documentation-always.</p>
      </footer>
    </div>
  );
}
