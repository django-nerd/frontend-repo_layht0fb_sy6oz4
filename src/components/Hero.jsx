import { Rocket, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Soft gradient overlay to brighten the Spline cover */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/20 to-[#F5F7FA]" />

      {/* Spline full-bleed cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#121212]"
            >
              StudySphere
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#FF6F91] to-[#47D7AC]">Playful learning, pro results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="mt-4 text-lg text-[#4D4D4D] max-w-xl"
            >
              Gen‑Z smooth, Pixar‑style motion, and Notion‑level organization. Courses, tasks, chat, and progress in one magical space.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a54e0] text-white px-5 py-3 rounded-xl font-semibold shadow-md">
                <Rocket size={18} /> Jump in
              </a>
              <a href="#features" className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-[#121212] px-5 py-3 rounded-xl font-semibold shadow border border-black/10 backdrop-blur">
                Explore features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm">
                <div className="flex items-center gap-2 text-sm text-[#4D4D4D]"><Calendar size={16} /> Deadlines in one view</div>
                <div className="mt-1 text-2xl font-semibold text-[#121212]">Calendar-first</div>
              </div>
              <div className="p-4 rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm">
                <div className="flex items-center gap-2 text-sm text-[#4D4D4D]"><TrendingUp size={16} /> Real-time insights</div>
                <div className="mt-1 text-2xl font-semibold text-[#121212]">Analytics built-in</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-cols-3 gap-3 p-4 bg-gradient-to-br from-[#F5F7FA] to-white">
                <div className="col-span-2 rounded-xl bg-white shadow p-3">
                  <div className="text-sm font-medium text-[#121212]">Assignments</div>
                  <div className="mt-2 space-y-2">
                    {[
                      { t: "Algebra: Quadratic Forms", d: "Due Tue" },
                      { t: "History: Primary Sources", d: "Due Wed" },
                      { t: "Biology Lab Report", d: "Due Fri" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5 px-2 rounded border border-black/10">
                        <span className="text-sm text-[#4D4D4D]">{a.t}</span>
                        <span className="text-xs text-[#4D4D4D] opacity-70">{a.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-white shadow p-3">
                  <div className="text-sm font-medium text-[#121212]">Stats</div>
                  <div className="mt-2 space-y-2">
                    <div className="text-xs text-[#4D4D4D] opacity-80">Completion</div>
                    <div className="w-full h-2 bg-[#F5F7FA] rounded">
                      <div className="h-2 rounded bg-gradient-to-r from-[#47D7AC] to-[#6C63FF]" style={{ width: "68%" }} />
                    </div>
                    <div className="flex justify-between text-xs text-[#4D4D4D] opacity-80"><span>On-time</span><span>92%</span></div>
                    <div className="flex justify-between text-xs text-[#4D4D4D] opacity-80"><span>Avg. grade</span><span>88</span></div>
                  </div>
                </div>
                <div className="col-span-3 rounded-xl bg-white shadow p-3">
                  <div className="text-sm font-medium text-[#121212]">Messages</div>
                  <div className="mt-2 space-y-2 max-h-28 overflow-auto pr-1">
                    {[
                      { n: "Ms. Park", m: "Reminder: Quiz on Friday" },
                      { n: "Group 3", m: "Upload slides by tonight" },
                      { n: "Ava", m: "Can you review my draft?" },
                    ].map((x, i) => (
                      <div key={i} className="text-xs text-[#4D4D4D] flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#6C63FF]/15 text-[#6C63FF] text-[10px] font-semibold">
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
