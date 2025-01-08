import Image from "next/image";

export default function MyList() {
  return (
    <div className="bg-orange-100 min-h-screen">
      {/* Header */}
      <header className="bg-orange-300 flex justify-between items-center px-6 py-4">
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
          <a href="/my-list" className="text-white">
            My List
          </a>
          <a href="/about" className="text-white">
            About us
          </a>
          <a href="/logout" className="text-white">
            Logout
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-10">List</main>
    </div>
  );
}
