import React from "react"
import { Route, Routes } from "react-router-dom"

import { AboutUs } from "../app/pages/AboutUsPage"
import AllTickets from "../app/pages/AllTicketsPage"
import ComprarEntrada from "../app/pages/BuyEntryPage"
import Contact from "../app/pages/ContactPage"
import { HelpSupport } from "../app/pages/HelpSupportPage"
import LandingView from "../app/pages/LandingViewPage"
import { MyTickets } from "../app/pages/MyTicketsPage"
import { MyTicketsSold } from "../app/pages/MyTicketsSoldPage"
import { PageNotFound } from "../app/pages/PageNotFoundPage"
import PagarEntrada from "../app/pages/PayEntryPage"
import PhoneCode from "../app/pages/PhoneCodePage"
import VenderEntrada from "../app/pages/SellEntryPage"
import Ticket from "../app/pages/TicketPage"
import UserProfile from "../app/pages/UserProfilePage"
import VerifyEntryPage from "../app/pages/VerifyEntryPage"
import PrivateRoute from "./PrivateRoute"

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<LandingView />} />} />
      <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} />} />
      <Route path="/comprar-entrada" element={<PrivateRoute element={<ComprarEntrada />} />} />
      <Route path="/pagar-entrada" element={<PrivateRoute element={<PagarEntrada />} />} />
      <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
      <Route path="/help-support" element={<PrivateRoute element={<HelpSupport />} />} />
      <Route path="/about-us" element={<PrivateRoute element={<AboutUs />} />} />
      <Route path="/ticket" element={<PrivateRoute element={<Ticket />} />} />
      <Route path="/verificar-entrada" element={<PrivateRoute element={<VerifyEntryPage />} />} />
      <Route path="/vender-entrada" element={<PrivateRoute element={<VenderEntrada />} />} />
      <Route path="/my-tickets" element={<PrivateRoute element={<MyTickets />} />} />
      <Route path="/my-tickets-sold" element={<PrivateRoute element={<MyTicketsSold />} />} />
      <Route path="/all-tickets" element={<PrivateRoute element={<AllTickets />} />} />
      <Route path="/phone-code" element={<PrivateRoute element={<PhoneCode />} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default PrivateRoutes
