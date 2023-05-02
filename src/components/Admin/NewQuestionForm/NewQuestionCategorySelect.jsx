import React, { useContext, useEffect, useState } from 'react'
import { getAllCategories } from '../../../helpers/getAllCategories'
import AdminPageContext from '../../../context/AdminPageContext'

/// ///////////////////////////////////////////
export const NewQuestionCategorySelect = ({ formData }) => {
  const [categories, setCategories] = useState([])

  const { userCurrentAction } = useContext(AdminPageContext);
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
      <select 
        disabled={userCurrentAction === 'editing'}
        className='section-admin__select' 
        name='category' 
        value={formData.category}>
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
