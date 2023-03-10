import React from 'react'
import { uploadImage } from '../../../helpers/uploadImage'
import './SettingAvatar.css'

//////////////////////////////////////////////
export const SettingAvatar = ({ value }) => {

  const uploadAvatar = (e) => {
    const newAvatar = e.target.files[0]

    const formData = new FormData();
    formData.append('newAvatar', newAvatar);

    uploadImage(formData, `/users/update/avatar`)
  }

  //////////////////////////////////////////////
  return (
    <div className='setting-avatar__mask'>
      <img className='setting-avatar__img' src={value} alt="" />
      <div>
        <input
          className='setting-avatar__input-img'
          type="file"
          accept=".jpg, .png, .gif"
          name="image" id="imageAvatar" onChange={uploadAvatar}/>
      </div>
    </div>

  )
}
