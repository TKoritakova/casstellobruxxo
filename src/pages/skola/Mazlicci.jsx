import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SkolaNav from './SkolaNav'

import mazlicek_opice from '../../img/zivot_na_skole/mazlicek_opice.png';
import mazlicek_zaba from '../../img/zivot_na_skole/mazlicek_zaba.png';

const Mazlicci = () => (
  <div>
    
    <SkolaNav />
    

    <div className="main-header"><h1>Mazlíčci ve škole</h1></div>

  
  <p>Počet mazlíčků je ve škole přísně omezen – každý student může mít <span className='text-highlighter'>maximálně dva</span>. Tento limit umožňuje, aby mazlíček měl zvířecího společníka, případně aby student vlastnil například sovu a jiného tvora současně. Jakékoliv výjimky, ať už co do počtu, nebo co do druhu zvířete, u něhož by bylo sporné, zda lze považovat za školního mazlíčka, je nutné předem projednat s vedením školy.</p>

  <p>Povolují se tradičně chovaná zvířata lidmi žijícími v domech, jelikož se nehodí, aby se chodbami školy proháněla divoká zvířata či stáda skotu. Přípustná jsou zvířata v teráriích a akváriích jako <span className='text-highlighter'>rybičky</span>, <span className='text-highlighter'>žáby</span>, <span className='text-highlighter'>drobní ještěři</span>, <span className='text-highlighter'>želvy</span> a <span className='text-highlighter'>nejedovatí pavouci či hadi</span> do dvou metrů. Terária a akvária by ideálně neměla příliš přesahovat velikost psacích stolů a jejich rozměry je možno debatovat s kmenovým vedením. Co se drobných savců a ptactva týče, přípustné jsou domestikované <span className='text-highlighter'>kočky</span>, <span className='text-highlighter'>papoušci</span>, <span className='text-highlighter'>hlodavci</span> (včetně kluběnek), <span className='text-highlighter'>ježci</span> a <span className='text-highlighter'>malé opičky</span>.</p>


  <img src={mazlicek_zaba} className='img-in-text' />
  <img src={mazlicek_opice} className='img-in-text' />

  <p>U všech mazlíčků je požadována jejich poslušnost a záruka majitele, že mazlíček nebude nijak narušovat chod školy a výuky na ní. Při opakovaných porušeních dochází k volání rodičům a posílání mazlíčků domů, při extrémních situacích ke kárným trestům. Škola je v tomto poměrně nekompromisní, jelikož si přeje <span className='text-highlighter'>eliminovat kontakt studentů s nebezpečnými tvory</span> bez dospělého dozoru a potřebné průpravy, kterou na tyto interakce výuka poskytuje.</p>
  
   
  



   


  </div>
)

export default Mazlicci