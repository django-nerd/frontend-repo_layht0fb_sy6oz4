import { CheckCircle2, MessageSquare, BarChart3, FileText, Users, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Course Management",
    desc: "Create modules, assignments, files, and keep everything structured.",
  },
  {
    icon: MessageSquare,
    title: "Collaboration",
    desc: "Group workspaces, forums, messaging, and peer feedback.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Performance trends, missing work, and time-on-task insights.",
  },
  {
    icon: Users,
    title: "Profiles",
    desc: "Student portfolios, skills, attendance, and coursework history.",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Role-based access with privacy-first data handling.",
  },
  {
    icon: CheckCircle2,
    title: "Notifications",
    desc: "Smart reminders for due dates, announcements, and grades.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything in one place</h2>
          <p className="mt-2 text-gray-600">StudySphere fuses your classes, tasks, and conversations into a single, calm interface.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
