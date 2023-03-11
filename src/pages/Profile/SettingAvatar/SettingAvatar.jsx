import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppContext'
import { uploadImage } from '../../../helpers/uploadImage'
import './SettingAvatar.css'

//////////////////////////////////////////////
export const SettingAvatar = ({ value }) => {

  const {setUser} = useContext(AppContext)
  const [loading, setLoading] = useState(false)

  const uploadAvatar = async (e) => {

    setLoading(true)

    const newAvatar = e.target.files[0]

    const formData = new FormData();
    formData.append('newAvatar', newAvatar);

    const data =  await uploadImage(formData, `/users/update/avatar`)
    // updateState()
    // console.log(data)

    if (data.status === 'success') {
      // console.log('dentro')
      setUser(data.user)
    }

    setLoading(false)
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

      {/* CARGANDO */}
      {loading && <div className='setting-avatar__loading'></div>}

    </div>

  )
}
