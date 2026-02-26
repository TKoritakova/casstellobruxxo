import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const Vysledky = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Výsledky turnaje</h1></div>

    <h2>Tabulka výsledků</h2>
    <hr />
    <table className="post-tabulka">
      <tr></tr>
    </table>
  </div>
)

export default Vysledky