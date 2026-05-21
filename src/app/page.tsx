import Link from "next/link";
import { Sparkles, Palette, Type, LayoutTemplate, PenLine, Wand2 } from "lucide-react";

const tools = [
  {
    title: "AI Design Brief",
    desc: "Bantu susun arahan desain dari kebutuhan mentah menjadi brief profesional.",
    icon: PenLine,
  },
  {
    title: "Prompt Helper",
    desc: "Ubah konsep desain menjadi prompt AI visual yang rapi dan siap pakai.",
    icon: Wand2,
  },
  {
    title: "Color Palette",
    desc: "Rekomendasi warna sesuai brand, mood, dan target audience.",
    icon: Palette,
  },
  {
    title: "Typography Helper",
    desc: "Bantu pilih gaya font yang cocok untuk desain.",
    icon: Type,
  },
  {
    title: "Layout Suggestion",
    desc: "Bantu susun komposisi poster, banner, konten, dan iklan.",
    icon: LayoutTemplate,
  },
  {
    title: "Copywriting Helper",
    desc: "Bantu buat headline, CTA, dan teks promosi.",
    icon: Sparkles,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            RanzAI<span className="text-cyan-400"> Design</span>
          </div>

          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#tools">Tools</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>

          <Link
            href="/tools/design-brief"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Try Tools
          </Link>
        </nav>

        <div className="grid items-center gap-10 py-24 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              AI Co-Designer for Creator & UMKM
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Bantu desain lebih cepat, rapi, dan terarah.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              RanzAI Design membantu membuat brief desain, konsep visual,
              warna, font, copywriting, layout, dan prompt AI untuk kebutuhan
              desain digital.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tools/design-brief"
                className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-black"
              >
                Mulai Buat Brief
              </Link>

              <a
                href="#tools"
                className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-200"
              >
                Lihat Tools
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-6">
              <p className="text-sm text-cyan-300">Generated Design Direction</p>
              <h2 className="mt-4 text-3xl font-bold">
                Poster Promo Minuman Segar
              </h2>
              <p className="mt-4 text-zinc-300">
                Style: bold streetwear ads, warna cyan-kuning, headline besar,
                komposisi produk di tengah, CTA kuat.
              </p>

              <div className="mt-6 grid gap-3 text-sm">
                <div className="rounded-xl bg-black/30 p-4">Color: Cyan, Yellow, Black</div>
                <div className="rounded-xl bg-black/30 p-4">Font: Bold Sans Display</div>
                <div className="rounded-xl bg-black/30 p-4">Mood: Fresh, Energetic, Youth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-4xl font-black">Tools Utama</h2>
          <p className="mt-3 text-zinc-400">
            Pondasi awal RanzAI Design sebagai tools bantu desain.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <Icon className="mb-5 h-8 w-8 text-cyan-400" />
                <h3 className="text-xl font-bold">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
          <h2 className="text-4xl font-black">Mulai dari versi gratis</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            MVP awal fokus ke penggunaan harian terbatas. Sistem credit dan
            payment bisa ditambahkan setelah tools utama stabil.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-xl font-bold">Free</h3>
              <p className="mt-2 text-zinc-400">Limit harian basic.</p>
              <p className="mt-6 text-3xl font-black">Rp0</p>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-cyan-400/10 p-6">
              <h3 className="text-xl font-bold">Creator</h3>
              <p className="mt-2 text-zinc-400">Untuk kreator aktif.</p>
              <p className="mt-6 text-3xl font-black">Coming Soon</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="text-xl font-bold">Business</h3>
              <p className="mt-2 text-zinc-400">Untuk UMKM dan tim kecil.</p>
              <p className="mt-6 text-3xl font-black">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="about" className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-500">
        RanzAI Design — Human-Led AI Creation by Rizky Reranza.
      </footer>
    </main>
  );
}
