import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const Zadani = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Zadání</h1></div>

    <h2>První úkol</h2>
    <hr />

    <h2>Druhý úkol</h2>
    <hr />

    <h2>Třetí úkol</h2>
    <hr />

    <h2>Čtvrtý úkol</h2>
    <hr />

    <h2>Pátý úkol</h2>
    <hr />

    <h2>Šestý úkol</h2>
    <hr />
  </div>
)

export default Zadani