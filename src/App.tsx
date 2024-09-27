import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { AppWrapper } from "./context/AppWrapper"

import Alert from "./app/components/UI/Alert"
import SocialLogin from "./app/pages/SocialLoginPage"
import Login from "./app/pages/LoginPage"
import Register from "./app/pages/RegisterPage"
import PrivateRoutes from "./privateRoutes/PrivateRoutes"

function App() {
  const [message, setMessage] = useState<string | null>(null)
  const handleMessage = (message: null) => setMessage(message)
  const handleAlertAccepted = () => setMessage(null)

  return (
    <>
      <AppWrapper handleMessage={handleMessage}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/social-login" element={<SocialLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas privadas */}
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
        {message && <Alert message={message} onAccept={handleAlertAccepted} />}
      </AppWrapper>
    </>
  )
}

export default App
