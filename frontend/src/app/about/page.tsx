import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Professional Header Section - High Contrast */}
      <section className="bg-[#0f172a] text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-2">System Administrator & Intune Engineer</h1>
        <p className="text-blue-400 italic font-mono text-lg">"Documenting the solutions to the problems I solve."</p>
      </section>

      {/* Philosophy Section - Restoration of Original Professional Look */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-100 pb-3 mb-8">Philosophy: The NextGenAdmin Approach</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600">Innovation Over Observation</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              I believe that modern System Administration requires a developer's mindset. Instead of manually managing tasks, 
              I build dashboards like **NextGenAdmin** to centralize operations and provide a "Single Pane of Glass" for infrastructure health.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600">Documentation as Code</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Every technical hurdle—from **BIOS virtualization blocks** to **OOBE enrollment loops**—is an opportunity to 
              improve the system. My philosophy is that a solution isn't finished until it is documented and repeatable for the entire team.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Me - Working Links */}
      <section className="bg-slate-50 p-8 rounded-xl border-l-8 border-blue-600 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Connect With Me</h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
          <p><strong>📧 Email:</strong> <a href="mailto:sindhujamyadam123@gmail.com" className="text-blue-600 hover:underline">sindhujamyadam123@gmail.com</a></p>
          <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/sindhuja2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sindhuja2025</a></p>
          <p><strong>💻 GitHub:</strong> <a href="https://github.com/sindhuja16-coder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sindhuja16-coder</a></p>
          <p><strong>📍 Location:</strong> India</p>
        </div>
      </section>

      {/* FAQ Tagline */}
      <footer className="text-center pt-10 border-t border-slate-100">
        <p className="text-slate-500 font-medium italic text-lg text-center">
          FAQ: Automation-first, documentation-always.
        </p>
      </footer>
    </div>
  );
}
