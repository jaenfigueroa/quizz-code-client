import React from 'react'
import './SettingAvatar.css'

//////////////////////////////////////////////
export const SettingAvatar = ({ value }) => {

  const getSubmit = () => {
    console.log('se subio la imagen')
  }

  //////////////////////////////////////////////
  return (
    <div className='setting-avatar__mask'>
      <img className='setting-avatar__img' src={value} alt="" />

      <form
        action="/upload"
        method="POST"
        encType="multipart/form-data"
        onChange={getSubmit}>
        <input
          className='setting-avatar__input-img'
          type="file"
          accept=".jpg, .png, .gif"
          name="image" id="image" />
      </form>
    </div>

  )
}
