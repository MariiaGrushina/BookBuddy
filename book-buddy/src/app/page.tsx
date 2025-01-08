import Image from "next/image";

export default function Home() {
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
      <main className="px-6 py-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600">Find Books</h1>
          <p className="text-gray-700">
            Enter the name of any book or a description to find book
            recommendations
          </p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-l px-4 py-2 w-1/2"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
              Search
            </button>
          </div>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="/war-and-peace.jpg"
              alt="War and Peace"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Russian Classic</p>
              <h2 className="font-bold text-lg">War and Peace</h2>
              <p className="text-sm text-gray-500">Leo Tolstoy</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="/a-court-of-thorns-and-roses.jpg"
              alt="A Court of Thorns and Roses"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Romantic Fantasy</p>
              <h2 className="font-bold text-lg">A Court of Thorns and Roses</h2>
              <p className="text-sm text-gray-500">Sarah J. Maas</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src="/flowers-for-algernon.jpg"
              alt="Flowers for Algernon"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Science Fiction</p>
              <h2 className="font-bold text-lg">Flowers for Algernon</h2>
              <p className="text-sm text-gray-500">Daniel Keyes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
