import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const Turnaj = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Turnaj</h1></div>
  </div>
)

export default Turnaj