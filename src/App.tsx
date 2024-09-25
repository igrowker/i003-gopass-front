import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AppWrapper } from './contexts/AppWrapper'

import Alert from './components/UI/Alert'
import VerificarEntradaComponent from './components/view/VerificarEntradaComponent'
import { LandingView } from './components/view/LandingPage/LandingView'
import SocialLogin from './components/view/SocialLogin'
import Login from './components/view/Login'
import Register from './components/view/Register'
import UserProfile from './components/view/UserProfile'
import ComprarEntrada from './components/view/ComprarEntrada'
import PagarEntrada from './components/view/PagarEntrada'

import Ticket from './components/view/Ticket'
import Contact from './components/view/Contact'
import VenderEntrada from './components/view/VenderEntrada'

function App() {
  const [message, setMessage] = useState<string | null>(null)
  const handleMessage = (message: null) => setMessage(message)
  const handleAlertAccepted = () => setMessage(null)

  return (
    <>
      <AppWrapper handleMessage={handleMessage}>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/social-login" element={<SocialLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-profile" element={<UserProfile />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket" element={<Ticket />} />

          <Route
            path="/verificar-entrada"
            element={<VerificarEntradaComponent />}
          />
          <Route path="/comprar-entrada" element={<ComprarEntrada />} />
          <Route path="/vender-entrada" element={<VenderEntrada />} />
          <Route path="/pagar-entrada" element={<PagarEntrada />} />
        </Routes>
        {message && <Alert message={message} onAccept={handleAlertAccepted} />}
      </AppWrapper>
    </>
  )
}

export default App
