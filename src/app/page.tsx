"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Palette,
  Type,
  LayoutTemplate,
  PenLine,
  Wand2,
  Moon,
  Sun,
} from "lucide-react";

const tools = [
  {
    title: "Spanduk Generator",
    desc: "Buat layout spanduk otomatis untuk percetakan.",
    icon: PenLine,
  },
  {
    title: "Baliho Layout",
    desc: "Bantu susun komposisi baliho profesional.",
    icon: LayoutTemplate,
  },
  {
    title: "Prompt Visual",
    desc: "Generate prompt AI visual siap pakai.",
    icon: Wand2,
  },
  {
    title: "Color Palette",
    desc: "Warna otomatis sesuai style desain.",
    icon: Palette,
  },
  {
    title: "Typography",
    desc: "Bantu pilih font untuk banner & poster.",
    icon: Type,
  },
  {
    title: "AI Copywriting",
    desc: "Generate headline dan CTA promosi.",
    icon: Sparkles,
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-[#f0f7ff] text-[#0d1f3c] transition-all dark:bg-[#07070A] dark:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 font-black text-white">
              R
            </div>

            <div className="text-xl font-black">
              RanzAI{" "}
              <span className="text-cyan-400">Design</span>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-sm font-medium md:flex">
            <a href="#tools">Tools</a>
            <a href="#workspace">Workspace</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? "Light" : "Dark"}
            </button>

            <Link
              href="/tools/design-brief"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-bold text-white"
            >
              Open Workspace
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              ✦ AI Percetakan Workspace
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              AI Banner & Poster{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-500 dark:text-zinc-400">
              Workspace AI modern untuk membuat desain spanduk,
              baliho, banner, poster, dan kebutuhan percetakan lebih cepat.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tools/design-brief"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-bold text-white shadow-xl shadow-cyan-500/20"
              >
                Mulai Design
              </Link>

              <button className="rounded-2xl border border-zinc-300 px-7 py-4 font-semibold dark:border-zinc-700">
                Explore Templates
              </button>
            </div>
          </div>

          {/* PREVIEW */}
          <div
            id="workspace"
            className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"></div>

            <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
              <div className="flex items-center gap-3 text-sm font-bold">
                🖼 RanzAI Workspace
              </div>

              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                LIVE
              </div>
            </div>

            <div className="relative flex h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 dark:from-[#09111f] dark:via-[#07131f] dark:to-[#071917]">
              <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
              <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

              <div className="relative z-10 px-8 text-center">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Preview Area
                </div>

                <h2 className="text-5xl font-black leading-tight md:text-6xl">
                  HASIL{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    GENERATE
                  </span>
                </h2>

                <p className="mt-5 text-zinc-500 dark:text-zinc-400">
                  Preview desain AI akan tampil di sini
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                    🎨 Auto Color
                  </div>

                  <div className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-400">
                    ⚡ Fast Render
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                    🖼 HD Export
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-zinc-200 p-5 dark:border-zinc-800 md:grid-cols-4">
              <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-bold text-white">
                Download PNG
              </button>

              <button className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-bold dark:border-zinc-700">
                Export PDF
              </button>

              <button className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-bold dark:border-zinc-700">
                Regenerate
              </button>

              <button className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-bold dark:border-zinc-700">
                Edit Lagi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-black">
            Tools Percetakan
          </h2>

          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Dibangun khusus untuk kebutuhan banner, baliho, poster, dan desain percetakan modern.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-black">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500 dark:text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="pricing"
        className="border-t border-zinc-200 px-6 py-10 text-center dark:border-zinc-800"
      >
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          RanzAI Design — Human-Led AI Creation by Rizky Reranza
        </div>
      </footer>
    </main>
  );
}
