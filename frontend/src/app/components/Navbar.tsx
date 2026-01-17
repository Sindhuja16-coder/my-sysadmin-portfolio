import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
              NextGenAdmin
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Blog Insights
            </Link>
            
            <Link href="/projects" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Automation Hub
            </Link>
            
            <Link href="/about" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
              About Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}