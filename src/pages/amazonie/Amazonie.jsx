import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AmazonieNav from './AmazonieNav'

import predkove from '../../img/uvod/predkove.png';
import respekt from '../../img/uvod/respekt.png';
import priroda from '../../img/uvod/priroda.png';


import kouzla_castelo from '../../img/uvod/kouzla_castelo.png';
import kouzla_evropa from '../../img/uvod/kouzla_evropa.png';


const Amazonie = () => (
  <div>

    <AmazonieNav/>


    <div className="main-header"><h1>Oblast Amazonie</h1></div>


    <p>Vzhledem k tomu, že místní lidé vyrůstali nebo vyrůstají v odlišných podmínkách, mají také úplně jiný přístup ke
      světu. Oproti Evropanům bývají často více zaměření na <span className='text-highlighter'>kolektiv</span>, více
      řeší <span className='text-highlighter'>úctu ke starším a k mrtvým</span> — s čímž se pojí i šamanství a uctívání
      duchů, jsou <span className='text-highlighter'>otevřenější a přímější v komunikaci</span> nebo mají přirozenější
      vztah k nebezpečí, se kterým se setkávají v přírodě na denní bázi. Většinu strachu tak mají nahrazenou <span
        className='text-highlighter'>přirozeným respektem a intuicí</span> a znalostí, jak v situacích reagovat.</p>


    <img src={predkove} className='img-in-text'/>
    <img src={respekt} className='img-in-text'/>


    <h2>Přístup k magii</h2>
    <hr/>

    <p>S tím souvisí i samotné vnímání magie. V Castelobruxu se neučí kouzla stoprocentně striktně (přesné zaklínadlo,
      přesná inkantace), ale více otevřeně. Při kouzlení dávají větší důraz na <span className='text-highlighter'>myšlenky, vůli, moralitu</span> daného
      kouzla a samotné <span className='text-highlighter'>souznění s přírodou</span>. Většina kouzel tak využívá prvky
      okolní přírody a pracuje s ní. Samozřejmě se zde v poslední době hojně rozšířila i kouzla, která jsou běžně známá
      a používána v Evropě.</p>

    <Link className='game-archive-button with-arrow' to="/magie" target="_blank" rel="noopener noreferrer">Číst
      více o castelobrušské magii</Link>

    <img src={kouzla_castelo} className='img-in-text'/>
    <img src={kouzla_evropa} className='img-in-text'/>

    <p>Samotný přístup k přírodě je pro místní taktéž velmi důležitý. Je velmi přirozená její ochrana, sounáležitost s
      ní nebo i <span
        className='text-highlighter'>maximální využití přírodních zdrojů bez zbytečného plýtvání</span> nebo ničení.</p>

    <img src={priroda} className='img-in-text'/>


  </div>
)

export default Amazonie