import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PredmetyNav from './PredmetyNav'

const Subjects = () => (
  <div>
    <PredmetyNav />
   
    
    <div className="main-header"><h1>Výuka na Castelobruxu</h1></div>

    <p>Učební plány školy jsou rozděleny do čtyř hlavních bloků: hlavní oborové, vedlejší oborové, vedlejší volitelné předměty a povinný terénní výcvik. Toto členění studentům poskytuje vyvážené rozložení studia a zároveň je podrobuje náročnému procesu, jehož cílem je co nejkomplexnější připravenost na život v kouzelnické komunitě.</p>

    <p><span className='text-highlighter'>Stupnice známkování:</span></p>
    <ul>
      <li>Dechberoucí</li>
      <li>Uspokojivé</li>
      <li>Průměrné</li>
      <li>Podprůměrné</li>
      <li>Příšerné</li>
      <li>Katastrofické</li>
    </ul>
    

    <p>V případě, že student na konci roku získá z hlavních oborových předmětů známku Příšerná a Katastrofická, musí daný předmět opravit. V případě, že se mu to nepodaří, není jiné možnosti než ho vyloučit. Hlavní oborové předměty jsou povinné a trvají sedm let.</p>

    <p>U vedlejších oborových a vedlejších volitelných předmětů je možnost opravit předmět a v případě neúspěšné opravy jej i opakovat.</p>

   
      
        






  </div>
)

export default Subjects