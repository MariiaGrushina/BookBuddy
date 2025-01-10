"use client";

import Image from "next/image";
import BookCard from "@/components/BookCard";
import LoadMoreItems from "@/components/LoadMoreItems";
import { useState, KeyboardEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const processSearch = async (
    event: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue) {
        console.log("Search query:", inputValue);
        setQuery(inputValue);
        try {
          const res = await fetch("/api/gpt-query", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: inputValue }),
          });
          if (res.ok) {
            const data = await res.json();
            setResponse(data.response); // Assuming the API returns { response: "Your GPT result" }
          } else {
            console.error("Error fetching GPT API response:", res.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
        // Perform the search logic here (e.g., make an API call)
      } else {
        console.log("Please enter a valid search query.");
      }
    }
  };

  return (
    <div className="bg-[#ffc97e] min-h-screen">
      {/* Main Content */}
      <main className="px-6 py-10 ">
        <div className="text-center">
          <p className="text-[#B27F50] text-xs font-bold ">BookBuddy</p>
          <h1 className="text-3xl font-bold text-[#584A31] py-3">Find Books</h1>
          <p className="text-[#B27F50] text-sm">
            Enter the name of any book or a description to find book
            recommendations
          </p>
          <div className="flex justify-center item-center mt-6">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search"
                className="border border-white bg-[#AB8154] text-white rounded-lg px-4 py-2 w-full pl-10 bg-no-repeat bg-[url('/searchicon.jpg')] bg-[length:25px_25px]"
                style={{ backgroundPosition: "10px 7px" }}
                onKeyDown={processSearch}
              />
            </div>
          </div>
        </div>

        {/* Display GPT Response */}
        {response && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#584A31]">GPT Response:</h2>
            <p className="text-[#584A31] mt-2">{response}</p>
          </div>
        )}

        {/* Book Cards */}
        {/* TODO: Ensure that only six cards are displayed at a time, include 
                  a way to navigate between every six books */}
        {/* Stretch Goal: Make the search bar sticky */}
        <div className="mt-10 py-7">
          <LoadMoreItems />
          {/* 
          Card 1
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

           Card 2
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
          */}
        </div>
      </main>
    </div>
  );
}
