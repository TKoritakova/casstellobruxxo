import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SkolaNav from './SkolaNav'
import prostory_01 from "../../img/zivot_na_skole/prostory_01.png";
import prostory_02 from "../../img/zivot_na_skole/prostory_02.png";


const Prostory = () => (
  <div>

    <SkolaNav/>


    <div className="main-header"><h1>Prostory školy</h1></div>

    <h2>Prostory a prostředí školy</h2>
    <hr/>

    <img src={prostory_01} className='img-in-text img-in-text-right'/>

    <p>Zvenčí škola připomíná rozpadlou pyramidu zarostlou džunglí. Pro mudly působí jako trosky, zatímco kouzelníci
      vidí živý komplex plný magie. Interiér propojuje kamennou architekturu s divokou přírodou. Chodby prorůstají <span
        className='text-highlighter'>liány</span>, stěny zdobí <span
        className='text-highlighter'>pohyblivé fresky</span> a velká síň je otevřený pavilon se stropem z větví
      ukazujících hvězdnou oblohu nebo aktuální počasí. <span className='text-highlighter'>Učebny se často nacházejí venku.</span> Například
      na terasách, v altáncích, v jeskyních nebo ve sklenících.</p>

    <img src={prostory_02} className='img-in-text img-in-text-left'/>

    <p>Komplex se skládá ze <span className='text-highlighter'>dvou hlavních budov</span> a několika <span
      className='text-highlighter'>pavilonů</span>. Větší budova slouží jako zázemí pro ubytování studentů a rozděluje
      je podle kmenů. Menší budova je centrem každodenního života. Jsou zde učebny, společenské prostory, kuchyně i sál
      pro slavnosti. Celý areál propojují kamenné cesty, které se v noci rozsvěcují bioluminiscenčním světlem. V okolí
      se navíc nacházejí výběhy pro magická zvířata, další skleníky a jeskyně určené pro rituální magii.</p>

    <h2>Bydlení</h2>
    <hr/>

    <p>Studenti v Castelobruxu jsou <span className='text-highlighter'>rozděleni dle své kmenové příslušnosti</span>,
      každý kmen má vyhrazené vlastní prostory v hlavní budově. <span className='text-highlighter'>Ložnice se dále dělí podle ročníků</span>,
      aby mladší měli prostor pro seznamování a starší více klidu pro vlastní rozvoj. Brazilská mentalita klade důraz
      spíše na soudržnost kmene než na přísné dělení podle pohlaví, a proto spolu <span className='text-highlighter'>chlapci a dívky sdílejí stejné prostory</span>.
      Ty mohou mít podobu velkých společných sálů s hamakami a lehátky, menších kójí pro několik jedinců stejného
      pohlaví, nebo samostatných nesdílených místností pro studenty se zvláštními potřebami. Větší soukromí zajišťují
      mimo jiné <span className='text-highlighter'>kouzelné závěsy a liány</span>, které reagují na potřebu uzavřít
      prostor kolem jednotlivce.</p>


  </div>
)

export default Prostory