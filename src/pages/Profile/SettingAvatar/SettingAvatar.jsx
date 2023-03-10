import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { uploadImage } from '../../../helpers/uploadImage'
import './SettingAvatar.css'

//////////////////////////////////////////////
export const SettingAvatar = ({ value }) => {

  const {setUser} = useContext(AppContext)

  const uploadAvatar = async (e) => {
    const newAvatar = e.target.files[0]

    const formData = new FormData();
    formData.append('newAvatar', newAvatar);

    const data =  await uploadImage(formData, `/users/update/avatar`)
    // updateState()
    setUser(data.user)
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
          name="image" id="imageAvatar" onChange={uploadAvatar} title=''/>
      </div>
    </div>

  )
}
