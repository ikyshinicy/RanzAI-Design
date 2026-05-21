import { Navbar } from "@/components/layout/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-black">dashboard</h1>
        <p className="mt-3 text-white/60">Halaman starter untuk module dashboard.</p>
      </section>
    </main>
  );
}
