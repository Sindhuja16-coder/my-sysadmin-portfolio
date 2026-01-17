import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              NextGen<span className="text-blue-600">Admin</span>
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
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              About Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}