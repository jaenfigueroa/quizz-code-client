import React from 'react'
import './ContainerTags.css'

export const ContainerTags = ({ tags }) => {
  /// ////////////////////////////////////////
  return (
    <div className='container-tags'>
      {tags}
    </div>
  )
}

/// ////////////////////////////////////////
export const Tag = ({ text, color }) => {
  return (
    <p className={`container-tags__tag ${`container-tags__tag--${color}`}`}>{text}</p>
  )
}
