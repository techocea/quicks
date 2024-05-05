import Link from "next/link";

export default function Header() {
  return (
    <nav className="max-md:hidden bg-main text-white flex justify-between w-full items-center px-8 py-3 h-[80px]">
      <div>
        <Link href="/">
          <h1 className="font-bold text-primary text-2xl">QB QuickBooks</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-4">
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <div className="flex gap-x-6">
        <h1>Sign In</h1>
        <h1>Sign Up</h1>
      </div>
    </nav>
  );
}
