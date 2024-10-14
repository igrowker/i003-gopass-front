import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import "./App.css"
import Alert from "./app/components/UI/Alert"
import Login from "./app/pages/LoginPage"
import { PageNotFound } from "./app/pages/PageNotFoundPage"
import Register from "./app/pages/RegisterPage"
import SocialLogin from "./app/pages/SocialLoginPage"
import { AppWrapper } from "./context/AppWrapper"
import PrivateRoutes from "./privateRoutes/PrivateRoutes"
import ForgotPassword from "./app/pages/ForgotPasswordPage"
import ResetPassword from "./app/pages/ResetPasswordPage"

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
          <Route path="/reset-password" element={<ResetPassword />} />

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
