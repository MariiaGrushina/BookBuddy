import React from "react";

interface BookCardProps {
  bookName: string;
  bookAuthor: string;
  genre: string;
}

const BookCard: React.FC<BookCardProps> = ({ bookName, bookAuthor, genre }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden p-4">
      <img
        src="/bookCover.png"
        alt="War and Peace"
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-[#8F6A42]">{genre}</p>
        <h2 className="font-bold text-lg text-[#101828]">{bookName}</h2>
        <p className="text-sm text-[#667085]">{bookAuthor}</p>
      </div>
    </div>
  );
};

export default BookCard;
