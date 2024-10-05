import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { AppWrapper } from "./context/AppWrapper"

import Alert from "./app/components/UI/Alert"
import SocialLogin from "./app/pages/SocialLoginPage"
import Login from "./app/pages/LoginPage"
import Register from "./app/pages/RegisterPage"
import PrivateRoutes from "./privateRoutes/PrivateRoutes"
import { PageNotFound } from "./app/pages/PageNotFound"

import AllTickets from "./app/pages/AllTickets"

function App() {
  const [message, setMessage] = useState<string | null>(null)
  const handleMessage = (message: string) => setMessage(message)
  const handleAlertAccepted = () => setMessage(null)

  return (
    <>
      <AppWrapper handleMessage={handleMessage}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/social-login" element={<SocialLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/all-tickets" element={<AllTickets />} />

          {/* Rutas privadas */}
          <Route path="/*" element={<PrivateRoutes />} />

          {/* Página no encontrada */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {message && <Alert message={message} onAccept={handleAlertAccepted} />}
      </AppWrapper>
    </>
  )
}

export default App
