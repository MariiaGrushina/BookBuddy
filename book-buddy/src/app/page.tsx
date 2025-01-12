"use client";

import Image from "next/image";
import BookCard from "@/components/BookCard";
import LoadMoreItems from "@/components/LoadMoreItems";
import { useState, KeyboardEvent } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [response, setResponse] = useState<string[][]>([]);

  const processSearch = async (
    event: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue) {
        setQuery(inputValue);
        setLoading(true);
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

            setResponse(JSON.parse(data.response)); // Assuming the API returns { response: "Your GPT result" }
            console.log(response);
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
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-[#ffc97e] min-h-screen"
      style={{
        background: `linear-gradient(
                      170deg, 
                      #ffc97e 45%, 
                      #ffdfa7 45%, 
                      #ffdfa7 50%, 
                      #ffefd3 50%, 
                      #ffefd3 55%, 
                      #ffffff 55%
                      )`,
      }}
    >
      {/* Main Content */}
      <main className="px-6 py-10 ">
        <div className="text-center">
          <p className="text-[#B27F50] text-xs font-bold ">BookBuddy</p>
          <h1 className="text-4xl font-bold text-[#584A31] py-5">Find Books</h1>
          <p className="text-[#B27F50] text-sm">
            Enter the name of any book or a description to find book
            recommendations
          </p>
          <div className="flex justify-center item-center mt-8">
            <div className="relative w-1/2">
              {!loading ? (
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-white bg-[#AB8154] text-white rounded-lg px-4 py-2 w-full pl-10 bg-no-repeat bg-[url('/searchicon.jpg')] bg-[length:25px_25px]"
                  style={{ backgroundPosition: "10px 7px", outline: "none" }}
                  onKeyDown={processSearch}
                />
              ) : (
                // Disabled input with loading spinner
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Loading..."
                    className="border border-white bg-[#AB8154] text-white rounded-lg px-4 py-2 w-full pl-10 cursor-not-allowed"
                    disabled
                  />
                  <div
                    className="absolute top-2.5 left-3 h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"
                    style={{ borderWidth: "3px" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Book Cards */}
        {/* TODO: Ensure that only six cards are displayed at a time, include 
                  a way to navigate between every six books */}
        {/* Stretch Goal: Make the search bar sticky */}
        <div className="mt-10 py-7">
          <LoadMoreItems books={response} />
        </div>
      </main>
    </div>
  );
}
