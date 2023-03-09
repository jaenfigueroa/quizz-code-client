import { useEffect, useState } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import { getUser } from './helpers/log/getUser'
import { login } from './helpers/log/login'
import { updateUser } from './helpers/log/updateUser'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  let [user, setUser] = useState({})

  let listState = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser
  }

  //todas las primeras veces que se carge la pagina
  useEffect(() => {

    const init = async () => {

      const data = await login()

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
