import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {

  const categoryButtons = categories.map((category) => (
     <button 
       key={category}
       onClick={() => onSelectCategory(category)}
       className={selectedCategory === category ? 'selected' : ""}
      >
        {category}
      </button>
     ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
