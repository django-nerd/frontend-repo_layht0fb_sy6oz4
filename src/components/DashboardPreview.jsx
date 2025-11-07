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
      accent: "from-indigo-500 to-violet-600",
    },
    {
      title: "Assignments",
      icon: ClipboardList,
      items: [
        { t: "Essay Draft Review", d: "Open" },
        { t: "Group Slides Upload", d: "Open" },
      ],
      accent: "from-emerald-500 to-teal-600",
    },
    {
      title: "Messages",
      icon: MessageCircle,
      items: [
        { t: "Group 2", d: "New: 4" },
        { t: "Ms. Park", d: "1 unread" },
      ],
      accent: "from-rose-500 to-pink-600",
    },
    {
      title: "Analytics",
      icon: BarChart,
      items: [
        { t: "On-time", d: "92%" },
        { t: "Avg Grade", d: "88" },
      ],
      accent: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="dashboard" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Your day at a glance</h2>
            <p className="text-gray-600">Deadlines, tasks, messages, and progress — all in one screen.</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black/90">Customize</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${c.accent}`} />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-800">
                    <c.icon size={18} />
                  </span>
                  <h3 className="font-semibold text-gray-900">{c.title}</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {c.items.map((i, k) => (
                    <li key={k} className="flex items-center justify-between text-sm text-gray-700">
                      <span className="truncate">{i.t}</span>
                      <span className="text-gray-500">{i.d}</span>
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
