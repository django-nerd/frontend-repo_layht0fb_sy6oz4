import { Bell, Home, Layers, CheckSquare, MessageCircle, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#FF6F91] flex items-center justify-center text-white shadow">
            <Layers size={20} />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-[#121212]">StudySphere</div>
            <div className="text-xs text-[#4D4D4D]">Learn like it’s a game</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4D4D4D]/70" />
            <input
              type="text"
              placeholder="Search courses, tasks, friends..."
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-[#F5F7FA] text-sm text-[#121212] placeholder-[#4D4D4D]/60 border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#4D4D4D]">
          <a href="#home" className="hover:text-[#121212] transition-colors inline-flex items-center gap-1"><Home size={16}/> Home</a>
          <a href="#courses" className="hover:text-[#121212] transition-colors inline-flex items-center gap-1"><Layers size={16}/> Courses</a>
          <a href="#tasks" className="hover:text-[#121212] transition-colors inline-flex items-center gap-1"><CheckSquare size={16}/> Tasks</a>
          <a href="#messages" className="hover:text-[#121212] transition-colors inline-flex items-center gap-1"><MessageCircle size={16}/> Messages</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-xl hover:bg-[#F5F7FA] transition-colors" aria-label="Notifications">
            <Bell className="text-[#121212]" size={20} />
            <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[#FF6F91] text-[10px] font-medium text-white">3</span>
          </button>
          <button className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#47D7AC] text-white font-semibold flex items-center justify-center">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
