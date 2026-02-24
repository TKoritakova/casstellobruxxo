import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AmazonieNav from './AmazonieNav'

import hulka_01 from '../../img/zivot_na_skole/hulka_01.png';
import hulka_02 from '../../img/zivot_na_skole/hulka_02.png';

const Amazonie = () => (
  <div>
    
    <AmazonieNav />
    

    <div className="main-header"><h1>Tradiční hůlky</h1></div>

  
  <p>V Latinské Americe je mnoho různých výrobců hůlek, díky čemuž studenti přichází do školy s velmi širokou škálou použitých dřev i jader. Obecně se dá říci, že hůlky z této oblasti jsou <span className='text-highlighter'>zdobenější</span> než britské a každý výrobce jako umělec předává hůlce něco ze sebe samého. Mezi nejčastější <span className='text-highlighter'>dřeva</span> používaná v oblasti Latinské Ameriky však patří:</p>

  <ul>
    <li><span className='text-highlighter'>Ceiba</span>, posvátný strom Mayů a Aztéků – symbol propojení světa lidí, bohů a mrtvých. Hůlky z ceiby bývají silně duchovní, často si je volí kouzelníci zaměření na rituální magii či hlubší spojení s pralesem.</li>
    <li><span className='text-highlighter'>Pau-brasil</span>, brazilwood – národní strom Brazílie. Hůlky s tímto dřevem oplývají energií a vitalitou, výborné pro léčitelství a bylinkářství.</li>
    <li><span className='text-highlighter'>Mahagon</span> – rozšířený po celé latinské americe. Tvoří silné, spolehlivé hůlky vhodné pro ochranná kouzla a přeměňování.</li>
    <li><span className='text-highlighter'>Ipe, lapacho</span>, „železné dřevo“ – neuvěřitelně tvrdé dřevo, známé i z And. Hůlky z něj jsou odolné, vyhledávané kouzelníky, kteří si nikdy nevolí jednoduchou cestu. Vhodné jsou pro útočná kouzla.</li>
    <li><span className='text-highlighter'>Jacaranda</span> – elegantní, citlivé dřevo, oblíbené u umělců, kouzelníků s talentem na jemnou a iluzorní magii a pro komunikaci s kouzelnými tvory.</li>
    <li><span className='text-highlighter'>Quina</span>, chinovník - strom typický pro Andy. Hůlky z jeho dřeva jsou spojeny s léčením nemocí, obranou proti černé magii a přežitím – bývají tradiční mezi čaroději z andských zemí.</li>
    <li><span className='text-highlighter'>Guayacán</span>, lignum vitae – jedno z nejtvrdších dřev na světě, rozšířené v Karibiku a na severu Jižní Ameriky. Hůlky jsou extrémně odolné a „pomalé“ – nehodí se pro každého, ale v rukou trpělivého kouzelníka mají ohromnou sílu. Vhodné jsou pro kouzelníky vyrábějící artefakty a pro přeměňování.</li>
  </ul>


  <p>Většina <span className='text-highlighter'>hůlkových jader</span> známých z evropských poměrů se v Latinské Americe používá spíše zřídka a ustupují tak jádrům z místních kouzelných tvorů. Časté zde jsou tyto typy jader:</p>

  <ul>
    <li><span className='text-highlighter'>Dračí jádra</span> – obdobně jako v Evropě se využívají části těl draků, konkrétně brazilských bahenních, kteří jsou v Amazonii doma. Místo srdečních blan se dává přednost jejich šupinám, trnům a zubům. Většinově se jedná o temperamentnější a po zkrocení silné hůlky hodící se například na kouzla z oboru obrany proti černé magii.</li>
    <li><span className='text-highlighter'>Jádro z blány křídla vřetenky krvavé</span> – hůlky s tímto jádrem bývají velmi silné, ale také nevyzpytatelné. Zprvu se často brání ovládnutí. Jakmile je však spojení navázáno, hůlky vynikají mimořádnou vytrvalostí a schopností čerpat sílu i v podmínkách, kde jiné hůlky selhávají. Jsou zvlášť ceněné kouzelníky, kteří se zaměřují na obrannou a ochrannou magii, neboť jejich kouzla mají tendenci pronikat i skrze odolné bariéry.</li>
    <li><span className='text-highlighter'>Jádro z tykadla kovopláště</span> – hůlky s tímto jádrem jsou výjimečně odolné a trvanlivé, jen zřídkakdy se lámou či ztrácejí svou sílu. Jejich největší předností je stabilita: excelují v kouzlech s dlouhodobým účinkem, zejména v obraně a léčitelství. Naopak nebývají tak hbité a nehodí se tolik pro rychlé, impulzivní čarování – vyžadují spíše trpělivost a soustředění.</li>
    <li><span className='text-highlighter'>Jádro ze srsti zvonohlídka</span> – zavděčí se začátečníkům v kouzelnickém světě, snadno se podřídí kouzelníkově vůli, je vhodné pro každodenní formule či rutinní péči o rostliny a tvory, nutně se však nehodí na manipulaci s většími masami magické síly a obecně pro mocnější kouzla.</li>
  </ul>

 
  <img src={hulka_01} className='img-in-text' />
  <img src={hulka_02} className='img-in-text' />

    
    
    


   


  </div>
)

export default Amazonie