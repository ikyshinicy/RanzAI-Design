import { Navbar } from "@/components/layout/Navbar";
import { DesignToolForm } from "@/components/tools/DesignToolForm";

export default function ToolsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">RanzAI Design Tools</h1>
        <p className="mt-3 text-white/60">Masukkan kebutuhan desain, lalu RanzAI bantu susun brief, layout, warna, font, copywriting, dan prompt visual.</p>
        <DesignToolForm />
      </section>
    </main>
  );
}
