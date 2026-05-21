import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">RanzAI Design</Link>
        <div className="flex gap-4 text-sm text-white/70">
          <Link href="/tools">Tools</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
