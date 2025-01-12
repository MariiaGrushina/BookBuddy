import React, { useState, useEffect } from "react";
import { NextResponse } from "next/server";

interface BookCardProps {
  bookName: string;
  bookAuthor: string;
  genre: string;
  isbn: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({
  bookName,
  bookAuthor,
  genre,
  isbn,
  description,
}) => {
  const [coverImage, setCoverImage] = useState<string>("");

  useEffect(() => {
    const fetchBookCover = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
        bookName
      )}+inauthor:${encodeURIComponent(bookAuthor)}&key=${
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      }`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          const imageUrl =
            data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || "";
          setCoverImage(imageUrl);
        } else {
          setCoverImage("");
        }
      } catch (error) {
        setCoverImage("");
      }
    };

    fetchBookCover();
  }, [bookName, bookAuthor]);

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden p-4">
      <div className="grid justify-center">
        <img
          src={
            coverImage || `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
          }
          alt={bookName}
          className="w-60 h-80 object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-[#8F6A42]">{genre}</p>
        <h2 className="font-bold text-lg text-[#101828]">{bookName}</h2>
        <p className="font-bold mt-1 text-sm text-[#667085]">{bookAuthor}</p>
        <p className="mt-2 text-sm text-[#667085]">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
