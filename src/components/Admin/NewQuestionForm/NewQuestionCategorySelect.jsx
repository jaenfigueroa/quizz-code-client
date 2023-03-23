import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../../helpers/getAllCategories'

/// ///////////////////////////////////////////
export const NewQuestionCategorySelect = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getAllCategories()
      setCategories(allCategories)
    }
    fetchCategories()
  }, [])

  /// ///////////////////////////////////////////
  return (
    <div className='section-admin__block'>
      <span className='section-admin__title'>Categoría</span>
      <select className='section-admin__select' name='category'>
        <option />
        {categories.map((category) => (
          <option key={category._id} value={`${category._id}`}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}
