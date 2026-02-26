import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const PrubehTurnaje = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Průběh turnaje</h1></div>
  </div>
)

export default PrubehTurnaje