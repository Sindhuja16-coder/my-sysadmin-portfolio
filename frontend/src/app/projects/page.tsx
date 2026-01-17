import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">All Projects</h1>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card: Intune Lab */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-4xl mb-4">☁️</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Intune Lab</h2>
            <p className="text-slate-600 mb-4">
              Virtual Machine automation scripts for setting up Intune testing environments.
            </p>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Completed</span>
          </div>

          {/* Project Card: mnc-job-hunter (ADD THIS) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">mnc-job-hunter</h2>
            <p className="text-slate-600 mb-4">
              Automated filtering and tracking for Multi-National Corporation job portals.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Sindhuja16-coder/mnc-job-hunter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Repo →
              </a>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}