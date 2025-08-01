

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Bienvenida from './Pages/Bienvenida'
import Timeline from './Pages/Timeline'
import Workexperence from './Pages/Workexperence'
import Skills from './Pages/Skills'
import Portafolio from './Pages/Portafolio'
import ContactFooter from './Pages/ContactFooter'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bienvenida" element={<Bienvenida />} />
      <Route path="/Timeline" element={<Timeline />} />
    <Route path="/Workexperence" element={<Workexperence />} /> 
    <Route path="/Skills" element={<Skills />} /> 
    <Route path="/Portafolio" element={<Portafolio />} /> 
      <Route path="/ContactFooter" element={<ContactFooter />} /> 
    </Routes>
  )
}

export default App