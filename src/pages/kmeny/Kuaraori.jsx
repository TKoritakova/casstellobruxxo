import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import aktivita from '../../img/kmeny/kuaraori/aktivita.png';
import postava from '../../img/kmeny/kuaraori/postava.png';
import prostory from '../../img/kmeny/kuaraori/prostory.png';
import uniforma from '../../img/zivot_na_skole/uniformy/kuaraori.png';
import Luana from '../../img/postavy/luana_mariana_almeida_soares.jpg';
import Ines from '../../img/postavy/ines_soraya_caro.jpg';
import Sofia from '../../img/postavy/sofia_amarilis_perez.png';
import Mikkel from '../../img/postavy/mikel_ancco_de_leon.png';
import Quintin from '../../img/postavy/quintin_argimiro_merlo.jpg';


import KmenyNav from './KmenyNav';

import GenGirl from '../../img/postavy/generic_girl.png';
import GenBoy from '../../img/postavy/generic_boy.png';


const Kuaraori = () => (
  <div>

    <KmenyNav/>

    <div className="main-header"><h1>Kuaraori</h1></div>

    <p>Do kmene Kuaraori patří studenti, kterým plod ze stromu Umamiri chutná hořce. Tito studenti mají silně vyvinutý
      smysl pro introspekci a vnitřní svět. Jsou to samotáři, kteří čerpají sílu ze sebekázně, ticha a pozorování.
      Jejich magie bývá hluboká, emocionálně náročná a často směřuje k oblastem, jako jsou stará zaklínadla, rituální
      magie nebo práce se sny a podvědomím.</p>

    <img src={postava} className='img-in-text '/>
    <img src={aktivita} className='img-in-text '/>

    <h2>Uniformy</h2>
    <hr/>

    <p>Školní uniformy tohoto kmene, hlavně jejich slavnostní verze, mohou být doplněny o ozdoby, na základě kterých lze
      studenty náležící danému kmeni jednoznačně poznat. Kuaraori náleží žluté a oranžové ozdoby.</p>

    <img src={uniforma} className='img-clothes'/>

    <h2>Ubytování</h2>
    <hr/>

    <img src={prostory} className='img-in-text img-in-text-right'/>

    <p>Kmen Kuaraori má své zázemí v podzemních částech školy, kde prorůstají mohutné kořeny pralesních stromů. Jejich
      prostory jsou potemnělé, porostlé mechem a osvětlené pouze bioluminiscenčními houbami. Ložnice připomínají malé
      nory oddělené liánami a kouzelně odhlučněné, aby poskytovaly klid k introspekci. Tento kmen má i svou „jeskyni
      snů“, sloužící k meditacím a rituálům. Prostředí je tajemné a zaměřené na duchovní hloubku.</p>

    <h2>Studenti</h2>
    <hr/>

    <p className='text-align-center'><i>(Pro školní rok 2008/2009.)</i></p>


    <h3>Šestý ročník</h3>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={Ines} className='img-character'/>
        <p>Inés Soraya Caro</p>
      </div>
      <div className='student-face-card'>
        <img src={Mikkel} className='img-character'/>
        <p>Mikel Ancco de León</p>
      </div>
      <div className='student-face-card'>
        <img src={GenBoy} className='img-character'/>
        <p>Sebastian José</p>
      </div>
      <div className='student-face-card'>
        <img src={Sofia} className='img-character'/>
        <p>Sofia Amarilis Perez</p>
      </div>
      <div className='student-face-card'>
        <img src={Quintin} className='img-character'/>
        <p>Quintín Argimiro Merlo</p>
      </div>

    </div>


    <h3>Sedmý ročník</h3>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={GenBoy} className='img-character'/>
        <p>Christian José</p>
      </div>
      <div className='student-face-card'>
        <img src={Luana} className='img-character'/>
        <p>Luana Mariana Almeida Soares</p>
      </div>

    </div>


  </div>
)

export default Kuaraori