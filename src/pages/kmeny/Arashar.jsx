import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import aktivita from '../../img/kmeny/arashar/aktivita.png';
import postava from '../../img/kmeny/arashar/postava.png';
import prostory from '../../img/kmeny/arashar/prostory.png';
import uniforma from '../../img/zivot_na_skole/uniformy/arashar.png';
import Luan from '../../img/postavy/luan_caetanno.png';
import Catriel from '../../img/postavy/catriel_ulises_condori.png';
import KmenyNav from './KmenyNav';

const Arashar = () => (
  <div>
    <KmenyNav />

    <div className="main-header"><h1>Arashar</h1></div>

    <p>Do kmene Arashar patří studenti, kterým plod ze stromu Umamiri chutná sladce. Tito studenti bývají zvídaví, učenliví a zaměření na hlubší pochopení magie samotné. Často se věnují oborům jako jsou magická historie, teorie kouzel nebo alchymie. Jejich myšlení je strukturované, milují poznání a experimentování. V komunitě jsou považováni za přirozené vizionáře.</p>

    <img src={postava} className='img-in-text ' />
    <img src={aktivita} className='img-in-text ' />

    <h2>Uniformy</h2>
    <hr />

    <p>Školní uniformy tohoto kmene, hlavně jejich slavnostní verze, mohou být doplněny o ozdoby, na základě kterých lze studenty náležící danému kmeni jednoznačně poznat. Arasharu náleží růžové a zelené ozdoby.</p>

    <img src={uniforma} className='img-clothes' />

    <h2>Ubytování</h2>
    <hr />

    <img src={prostory} className='img-in-text img-in-text-right' />

    <p>Kmen Arashar sídlí ve vyšších patrech hlavní budovy. Jejich prostory zdobí reliéfy hvězd a historických symbolů a světlo sem proniká přes barevná sklíčka, která vrhají duhové obrazce. Studenti spí v menších oddělených zónách a mají k dispozici alchymistickou laboratoř i observatoř, jejíž strop se otevírá k hvězdám. Prostředí je tiché a studijní, ideální pro teoretiky a experimentátory.</p>

    <h2>Studenti</h2>
    <hr />
 
    <p className='text-align-center'><i>(Pro školní rok 2007/2008.)</i></p>

    
        <h3>Pátý ročník</h3>
        <div className='face-cards-wrapper'>
          <div className='student-face-card'>
            <img src={Catriel} className='img-character' />  
            <p>Catriel Ulises Condori</p>
          </div>   

        </div>
        
            

        <h3>Šestý ročník</h3>
        <div className='face-cards-wrapper'>
          <div className='student-face-card'>
            <img src={Luan} className='img-character' />  
            <p>Luan Caetanno</p>
          </div>

        </div>

        
         


        





  </div>
)

export default Arashar