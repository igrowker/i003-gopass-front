import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"
import SocialLogin from "./components/view/SocialLogin"
import Login from "./components/view/Login"
import Register from "./components/view/Register"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VerificarEntradaComponent />} />
        <Route path="/social-login" element={<SocialLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
