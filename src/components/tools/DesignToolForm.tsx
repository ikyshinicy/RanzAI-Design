"use client";

import { useState } from "react";

export function DesignToolForm() {
  const [brief, setBrief] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const res = await fetch("/api/design", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ brief })
    });

    const data = await res.json();
    setResult(data.result || data.error || "Tidak ada hasil.");
    setLoading(false);
  }

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <label className="text-sm font-semibold">Brief Desain</label>
        <textarea
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="Contoh: Buat konsep poster promo es cincau untuk Instagram, vibe streetwear, warna hijau hitam, target anak muda."
          className="mt-3 h-56 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-sm outline-none focus:border-ranzai-blue"
        />
        <button disabled={loading || !brief} className="mt-4 rounded-2xl bg-ranzai-lime px-5 py-3 font-bold text-black disabled:opacity-40">
          {loading ? "Memproses..." : "Generate Arahan Desain"}
        </button>
      </form>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="font-bold">Hasil RanzAI</h2>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-white/75">{result || "Hasil akan muncul di sini."}</pre>
      </div>
    </div>
  );
}
