import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { ContextProvider } from './context/AppContext'
import { Modal } from './components/Modal/Modal'

/////////////////////////////////////////////////
function App() {

  return (
    <ContextProvider>
      <div className="App">
        <AppRoutes />
      </div>
      <Modal /> {/* AUTOLOGIN */}
    </ContextProvider>
  )
}

export default App
