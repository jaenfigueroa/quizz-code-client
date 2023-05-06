import React, { useEffect } from 'react'
import './UserCardModal.css'

function UserCardModal({ user, isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector('.modal-overlay')
      if (element) {
        element.className = 'modal-overlay-open'
      }
    }, 50)
  }, [])

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close' onClick={onClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <article
          className='modal-content'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <div className='ranking-modal__user-image'>
            <img width='100px' src={user.avatar} alt='User avatar' />
          </div>
          <p><span>Name:</span> {user.name}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Points:</span> {user.points}</p>
          <p><span>Challenges:</span> {user.challenges}</p>
          <p><span>Bio:</span> {user.description}</p>
        </article>
      </div>
    </div>
  )
}

export default UserCardModal
