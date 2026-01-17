import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">All Projects</h1>
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

          {/* Add more projects here in the future... */}

        </div>
      </main>
    </div>
  );
}