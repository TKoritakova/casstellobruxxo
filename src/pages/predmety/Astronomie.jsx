import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import kosmovize from '../../img/utrzky/kosmovize.png';


const Astronomie = () => (
  <div>

    <div className="main-header"><h1>Amazonská astronomie</h1></div>


    <p>Kouzelníci z <span className='text-highlighter'>Castelobruxa</span> věří, že <span className='text-highlighter'>obloha je zrcadlem pralesa</span>.
      Každá hvězda má svůj pozemský protějšek – strom, zvíře nebo ducha. Zatímco mudlové vidí v nebi vzdálené body,
      kouzelníci v něm čtou příběhy. Říkají, že kdo se naučí číst nebe, rozumí i džungli – a kdo naslouchá džungli,
      slyší i hvězdy.</p>

    <p className='text-highlighter text-align-center'>„Nebe se nemění – mění se ten, kdo se dívá.“</p>


    <h2>Kosmovize</h2>
    <hr/>

    <img src={kosmovize} className='img-in-text img-in-text-right'/>

    <p>Nebe není oddělené od světa – je jeho <span className='text-highlighter'>horní vrstvou</span>, říší duchů světla
      (<span className='text-highlighter'>Ivy Mara Eyra</span>). Hvězdy se nepohybují jinak než v mudlovské astronomii,
      ale <span className='text-highlighter'>jejich význam se mění podle dění dole</span>. Každý šaman může vidět jiný
      obraz – nebe odráží duši toho, kdo se dívá. Hvězdy jsou <span className='text-highlighter'>brány, kterými proudí magická energie</span>.
      Ta stéká z nebe do džungle jako déšť a proudí skrze rostliny, řeky i bytosti.</p>

    <h2>Magické proudy a konstelace</h2>
    <hr/>

    <p>Síla magie se mění podle postavení hvězd:</p>

    <ul>
      <li><span className='text-highlighter'>Kouzla vody</span> jsou nejsilnější, když je nad obzorem <span
        className='text-highlighter'>Yara</span> (v mudlovském pojetí Fomalhaut, nejjasnější hvězda souhvězdí Jižní
        ryby).
      </li>
      <li><span className='text-highlighter'>Ochranná kouzla</span> zesiluje světlo <span
        className='text-highlighter'>Boitatá</span> (část souhvězdí Hydra).
      </li>
      <li><span className='text-highlighter'>Lety kanoí</span> jsou klidné, když proudí <span
        className='text-highlighter'>Ybytu Itá</span> („nebeská řeka“, centrum Mléčné dráhy).
      </li>
    </ul>

    <Link className='game-archive-button with-arrow' to="/kanoe" target="_blank" rel="noopener noreferrer">Číst více o
      letech kanoí </Link>


    <h2>Amazonské nebe</h2>
    <hr/>

    <p>Z Amazonie je vidět jiná část hvězdného nebe, než z Evropy:</p>

    <ul>
      <li><span className='text-highlighter'>Kříž čtyř sil</span> (Jižní kříž) – symbol vedení a rovnováhy čtyř živlů.
      </li>
      <li><span className='text-highlighter'>Portas Marã</span> (Magellanova mračna) – brány do jiných světů.</li>
      <li><span className='text-highlighter'>Canopus, Alpha a Beta Centauri</span> – strážci tří říší: nadsvětí, země a
        podsvětí.
      </li>
      <li><span className='text-highlighter'>Oko Sachamamy</span> (Střelec, ve středu galaxie) – bdící duch pralesa.
      </li>
      <li><span className='text-highlighter'>Nebeská kánoe</span> (Carina = Lodní kýl) – Slunce a Země na své cestě do
        snů.
      </li>
    </ul>


    <p className='text-highlighter text-align-center'>„Na severu se řídí jednou hvězdou. My se řídíme celým nebem.“</p>


  </div>
)

export default Astronomie