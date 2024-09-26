import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { AppWrapper } from "./context/AppWrapper"

import Alert from "./app/components/UI/Alert"
import VerificarEntradaComponent from "./app/components/VerificarEntrada/EntradaAutenticada"
import { LandingView } from "./app/pages/LandingViewPage"
import SocialLogin from "./app/pages/SocialLoginPage"
import Login from "./app/pages/LoginPage"
import Register from "./app/pages/RegisterPage"
import UserProfile from "./app/pages/UserProfilePage"
import ComprarEntrada from "./app/pages/ComprarEntradaPage"
import PagarEntrada from "./app/pages/PagarEntradaPage"

import Ticket from "./app/pages/TicketPage"
import Contact from "./app/pages/ContactPage"
import VenderEntrada from "./app/pages/VenderEntradaPage"

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

          <Route path="/verificar-entrada" element={<VerificarEntradaComponent />} />
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
