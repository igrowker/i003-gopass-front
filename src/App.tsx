import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"
import { LandingView } from "./components/view/LandingPage/LandingView"

function App() {
  return (
    <>
      <Routes>
        
        //Rutas públicas
        <Route path="/login" element={<VerificarEntradaComponent />} />

        //Rutas privadas
        <Route path="/" element={<LandingView />} />
        
      </Routes>
    </>
  )
}

export default App
