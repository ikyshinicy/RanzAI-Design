import Link from "next/link";

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex rounded-2xl bg-ranzai-blue px-5 py-3 font-semibold text-black shadow-lg shadow-ranzai-blue/20">
      {children}
    </Link>
  );
}
