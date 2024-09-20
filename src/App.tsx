import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"
import { LandingView } from "./components/view/LandingPage/LandingView"
import SocialLogin from "./components/view/SocialLogin"
import Login from "./components/view/Login"
import Register from "./components/view/Register"
import UserProfile from "./components/view/UserProfile"
import ComprarEntrada from "./components/view/ComprarEntrada"

import Ticket from "./components/view/Ticket"
import Contact from "./components/view/Contact"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/social-login" element={<SocialLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/verificar-entrada" element={<VerificarEntradaComponent />} />
        <Route path="/comprar-entrada" element={<ComprarEntrada />} />
      </Routes>
    </>
  )
}

export default App
