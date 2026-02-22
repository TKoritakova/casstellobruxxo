import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import aplikovana_magibotanika from '../../img/predmety/uvod/aplikovana_magibotanika.png';
import cizokrajne_jedy_a_protijedy from '../../img/predmety/uvod/cizokrajne_jedy_a_protijedy.png';
import cernomagicti_tvorove from '../../img/predmety/uvod/cernomagicti_tvorove.png';
import chov_a_ochrana_magickych_tvoru from '../../img/predmety/uvod/chov_a_ochrana_magickych_tvoru.png';
import prirodni_magie from '../../img/predmety/uvod/prirodni_magie.png';
import ritualni_magie from '../../img/predmety/uvod/ritualni_magie.png';

const Vedlejsi = () => (
  <div>
     <nav className="second-nav">
             <Link to="/casstellobruxxo/hlavni">Hlavní oborové předměty</Link>
             <Link to="/casstellobruxxo/vedlejsi">Vedlejší oborové předměty</Link>
             <Link to="/casstellobruxxo/volitelne">Volitelné předměty</Link>
             <Link to="/casstellobruxxo/vycvik">Terénní výcvik</Link>
         </nav>

    <div className="main-header"><h1>Vedlejší oborové předměty</h1></div>

  

    <p><span className='text-highlighter'>Specifikace:</span> Studenti si je mají možnost navolit ve třetím ročníku. Musí ale prokázat, že mají dostatečnou průpravu, aby se do nich skutečně zapsat mohli. Studium vedlejších předmětů je na pět let.<br />
    <span className='text-highlighter'>Každoroční zakončení:</span> Každý rok se skládají zkoušky promítající praktické i teoretické znalosti.<br />
    <span className='text-highlighter'>Dokončení studia předmětu:</span> Jedna teoretická a jedna praktická zkouška.</p>

    <h3>Aplikovaná magibotanika</h3>
    <img src={aplikovana_magibotanika} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Tristán Yeray Moreno<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku obecné magibotaniky alespoň na uspokojivou.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Aplikovaná magibotanika poskytuje další rozšíření ve znalostech bylinek a hlavně v tom, jak se o které rostliny <span className='text-highlighter'>správně starat</span> a jak jim poskytnout tu nejlepší možnou péči. Součástí jsou také <span className='text-highlighter'>terénní výpravy</span>, během nichž se studenti lépe naučí chápat <span className='text-highlighter'>pozici rostlin v ekosystému</span> a jednotlivé mezidruhové vztahy.</p>


    <h3>Cizokrajné jedy a protijedy</h3>
    <img src={cizokrajne_jedy_a_protijedy} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Jared Ilai Moreno<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku lékouzelnictví na dechberoucí.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět studenty seznamuje s jedy a toxiny používanými v různých částech světa a jejich účinky na (nejen) lidský organismus. Studenti se učí bezpečně <span className='text-highlighter'>identifikovat jedovaté látky</span>, chápat jejich <span className='text-highlighter'>mechanismy působení</span> a <span className='text-highlighter'>určovat vhodné protijedy</span> pro konkrétní situace. Praktická část zahrnuje přípravu a aplikaci protijedů, testování jejich účinnosti a <span className='text-highlighter'>prevenci před otravami</span>, přičemž důraz je kladen na kombinaci teoretických znalostí a praktických dovedností. </p>


    <h3>Černomagičtí tvorové</h3>
    <img src={cernomagicti_tvorove} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Ernesto Azevedo<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku obecné magizoologie alespoň na uspokojivou.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět se zabývá tvory, se kterými se studenti běžně nesetkávají, a rozvíjí jejich znalosti <span className='text-highlighter'>interakce a obrany</span> před těmito bytostmi. Součástí studia je detailní pochopení <span className='text-highlighter'>anatomie, fyziologie a etologie</span> těchto tvorů. Kurz poskytuje rozšířené znalosti pro studenty specializované na magizoologii.</p>


    <h3>Chov a ochrana magických tvorů</h3>
    <img src={chov_a_ochrana_magickych_tvoru} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučovala:</span> Carmilla Iris José<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku obecné magizoologie alespoň na uspokojivou.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Rozšiřující studium poskytující komplexnější vědění o tom, co je podstatné při <span className='text-highlighter'>starání se</span> o kouzelné tvory. Nenabízejí se zde detailní rozbory jednotlivých druhů (od toho jsou tu předměty zaměřující se přímo na tvory), ale spíše rozšiřují znalosti <span className='text-highlighter'>etiky</span> starosti o magické tvory, právní normy platné v rámci Jižní Ameriky i celosvětového systému a různé know-how.</p>

    <a className='game-archive-button with-arrow' href="/casstellobruxxo/komunikace" target="_blank" rel="noopener noreferrer">Číst více o komunikaci s tvory</a>  

    <h3>Přírodní magie</h3>
    <img src={prirodni_magie} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Jared Ilai Moreno<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku magie běžného užití na uspokojivou.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Kurz studenty postupně seznamuje s elementární magií a <span className='text-highlighter'>fungováním magického světa</span>. V prvním ročníku se učí <span className='text-highlighter'>základy magikvarků</span> – jejich síť, shlukování magie a magické proudy. Druhý ročník je věnován <span className='text-highlighter'>magické podstatě kouzelných tvorů a rostlin</span>. Ve třetím ročníku studenti zkoumají <span className='text-highlighter'>artefakty</span>, jejich magické vlastnosti a způsoby, jak s nimi pracovat. Čtvrtý ročník je věnován <span className='text-highlighter'>krystalům a nerostům</span> – jejich energetickým polím, magickým účinkům a propojení s přírodními elementy. Pátý ročník se soustředí na <span className='text-highlighter'>elementární magii vody</span> a schopnost pracovat s její energií. Studium klade důraz na harmonii s přírodou a vyvážené využívání její magie.</p>


    <h3>Rituální magie</h3>
    <img src={ritualni_magie} className='img-in-text img-in-text-right' />
    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Tristán Yeray Moreno<br />
    <span className='text-highlighter'>Musí splnit:</span> Ukončení druhého ročníku obecné magibotaniky alespoň na uspokojivou.<br />
    <span className='text-highlighter'>Náplň předmětu:</span> V úvodu předmětu se studenti seznamují se základy <span className='text-highlighter'>práce s vlastní životní energií</span>, jednoduchými <span className='text-highlighter'>meditačními technikami</span> a základními rituály, postupně se učí využívat rituální byliny. V dalších letech navazuje intenzivnější výcvik v oblasti <span className='text-highlighter'>jasnovidectví</span>, práce se „třetím okem“ a náročnějších obřadů. Paralelně se připravují na kontakt s různými <span className='text-highlighter'>kmenovými tradicemi</span>, včetně zvládání jejich přijímacích zvyklostí. Od šestého ročníku se výuka přesouvá do terénu: studenti <span className='text-highlighter'>navštěvují přátelské kmeny</span>, sbírají praktické zkušenosti a poznatky, které obohacují jejich studium. V závěrečném ročníku realizují vlastní mise nebo pracují ve skupinách a výsledky shrnují do podrobného dokumentu, který slouží jako jejich závěrečná práce.</p>

        
         


        





  </div>
)

export default Vedlejsi