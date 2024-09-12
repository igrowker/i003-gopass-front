import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"
import Login from "./components/view/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VerificarEntradaComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
