import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Tribes from './pages/Tribes'
import Subjects from './pages/Subjects'


import Arashar from './pages/Arashar'
import Kuaraori from './pages/Kuaraori'
import Nomphyrian from './pages/Nomphyrian'
import Pawanunga from './pages/Pawanunga'




function App() {
  return (
    <div className="app-container">
      {/* 1. NADPIS */}
      <header>
        <h1>Castelobruxo</h1>
        <p>Studium pod korunami pralesa</p>
    
      </header>

      {/* 2. MENU */}
      <nav className="main-nav">
        <Link to="/casstellobruxxo/">Úvod</Link>
        <Link to="/casstellobruxxo/tribes">Školní kmeny</Link>
        <Link to="/casstellobruxxo/subjects">Předměty</Link>
  
      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/casstellobruxxo/" element={<Home />} />
          <Route path="/casstellobruxxo/tribes" element={<Tribes />} />
          <Route path="/casstellobruxxo/subjects" element={<Subjects />} />
    

          <Route path="/casstellobruxxo/arashar" element={<Arashar />} />
          <Route path="/casstellobruxxo/kuaraori" element={<Kuaraori />} />
          <Route path="/casstellobruxxo/nomphyrian" element={<Nomphyrian />} />
          <Route path="/casstellobruxxo/pawanunga" element={<Pawanunga />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

