import React from "react"
import { Routes, Route } from "react-router-dom"
import UserProfile from "../app/pages/UserProfilePage"
import ComprarEntrada from "../app/pages/BuyEntryPage"
import PagarEntrada from "../app/pages/PayEntryPage"
import VenderEntrada from "../app/pages/SellEntryPage"
import Contact from "../app/pages/ContactPage"
import Ticket from "../app/pages/TicketPage"
import LandingView from "../app/pages/LandingViewPage"

import PrivateRoute from "./PrivateRoute"
import VerifyEntryPage from "../app/pages/VerifyEntryPage"
import { PageNotFound } from "../app/pages/PageNotFound"
import { MyTickets } from "../app/pages/myTickets"

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<LandingView />} />} />
      <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} />} />
      <Route path="/comprar-entrada" element={<PrivateRoute element={<ComprarEntrada />} />} />
      <Route path="/pagar-entrada" element={<PrivateRoute element={<PagarEntrada />} />} />
      <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
      <Route path="/ticket" element={<PrivateRoute element={<Ticket />} />} />
      <Route path="/verificar-entrada" element={<PrivateRoute element={<VerifyEntryPage />} />} />
      <Route path="/vender-entrada" element={<PrivateRoute element={<VenderEntrada />} />} />
      <Route path="/my-tickets" element={<PrivateRoute element={<MyTickets />} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default PrivateRoutes
