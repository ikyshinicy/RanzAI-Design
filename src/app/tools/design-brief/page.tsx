"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Sparkles } from "lucide-react";

export default function DesignBriefPage() {
  const [form, setForm] = useState({
    designType: "",
    businessName: "",
    targetAudience: "",
    style: "",
    color: "",
    goal: "",
    platform: "",
  });

  const [result, setResult] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function generateBrief() {
    const output = `
RANZAI DESIGN BRIEF

Jenis Desain:
${form.designType || "-"}

Nama Brand / Produk:
${form.businessName || "-"}

Target Audience:
${form.targetAudience || "-"}

Tujuan Desain:
${form.goal || "-"}

Platform:
${form.platform || "-"}

Style Visual:
${form.style || "-"}

Arah Warna:
${form.color || "-"}

REKOMENDASI KONSEP:
Buat desain dengan tampilan profesional, jelas, dan mudah dipahami. Fokus utama adalah menonjolkan pesan utama brand/produk kepada target audience.

ARAH LAYOUT:
- Gunakan headline besar dan mudah dibaca
- Letakkan elemen utama di tengah atau area paling dominan
- Gunakan ruang kosong agar desain tidak penuh
- Tambahkan CTA yang jelas
- Pastikan visual cocok untuk platform ${form.platform || "digital"}

ARAH COPYWRITING:
Headline:
"${form.businessName || "Brand"} — Desain yang Lebih Menarik dan Profesional"

Subheadline:
Solusi visual untuk menarik perhatian audience dengan tampilan modern dan rapi.

CTA:
Coba Sekarang / Hubungi Kami / Pesan Sekarang

PROMPT AI VISUAL:
Create a professional ${form.designType || "digital design"} for ${
      form.businessName || "a modern brand"
    }, targeting ${form.targetAudience || "general audience"}. Use ${
      form.style || "modern clean"
    } visual style with ${form.color || "balanced brand colors"} color palette. The design should look polished, attractive, clear, commercial, and suitable for ${
      form.platform || "social media"
    }. Strong layout, readable typography, premium composition, high visual impact.
    `.trim();

    setResult(output);
  }

  async function copyResult() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    alert("Hasil berhasil disalin.");
  }

  return (
    <main className="min-h-screen bg-[#07070A] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400">
            <ArrowLeft size={16} />
            Kembali
          </Link>

          <div className="font-bold">
            RanzAI<span className="text-cyan-400"> Design</span>
          </div>
        </nav>

        <div className="mb-10">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            AI Design Brief Tool
          </div>

          <h1 className="text-4xl font-black md:text-5xl">
            Buat brief desain profesional.
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Isi kebutuhan desain, lalu RanzAI bantu susun konsep, layout,
            copywriting, dan prompt visual.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-6 text-2xl font-bold">Input Brief</h2>

            <div className="grid gap-4">
              <input
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Nama brand / produk"
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <select
                name="designType"
                value={form.designType}
                onChange={handleChange}
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              >
                <option value="">Pilih jenis desain</option>
                <option>Poster Promo</option>
                <option>Banner</option>
                <option>Konten Instagram</option>
                <option>Story / Reels Cover</option>
                <option>Logo Direction</option>
                <option>Product Ads</option>
                <option>Flyer UMKM</option>
              </select>

              <input
                name="targetAudience"
                value={form.targetAudience}
                onChange={handleChange}
                placeholder="Target audience, contoh: anak muda, UMKM, ibu rumah tangga"
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                name="platform"
                value={form.platform}
                onChange={handleChange}
                placeholder="Platform, contoh: Instagram, WhatsApp, banner cetak"
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                name="style"
                value={form.style}
                onChange={handleChange}
                placeholder="Style, contoh: clean modern, streetwear, luxury, playful"
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                name="color"
                value={form.color}
                onChange={handleChange}
                placeholder="Warna, contoh: biru kuning, merah hitam, pastel"
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <textarea
                name="goal"
                value={form.goal}
                onChange={handleChange}
                placeholder="Tujuan desain, contoh: promosi produk baru, menarik customer, branding usaha"
                rows={4}
                className="rounded-2xl border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-cyan-400"
              />

              <button
                onClick={generateBrief}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 font-bold text-black"
              >
                <Sparkles size={18} />
                Generate Brief
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Hasil RanzAI</h2>

              <button
                onClick={copyResult}
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                <Copy size={16} />
                Copy
              </button>
            </div>

            <pre className="min-h-[520px] whitespace-pre-wrap rounded-2xl border border-zinc-800 bg-black p-5 text-sm leading-7 text-zinc-300">
              {result || "Hasil brief akan muncul di sini..."}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
