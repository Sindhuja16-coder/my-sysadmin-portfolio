import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
              NextGen<span className="text-blue-600">Admin</span>
            </Link>
          </div>

          {/* Navigation Links matching your screenshot */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Blog Insights
            </Link>
            <Link href="/careerops" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Automation Hub
            </Link>
            
            {/* The Dark Pill Button */}
            <Link href="/about" className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-all shadow-md">
              About Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}