import { useEffect, useState } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import { getUser } from './helpers/log/getUser'
import { autologin } from './helpers/log/autologin'
import { updateUser } from './helpers/log/updateUser'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [isAdmin, setIsAdmin] = useState(true) /* PROV */

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
    updateState
  }

  ///////////////////////////////////

  //todas las primeras veces que se carge la pagina
  useEffect(() => {

    const init = async () => {

      const data = await autologin()

      if (data.status === 'sucess') {
        updateUser(data.user)
        setIsAuthenticated(true)
      }
    }

    init()
  }, [])


  useEffect(() => {
    if (isAuthenticated) {
      let user = getUser()
      setUser(user)
    }

  }, [isAuthenticated])

  /////////////////////////////////////////////////
  return (
    <AppContext.Provider value={listState} >
      <div className="App">
        <AppRoutes />
      </div>
    </AppContext.Provider>
  )
}

export default App
