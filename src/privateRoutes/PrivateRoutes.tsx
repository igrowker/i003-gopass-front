import React from "react"
import { Routes, Route } from "react-router-dom"
import UserProfile from "../app/pages/UserProfilePage"
import ComprarEntrada from "../app/pages/ComprarEntradaPage"
import PagarEntrada from "../app/pages/PagarEntradaPage"
import VerificarEntradaComponent from "../app/components/VerificarEntrada/EntradaAutenticada"
import VenderEntrada from "../app/pages/VenderEntradaPage"
import Contact from "../app/pages/ContactPage"
import Ticket from "../app/pages/TicketPage"
import LandingView from "../app/pages/LandingViewPage"
import PrivateRoute from "./PrivateRoute"

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<LandingView />} />} />
      <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} />} />
      <Route path="/comprar-entrada" element={<PrivateRoute element={<ComprarEntrada />} />} />
      <Route path="/pagar-entrada" element={<PrivateRoute element={<PagarEntrada />} />} />
      <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
      <Route path="/ticket" element={<PrivateRoute element={<Ticket />} />} />
      <Route path="/verificar-entrada" element={<PrivateRoute element={<VerificarEntradaComponent />} />} />
      <Route path="/vender-entrada" element={<PrivateRoute element={<VenderEntrada />} />} />
    </Routes>
  )
}

export default PrivateRoutes
