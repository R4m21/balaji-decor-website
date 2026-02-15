import Link from "next/link";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-md bg-gradient-to-r from-brand-blue to-brand-teal px-6 py-3 text-white font-medium transition hover:opacity-90"
    >
      {children}
    </Link>
  );
}
