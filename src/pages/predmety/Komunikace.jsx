import React from 'react'

import uvod from '../../img/predmety/komunikace_s_tvory/uvod.png';
import kouzlo from '../../img/predmety/komunikace_s_tvory/kouzlo.png';
import magie from '../../img/predmety/komunikace_s_tvory/magie.png';
import neverbalni from '../../img/predmety/komunikace_s_tvory/neverbalni.png';
import verbalni from '../../img/predmety/komunikace_s_tvory/verbalni.png';


const Komunikace = () => (
  <div>
    
    <div className="main-header"><h1>Komunikace s tvory</h1></div>

    <img src={uvod} className='img-in-text img-in-text-right' />
    
    <p>Lesní tvorové nejsou pouhými obyvateli pralesa – jsou jeho hlasem, pamětí i vůlí. Komunikace s nimi není dovedností, kterou by se kouzelník naučil během několika lekcí, ale dlouhodobým <span className='text-highlighter'>procesem prohlubování empatie, vnímavosti a magického napojení</span>. Každý pokus o kontakt představuje zásah do křehké rovnováhy tvora, a proto je s touto praxí nakládáno s nejvyšší opatrností.</p>

    <p>Existuje <span className='text-highlighter'>několik cest</span>, jak se k lesním tvorům přiblížit. Některé jsou bezpečné a respektující, jiné však mohou zanechat hluboké a trvalé následky – v krajním případě i smrt tvora, který spojení nezvládne. Základní rozlišení se dělí na komunikaci <span className='text-highlighter'>verbální a neverbální</span>. Tyto dvě roviny se zpravidla prolínají; čistě jednostranná komunikace je vzácná a objevuje se pouze ve výjimečných situacích.</p>


    <h2>Slova a hlas pralesa</h2>
    <hr />
    
    <img src={verbalni} className='img-in-text img-in-text-left' />
    
    <p>Verbální komunikace stojí na jednoduchém, ale nekompromisním principu: <span className='text-highlighter'>upřímnosti</span>. Slova mají tvora <span className='text-highlighter'>ujistit</span>, že mu nehrozí nebezpečí, že kouzelník přichází s <span className='text-highlighter'>čistým úmyslem a respektem</span>. Nejde o krásu řeči, ale o její pravdivost. Lesní tvorové velmi rychle vycítí rozpor mezi tím, co je vysloveno, a tím, co je míněno.</p>

    <p>Mluví-li kouzelník <span className='text-highlighter'>klidně, bez křiku a nátlaku</span>, dává tvorovi prostor rozhodnout se. Důvěra, pokud vznikne, je vzácná a nikdy není samozřejmá. Mnozí tvorové dokážou již při prvním setkání rozpoznat, zda je kouzelník hoden jejich pozornosti.</p>

    <p>Některé bytosti – například akromantule, kentauři či skřítkové – jsou <span className='text-highlighter'>schopny odpovídat lidskou řečí</span>. V takovém případě se komunikace stává přímější, ale nikoli nutně jednodušší. Slova zde stále váží více než samotný význam – záleží na tónu, rytmu i postoji mluvčího.</p>

    <p><span className='text-highlighter text-underline'>Zásady verbálního kontaktu:</span></p>
    
    <ul>
        <li>Představit se jménem.</li>
        <li>Jasně a otevřeně sdělit svůj záměr, vždy ve formě prosby.</li>
        <li>Hovořit klidně, s respektem a bez skrytých úmyslů.</li>
        <li>Přijmout odmítnutí bez dalšího nátlaku.</li>
        <li>Poděkovat, bez ohledu na výsledek setkání, a odejít v klidu.</li>
    </ul>

    <h2>Řeč těla a ticha</h2>
    <hr />
    
    <img src={neverbalni} className='img-in-text img-in-text-right' />
    
    <p>Neverbální komunikace doprovází slova častěji, než si kouzelník uvědomuje. <span className='text-highlighter'>Výraz tváře, tempo pohybu i způsob dýchání</span> jsou pro tvora stejně výmluvné jako řeč. Samostatné použití neverbální komunikace se však považuje za <span className='text-highlighter'>riskantní</span> – bez slov může dojít k nepochopení záměru.</p>

    <p>Pohyby by měly být <span className='text-highlighter'>pomalé, čitelné a předvídatelné</span>. Pokud tvor ustupuje, chvěje se nebo se pohybuje nekoordinovaně, je to jasné znamení, že přítomnost kouzelníka narušuje jeho pocit bezpečí. V takovém případě je největším projevem respektu <span className='text-highlighter'>odchod</span>.</p>

    <p>Nejsilnějším nástrojem neverbální komunikace je <span className='text-highlighter'>dotyk</span>. Ten však vyžaduje souhlas – vyslovený či naznačený. Skrze dotyk lze <span className='text-highlighter'>vycítit dech, napětí svalů i rytmus srdce tvora</span>. V rukou zkušeného kouzelníka může dotyk působit uklidňujícím dojmem a pomoci tvorovi znovu nalézt rovnováhu.</p>

    <p><span className='text-highlighter text-underline'>Zásady neverbálního kontaktu:</span></p>
    
    <ul>
        <li>Ukázat prázdné ruce, bez hůlky či zbraně.</li>
        <li>Zachovat klidný výraz tváře.</li>
        <li>Pohybovat se pomalu a zřetelně.</li>
        <li>Udržovat oční kontakt pouze tehdy, dovolí-li to tvor.</li>
        <li>Dotýkat se pouze po zjevném svolení.</li>
        <li>Při náhlém vyhrocení situace se klidně vzdálit.</li>
    </ul>
    
    <h2>Magie jako nástroj a hrozba</h2>
    <hr />
    
    <img src={magie} className='img-in-text img-in-text-left' />
    
    <p>Použití kouzel k navázání komunikace je na Castelobruxu považováno za <span className='text-highlighter'>krajní řešení</span>. Zvláště kouzla ovládající mysl, jako kletba Imperius, jsou spojována s černou magií a považována spíše za <span className='text-highlighter'>násilí než komunikaci</span>.</p>

    <p>Existují však jemnější kouzla, která <span className='text-highlighter'>nezasahují do vůle tvora</span>, ale umožňují kouzelníkovi lépe <span className='text-highlighter'>porozumět jeho stavu</span>. Ta mohou sloužit jako vodítko při rozhodování, zda pokračovat v kontaktu, změnit přístup, nebo tvorovi nabídnout pomoc.</p>

    <h3>Animo Creativa</h3>
    
    <img src={kouzlo} className='img-spell' />
    
    <p><i>Kouzlo vnímání nálady</i>
    <span className='text-highlighter'>Formule:</span> a-ni-mO C-rea-TÍ-va<br />
    <span className='text-highlighter'>Pohyb hůlkou:</span> Obloukový pohyb připomínající vznik duhy, zakončený krátkým gestem směrem k cíli.<br />
    <span className='text-highlighter'>Efekt:</span> Nad tvorem se objeví barva odpovídající jeho aktuální náladě.<br />
    <span className='text-highlighter'>Etymologie:</span> Název vychází ze španělského <i>ánimo</i> (duševní stav) a <i>creativo</i> (tvořivý, proměnlivý).<br />
    <span className='text-highlighter'>Barevná škála nálad:</span></p>
    
    <ul>
        <li>Zelená – klidná, mazlivá nálada</li>
        <li>Fialová – zvídavost</li>
        <li>Žlutá – dobrá nálada</li>
        <li>Červená – agrese</li>
        <li>Oranžová – stres</li>
        <li>Modrá – hlad</li>
        <li>Růžová – hravost</li>
        <li>Hnědá – únava</li>
        <li>Černá – strach</li>
        <li>Šedá – smutek</li>
        <li>Bílá – zmatení</li>
    </ul>
    
    
      
   

        

    <a className='game-archive-button' href="/casstellobruxxo/Komunikace.html" target="_blank" rel="noopener noreferrer">Otevřít archiv hodiny (NonRPG 26. 10. 2025)</a>

  </div>
)

export default Komunikace