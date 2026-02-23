import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import aktivita from '../../img/kmeny/pawanunga/aktivita.png';
import postava from '../../img/kmeny/pawanunga/postava.png';
import prostory from '../../img/kmeny/pawanunga/prostory.png';
import uniforma from '../../img/zivot_na_skole/uniformy/pawanunga.png';
import Lucia from '../../img/postavy/lucia_juliana_navarro.png';
import Sofia from '../../img/postavy/sofia_sanchez.png';
import Yara from '../../img/postavy/yara_quetzal_do_sol.png';
import Gabriel from '../../img/postavy/gabriel_sebastian_almeida_soares.jpg';
import KmenyNav from './KmenyNav';

const Pawanunga = () => (
  <div>
    
    <KmenyNav />

    <div className="main-header"><h1>Pawanunga</h1></div>

    <p>Do kmene Pawanunga patří studenti, kterým plod ze stromu Umamiri chutná slaně. Sdružuje studenty prakticky založené, kteří si cení efektivity, disciplíny a silné vůle. Jsou to budoucí obránci magického světa — výborní v obranné magii, tvorbě ochranných artefaktů nebo práci se složitými rituály. Bývají přímí, často přísní, ale vždy loajální.</p>

    <img src={postava} className='img-in-text ' />
    <img src={aktivita} className='img-in-text ' />

    <h2>Uniformy</h2>
    <hr />

    <p>Školní uniformy tohoto kmene, hlavně jejich slavnostní verze, mohou být doplněny o ozdoby, na základě kterých lze studenty náležící danému kmeni jednoznačně poznat. Kuaraori náleží hnědé a červené ozdoby.</p>
        
    <img src={uniforma} className='img-clothes' />

    <h2>Ubytování</h2>
    <hr />

    <img src={prostory} className='img-in-text img-in-text-right' />

    <p>Kmen Pawanunga obývá spodní patra hlavní budovy, nedaleko výcvikových pavilonů. Jejich síně působí stroze a účelně, na podlahách jsou vyznačeny rituální kruhy a lůžka tvoří kovové postele rozdělené podle ročníků. Kmen má vlastní dvůr určený k tréninku obranné a útočné magie, jehož zdi pokrývají štíty a ochranné totemy. Atmosféra je disciplinovaná a vojensky laděná.</p>

    <h2>Studenti</h2>
    <hr />

    <p className='text-align-center'><i>(Pro školní rok 2007/2008.)</i></p>
        
            
          <h3>Pátý ročník</h3>
          <div className='face-cards-wrapper'>
            <div className='student-face-card'>
              <img src={Lucia} className='img-character' />  
              <p>Lucia Juliana Navarro</p>
            </div>   
            <div className='student-face-card'>
              <img src={Sofia} className='img-character' />  
              <p>Sofía Sánchez</p>
            </div>   
    
          </div>

          <h3>Šestý ročník</h3>
          <div className='face-cards-wrapper'>
            <div className='student-face-card'>
              <img src={Yara} className='img-character' />  
              <p>Yara Quetzal do Sol</p>
            </div>     
    
          </div>

          <h3>Sedmý ročník</h3>
          <div className='face-cards-wrapper'>
            <div className='student-face-card'>
              <img src={Gabriel} className='img-character' />  
              <p>Gabriel Sebastian Almeida Soares</p>
            </div>   
     
    
          </div>



  </div>
)

export default Pawanunga