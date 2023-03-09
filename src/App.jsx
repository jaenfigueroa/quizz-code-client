import {  useEffect, useState } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import { getUser } from './helpers/log/getUser'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  let [user, setUser] = useState(null)

  let listState = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser
  }

  //todas las primeras veces que se carge la pagina
  useEffect(() => {
    let user = getUser()
    setUser(user)

    user && setIsAuthenticated(true)
  }, [])

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
