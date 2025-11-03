import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + Site name now wrapped in a Link */}
        <Link href="/#" scroll={true} className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="/angel-logo.png" // lives in /public
            alt="Angel Intermediaries Logo"
            width={32}
            height={32}
            className="rounded-lg object-contain"
            priority
          />
          <span className="text-lg font-bold">Angel Intermediary</span>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#features" className="text-gray-700 hover:text-indigo-700">Services</a>
          <a href="#program" className="text-gray-700 hover:text-indigo-700">NY Program</a>
          <a href="#how" className="text-gray-700 hover:text-indigo-700">How it Works</a>
          {/* <a href="#resources" className="text-gray-700 hover:text-indigo-700">Resources</a> */}
          <a href="#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}
