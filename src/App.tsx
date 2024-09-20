import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"
import { LandingView } from "./components/view/LandingPage/LandingView"
import SocialLogin from "./components/view/SocialLogin"
import Login from "./components/view/Login"
import Register from "./components/view/Register"
import UserProfile from "./components/view/UserProfile"
import Ticket from "./components/view/Ticket"
import Contact from "./components/view/Contact"
function App() {
  
  return (
    <>
      <Routes>
        //Rutas públicas
        <Route path="/verificar-entrada" element={<VerificarEntradaComponent />} />
        //Rutas privadas
        <Route path="/" element={<LandingView />} />
        <Route path="/social-login" element={<SocialLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </>
  )
}

export default App
