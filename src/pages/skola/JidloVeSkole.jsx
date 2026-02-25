import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SkolaNav from './SkolaNav'

import jidlo_01 from '../../img/zivot_na_skole/jidlo_01.png';
import jidlo_02 from '../../img/zivot_na_skole/jidlo_02.png';

const JidloVeSkole = () => (
  <div>

    <SkolaNav/>


    <div className="main-header"><h1>Školní stravováníu</h1></div>


    <p>Školní stravování v Castelobruxu je velmi <span className='text-highlighter'>pestré a barevné</span>. Den
      začíná <span className='text-highlighter'>snídaní</span>, která se podává mezi sedmou a osmou hodinou ranní.
      Studenti mají možnost ve <span className='text-highlighter'>společenských prostorách</span> svých kmenů nalézt
      široký výběr čerstvého tropického ovoce, tradičního pečiva a sýrů. Nechybí ani pão de queijo, tapiokové palačinky,
      yerba maté či silná brazilská káva pro starší studenty. Snídaně probíhá v uvolněné atmosféře a je složena převážně
      z <span className='text-highlighter'>tradičnějších pokrmů</span>, nicméně některé dny lze nalézt i více
      severoamerická či evropská snídaňová jídla.</p>

    <p><span className='text-highlighter'>Oběd je hlavním jídlem dne</span> a podává se od dvanácti do půl druhé.
      Studenti se opět stravují po kmenech, ačkoliv mohou být dny, kdy jsou obědy organizovány společně – zejména pokud
      probíhá slavnostní hostina. Na stolech bývá rýže, fazole, maniok a nejrůznější druhy masa či ryb. Tradičním
      pokrmem je <span className='text-highlighter'>feijoada</span>, která se v jídelně objevuje pravidelně, ale nikdy
      nechybí ani <span className='text-highlighter'>vegetariánské varianty</span> založené na luštěninách a zelenině.
      Ani obědy se vlivům z jiných kontinentů občas nevyhnou, takže je možné narazit na hamburger nebo pizzu.</p>

    <img src={jidlo_01} className='img-in-text'/>
    <img src={jidlo_02} className='img-in-text'/>

    <p><span className='text-highlighter'>Večeře se považuje za společenský vrchol dne</span> a nese se v mnohem
      slavnostnějším duchu než snídaně a oběd. Celá škola usedá k dlouhým stolům a podávají se jídla inspirovaná různými
      částmi Brazílie a Latinské Ameriky – od amazonských rybích specialit přes baíaňské pokrmy s kokosovým mlékem,
      tacos, paellu, empanadas nebo tamales, až po churrasco, velké kusy masa otáčené na kouzelných rožních. Vedle
      tradičně masitých jídel jsou běžně nabízeny i ryby, vegetariánské a veganské varianty a díky hojnosti manioku a
      tapioky také bezlepková jídla. <span className='text-highlighter'>Do večeří se tolik nepromítají vlivy z jiných kontinentů.</span>
    </p>

    <p>Součástí večeře bývají i sladkosti – především brigadeiro, churros, ovoce, ale i další. Atmosféru doplňují
      poletující světelné lucerny, hudba a častý smích. Výjimkou nejsou ani spontánní taneční vložky, zejména o
      víkendech.</p>

    <p>Mezi jídly si studenti mohou vyzvednout <span className='text-highlighter'>svačinky v bufetu</span> poblíž
      kuchyně. Tam je navíc připraveno i mnoho druhů nápojů, takže ani nejnáročnější studenti nemají výmluvu proč
      nedodržovat pitný režim. <span className='text-highlighter'>Stravování v Castelobruxu odráží pestrost brazilské a latino kultury a propojení školy s pralesem a jeho dary.</span> Jídlo
      je kvalitní, čerstvé a chutné.</p>

    <Link className='game-archive-button with-arrow' to="/jidlo" target="_blank" rel="noopener noreferrer">Číst
      více o jihoamerickém stravování</Link>


  </div>
)

export default JidloVeSkole