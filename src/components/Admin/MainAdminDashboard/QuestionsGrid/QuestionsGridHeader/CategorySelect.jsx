import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext'

const CategorySelect = () => {
  const { categories, setSelectedCategory, setCurrentPage } = useContext(AdminContext)
  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value)
    setCurrentPage(1)
  }
  return (
    <select
      className=''
      name='category'
      onChange={handleChangeCategory}
    >
      {categories.map((category) => (
        <option key={category._id} value={`${category._id}`}>
          {category.name}
        </option>
      ))}
    </select>
  )
}

export default CategorySelect
