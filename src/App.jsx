import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'



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
        <Link to="/">Nástěnka</Link>
        <Link to="/postavy">Postavy</Link>
        <Link to="/lore">Lore</Link>
      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postavy" element={<Postavy />} />
          <Route path="/lore" element={<Lore />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

