import { Bell, BookOpen, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow">
            <BookOpen size={20} />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-gray-900">StudySphere</div>
            <div className="text-xs text-gray-500">Your all-in-one learning hub</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#dashboard" className="hover:text-gray-900 transition-colors">Dashboard</a>
          <a href="#courses" className="hover:text-gray-900 transition-colors">Courses</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#profile" className="hover:text-gray-900 transition-colors">Profile</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Notifications">
            <Bell className="text-gray-700" size={20} />
            <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-rose-500 text-[10px] font-medium text-white">3</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
            <Users size={16} />
            <span className="text-xs font-medium">Teacher</span>
          </div>
          <button className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-semibold">A</button>
        </div>
      </div>
    </header>
  );
}
