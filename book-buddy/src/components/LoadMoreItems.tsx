import React, { useState } from "react";
import BookCard from "./BookCard";

const LoadMoreItems = () => {
  // Example data: Replace this with your actual data source
  const items = Array.from({ length: 18 }, (_, i) =>
    BookCard("War and Peace", "Leo Tolstoy", "Russian Classic")
  );

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <div>
      <div>
        <div className="item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
};

export default LoadMoreItems;
