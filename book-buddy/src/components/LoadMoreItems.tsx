import React, { useState } from "react";
import BookCard from "./BookCard";

interface LoadMoreItemsProps {
  books: Array<Array<string>>;
}

const LoadMoreItems: React.FC<LoadMoreItemsProps> = ({ books }) => {
  const items = Array.from({ length: books.length }, (_, i) => (
    <BookCard
      bookName={books[i][0]} // Book name idx
      bookAuthor={books[i][1]} // Book author idx
      genre={books[i][2]} // Book genre idx
      isbn={books[i][3]} // Book isbn idx
      description={books[i][4]} // Book description idx
    />
  ));

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <div>
      <div>
        <div className="item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-9">
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
