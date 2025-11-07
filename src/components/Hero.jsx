import { Rocket, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              School, streamlined.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-lg text-gray-600"
            >
              StudySphere brings courses, assignments, collaboration, analytics, and messages into one clean workspace.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium shadow">
                <Rocket size={18} /> Get started
              </a>
              <a href="#features" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-lg font-medium">
                See features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-200 bg-white">
                <div className="flex items-center gap-2 text-sm text-gray-600"><Calendar size={16} /> Deadlines in one view</div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">Calendar-first</div>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-white">
                <div className="flex items-center gap-2 text-sm text-gray-600"><TrendingUp size={16} /> Real-time insights</div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">Analytics built-in</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-cols-3 gap-3 p-4 bg-gradient-to-br from-indigo-50 to-violet-50">
                <div className="col-span-2 rounded-lg bg-white shadow p-3">
                  <div className="text-sm font-medium text-gray-800">Assignments</div>
                  <div className="mt-2 space-y-2">
                    {[
                      { t: "Algebra: Quadratic Forms", d: "Due Tue" },
                      { t: "History: Primary Sources", d: "Due Wed" },
                      { t: "Biology Lab Report", d: "Due Fri" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded border border-gray-200">
                        <span className="text-sm text-gray-700">{a.t}</span>
                        <span className="text-xs text-gray-500">{a.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white shadow p-3">
                  <div className="text-sm font-medium text-gray-800">Stats</div>
                  <div className="mt-2 space-y-2">
                    <div className="text-xs text-gray-600">Completion</div>
                    <div className="w-full h-2 bg-gray-100 rounded">
                      <div className="h-2 bg-indigo-600 rounded" style={{ width: "68%" }} />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500"><span>On-time</span><span>92%</span></div>
                    <div className="flex justify-between text-xs text-gray-500"><span>Avg. grade</span><span>88</span></div>
                  </div>
                </div>
                <div className="col-span-3 rounded-lg bg-white shadow p-3">
                  <div className="text-sm font-medium text-gray-800">Messages</div>
                  <div className="mt-2 space-y-2 max-h-28 overflow-auto">
                    {[
                      { n: "Ms. Park", m: "Reminder: Quiz on Friday" },
                      { n: "Group 3", m: "Upload slides by tonight" },
                      { n: "Ava", m: "Can you review my draft?" },
                    ].map((x, i) => (
                      <div key={i} className="text-xs text-gray-700 flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-semibold">
                          {x.n[0]}
                        </span>
                        <span className="truncate">{x.n}: {x.m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
