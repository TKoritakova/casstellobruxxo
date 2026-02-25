import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Ernesto from '../../img/postavy/ernesto_azevado.png';
import Murhala from '../../img/postavy/caetano_murhala_02.png';
import Carmila from '../../img/postavy/carmila_iris_jose.png';
import Demetrio from '../../img/postavy/demetrio_agamez.png';
import Jared from '../../img/postavy/jared_ilai_moreno.png';
import Tristan from '../../img/postavy/tristan_yeray_moreno.png';
import SkolaNav from './SkolaNav';

const Historie = () => (
  <div>

    <SkolaNav/>

    <div className="main-header"><h1>Profesorský sbor</h1></div>

    <br/>


    <h2 className='profesori'>Ernesto</h2><h2 className='profesori'> Azevedo</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>ŘEDITEL<br/>
      Černomagičtí tvorové<br/>
      5. května 1955 (během turnaje 53/54 let)</p>

    <img src={Ernesto} className='img-in-text img-in-text-left'/>

    <p>Působí dojmem dobrodruha spíše než typického ředitele – rozcuchaný, věčně oblečený v ošoupaném plášti, s pohledem
      člověka, který viděl víc, než by bylo zdrávo. Přesto si jeho autoritu nikdo nedovolí zpochybnit. Jeho hlavní
      doménou je ochrana kouzelných tvorů a jejich přirozeného prostředí, avšak občas zabrouzdá i k těm
      nejnebezpečnějším z nich – černomagickým tvorům. Proslulý je zejména tím, že jednou přespal v doupěti brazilského
      bahenního draka, aby dokázal, že není hrozbou. Od té doby se traduje, že draci s ním raději vyjednávají, než aby
      útočili. Ve vedení školy prosazuje princip „volnosti pod dohledem“. Studentům důvěřuje, ale zároveň je bedlivě
      sleduje. Tvrdí, že džungle vychovává nejlépe, když jí člověk naslouchá, ne když ji přetváří. A přesně to očekává i
      od svých žáků: odvahu, úctu k přírodě a schopnost postavit se problému čelem. </p>


    <h2 className='profesori'>Caetano</h2><h2 className='profesori'>Murhala</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>ZÁSTUPCE ŘEDITELE<br/>
      Magie běžného užití, obecná magizoologie<br/>
      17. srpna 1954 (během turnaje 54 let)</p>

    <img src={Murhala} className='img-in-text img-in-text-right'/>

    <p>Na první pohled klidný a i poměrně vážný muž. Nejčastěji ho můžete potkat na hodinách obecné magizoologie,
      černomagických tvorů nebo chovu a ochrany magických tvorů, občas ale učí i jiné předměty. Při učení je znát, že ho
      samotná látka i učení baví, rád zapojuje do hodin studenty různými otázkami nebo aktivitami, během čehož si stále
      udržuje profesionalitu. Pokud ho potkáváte i mimo hodiny, je však úplně jiný – se studenty se rád baví jako s
      rovnými, je přátelský a usměvavý. Často se zajímá o jejich názory a zkušenosti, ať už oblasti studia nebo
      čehokoliv jiného. Jeho zkušenosti z práce v Amazonii a Andách často využívá v hodinách, takže se studenti kromě
      teorie dozví i řadu zkušeností z praxe.</p>


    <h2 className='profesori'>Carmila</h2><h2 className='profesori'>Iris</h2><h2 className='profesori'>José</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>Lékouzelnictví, chov a ochrana magických tvorů<br/>
      3. února 1963 (během turnaje 45/46 let)</p>

    <img src={Carmila} className='img-in-text img-in-text-left'/>

    <p>Možná může působit chladným dojmem, protože se ve většině času tváří tak, aby nebylo poznat, co si zrovna myslí,
      ale vlastně je to žena otevřená všem lidem, kromě svých kolegů. Na škole se především baví právě se studenty,
      kteří ji mohou potkávat na hodinách chovu a ochrany magických tvorů nebo na obecné magizoologii, kde se věnuje
      převážně praktickým ukázkám nebo poukazuje na zkušenosti, které získala při cestování. Ráda dává studentům
      specifické přezdívky a na oplátku jim dovoluje říkat jí Karamelko.</p>

    <h2 className='profesori'>Demetrio</h2><h2 className='profesori'>Agamez</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>Magie obrany a útoku, povinný terénní výcvik<br/>
      29. května 1959 (během turnaje 49/50 let)</p>

    <img src={Demetrio} className='img-in-text img-in-text-right'/>

    <p>S Demetriem se setká v Castelobruxu úplně každý a ne každý ho má rád. Učí totiž magii obrany a útoku a vede také
      povinné terénní výcviky – ani na jednom své studenty rozhodně nešetří a snaží se je donutit k tomu, aby ze sebe
      při jeho hodinách vydali své maximum. Což je samozřejmě pro dobro všech – tenhle profesor moc dobře ví, že
      nástrahy na kouzelníky opravdu čekají na každém kroku, i když je ten krok veden na první pohled nevinnou přírodní
      krajinou. Má dost suchý sarkastický humor a příliš často se nesměje, se svými studenty moc nežertuje a celkově je
      na ně dost tvrdý. Nakonec je ale přece jenom fér a nedovolí, aby se v jeho přítomnosti stala nějaká
      nespravedlnost. V hodinách jede zejména na praktickou stránku věci – ono učit se o boji a obraně teoreticky je
      sice fajn, ale do života vám toho moc nedá. A přesně tím se při svých hodinách řídí.</p>

    <h2 className='profesori'>Jared</h2><h2 className='profesori'>Ilai</h2><h2 className='profesori'>Moreno</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>Obecná magibotanika, přírodní magie<br/>
      13. ledna 1963 (během turnaje 45/46 let)</p>

    <img src={Jared} className='img-in-text img-in-text-left'/>

    <p>Na první pohled působí vážně a spíše odměřeně, ale rozhodně ne jako nespravedlivý profesor. V jeho hodinách si
      studenti rychle všimnou jeho perfekcionismu a puntičkářství – nic mu neunikne a na nepořádek, nepozornost nebo
      nadržování má vyloženou alergii. Na druhou stranu, pokud vidí opravdovou snahu, dokáže být trpělivý a ochotně
      vysvětlovat i složité detaily. Nejčastěji ho potkáte ve sklenících nebo v laboratoři, kde tráví hodiny s výzkumem
      rostlin, starých textů a magických artefaktů, a málokdy se nechá vyrušit. Je notorický workoholik, což ho často
      přivádí k vyčerpání. Mimo vyučování není příliš společenský, působí zdrženlivě a jen málokomu dovolí přiblížit se
      k němu osobně, ale studenti si ho váží pro férový přístup a jasná pravidla, která nikdy neporušuje.</p>

    <h2 className='profesori'>Tristán</h2><h2 className='profesori'>Yeray</h2><h2 className='profesori'>Moreno</h2>
    <hr/>

    <p className='text-highlighter text-align-center'>Aplikovaná magibotanika, rituální magie<br/>
      5. prosince 1964 (během turnaje 43/44 let)</p>

    <img src={Tristan} className='img-in-text img-in-text-right'/>

    <p>Tristán jako by do rodiny Moreno vůbec nepatřil. Zatímco většina jeho příbuzných se naučila dívat na svět se
      sevřenými rty a ještě sevřenějším přesvědčením o vlastní důležitosti, on se nikdy nevzdal lehkosti, s jakou k
      životu přistupuje. Rodinnými pravidly se příliš svazovat nenechá – drží si od nich odstup, ale přesto je bez
      váhání podpoří, kdykoli je třeba. Jeho potřeba svobody ducha se promítla i do výběru předmětů, které učí: rituální
      magie a herbální alchymie. Zvlášť u té druhé se naplno projevuje jeho povaha experimentátora. Bádá ve sklenících,
      v laboratořích i přímo během vyučování – a občas se nebojí ani kroků na hraně rizika. Právě proto jsou jeho hodiny
      vyhlášené svou nespoutaností a nečekanými překvapeními, která se střídají s poutavým výkladem. Ani mimo výuku se
      studentům neuzavírá. Naopak – s upřímným nadšením poslouchá jejich postřehy a vítá každý nový objev, jako by ho
      učinil sám.</p>

    { /*

    <h2>Taurean Mauricius Milio Keseke</h2>
    <hr />
    
    <p className='text-highlighter text-align-center'><i><b>Cizokrajné jedy a protijedy<br />
    50 let</b></i></p>
    <img src="https://i.postimg.cc/pV0JZV52/ezgif-8ebe519b993e80.png" className='img-in-text img-in-text-left' />
    
    <p>Jako zástupce ředitele se stará hlavně o to, aby škola fungovala bez výkyvů – není to typ, co sedí za stolem s papíry, spíš hlídá, aby se problémy vůbec neměly šanci objevit. Nepůsobí okázale autoritativně, ale všichni moc dobře vědí, že když něco řekne, tak to platí. Castelobruxo bere jako svůj domov a chrání ho instinktivně – ne kvůli prestiži, ale proto, že věří, že škola má sloužit studentům, ne naopak. Během výuky jedů a protijedů dbá především na přesnost a disciplínu. Nedává moc prostoru pro lajdáctví, ale když někdo projeví opravdový zájem, umí ho vést dál než kdokoliv jiný.</p>

    */}


  </div>
)

export default Historie