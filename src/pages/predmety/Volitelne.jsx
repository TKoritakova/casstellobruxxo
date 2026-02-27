import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import astrologie_a_astronomie from '../../img/predmety/uvod/astrologie_a_astronomie.png';
import herbalni_alchymie from '../../img/predmety/uvod/herbalni_alchymie.png';
import historie_amazonske_magie from '../../img/predmety/uvod/historie_amazonske_magie.png';
import hudba_a_magie from '../../img/predmety/uvod/hudba_a_magie.png';
import jazyk_a_kultura_kmenu from '../../img/predmety/uvod/jazyk_a_kultura_kmenu.png';
import magicka_archeologie from '../../img/predmety/uvod/magicka_archeologie.png';
{/* artefakty from '../../img/predmety/uvod/artefakty.png';*/}

import PredmetyNav from './PredmetyNav';

const Volitelne = () => (
  <div>
    <PredmetyNav/>

    <div className="main-header"><h1>Vedlejší volitelné předměty</h1></div>

    <p><span className='text-highlighter'>Specifikace:</span> Mohou se volit kdykoliv v průběhu studia. Jedná se o jedno
      až dvouleté kurzy, které si studenti kdykoliv mohou přidat do svého repertoáru, aby si rozšířili obzory.<br/>
      <span className='text-highlighter'>Zakončení:</span> Závěrečnou teoretickou zkouškou.<br/>
      <span className='text-highlighter'>Pozn.: Tyto předměty nejsou během turnaje vyučovány.</span></p>


    <h3>Astrologie a astronomie</h3>
    <img src={astrologie_a_astronomie} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Informace o historii <span
        className='text-highlighter'>souhvězdí</span>, jejich významu pro amazonské předky, magické vlastnosti a
      případnou pomoc v otázkách <span className='text-highlighter'>věštění z čísel</span> či <span
        className='text-highlighter'>astrologickém působení hvězd</span> a znamení z nich vycházejících na lidskou
      psychiku a myšlení.<br/><br/></p>

    <Link className='game-archive-button with-arrow' to="/astronomie" target="_blank" rel="noopener noreferrer">Číst
      více o astronomii </Link>


    <h3>Herbální alchymie</h3>
    <img src={herbalni_alchymie} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Herbální alchymie studenty uvádí do světa rostlin a
      jejich skrytých sil. V prvním roce se zaměřují na <span
        className='text-highlighter'>rozpoznávání bylin v terénu</span>, jejich <span className='text-highlighter'>magické i léčivé účinky</span> a
      základní <span className='text-highlighter'>způsoby zpracování</span>. Postupně se učí chápat, jak jednotlivé
      rostliny působí samostatně i v kombinaci. Druhý rok je věnován praktickým pokusům, při nichž studenti na základě
      teorie <span className='text-highlighter'>sestavují vlastní směsi</span> a <span className='text-highlighter'>testují jejich účinky</span> v
      bezpečně vedených hodinách. Důraz se klade na tvořivost, přesnost i schopnost předvídat, jak se síly jednotlivých
      ingrediencí propojí. Studium je zakončeno přípravou <span
        className='text-highlighter'>autorského elixíru či masti</span>, která odráží znalosti a dovednosti studenta.
    </p>


    <h3>Historie amazonské magie</h3>
    <img src={historie_amazonske_magie} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Tento předmět zkoumá vývoj magie v Amazonii <span
        className='text-highlighter'>od nejstarších kmenových rituálů přes první badatelské výpravy do Amazonie až po vznik školy Castelobruxo</span>.
      Studenti se seznamují s dějinami čarodějů i mudlů, sledují prolínání původních duchovních tradic s evropskou magií
      a učí se chápat, jak spolu <span className='text-highlighter'>kultura, příroda a kouzla</span> tvoří jeden celek.
      Vedle historických událostí se kurz zaměřuje také na magickou symboliku pralesa, <span
        className='text-highlighter'>mýty o jeho ochráncích</span>, vývoj rituální magie, proměnu vztahu kouzelníků k
      duchům a rostlinám a <span className='text-highlighter'>dopady moderního světa na magickou rovnováhu</span>.
      Závěrečná část předmětu je věnována praktickému bádání v terénu – studenti <span className='text-highlighter'>navštěvují stará posvátná místa</span>,
      čtou zápisy z deníků badatelů a učí se interpretovat přírodní dění jako součást dějin samotné magie.</p>


    <h3>Hudba a magie</h3>
    <img src={hudba_a_magie} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Hudba, rytmus a tanec jsou nedílnou součástí přírodní
      magie. V tomto dvouletém kurzu se studenti učí, <span className='text-highlighter'>jak vibrace zvuku, rytmus bubnů či zpěv ovlivňují proudění magické energie</span>.
      Teoretické lekce seznamují s tradicemi amazonských kmenů a jejich pojetím hudby jako mostu mezi světem lidí a
      duchů. Praktická část zahrnuje <span className='text-highlighter'>hru na tradiční nástroje</span>, <span
        className='text-highlighter'>zpěv rituálních písní</span> a <span className='text-highlighter'>nácvik tanců používaných k posílení kouzel, komunikaci s duchy či ochraně vesnice</span>.
      Druhý rok rozšiřuje výuku o <span className='text-highlighter'>experimentální práci</span> – studenti propojují
      hudbu s vlastní magickou energií a zkoumají, jak tóny a pohyby posilují obranná i léčivá kouzla.</p>

    <Link className='game-archive-button with-arrow' to="/hudba-a-tanec" target="_blank" rel="noopener noreferrer">Číst
      více o hudbě a tanci</Link>


    <h3>Jazyk a kultura kmenů</h3>
    <img src={jazyk_a_kultura_kmenu} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Kurz seznamuje studenty se základy jazyků a kulturních
      tradic amazonských kmenů, které úzce souvisejí s magií a pralesem. Teoretická část zahrnuje domorodé jazyky,
      symboliku, písně a příběhy nesoucí magický význam, včetně <span className='text-highlighter'>gest a neverbální komunikace</span> používané
      při rituálech. Praktická část zahrnuje <span className='text-highlighter'>práci s texty a symboly</span> a <span
        className='text-highlighter'>kontakt s přátelskými kmeny</span>, kde se studenti učí získat důvěru a přístup k
      hlubším znalostem. Dvouletý kurz se doplňuje s předmětem rituální magie.</p>


    <h3>Magická archeologie</h3>
    <img src={magicka_archeologie} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Délka:</span> Rok<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Předmět poskytuje studentům novou sadu kouzel, znalostí
      a postupů ideálně se hodících pro <span className='text-highlighter'>odhalování a nakládání s magickými vykopávkami</span>.
      Výuka zahrnuje nejen bezpečné způsoby průzkumu pralesních ruin a chodeb vedoucích pod hradem, ale také <span
        className='text-highlighter'>studium magických symbolů a nápisů</span> – tzv. „run džungle“. Studenti se učí
      tyto znaky rozpoznávat, překládat a chápat jejich účel, ať už jde o ochranná kouzla nebo starobylá varování.</p>


    <Link className='game-archive-button with-arrow' to="/archeologie" target="_blank" rel="noopener noreferrer">Číst
      více o archeologii </Link>

    <h3>Výroba magických artefaktů</h3>
    {/* <img src={artefakty} className='img-in-text img-in-text-right'/>*/}
    <p><span className='text-highlighter'>Délka:</span> Dva roky<br/>
      <span className='text-highlighter'>Náplň předmětu:</span> Kurz studentům nabízí hlubší vhled do výroby magických
      artefaktů, jež tvoří samotný základ jihoamerického kouzelnického řemesla. První ročník se zaměřuje na teoretické
      <span className='text-highlighter'> porozumění symbolice přírodních materiálů</span> a propojení s pěti silami stvoření – ohněm, vodou, větrem, zemí a
      sluncem. Studenti zjišťují, že funkční artefakt nevzniká pouhým složením částí, ale vyžaduje naprosté soustředění
      a jasný záměr tvůrce. Druhý ročník je pak věnován praktické <span className='text-highlighter'>tvorbě složitějších ochranných, komunikačních a
        obřadních předmětů</span>. Studium klade hlavní důraz na dosažení naprosté vnitřní harmonie mezi myslí kouzelníka a
      magickou pamětí pralesa, což je klíčem k úspěšnému probuzení předmětu.</p>

   <Link className='game-archive-button with-arrow' to="/artefakty" target="_blank" rel="noopener noreferrer">Číst
      více o artefaktech </Link>


  </div>
)

export default Volitelne