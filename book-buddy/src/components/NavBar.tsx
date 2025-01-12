import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-[#ab8154] flex justify-between items-center px-6 py-3">
      <div className="flex items-center">
        <a href="/">
          <Image
            className="rounded-full"
            src="/bookbuddy.jpg"
            alt="BookBuddy Logo"
            width={40}
            height={60}
          />
        </a>
      </div>
      <nav className="flex space-x-4">
        <a href="/my-list" className="text-white py-0.5 mt-1">
          My List
        </a>
        <a href="/about" className="text-white py-0.5 mt-1">
          About us
        </a>
        <a
          href="/logout"
          className="text-white ring-1 ring-[#ffc97e] rounded px-3 py-0.5 mt-1"
        >
          Logout
        </a>
      </nav>
    </header>
  );
}
