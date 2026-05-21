import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RanzAI Design",
  description: "AI co-designer untuk bantu konsep desain, layout, warna, font, copywriting, dan prompt visual."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
