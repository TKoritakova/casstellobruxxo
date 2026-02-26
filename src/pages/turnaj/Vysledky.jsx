import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const Vysledky = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Výsledky turnaje</h1></div>
  </div>
)

export default Vysledky