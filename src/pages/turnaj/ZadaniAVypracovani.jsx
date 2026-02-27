import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

import prvni_ukol from '../../img/turnaj/prvni_ukol.png';
import druhy_ukol from '../../img/turnaj/druhy_ukol.png';
import treti_ukol from '../../img/turnaj/treti_ukol.png';
import ctvrty_ukol from '../../img/turnaj/ctvrty_ukol.png';

import paty_ukol_01 from '../../img/turnaj/paty_ukol_01.png';
import paty_ukol_02 from '../../img/turnaj/paty_ukol_02.png';
import paty_ukol_03 from '../../img/turnaj/paty_ukol_03.png';
import paty_ukol_04 from '../../img/turnaj/paty_ukol_04.png';

import sesty_ukol_01 from '../../img/turnaj/sesty_ukol_01.png';
import sesty_ukol_02 from '../../img/turnaj/sesty_ukol_02.png';
import Carmila from "../../img/postavy/carmila_iris_jose.png";

const ZadaniAVypracovani = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Labyrint poznání</h1></div>

    <img src={prvni_ukol} className='img-in-text img-in-text-left'/>

    <p>Na bradavických pozemcích se objevila tajemná skrytá zahrada obehnaná vysokou zdí. Z kruhového dvoru vedlo <span
      className='text-highlighter'>patero
      dveří</span> a za každými z nich se skrývala odlišná <span
      className='text-highlighter'>komora s jedinečnou výzvou</span>. Zástupci soutěžících škol čelili děsivým
      iluzím svých <span className='text-highlighter'>nejhlubších strachů</span>, načež museli zodpovědět zrádnou <span
        className='text-highlighter'>hádanku majestátní sfingy</span>: <i>Co každý má, je to
        tiché, ale bolí to?</i> <span className='text-highlighter'>Zrcadlový labyrint</span> je donutil pohlédnout do
      vlastních očí a odpovědět
      zrcadlu na otázku, <span className='text-highlighter'>co je
        dělá silnějšími než ostatní</span>. Další zkouškou bylo klaustrofobické hnízdo plné <span
        className='text-highlighter'>syčících hadů</span>, kteří lezli po zdech i
      stropě a dožadovali se <span className='text-highlighter'>vyzrazení osobního tajemství</span>. Na samém konci
      labyrintu na soutěžící čekalo
      logické i
      morální dilema – <span className='text-highlighter'>výběr ze tří lektvarů</span> slibujících buď nejrychlejší,
      nejbezpečnější nebo tu
      jedinou pravdivou
      cestu k vítězství, přičemž svou volbu museli pečlivě obhájit.
    </p>

    <h2>Vypracování prvního úkolu</h2>
    <hr/>
    <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
   
      </tr>
      <tr>
        <td>Mateo Benítez</td>
        <td>29</td>
        <td><a href="/casstellobruxxo/ukoly/1/MateoBenitez1.pdf" target="_blank">Vypracování</a></td>
       
      </tr>


      <tr>
        <td>Catriel Ulises Condori</td>
        <td>27.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/CatrielUlisesCondori1.png" target="_blank">Vypracování</a></td>
        
      </tr>

      
      <tr>
        <td>Sofía Sánchez</td>
        <td>27.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/SofiaSanchez1.pdf" target="_blank">Vypracování</a></td>
        
      </tr>

       <tr>
        <td>Sofia Amarilis Perez</td>
        <td>27</td>
        <td><a href="/casstellobruxxo/ukoly/1/SofiaAmarilisPerez1.pdf" target="_blank">Vypracování</a></td>
        
      </tr>

      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>26.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/JuanMiguelSantosRamirez1.pdf" target="_blank">Vypracování</a></td>
      
      </tr>

      <tr>
        <td>Chiara Antonia José</td>
        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/ChiaraAntoniaJose1.pdf" target="_blank">Vypracování</a></td>
    
      </tr>

      <tr>
        <td>Lucia Juliana Navarro</td>
        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/LuciaJulianaNavarro1.pdf" target="_blank">Vypracování</a></td>
        
      </tr>

      <tr>
        <td>Luana Mariana Almeida Soares</td>
        <td>24.5</td>
        <td><a href="/casstellobruxxo/ukoly/1/LuanaMarianaAlmeidaSoares1.pdf" target="_blank">Vypracování</a></td>
      
      </tr>

      <tr>
        <td>Alejandro Navarro</td>
        <td>18.5</td>
        <td>-</td>
        
      </tr>
    
      

      
     
      
    </table>


    <br/>
    <div className="main-header"><h1>Sběr perel a tvorba vlastností</h1></div>
    <h2>Inrpg: Lov jezerních perel</h2>
    <hr/>

    <img src={druhy_ukol} className='img-in-text img-in-text-right'/>

    <p>Druhá turnajová zkouška zavedla studenty do nehostinných vod bradavického <span className='text-highlighter'>Černého jezera</span>.
      Kousek od břehu na jeho
      dně se spočívaly <span className='text-highlighter'>křiklavě růžové perly</span>, jejichž sběr prověřil nejen
      fyzickou odolnost a schopnost se nenachladit
      ve studené vodě, ale i obezřetnost před hrozbami číhajícími pod hladinou. Největší záludností úkolu byl samotný
      sběr – perly byly <span className='text-highlighter'>magicky přilepené ke dnu</span> a zcela <span
        className='text-highlighter'>rezistentní vůči přivolávacím kouzlům</span>. K jejich uvolnění byl
      nezbytný <span className='text-highlighter'>přímý dotek lidské ruky</span>, což studenty nutilo potápět se až na
      samotné dno, aby jich nasbírali co nejvíce.
    </p>

    <h2>Nonrpg: Tvorba kolejních rysů</h2>
    <hr/>

    <p>V teoretické a tvůrčí rovině se hráči zabývali rozšiřováním samotného herního kánonu. Jejich úkolem bylo vymyslet
      <span className='text-highlighter'>čtyři zcela nové vlastnosti</span>, každou příslušející jedné z <span
        className='text-highlighter'>bradavických kolejí</span>. Součástí odevzdání do turnaje musel
      být detailní popis opodstatňující zařazení vlastnosti k dané koleji, rozbor důsledků v případě <span
        className='text-highlighter'>úspěšného
        zafungování i neúspěchu</span>. Práce musely být doplněny také o originální <span className='text-highlighter'>tematický obrázek</span> –
      ať už malovaný, focený či
      generovaný umělou inteligencí.</p>

    <h2>Vypracování druhého úkolu</h2>
    <hr />

    <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
    
      </tr>
      <tr>
        <td>Sofia Amarilis Perez</td>
        <td>34.5</td>
        <td><a href="/casstellobruxxo/ukoly/2/SofiaAmarilisPerez2.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Mateo Benítez</td>
        <td>30</td>
        <td><a href="/casstellobruxxo/ukoly/2/MateoBenitez2.pdf" target="_blank">Vypracování</a></td>        
      </tr>

       <tr>
        <td>Sofía Sánchez</td>
        <td>29</td>
        <td><a href="/casstellobruxxo/ukoly/2/SofiaSanchez2.pdf" target="_blank">Vypracování</a></td>
       
      </tr>

      <tr>
        <td>Chiara Antonia José</td>
        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/2/ChiaraAntoniaJose2.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/2/JuanMiguelSantosRamirez2.pdf" target="_blank">Vypracování</a></td>
        
      </tr>
   
      <tr>
        <td>Alejandro Sánchez</td>
        <td>25</td>
        <td><a href="/casstellobruxxo/ukoly/2/AlejandroSanchez2.pdf" target="_blank">Vypracování</a></td>     
      </tr>
 
      <tr>
        <td>Lucia Juliana Navarro</td>
        <td>20.5</td>
        <td><a href="/casstellobruxxo/ukoly/2/LuciaJulianaNavarro2.pdf" target="_blank">Vypracování</a></td>
        
      </tr>
      
      
      
    </table>

    <br/>
    <div className="main-header"><h1>Ledová pevnost</h1></div>

    <p>Třetí turnajová výzva přenesla účastníky do mrazivé pevnosti pohřbené v ledu na zamrzlém jezeře, kde plály
      pochodně modrým, nehřejícím ohněm. Hned u vstupu je přivítal zlověstný šepot varující, že přežije jen ten, kdo
      ovládne led, oheň i srdce. Cesta k cíli se skládala ze <span
        className='text-highlighter'>čtyř náročných fází</span>.</p>

    <img src={treti_ukol} className='img-in-text img-in-text-left'/>

    <p>Nejprve si studenti <span className='text-highlighter'>volili cestu</span> – úzkou s ostrými ledovými bloky,
      širokou se silnými poryvy větru, nebo temnou
      stezku posetou zrádnými pastmi a iluzemi. Druhá zkouška testovala <span
        className='text-highlighter'>sílu vůle</span> u magického plamene, který <span className='text-highlighter'>zrcadlil
        jejich nejhlubší pochybnosti</span> a promlouval jim přímo do mysli slovy o selhání. Zkouška těla je následně
      postavila
      <span className='text-highlighter'>proti více než dvoumetrové soše bojovníka</span> z ledu a kovu, k jehož
      poražení museli chytře využít svá kouzla či staré
      zbraně a provazy povalující se po ledové síni. V závěrečné komnatě pak museli zahřát pulzující krystal – Ledové
      srdce – a to pouze formou <span className='text-highlighter'>skutečné oběti</span>, například dočasným odevzdáním
      vlastní magie či zapomenutím cenné
      vzpomínky, jež se jim navrátila až po několika dnech.</p>


      <h2>Vypracování třetího úkolu</h2>
    <hr />

      <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
      </tr>

      <tr>
        <td>Sofia Amarilis Perez</td>
     
        <td>28</td>
        <td><a href="/casstellobruxxo/ukoly/3/SofiaAmarilisPerez3.pdf" target="_blank">Vypracování</a></td>
  
      </tr>

      <tr>
        <td>Juan Miguel Santos Ramírez</td>
     
        <td>27</td>
        <td><a href="/casstellobruxxo/ukoly/3/JuanMiguelSantosRamirez3.pdf" target="_blank">Vypracování</a></td>
        
      </tr>

      <tr>
        <td>Inés Soraya Caro</td>
       
        <td>26.5</td>
        <td><a href="/casstellobruxxo/ukoly/3/InesSorayaCaro3.pdf" target="_blank">Vypracování</a></td>
       
      </tr>

      <tr>
        <td>Luana Mariana Almeida Soares</td>
     
        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/3/LuanaMarianaAlmeidaSoares3.pdf" target="_blank">Vypracování</a></td>
       
      </tr>

      <tr>
        <td>Mateo Benítez</td>
    

        <td>25.5</td>
        <td><a href="/casstellobruxxo/ukoly/3/MateoBenitez3.pdf" target="_blank">Vypracování</a></td>
       
      </tr>
      
      <tr>
        <td>Chiara Antonia José</td>
     
        <td>25</td>
        <td><a href="/casstellobruxxo/ukoly/3/ChiaraAntoniaJose3.pdf" target="_blank">Vypracování</a></td>
       
      </tr>
      
      <tr>
        <td>Lucia Juliana Navarro</td>
 
        <td>24.5</td>
        <td><a href="/casstellobruxxo/ukoly/3/LuciaJulianaNavarro3.pdf" target="_blank">Vypracování</a></td>
 
      </tr>
      
      
      <tr>
        <td>Sofía Sánchez</td>
    
        <td>20.5</td>
        <td><a href="/casstellobruxxo/ukoly/3/SofiaSanchez3.pdf" target="_blank">Vypracování</a></td>
   
      </tr>
      
    </table>

    <br/>
    <div className="main-header"><h1>Lov zlatonek a tvorba soutěží</h1></div>

    <h2>Inrpg: Zlatá horečka na pozemcích</h2>
    <hr/>

    <img src={ctvrty_ukol} className='img-in-text img-in-text-right'/>

    <p>Během čtvrté zkoušky se pozemky kolem školy proměnily v rozlehlé <span className='text-highlighter'>loviště nezbedných zlatonek</span>.
      Každý student měl
      šanci chytit až deset těchto drobných míčků, avšak úkol to nebyl zdaleka tak jednoduchý, jak by se mohlo zdát.
      Zlatonky sice <span className='text-highlighter'>nelétaly v závratných výškách</span>, ale byly nesmírně
      neposedné, neuvěřitelně rychlé a chráněné proti
      jakýmkoliv kouzlům. Úspěšný lov tak vyžadoval nejen obratnost a fyzickou odolnost, ale mnohdy i léta cviku a
      především <span className='text-highlighter'>nekonečnou trpělivost</span>.
    </p>

    <h2>Nonrpg: Inovace bradavických soutěží</h2>
    <hr/>

    <p>Skutečnou výzvou pro hráče bylo oživit prázdnou bradavickou nástěnku návrhem na zcela novou, originální a do
      budoucna skutečně <span className='text-highlighter'>realizovatelnou soutěž</span>. Návrh musel být velmi
      komplexní: od chytlavého názvu a atraktivního
      <span className='text-highlighter'>tématu</span>, přes jasně definovaná <span
        className='text-highlighter'>pravidla</span> a <span className='text-highlighter'>systém hodnocení</span>, až po
      stanovení adekvátních <span className='text-highlighter'>cen</span>, <span
        className='text-highlighter'>termínů</span> a argumentaci,
      proč by měl projekt o tuto konkrétní soutěž stát.
    </p>

  <h2>Vypracování čtvrtého úkolu</h2>
  <hr />

  <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
      </tr>

      <tr>
        <td>Sofia Amarilis Perez</td>
        <td>32.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/SofiaAmarilisPerez4.pdf" target="_blank">Vypracování</a></td>
      </tr>
     
      <tr>
        <td>Inés Soraya Caro</td>
        <td>31.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/InesSorayaCaro4.pdf" target="_blank">Vypracování</a></td>
      </tr>
      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>28.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/JuanMiguelSantosRamirez4.pdf" target="_blank">Vypracování</a></td>
      </tr>
       <tr>
        <td>Chiara Antonia José</td>    
        <td>22.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/ChiaraAntoniaJose4.pdf" target="_blank">Vypracování</a></td>    
      </tr>
      <tr>
        <td>Sofía Sánchez</td>
        <td>22.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/SofiaSanchez4.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Mateo Benítez</td>
        <td>21.5</td>
        <td><a href="/casstellobruxxo/ukoly/4/MateoBenitez4.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Alejandro Sánchez</td>
        <td>20</td>
        <td><a href="/casstellobruxxo/ukoly/4/AlejandroSanchez4.pdf" target="_blank">Vypracování</a></td>
  
      </tr>

      <tr>
        <td>Lucia Juliana Navarro</td>
        <td>19</td>
        <td><a href="/casstellobruxxo/ukoly/4/LuciaJulianaNavarro4.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>César Jesus Giménez Castillero</td>
        <td>17</td>
        <td><a href="/casstellobruxxo/ukoly/4/CesarJesusGimenezCastillero4.pdf" target="_blank">Vypracování</a></td>

      </tr>
      
    </table>

    <br/>
    <div className="main-header"><h1>Rovnováha přírody</h1></div>

    <h2>Pátá turnajová zkouška</h2>
    <hr/>

    <h3>Úvodní vypravěč</h3>
    <img src={paty_ukol_01} className='img-in-text img-in-text-left'/>
    <p><i>Skoro až na hranici pozemků Bradavic směrem za famfrpálovým stadionem se nachází rozlohou poměrně <span
      className='text-highlighter'>malý prales</span>. Ač rozlohou nevelký, působí na první pohled <span
      className='text-highlighter'>nepřirozeně</span>, <span className='text-highlighter'>nestabilně</span>. Jako by mu
      chyběla část jeho vlastní síly. Samotné stromy jsou na první pohled dost slabé, jakoby neměly vůli růst dál.
      Slunce, ne dost silné na to, aby se dostalo skrz koruny stromů, vrhá na zem jenom nepravidelný zlomek svých
      paprsků. Vzduch uvnitř není tak vlhký, jak by se očekávalo, a i občasný šelest větru jakoby pouze napodoboval to,
      jak by správně proudit měl. Přitom je ale cítit, že z hloubky pralesa působí síla a život.</i></p>

    <img src={paty_ukol_02} className='img-in-text img-in-text-right'/>

    <p>Kdokoliv do samotného pralesa jednou malou nenápadnou pěšinkou vstoupí, se po chvíli dostane do samotného středu.
      Prales je alespoň tak velký a tak hustý, že z jeho středu není vidět ven. Uprostřed se pak nachází jedna dost
      velká hrubě opracovaná <span className='text-highlighter'>kamenná mísa</span>, ve které se nachází pětice
      skleněných koulí, a kolem ní jsou do pěti menhirů vyryté názvy pěti sil stvoření:</p>

    <ul>
      <li><span className='text-highlighter'>Sol</span> (slunce)</li>
      <li><span className='text-highlighter'>Yara</span> (kapka vody)</li>
      <li><span className='text-highlighter'>Yvy</span> (strom)</li>
      <li><span className='text-highlighter'>Ybytu</span> (vítr)</li>
      <li><span className='text-highlighter'>Tatá</span> (plamen)</li>
    </ul>

    <p>Každý menhir v sobě má otvor odpovídající velikosti skleněné koule.</p>

    <p>Symboly každého živlu lehce světélkují, ale je patrné, že světlo je slabé a nepravidelné. A to je nejspíš příčina
      té nepřirozeně oslabené přírody kolem. Živly nejsou v rovnováze.</p>

    <h2>Sol</h2>
    <hr/>

    <p>Po vložení skleněné koule do menhiru Sol pomalu <span className='text-highlighter'>zhasne</span> samotné <span
      className='text-highlighter'>slunce</span>. Na obloze však nejsou ani hvězdy, celý prales se tedy ocitne v <span
      className='text-highlighter'>naprosté tmě</span>. Tomu, kdo úkol plní, se v <span
      className='text-highlighter'>hlavě</span> ozve tichý prastarý hlas: <span className='text-highlighter'>„Slunce a světlo nejsou samozřejmostí. Nemůžeme světlo jen brát – musíme umět opravdové světlo i dávat.“</span>
    </p>

    <p>Pokusy o kouzlo typu Lumos nevedou k žádnému výsledku. Hůlka se sice rozsvítí, kouzlo však nedokáže osvětlit nic
      kolem sebe. Stejně tak nefungují žádné předměty ani podobné pokusy. Očividně zde překážka není fyzická tma. Jde o
      zkoušku <span className='text-highlighter'>vnitřního světla</span>, ne vnějšího.</p>

    <p>Po splnění úkolu se světlo vrátí do původního stavu, ba dokonce je ještě o dost silnější a alespoň slabé světlo
      tak osvítí i předtím rozsáhlé stinné kouty.</p>

    <h3>Komplikace</h3>
    <p>Ve chvíli, kdy prales ztratí veškeré světlo,
      zaslechne student <span className='text-highlighter'>roj</span> jakéhosi <span
        className='text-highlighter'>hmyzu</span>. Ten doletí až k jeho hlavě, slepě do ní začne <span
        className='text-highlighter'>narážet</span>. Student si nakonec odnese několik <span
        className='text-highlighter'>štípnutí</span> komára, než se celý roj zase vytratí.</p>

    <h2>Yara</h2>
    <hr/>
    <p>Po vložení skleněné koule do menhiru Yary zničeho nic <span
      className='text-highlighter'>vzduch ztratí</span> veškerou <span className='text-highlighter'>vlhkost</span>.
      Dýchání je ze začátku dost nepříjemné, podobný problém má očividně i <span
        className='text-highlighter'>tvor</span> <i>(konkrétní druh je na rozhodnutí hráče)</i> nacházející se pár metrů
      od studenta. Ten vypadá celkově dost <span className='text-highlighter'>smutně</span>, emočně <span
        className='text-highlighter'>rozhozeně</span>.</p>

    <p>Na prudké pohyby reaguje udržováním si bezpečné vzdálenosti, na hlasité nebo hrubé zvuky taktéž. Ba dokonce, tvor
      dokáže i vycítit <span className='text-highlighter'>vnitřní naladění</span> postavy. K tomu, aby se k tvorovi
      student dostal blíže, a třeba se ho i dotkl, bude tedy potřeba přizpůsobit jak své chování <span
        className='text-highlighter'>navenek</span>, ale i svou <span className='text-highlighter'>mysl</span>.</p>

    <p>Po splnění úkolu se naopak vzduch naplní vlhkostí poměrně rychle. Dokonce i lehce nabere na teplotě a student
      bude muset přežít asi minutový <span className='text-highlighter'>tropický deštík</span>. Zároveň se název síly i
      symbol sílu reprezentující o něco víc <span className='text-highlighter'>rozzáří</span>.</p>

    <h3>Komplikace</h3>

    <p>Student ale nezahlédne zvíře jenom jedno. Asi o deset
      metrů dále si všimne číhajícího <span className='text-highlighter'>jaguára</span>. Nevypadá úplně, že by měl v
      nejbližší vteřině zaútočit, ale to se také může rychle <span className='text-highlighter'>změnit</span>. Nejen, že
      bude těžší se v takové situaci soustředit na samotný úkol, ale zároveň by větší chyba mohla znamenat i <span
        className='text-highlighter'>útok</span> tohoto <span className='text-highlighter'>tvora</span>.</p>

    <h2>Yvy</h2>
    <hr/>

    <p>Po vložení koule do kamene reprezentujícího skrz sílu Yvy živel země právě země jakoby oslábla. Zdá se být o něco
      sušší, stejně tak začnou schnout i listy na stromech, mechy, kapradiny a jiné rostliny, ba dokonce i liány. Přímo
      v ruce studenta se pak objeví <span className='text-highlighter'>symbol</span> budoucího <span
        className='text-highlighter'>života</span>, semínko. Semínko je ale <span
        className='text-highlighter'>zkamenělé</span>, a jestli v něm tedy dřímá život, pak bude hodně <span
        className='text-highlighter'>hluboko</span>. Pak do studentovy hlavy <span
        className='text-highlighter'>promluví</span> klidný ženský, taktéž prastaře znějící hlas: <span
        className='text-highlighter'>„Jakou mám motivaci snažit se dál a dál růst, když se čím dál, tím větší síla snaží život zničit?“</span>
    </p>

    <p>To, že úkolem je nechat semínko <span className='text-highlighter'>vyrůst</span>, je asi jasné. Ale co na něj
      může fungovat? Na to už očividně další nápověda <span className='text-highlighter'>nepřijde</span>, těch cest ale
      bude jistě <span className='text-highlighter'>víc</span>.</p><p>
    Po splnění úkolu získají jak stromy, tak i keře a byliny na <span className='text-highlighter'>životě</span>.
    Některé z nich dokonce i lehce <span className='text-highlighter'>rozkvetou</span>, jiné pomaličku o pár
    centimetrů <span className='text-highlighter'>povyrostou</span>. Okolo menhiru Yvy dokonce vyroste o něco
    vyšší <span className='text-highlighter'>tráva</span>, no všechno, co je do tohoto kamene vyryté, začne o něco
    silněji zeleně zářit.</p>

    <h3>Komplikace</h3>

    <p>Semínko se stane ale zájmem i jiných tvorů, než
      samotného studenta. Z jedné strany přiběhne skupinka <span className='text-highlighter'>pěti</span> na evropské
      poměry dost velkých <span className='text-highlighter'>mravenců</span>, ze vzduchu pak přiletí <span
        className='text-highlighter'>papoušek</span>. A oba dva druhy se pokouší <span
        className='text-highlighter'>dostat</span> semínko pro sebe.</p>


    <h2>Ybytu</h2>
    <hr/>

    <img src={paty_ukol_03} className='img-in-text img-in-text-left'/>

    <p>Jestli do této chvíle zaznělo jednou za chvilku alespoň zašustění listů, tak po vložení skleněné koule do menhiru
      Ybytu, síly větru, se už <span className='text-highlighter'>nepohne</span> ani <span
        className='text-highlighter'>lístek</span>. Po krátké chvíli se ale několik desítek metrů jedním směrem menší
      větřík <span className='text-highlighter'>zformuje</span>, vytvoří jakýsi menší <span
        className='text-highlighter'>vír</span> a z onoho víru jako kdyby se ozývaly nějaké <span
        className='text-highlighter'>šeptající hlasy</span>. Ty jsou ale na takovou dálku tak <span
        className='text-highlighter'>tiché</span>, že jim není rozumět.</p>

    <p>A jako na potvoru, zrovna tím směrem je cesta <span className='text-highlighter'>nejhustší a nejnáročnější</span>.
      Určitě bude třeba minimálně přelézt několik spadlých <span className='text-highlighter'>stromů</span>, dostat se
      přes asi metr dlouhou <span className='text-highlighter'>tůni</span>, probojovat se skrz dosti vysoký <span
        className='text-highlighter'>keř</span>. Jakou cestu ale kdo zvolí, to už je na něm samotném.</p>

    <p>A kdo se dostane až k samotnému víru větru, ten si může všimnout, že ony šeptající hlasy vlastně tím šeptem
      předávají nějaké <span className='text-highlighter'>poselství</span> <i>(to si vymyslíte sami a zmíníte ho v
        myšlenkách)</i>.</p>

    <p>A pokud ono poselství člověk pochopí, cesta zpátky k menhirům jako kdyby se sama <span
      className='text-highlighter'>zprostupnila</span>, vír vzduchu se zformuje a proletí skrz celý prales. A v tom se
      lehký <span className='text-highlighter'>vánek</span> objeví také v celém okolí. A při tom všem se také <span
        className='text-highlighter'>rozsvítí</span> symbol větru a název samotné síly.</p>

    <h3>Komplikace</h3>
    <p>Cesta k samotnému víru větru je natolik složitá, že
      ať se student snaží jakkoliv, nakonec se mu jedna noha až po <span
        className='text-highlighter'>koleno</span> ztratí v jakési <span className='text-highlighter'>tůni</span>. Ta
      byla až do tohoto okamžiku tak <span className='text-highlighter'>zarostlá</span>, že všimnout si jí bylo skoro
      nemožné.</p>

    <h2>Tatá</h2>
    <hr/>

    <p>Po vložení koule do menhiru Tatá, který reprezentuje oheň, jenž na první pohled nikde přítomný není, jakoby celý
      prales <span className='text-highlighter'>přišel o energii</span>. Jestli v sobě měl prales samotný nějakou <span
        className='text-highlighter'>magii</span>, ta se také v mžiku <span className='text-highlighter'>vytratí</span>.
      Tedy kromě samotných menhirů, které zůstávají zářit, pokud už rozzářené jsou.</p>

    <p>Kolem jednoho ze stromů poblíž kruhu je obrostlá <span className='text-highlighter'>liána</span> s tmavě
      fialovými <span className='text-highlighter'>květy</span>, které jsou ale víceméně zavřené. A v tu chvíli se na
      pěšince objeví i <span className='text-highlighter'>postava</span> v tmavě hnědém plášti s <span
        className='text-highlighter'>nožem</span> v ruce. Ona postava očividně míří přímo k této liáně, že by si všímala
      něčeho jiného se říct nedá. A pokud se jí podaří dostat až k <span className='text-highlighter'>liáně</span>,
      hezky jak rukama, na kterých má černé rukavice, tak nožem, začne rostlinu <span className='text-highlighter'>trhat a odřezávat</span>.
    </p>

    <p>Po ochránění liány jakoby prales znovu nabyl života a energie. Mezi stromy najednou začnou poletovat <span
      className='text-highlighter'>papoušci</span>, na druhé straně pěšinky pak najednou vyrostou zelené <span
      className='text-highlighter'>bioluminiscenční houby</span>.</p>

    <h3>Komplikace</h3>

    <p>Ona postava je v tomto případě <span
      className='text-highlighter'>všímavější</span> a zaregistruje studenta <span
      className='text-highlighter'>dříve</span> než on ji. Vytáhne z kapsy hůlku, kterou na studenta namíří a <span
      className='text-highlighter'>úspěšně</span> jeho směrem vyšle jedno kouzlo, <span
      className='text-highlighter'>Flipendo</span>. Ať už ale kouzlo zasáhne nebo ne, <span
      className='text-highlighter'>hůlku pustí</span> z ruky a věnuje se stoprocentně oné rostlině, dál <span
      className='text-highlighter'>neútočí ani se nebrání</span>.</p>

    <h2>Po splnění všech úkolů</h2>
    <hr/>

    <p>A když student splní poslední úkol, světla <span className='text-highlighter'>všech</span> pěti <span
      className='text-highlighter'>menhirů</span> se současně rozzáří. Skleněné koule se <span
      className='text-highlighter'>zbarví</span> do odstínů svých elementů a z každého menhiru začne vycházet jasné,
      čisté <span className='text-highlighter'>světlo</span>.</p>

    <p>Pětice paprsků se v jediném okamžiku <span className='text-highlighter'>potká</span> přímo v kamenné míse
      uprostřed kruhu, <span className='text-highlighter'>prováže</span> se a následně se jako jednotné světlo <span
        className='text-highlighter'>rozprostře</span> po celé džungli.</p>

    <img src={paty_ukol_04} className='img-in-text img-in-text-right'/>

    <p>Ta, ještě před chvílí nepřirozeně utlumená, bez energie, se probudila k životu. Světlo dopadá na zem pralesa a
      dává dost <span className='text-highlighter'>energie</span> i těm nejmenším rostlinám, vzduch má mnohem
      větší <span className='text-highlighter'>vlhkost</span> a dokonce i <span
        className='text-highlighter'>teplotu</span>, dokonce i vítr je nyní mnohem přirozenější. Z korun se ozývá <span
        className='text-highlighter'>zpěv ptáků</span>, mezi kořeny se objevují <span className='text-highlighter'>drobní živočichové</span> a
      i rostliny nyní vypadají mnohem <span className='text-highlighter'>živěji</span> a stromy mohutněji. Tato <span
        className='text-highlighter'>rovnováha živlů</span> pak stvrzuje samotné <span className='text-highlighter'>splnění úkolu</span>.
    </p>

    <h2>Vypracování pátého úkolu</h2>
  <hr />

<table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
      </tr>
      <tr>
        <td>Sofia Amarilis Perez</td>
        <td>34</td>
        <td><a href="/casstellobruxxo/ukoly/5/SofiaAmarilisPerez5.pdf" target="_blank">Vypracování</a></td>
      </tr>
    
      
      <tr>
        <td>Inés Soraya Caro</td>
        <td>31</td>
        <td><a href="/casstellobruxxo/ukoly/5/InesSorayaCaro.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Sofía Sánchez</td>
        <td>28</td>
        <td><a href="/casstellobruxxo/ukoly/5/SofiaSanchez5.pdf" target="_blank">Vypracování</a></td>
      </tr>
      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>26</td>
        <td><a href="/casstellobruxxo/ukoly/5/JuanMiguelSantosRamirez5.pdf" target="_blank">Vypracování</a></td>
      </tr>
     
      
      

       <tr>
        <td>Lucia Juliana Navarro</td>
        <td>23</td>
        <td><a href="/casstellobruxxo/ukoly/5/LuciaJulianaNavarro5.pdf" target="_blank">Vypracování</a></td>
      </tr>
      <tr>
        <td>Mateo Benítez</td>
        <td>20</td>
        <td><a href="/casstellobruxxo/ukoly/5/MateoBenitez5.pdf" target="_blank">Vypracování</a></td>
      </tr>

      <tr>
        <td>Chiara Antonia José</td>
        <td>19</td>
        <td><a href="/casstellobruxxo/ukoly/5/ChiaraAntoniaJose5.pdf" target="_blank">Vypracování</a></td>
      </tr>
      
    </table>
    <br/>
    <div className="main-header"><h1>Škola hrou</h1></div>

    <h2>Nonrpg část</h2>
    <hr/>

    <p>Častokrát slýcháme, že byste rádi <span className='text-highlighter'>nový vyučovací předmět</span>. Který bude
      však ten <span className='text-highlighter'>nejlepší</span>, co by mohl zaujmout <span
        className='text-highlighter'>největší množství</span> hráčů a hru nejvíce ozvláštnit? Vydáte se cestou <span
        className='text-highlighter'>kroužku, kurzu</span> nebo přímo <span className='text-highlighter'>předmětu</span>?
      V tom máte naprostou volnost. Předmětem musí být něco, co se na projektu <span className='text-highlighter'>nikdy nevyučovalo</span> a
      bude to <span className='text-highlighter'>originální</span> pro největší množství hráčů. Nevyplatí se tedy být
      příliš konkrétní s výběrem oborem (péče o prasata), ovšem ani ne příliš obecný (magie).</p>

    <p>Jaké <span className='text-highlighter'>náležitosti</span> by měly být v práci zpracovány?</p>

    <ul>
      <li><span className='text-highlighter'>Název</span></li>
      <li><span className='text-highlighter'>Typ předmětu</span> – kroužek/kurz/předmět</li>
      <li><span className='text-highlighter'>Popis</span> – obecně o předmětu</li>
      <li><span className='text-highlighter'>Osnova</span> na 10 vyučovacích hodin (název hodiny + krátký popis, čeho by
        se látka týkala)
      </li>
      <li>V případě potřeby <span className='text-highlighter'>kouzel</span> název + účinek</li>
    </ul>


    <h2>Inrpg část</h2>
    <hr/>

    <h3>Získání „části“ zvířete etickým způsobem</h3>

    <img src={sesty_ukol_01} className='img-in-text img-in-text-left'/>

    <p>V okolí se pohybují různí <span className='text-highlighter'>kouzelní tvorové</span>, všichni reagují na <span
      className='text-highlighter'>chování, emoce a pohyby</span>. Jejich přirozeným vývojem či interakcí s okolím občas
      vznikají drobné, <span className='text-highlighter'>nenásilně získatelné</span> dary přírody. Může jít o <span
        className='text-highlighter'>slzu</span>, vypadnutý <span className='text-highlighter'>brk</span>, kousek <span
        className='text-highlighter'>srsti</span>, malý úlomek <span className='text-highlighter'>krunýře</span>, nebo
      jakýkoliv jiný prvek, který má využití i v jiných kouzelnických oborech.</p>

    <img src={sesty_ukol_02} className='img-in-text img-in-text-right'/>

    <p>Vaším úkolem je <span className='text-highlighter'>získat</span> těchto drobností co <span
      className='text-highlighter'>nejvíce</span>, aniž byste tvorům jakkoliv <span
      className='text-highlighter'>ublížili</span> nebo je vystavili nebezpečné situaci či stresu. Jde o zkoušku <span
      className='text-highlighter'>ohleduplnosti, trpělivosti</span> a schopnosti navázat s přírodou <span
      className='text-highlighter'>souznění</span>.</p>

    <p><span className='text-highlighter'>Pozor:</span> žádný z těchto darů nelze získat <span
      className='text-highlighter'>silovým kouzlem</span> ani <span className='text-highlighter'>násilím</span>. Reagují
      pouze na <span className='text-highlighter'>lidský dotek</span>, <span className='text-highlighter'>přirozený přístup</span> a <span
        className='text-highlighter'>nesilová kouzla</span>.</p>

      <h2>Vypracování šestého úkolu</h2>
  <hr />

        <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>Body</td>
        <td>Vypracování</td>
      </tr>
      <tr>
        <td>Sofia Amarilis Perez</td>
        <td>34</td>
        <td><a href="/casstellobruxxo/ukoly/6/SofiaAmarilisPerez6.pdf" target="_blank">Vypracování</a></td>
      </tr>
      
      <tr>
        <td>Inés Soraya Caro</td>
        <td>33</td>
        <td><a href="/casstellobruxxo/ukoly/6/InesSorayaCaro6.pdf" target="_blank">Vypracování</a></td>
      </tr>
      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>32</td>
        <td><a href="/casstellobruxxo/ukoly/6/JuanMiguelSantosRamirez6.pdf" target="_blank">Vypracování</a></td>
      </tr>
      <tr>
        <td>Chiara Antonia José</td>
        <td>23</td>
        <td><a href="/casstellobruxxo/ukoly/6/ChiaraAntoniaJose6.pdf" target="_blank">Vypracování</a></td>
      </tr>
     
      <tr>
        <td>Mateo Benítez</td>
        <td>19</td>
        <td><a href="/casstellobruxxo/ukoly/6/MateoBenitez6.pdf" target="_blank">Vypracování</a></td>
      </tr>
    
  
    </table>

  </div>
)

export default ZadaniAVypracovani