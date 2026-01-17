import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Documentation & Insights</h1>
        
        {/* Blog Post 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
          <h2 className="text-xl font-bold text-slate-900">Setting up Intune Lab VMs</h2>
          <p className="text-slate-600 mt-2">A step-by-step guide on creating automated Virtual Machines for testing policies.</p>
          <div className="mt-4 text-sm text-slate-400">Published: Jan 15, 2026</div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Understanding Next.js Routing</h2>
          <p className="text-slate-600 mt-2">How to fix 404 errors and structure your web folders correctly.</p>
          <div className="mt-4 text-sm text-slate-400">Published: Today</div>
        </div>

      </main>
    </div>
  );
}