import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'


import aktivita from '../../img/kmeny/nomphyrian/aktivita.png';
import postava from '../../img/kmeny/nomphyrian/postava.png';
import prostory from '../../img/kmeny/nomphyrian/prostory.png';
import uniforma from '../../img/zivot_na_skole/uniformy/nomphyrian.png';

import AlejandroS from '../../img/postavy/alejandro_sanchez.png';
import Kira from '../../img/postavy/kira_soraia_rogrigues.png';
import Melissa from '../../img/postavy/melissa_nayra_de_leon.png';
import Cesar from '../../img/postavy/cesar_jesus_gimenez_castillero.png';
import Juan from '../../img/postavy/juan_miguel_santos_ramirez.jpg';
import Mateo from '../../img/postavy/mateo_benitez.png';
import Yara from '../../img/postavy/yara_monteiro.png';
import Chiara from '../../img/postavy/chiara_antonia_jose.jpg';
import AlejandroN from '../../img/postavy/alejandro_navarro.png';
import KmenyNav from './KmenyNav';


const Nomphyrian = () => (
  <div>

    <KmenyNav/>

    <div className="main-header"><h1>Nomphyrian</h1></div>

    <p>Do kmene Nomphyrian patří studenti, kterým plod ze stromu Umamiri chutná kysele. Přitahuje osobnosti plné emocí a
      vášně. Studenti tohoto kmene bývají empatičtí, přátelští, ale také hrdí a tvrdohlaví. Rychle si získávají oblibu,
      umí se vžít do ostatních a snadno navazují přátelství. Jejich magie se pojí s léčitelstvím, přírodními silami a
      mezilidskými vztahy.</p>

    <img src={postava} className='img-in-text '/>
    <img src={aktivita} className='img-in-text '/>

    <h2>Uniformy</h2>
    <hr/>

    <p>Školní uniformy tohoto kmene, hlavně jejich slavnostní verze, mohou být doplněny o ozdoby, na základě kterých lze
      studenty náležící danému kmeni jednoznačně poznat. Kmenu Nomphyrian náleží fialové a tyrkysové ozdoby.</p>

    <img src={uniforma} className='img-clothes'/>

    <h2>Ubytování</h2>
    <hr/>

    <img src={prostory} className='img-in-text img-in-text-right'/>

    <p>Prostory Nomphyrian se nachází v zahradních pavilonech propojených s menší budovou. Jejich prostory jsou světlé,
      otevřené a plné hudebních nástrojů, tance a rostlin. Namísto postelí tu studenti odpočívají v hamakách zavěšených
      mezi stromy a květinami, často ve skupinách. Mají k dispozici léčivou zahradu i pavilon pro společenskou a léčivou
      magii. Atmosféra jejich prostředí je živá, veselá a přátelská.</p>

    <h2>Studenti</h2>
    <hr/>

    <p className='text-align-center'><i>(Pro školní rok 2007/2008.)</i></p>


    <h3>Pátý ročník</h3>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={AlejandroS} className='img-character'/>
        <p>Alejandro Sánchez</p>
      </div>
      <div className='student-face-card'>
        <img src={Kira} className='img-character'/>
        <p>Kira Soraia Rodrigues</p>
      </div>
      <div className='student-face-card'>
        <img src={Melissa} className='img-character'/>
        <p>Melissa Nayra de León</p>
      </div>

    </div>

    <h3>Šestý ročník</h3>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={Cesar} className='img-character'/>
        <p>César Jesus Giménez Castillero</p>
      </div>
      <div className='student-face-card'>
        <img src={Juan} className='img-character'/>
        <p>Juan Miguel Santos Ramírez</p>
      </div>
      <div className='student-face-card'>
        <img src={Mateo} className='img-character'/>
        <p>Mateo Benítez</p>
      </div>
      <div className='student-face-card'>
        <img src={Yara} className='img-character'/>
        <p>Yara Monteiro</p>
      </div>
    </div>

    <h3>Sedmý ročník</h3>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={Chiara} className='img-character'/>
        <p>Chiara Antonia José</p>
      </div>
      <div className='student-face-card'>
        <img src={AlejandroN} className='img-character'/>
        <p>Alejandro Navarro</p>
      </div>

    </div>


  </div>
)

export default Nomphyrian