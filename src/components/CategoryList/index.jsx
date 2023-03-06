import React from 'react'
import CategoryCard from "./CategoryCard";
// import './CategoryList'

/////////////////////////////////////////
const CategoryList = ({ categories }) => {


  /////////////////////////////////////////
  return (
    <div className='container-cards-languages'>
      {categories.map((category, index) => (
        <CategoryCard category={category} key={`${category.name}-${index}`} />
      ))}
    </div>
  );
};

export default CategoryList;