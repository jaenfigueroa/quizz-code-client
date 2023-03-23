import React, { createContext } from "react";
import { useEffect, useState } from 'react'
import { getUser } from '../helpers/log/getUser'
import { autologin } from '../helpers/log/autologin'
import { updateUser } from '../helpers/log/updateUser'

///////////////////////////////////////////////////////////
export const AppContext = createContext(null)

///////////////////////////////////////////////////////////
export const ContextProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)
  const [modal, setModal] = useState({ visible: true, status: 'unregistered', name: '' })

  let [user, setUser] = useState({})

  const updateState = async () => {
    const data = await autologin()
    setUser(data)
  }

  let listState = {
    isAuthenticated,
    setIsAuthenticated,
    isAdmin, /* PROV */
    setIsAdmin, /* PROV */
    user,
    setUser,
    updateState,
    modal,
    setModal
  }

  ///////////////////////////////////

  //todas las primeras veces que se carge la pagina
  // useEffect(() => {

  //   const init = async () => {
  //     const user = getUser()

  //     if (user) {
  //       setModal({ ...modal, visible: true, name: user.name })
  //       const data = await autologin(user)

  //       if (data.status === 'sucess') {
  //         updateUser(data.user)
  //         setIsAuthenticated(true)

  //         //ocultar modal, al iniciar sesion
  //         setModal({ ...modal, status: 'registered', name: user.name })
  //       }
  //     } else {
  //       setModal({ ...modal, visible: false })
  //     }
  //   }

  //   init()
  // }, [])


  useEffect(() => {
    if (isAuthenticated) {
      let user = getUser()
      setUser(user)
    }

  }, [isAuthenticated])

  ///////////////////////////////////////////////////////////
  return (
    <AppContext.Provider value={listState} >
      {children}
    </AppContext.Provider>
  )
}
