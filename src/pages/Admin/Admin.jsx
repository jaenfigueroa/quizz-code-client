import React from 'react'
import './Admin.css'
import NewQuestionForm from '../../components/Admin/NewQuestionForm/NewQuestionForm'
import { MainAdminDashboard } from '../../components/Admin/MainAdminDashboard'

/// ///////////////////////////////////////
export const Admin = () => {
  /// ///////////////////////////////////////
  
  return (
    <section className='section-admin'>
      <MainAdminDashboard />
      {/* <NewQuestionForm /> */}
    </section>
  )
}
