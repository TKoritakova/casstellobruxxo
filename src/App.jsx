import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Tribes from './pages/Tribes'
import Arashar from './pages/Arashar'
import Kuaraori from './pages/Kuaraori'
import Nomphyrian from './pages/Nomphyrian'
import Pawanunga from './pages/Pawanunga'


const Postavy = () => <div><h2>Studenti a profesoři</h2><p>Seznam všech obyvatel hradu...</p></div>
const Lore = () => <div><h2>Historie a legendy</h2><p>Příběhy o Caipoře a zlatém chrámu...</p></div>

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
        <Link to="/casstellobruxxo/postavy">Postavy</Link>
        <Link to="/casstellobruxxo/lore">Lore</Link>
      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/casstellobruxxo/" element={<Home />} />
          <Route path="/casstellobruxxo/tribes" element={<Tribes />} />
          <Route path="/casstellobruxxo/postavy" element={<Postavy />} />
          <Route path="/casstellobruxxo/lore" element={<Lore />} />

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

