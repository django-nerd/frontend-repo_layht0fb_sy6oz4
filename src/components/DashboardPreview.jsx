import { CalendarDays, ClipboardList, MessageCircle, BarChart } from "lucide-react";

export default function DashboardPreview() {
  const cards = [
    {
      title: "Upcoming",
      icon: CalendarDays,
      items: [
        { t: "Geometry HW", d: "Tomorrow" },
        { t: "Chem Lab Write-up", d: "Fri" },
      ],
      accent: "from-[#6C63FF] to-[#FF6F91]",
    },
    {
      title: "Assignments",
      icon: ClipboardList,
      items: [
        { t: "Essay Draft Review", d: "Open" },
        { t: "Group Slides Upload", d: "Open" },
      ],
      accent: "from-[#47D7AC] to-[#6C63FF]",
    },
    {
      title: "Messages",
      icon: MessageCircle,
      items: [
        { t: "Group 2", d: "New: 4" },
        { t: "Ms. Park", d: "1 unread" },
      ],
      accent: "from-[#FF6F91] to-[#FFB64D]",
    },
    {
      title: "Analytics",
      icon: BarChart,
      items: [
        { t: "On-time", d: "92%" },
        { t: "Avg Grade", d: "88" },
      ],
      accent: "from-[#FFB64D] to-[#6C63FF]",
    },
  ];

  return (
    <section id="dashboard" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#121212]">Your day at a glance</h2>
            <p className="text-[#4D4D4D]">Deadlines, tasks, messages, and progress — all in one screen.</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121212] text-white text-sm font-semibold hover:bg-black/90">Customize</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <div key={idx} className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm">
              <div className={`h-1.5 bg-gradient-to-r ${c.accent}`} />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#121212]">
                    <c.icon size={18} />
                  </span>
                  <h3 className="font-semibold text-[#121212]">{c.title}</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {c.items.map((i, k) => (
                    <li key={k} className="flex items-center justify-between text-sm text-[#4D4D4D]">
                      <span className="truncate">{i.t}</span>
                      <span className="opacity-70">{i.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
