import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SkolaNav from './SkolaNav'

import skola from '../../img/uvod/skola.png';
import mapa from '../../img/uvod/mapa.png';

const SkolaUvod = () => (
  <div>
    
    <SkolaNav />
    

    <div className="main-header"><h1>Škola</h1></div>


   <p>Škola se nachází přibližně ve středu jihoamerického kontinentu, hluboko v Amazonském pralese.  Všude v okolí jsou plně vzrostlé stromy deštného pralesa, hustý porost a velmi bohatá fauna i flóra. Samotná škola — ostatně stejně jako Bradavice — je pro obyčejného mudlu nenalezitelná, protože na místě, kde se nachází, vidí jenom <span className='text-highlighter'>staré ruiny</span>. Kouzelníci ale mohou vidět <span className='text-highlighter'>zlatý palác</span>, který je architekturou v souladu s přírodou, dokonce je i zapuštěný v okolní džungli. Svým vzhledem také může připomenout <span className='text-highlighter'>mayskou nebo inckou architekturu</span>.</p>


   <img src={skola} className='img-in-text' />
   <img src={mapa}  className='img-in-text'  />
  
  

  

  

  

   


  </div>
)

export default SkolaUvod