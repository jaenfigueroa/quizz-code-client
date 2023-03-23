import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import {  ContextProvider } from './context/AppContext'
import { Modal } from './components/Modal/Modal'

/////////////////////////////////////////////////
function App() {

  return (
    <ContextProvider>
      <div className="App">
        <AppRoutes />

        <Modal/> {/* AUTOLOGIN */}
      </div>
    </ContextProvider>
  )
}

export default App
