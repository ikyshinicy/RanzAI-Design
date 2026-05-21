import { NextResponse } from "next/server";
import { buildDesignPrompt } from "@/features/design-assistant/buildDesignPrompt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const brief = body.brief;

    if (!brief || typeof brief !== "string") {
      return NextResponse.json({ error: "Brief desain wajib diisi." }, { status: 400 });
    }

    // MVP mode: belum memanggil OpenAI langsung, agar aman untuk testing tanpa API key.
    const result = buildDesignPrompt(brief);

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Gagal memproses request." }, { status: 500 });
  }
}
