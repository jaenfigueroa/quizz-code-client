import { useState } from 'react'
import './App.css'
import { AppContext } from './context/AppContext'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  const [isAuthenticated, setIsAutenticated] = useState(true)
  let { user, setUser } = useState({})

  let listState = {
    isAuthenticated,
    user,
    setUser
  }

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
