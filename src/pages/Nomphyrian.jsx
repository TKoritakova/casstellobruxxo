import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import alejandrosanchez from '../img/characters/alejandrosanchez.png';

const Nomphyrian = () => (
  <div>
    
    <nav className="second-nav">
        <Link to="/casstellobruxxo/arashar">Arashar</Link>
        <Link to="/casstellobruxxo/kuaraori">Kuaraori</Link>
        <Link to="/casstellobruxxo/nomphyrian">Nomphyrian</Link>
        <Link to="/casstellobruxxo/pawanunga">Pawanunga</Link>
    </nav>

    <div className="main-header"><h1>Nomphyrian</h1></div>

    <h2>Úvod</h2>

    <h2>Uniformy</h2>

    <h2>Ubytování</h2>

    <p>Prostory Nomphyrian se nachází v zahradních pavilonech propojených s menší budovou. Jejich prostory jsou světlé, otevřené a plné hudebních nástrojů, tance a rostlin. Namísto postelí tu studenti odpočívají v hamakách zavěšených mezi stromy a květinami, často ve skupinách. Mají k dispozici léčivou zahradu i pavilon pro společenskou a léčivou magii. Atmosféra jejich prostředí je živá, veselá a přátelská.</p>

    <h2>Studenti</h2>

    <p>
        <i>(Pro školní rok 2007/2008.)</i><br />


        <span className='text-highlighter'>5. ročník</span><br />
            <img src={alejandrosanchez} className="img-char" style={{ width: '100px' }} /><br />
            Alejandro Sánchez<br />

            Kira Soraia Rodrigues	
            Melissa Nayra de León	

        <span className='text-highlighter'>6. ročník</span>
            César Jesus Giménez Castillero
            Juan Miguel Santos Ramírez
            Mateo Benítez
            Yara Monteiro

        <span className='text-highlighter'>7. ročník</span>
            Chiara Antonia José
            Alejandro Navarro
    </p>




  </div>
)

export default Nomphyrian