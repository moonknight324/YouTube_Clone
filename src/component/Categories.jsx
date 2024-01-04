import React, { useState } from 'react';

const CategorySection = ({ categories }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prevPosition) =>
      prevPosition > 0 ? prevPosition - 100 : 0
    );
  };

  const scrollRight = () => {
    const container = document.getElementById('category-container');
    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollPosition((prevPosition) =>
      prevPosition < maxScroll ? prevPosition + 100 : maxScroll
    );
  };

  return (
    <div className="category-section">
      <button className="scroll-button left round" onClick={scrollLeft}>
      &lt;
      </button>
      {/* <div className="category-container" id="category-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {categories.map((category, index) => (
          <div key={index} className="category">
            {category}
          </div>
        ))}
      </div> */}
      <button className="scroll-button right round" onClick={scrollRight}>
      &gt;
      </button>
    </div>
  );
};

export default CategorySection;
