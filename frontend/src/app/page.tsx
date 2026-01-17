import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* High-Impact Hero Section */}
        <section className="text-center space-y-8">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Now Live: NextGenAdmin Dashboard
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Welcome to <span className="text-blue-600">NextGenAdmin</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A Single Pane of Glass for Cloud Infrastructure Management and Modern Web Development. 
            Documenting the solutions to the problems I solve.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/blog" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Explore Lab Insights
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all">
              About the Engineer
            </Link>
          </div>
        </section>

        {/* Optional: Simple Stats Bar to show technical focus */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900">Microsoft Intune</h3>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1 text-blue-500">Cloud Management</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900">Next.js</h3>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1 text-blue-500">Web Engineering</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900">Troubleshooting</h3>
            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-1 text-blue-500">Problem Solving</p>
          </div>
        </section>
      </main>
    </div>
  );
}