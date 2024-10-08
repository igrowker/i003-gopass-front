import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import "./App.css"
import Alert from "./app/components/UI/Alert"
import AllTickets from "./app/pages/AllTickets"
import Login from "./app/pages/LoginPage"
import { PageNotFound } from "./app/pages/PageNotFound"
import Register from "./app/pages/RegisterPage"
import SocialLogin from "./app/pages/SocialLoginPage"
import { AppWrapper } from "./context/AppWrapper"
import PrivateRoutes from "./privateRoutes/PrivateRoutes"
import ForgotPassword from "./app/views/ForgotPassword"

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
          <Route path="/forgot-password" element={<ForgotPassword />} />

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
