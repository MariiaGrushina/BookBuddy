import React, { useState } from "react";
import BookCard from "./BookCard";

export default function LoadMoreItems() {
  const items = Array.from({ length: 18 }, (_, i) => (
    <BookCard
      bookName="War and Peace"
      bookAuthor="Leo Tolstoy"
      genre="Russian Classic"
    />
  ));

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <div>
      <div>
        <div className="item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
          {items.slice(0, visibleItems).map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
        {visibleItems < items.length && (
          <div className="text-center mt-4">
            <button
              className="border border-[#8B6D59] bg-[#AB8154] text-white rounded-lg px-4 py-2 w-30"
              onClick={loadMoreItems}
            >
              Read more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
