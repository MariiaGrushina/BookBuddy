"use client";

import Image from "next/image";
import { useState, KeyboardEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const processSearch = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue) {
        console.log("Search query:", inputValue);
        setQuery(inputValue);
        // Perform the search logic here (e.g., make an API call)
      } else {
        console.log("Please enter a valid search query.");
      }
    }
  };

  return (
    <div className="bg-[#ffc97e] min-h-screen">
      {/* Header */}
      <header className="bg-[#ab8154] flex justify-between items-center px-6 py-4">
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
          <h1 className="text-3xl font-bold text-[#584A31]">Find Books</h1>
          <p className="text-[#B27F50]">
            Enter the name of any book or a description to find book
            recommendations
          </p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search"
              className="border bg-[#AB8154] text-white  rounded-l px-4 py-2 w-1/2"
              onKeyDown={processSearch}
            />
          </div>
        </div>

        {/* Book Cards */}
        {/* TODO: Ensure that only six cards are displayed at a time, include 
                  a way to navigate between every six books */}
        {/* Stretch Goal: Make the search bar sticky */}
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
