import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import MagieNav from './MagieNav'

import halucinace from '../../img/utrzky/halucinace.png';


const Halucinace = () => (
  <div>

    <MagieNav/>


    <div className="main-header"><h1>Halucinace a vnitřní vize</h1></div>

    <p>Zatímco magie smyslů obrací pozornost k vnějšímu světu, <span className='text-highlighter'>umění halucinací směřuje hluboko do nitra</span>.
      Na Castelobruxu se toto odvětví nepovažuje za pouhé mámení smyslů, ale za <span className='text-highlighter'>nástroj k poznání pravdy</span>,
      která se skrývá pod povrchem všední reality.</p>

    <h2>Cesta do sebe sama</h2>
    <hr/>

    <p>Kouzelníci využívají halucinogenní vývary a rituální vykuřovadla k navození stavů, které umožňují <span
      className='text-highlighter'>pracovat s vlastní myslí</span>. Tyto řízené halucinace slouží k:</p>

    <ul>
      <li><span className='text-highlighter'>Průzkumu blokád:</span> Identifikace míst, kde v těle neplyne magická
        energie kvůli potlačeným emocím nebo strachu.
      </li>
      <li><span className='text-highlighter'>Hypnóze a snění:</span> Navození snů s konkrétními symboly, které pomáhají
        řešit složité magické problémy.
      </li>
      <li><span className='text-highlighter'>Rekonstrukci paměti:</span> Procházení vlastních, i dávno zapomenutých
        vzpomínek s naprostou jasností.
      </li>
    </ul>

    <h2>Magické oleje a intoxikace</h2>
    <hr/>

    <img src={halucinace} className='img-in-text img-in-text-right'/>

    <p>K práci s halucinacemi se využívají <span className='text-highlighter'>specifické oleje a esence</span>. Aplikací
      na lymfatické uzliny může kouzelník ovlivnit <span className='text-highlighter'>nejen sebe, ale i své nejbližší okolí</span>.
      Správné složení olejů dokáže například:</p>

    <ul>
      <li><span className='text-highlighter'>Změnit vnímání tvorů:</span> Odpuzovat nebezpečný hmyz nebo naopak
        přitahovat určité druhy ptactva a motýlů, kteří reagují na magickou stopu esence.
      </li>
      <li><span className='text-highlighter'>Navodit vizi u druhého:</span> Silnější formy této magie dokážou přimět
        jiného člověka či tvora vidět věci, které kolem nejsou. Aby však taková halucinace byla stabilní, musí být látka
        většinou pozřena nebo vpravena přímo do krve.
      </li>
    </ul>


    <h2>Etika vizí</h2>
    <hr/>

    <p>Na Castelobruxu se klade důraz na to, aby tyto praktiky <span className='text-highlighter'>nebyly zneužívány k poškozování ostatních</span>.
      Halucinace mají být <span className='text-highlighter'>mostem k pochopení</span> – k pochopení vlastních stínů,
      ambicí i okolního ekosystému. Je to umění intoxikace organismu, které vyžaduje pevnou vůli a hluboké znalosti, aby
      se <span className='text-highlighter'>kouzelník ve svých vizích neztratil</span>.</p>


  </div>
)

export default Halucinace