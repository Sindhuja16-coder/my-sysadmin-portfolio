export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 p-6">
      {/* Self Intro & Tagline */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">NextGenAdmin</h1>
        <p className="text-blue-600 italic">"Documenting the solutions to the problems I solve."</p>
        <p className="text-slate-600 pt-4">
          I am a System Administrator & Intune Engineer focused on automation, centralized operations, and infrastructure health.
        </p>
      </section>

      {/* Minimal Contact Section */}
      <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
        <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <p><strong>📧 Email:</strong> sindhujamyadam123@gmail.com</p>
          <p><strong>🔗 LinkedIn:</strong> /in/sindhuja2025</p>
          <p><strong>💻 GitHub:</strong> /sindhuja16-coder</p>
          <p><strong>📍 Location:</strong> India</p>
        </div>
      </section>

      {/* FAQ Tagline */}
      <section className="text-center border-t pt-6">
        <p className="text-slate-500 font-medium">
          FAQ: Automation-first, documentation-always.
        </p>
      </section>
    </div>
  );
}
