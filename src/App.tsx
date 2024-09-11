import "./App.css"
import { Routes, Route } from "react-router-dom"

import VerificarEntradaComponent from "./components/view/VerificarEntradaComponent"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VerificarEntradaComponent />} />
      </Routes>
    </>
  )
}

export default App
