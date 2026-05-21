import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";

const tools = ["Design Brief", "Layout Suggestion", "Color Palette", "Font Pairing", "Copywriting", "Prompt Visual"];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold text-ranzai-lime">AI CO-DESIGNER FOR CREATORS & UMKM</p>
        <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">Bikin arahan desain lebih cepat, rapi, dan siap eksekusi.</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">RanzAI Design membantu membuat konsep desain, layout, warna, font, copywriting, dan prompt visual dari brief sederhana.</p>
        <div className="mt-8 flex gap-4">
          <ButtonLink href="/tools">Mulai Pakai Tools</ButtonLink>
          <ButtonLink href="/pricing">Lihat Paket</ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">{tool}</h3>
              <p className="mt-2 text-sm text-white/60">Module awal untuk workflow desain RanzAI.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
