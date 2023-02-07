import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharacterInfo, Home } from './pages'

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/info/:id" element={<CharacterInfo/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App