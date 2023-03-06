import React, { useId } from 'react'
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryCard category={category} key={`${category.name}-${index}`} />
      ))}
    </div>
  );
};

export default CategoryList;