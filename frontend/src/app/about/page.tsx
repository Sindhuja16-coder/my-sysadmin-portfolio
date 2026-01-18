import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Professional Header */}
        <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-lg mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cloud Infrastructure & Automation Engineer
          </h1>
          <p className="text-blue-200 text-lg font-medium italic">
            "Documenting the solutions to the problems I solve."
          </p>
        </div>

        {/* Humanized Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-slate-200 pb-2">
            About Me
          </h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed space-y-6">
            <p>
              Hi, I'm <strong>Sindhuja</strong>. I am a System Administrator and Cloud Engineer who believes that if you have to do a task more than twice, you should automate it.
            </p>
            <p>
              My journey started in traditional IT support, but I quickly realized that the future of administration is <strong>code</strong>. Today, I don't just manage users and devices; I build the tools that manage them.
            </p>
            <p>
              Whether it's troubleshooting a stubborn BIOS error in a virtual machine or writing a Python bot to organize job applications, I enjoy the messy, complicated process of figuring things out. This website is my way of sharing those solutions with the community.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-xl border-l-4 border-blue-600 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Connect With Me</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <a href="mailto:sindhujamyadam123@gmail.com" className="text-blue-600 hover:underline font-medium">
                    sindhujamyadam123@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🐙</span>
                  <a href="https://github.com/Sindhuja16-coder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    github.com/Sindhuja16-coder
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🔗</span>
                  <a href="https://www.linkedin.com/in/sindhuja2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    linkedin.com/in/sindhuja2025
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📍</span>
                  <span className="text-slate-700 font-medium">India</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
