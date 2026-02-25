import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SkolaNav from './SkolaNav'

import kanoe_01 from '../../img/zivot_na_skole/kanoe_01.png';
import kanoe_02 from '../../img/zivot_na_skole/kanoe_02.png';

const SkolniRok = () => (
  <div>

    <SkolaNav/>


    <div className="main-header"><h1>Organizace školního roku</h1></div>


    <p>Přestože školy v Brazílii typicky začínají školní rok v únoru, kouzelnická brazilská škola tvoří výjimku. Původně
      fungovala jako <span className='text-highlighter'>výzkumné středisko</span>, a když zde byla zavedena výuka,
      přilákala mnoho nadšenců pro vědu z Latinské Ameriky i Evropy. Ujal se tak <span className='text-highlighter'>evropský formát školního roku</span>,
      s počátkem v září, vánočními prázdninami v prosinci a koncem školního roku v červnu.</p>

    <p>Tento formát školního roku byl zachován napříč staletími i nadále, protože podporuje otevřenost školy vůči světu
      a usnadňuje komunikaci s ostatními výukovými institucemi na poli studentských výměnných pobytů.</p>


    <h2>Odjezd do školy</h2>
    <hr/>

    <p>Odjezd do školy se skládá ze dvou částí; v průběhu několika hodin se v rámci první části všichni studenti
      prostřednictvím <span className='text-highlighter'>přenášedel</span> přepraví na břeh řeky Amazonky. Organizace
      začíná už několik týdnů před odjezdem, kdy je nutné připravit všechna přenášedla. Rodiče – případně starší
      studenti sami – si pak se školou domlouvají jejich poskytnutí i sraz s dalšími studenty z okolí. Přidat do systému
      první ročníky bývá zprvu komplikované, ale pak už se většinově každý rok opakují ověřená místa a skupinky.</p>

    <p>Jakmile dorazí všichni studenti, přichází řada na druhou část: <span className='text-highlighter'>rituální přelet řeky Amazonky</span>.
      Studenti při této příležitosti oblékají své sváteční kroje, někteří se dokonce malují barvami svého kmene.
      Součástí jsou také oslavné písně a zavěšení girlandy z různých květin a listů posvátného stromu na první vozidlo,
      které se studenty vyrazí na cestu.</p>

    <p>Jako dopravní prostředky slouží konkrétně <span className='text-highlighter'>kanoe</span>, tradiční létající
      plavidla Jižní Ameriky. Ty mají bohatou historii a v kouzelnickém světě patří mezi nejstarší formy létání, přičemž
      nejdřívější zmínky o jejich používání sahají až do 1. století. Již domorodí obyvatelé Amazonie je využívali k
      překonávání nehostinného terénu, a v podobném duchu jimi studenti Castelobruxa vplouvají do nového školního roku
      nadějí a vírou, že překonají každou překážku.</p>

    <img src={kanoe_01} className='img-in-text'/>
    <img src={kanoe_02} className='img-in-text'/>

    <Link className='game-archive-button with-arrow' to="/kanoe" target="_blank" rel="noopener noreferrer">Číst
      více o letech kanoí</Link>


  </div>
)

export default SkolniRok