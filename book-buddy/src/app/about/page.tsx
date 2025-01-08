import Image from "next/image";

export default function About() {
  return (
    <div className="bg-orange-100 min-h-screen">
      {/* Header */}
      <header className="bg-orange-300 flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <a href="/">
              <span className="font-bold text-orange-500">BB</span>
            </a>
          </div>
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
      <main className="px-6 py-10">About Us</main>
    </div>
  );
}
