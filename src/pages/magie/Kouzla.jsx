import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MagieNav from './MagieNav'

import aegis_persona from '../../img/kouzla/aegis_persona.png';
import anima_verde from '../../img/kouzla/anima_verde.png';
import aprimor from '../../img/kouzla/aprimor.png';
import chamado_raiz from '../../img/kouzla/chamado_raiz.png';
import folhagem_mensageira from '../../img/kouzla/folhagem_mensageira.png';
import raizes_vivas from '../../img/kouzla/raizes_vivas.png';

const Kouzla = () => (
  <div>
    
    <MagieNav />
    

    <div className="main-header"><h1>Castelobruxská kouzla</h1></div>

    <h3>Raízes Viva</h3>
    <img src={raizes_vivas} className='img-spell' />

    <p><i>„živé kořeny“</i><br/>
    <span className='text-highlighter'>Formule:</span> RA-di-KÁ-tus<br/>
    <span className='text-highlighter'>Pohyb hůlkou:</span> spirálovité stočení hůlky směrem ke kořenům a trhnutí vpřed směrem k cíli.<br/>
    <span className='text-highlighter'>Efekt:</span> Kořeny reagují na vůli kouzelníka: mohou uvěznit nohy nepřítele, vytvořit překážku, improvizovaný most nebo ochrannou bariéru. Účinek závisí na představivosti a napojení na přírodu.</p>

<h3>Aegis Persona</h3>
<img src={aegis_persona} className='img-spell' />
<p><i>„ochrana jedince“</i><br/>
<span className='text-highlighter'>Formule:</span> É-gis per-ZÓ-na<br/>
<span className='text-highlighter'>Pohyb hůlkou:</span> Jednoduchý obloukový pohyb směrem k chráněné osobě.<br/>
<span className='text-highlighter'>Efekt:</span> Vytvoří ochranný štít kolem vybrané osoby, který pohltí následující útok na ni směřovaný.</p>


<h3>Chamado Raiz</h3>
<img src={chamado_raiz} className='img-spell' />
<p><i>„volání kořenů“</i><br/>
<span className='text-highlighter'>Formule:</span> É-co-ris<br/>
<span className='text-highlighter'>Pohyb hůlkou:</span> Jemné ťuknutí hůlkou o zem.<br/>
<span className='text-highlighter'>Efekt:</span> Vysílá skrze půdu slabé vibrace, které vycvičený spojenec cítí jako pulz v chodidlech a podle jejich rytmu pozná směr i vzdálenost volajícího.</p>

<h3>Anima Verde</h3>
<img src={anima_verde} className='img-spell' />
<p><i>„zelený dech/duše“</i><br/>
<span className='text-highlighter'>Formule:</span> ani-VE-ra<br/>
<span className='text-highlighter'>Pohyb hůlkou:</span> Jemný půlkruh odspodu nahoru, zakončený lehkým nadechnutím při seslání (sesilatel často podvědomě následuje gestem svůj vlastní dech).<br/>
<span className='text-highlighter'>Efekt:</span> Cíli se uvolní dýchací cesty a jeho plíce se naplní pocitem čerstvého lesního vzduchu. Účinek je pozvolný a dlouhodobý – zlepšuje průchodnost dýchacích cest a vitalitu při námaze.</p>

<h3>Aprimor</h3>
<img src={aprimor} className='img-spell' />
<p><i>„zaostři“</i>
<span className='text-highlighter'>Formule:</span> A-PRI-mor [Visar / Escutar / Cheirar / Provar / Tocar / Sentir]<br/>
<span className='text-highlighter'>Efekt:</span> Vybraný smysl se výrazně zesílí, zatímco ostatní se dočasně utlumí.<br/>
<span className='text-highlighter'>Poznámka:</span> Přestimulování smyslu může způsobit dezorientaci, bolest nebo šok.</p>

<ul>
    <li><span className='text-highlighter'>Visar:</span> Zrak zachytí i sebemenší pohyb ve tmě.</li>
    <li><span className='text-highlighter'>Escutar:</span> Sluch vnímá vzdálené kroky či ozvěny.</li>
    <li><span className='text-highlighter'>Cheirar:</span> Čich rozpozná jednotlivé složky vůně.</li>
    <li><span className='text-highlighter'>Provar:</span> Chuť odhalí jedy nebo suroviny v pokrmu.</li>
    <li><span className='text-highlighter'>Tocar:</span> Hmat pocítí vibrace země či směr větru.</li>
    <li><span className='text-highlighter'>Sentir:</span> Intuice (šestý smysl) varuje před nebezpečím.</li>
</ul>

<h3>Folhagem Mensageira</h3>
<img src={folhagem_mensageira} className='img-spell' />
<p><i>„poselství listu“</i><br/>
<span className='text-highlighter'>Formule:</span> fol-HA [celé jméno adresáta]!<br/>
<span className='text-highlighter'>Pohyb hůlkou:</span> Namíření na chráněný papírek a jemné mávnutí před sebe jako rozproudění větru, který papírek unese k adresátovi.<br/>
<span className='text-highlighter'>Efekt:</span> Kouzlo aktivuje papírek chráněný živluvzdornou magií. Pohybuje se k adresátovi, jehož jméno vyslovil a kterého si během sesílání představuje. Při doručení adresát slyší jemné „šustění“ a papírek se zastaví u jeho ruky.</p>

  

  

   


  </div>
)

export default Kouzla