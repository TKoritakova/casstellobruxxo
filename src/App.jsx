import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Tribes from './pages/kmeny/Kmeny'
import Subjects from './pages/predmety/Predmety'


import Arashar from './pages/kmeny/Arashar'
import Kuaraori from './pages/kmeny/Kuaraori'
import Nomphyrian from './pages/kmeny/Nomphyrian'
import Pawanunga from './pages/kmeny/Pawanunga'

import Hlavni from './pages/predmety/Hlavni'
import Vedlejsi from './pages/predmety/Vedlejsi'
import Volitelne from './pages/predmety/Volitelne'
import Vycvik from './pages/predmety/Vycvik'
import Archeologie from './pages/predmety/Archeologie'


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

          <Route path="/casstellobruxxo/hlavni" element={<Hlavni />} />
          <Route path="/casstellobruxxo/vedlejsi" element={<Vedlejsi />} />
          <Route path="/casstellobruxxo/volitelne" element={<Volitelne />} />
          <Route path="/casstellobruxxo/vycvik" element={<Vycvik />} />

          <Route path="/casstellobruxxo/archeologie" element={<Archeologie />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

