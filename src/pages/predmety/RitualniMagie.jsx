import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import uvod from '../../img/predmety/ritualni_magie/uvod.png';
import soplar from '../../img/predmety/ritualni_magie/soplar.png';
import lazen from '../../img/predmety/ritualni_magie/lazen.png';
import jaguar from '../../img/predmety/ritualni_magie/jaguar.png';
import levitace from '../../img/predmety/ritualni_magie/levitace.png';

const RitualniMagie = () => (
  <div>


    <div className="main-header"><h1>Rituální magie</h1></div>

    <h2>Kořeny a filosofie</h2>
    <hr/>

    <img src={uvod} className='img-in-text img-in-text-right'/>

    <p>Rituální magie představuje v Castelobruxu jednu z nejstarších forem magické praxe, jejíž kořeny sahají přes
      sedmdesát tisíc let do minulosti. Nejedná se o pouhý soubor kouzel, ale o komplexní metodu <span
        className='text-highlighter'>navazování spojení s
      posvátnými světy a silami přírody.</span> Ačkoliv bývá skrze osobu profesora Morena mladšího někdy spojována s
      náboženským prožitkem a možností komunikace s vyššími silami, samotná výuka víru nikomu nevnucuje; soustředí se
      především na <span
        className='text-highlighter'>diagnostiku a léčbu nemocí, harmonizaci energie a hledání odpovědí</span>, které
      přesahují běžné smyslové
      poznání.
    </p>

    <h2>Posvátné prostory</h2>
    <hr/>

    <p>Základním kamenem této disciplíny je práce s vlastní životní energií a dechem. Studenti se již od počátku učí, že
      rituál nevyžaduje jen technickou přesnost, ale především <span className='text-highlighter'>vnitřní čistotu, pokoru a soustředění</span>.
      Bez těchto kvalit
      nelze bezpečně vstoupit do „posvátného kruhu“ magie. Tyto prostory k soustředění nacházejí studenti nejčastěji na
      stinných střešních terasách s výhledem na džungli, v altáncích uprostřed pralesních zahrad, na <span
        className='text-highlighter'>místech zasvěcených
        předkům, u ohniště uprostřed kamenného kruhu</span> historicky úzce spjatého s rituály, nebo ve <span
        className='text-highlighter'>specializovaných
        rituálních jeskyních</span>, které se nacházejí v odlehlejších částech školního komplexu.</p>


    <h2>Síla dechu</h2>
    <hr/>

    <img src={soplar} className='img-in-text img-in-text-left'/>

    <p>Dech je zde vnímán jako most mezi tělem a duchem, což se projevuje v technikách jako <span
      className='text-highlighter'>soplar</span> a <span className='text-highlighter'>chupar</span>. Zatímco při
      první zmiňované šaman <span className='text-highlighter'>vydechuje posvátný tabákový kouř (mapacho) či byliny na tělo pacienta</span>,
      aby „otevřel“
      zablokovaná místa a vyčistil auru, technika chupar slouží k symbolickému <span className='text-highlighter'>vysátí negativní energie či zárodku
        nemoci</span>, který je následně bezpečně vyplivnut mimo tělo. K usměrňování dechu a manipulaci s energií se při
      těchto
      úkonech často využívají vyřezávané <span className='text-highlighter'>kostěné dýmky</span> a <span
        className='text-highlighter'>svazky listů</span> zvané <i>chacapa</i>, které rytmickým zvukem odhánějí zlé
      duchy.
    </p>

    <h2>Rostlinná magie</h2>
    <hr/>

    <p>Nedílnou součástí amazonských rituálů jsou rostliny, které jsou vnímány jako živé bytosti s vlastními duchy.
      Nejvýznamnější z nich je liána Banisteriopsis caapi, známá jako <span
        className='text-highlighter'>ayahuasca</span>. Tento posvátný nápoj, jehož příprava i
      užívání se řídí přísnými pravidly včetně asketické „diety“, otevírá cestu k <span className='text-highlighter'>hlubokým vizím a vnitřní očistě</span>.
      Ačkoliv se v Castelobruxu s ayahuascou pracuje z bezpečnostních důvodů spíše teoreticky, studenti se učí chápat
      její schopnost uzdravovat tělo i duši skrze konfrontaci s vlastním nitrem.
    </p>

    <img src={lazen} className='img-in-text img-in-text-right'/>

    <p>Pro každodenní očistu se využívá <span className='text-highlighter'>baño de flores</span> – rituální lázeň
      ze <span className='text-highlighter'>směsi květů, listů, ovoce a esenciálních
      olejů</span>. Její složení se mění podle záměru, ať už jde o uzdravení nebo například ochranu. Rituál probíhá v
      tichém
      soustředění; vůně a energie rostlin omyjí tělo i ducha, což přináší celkové <span className='text-highlighter'>uvolnění svalstva a mysli</span>.
      Studenti si
      jen musí hlídat případné alergie na jednotlivé složky. V Castelobruxu tyto <span className='text-highlighter'>malé lokální lázně</span> spravuje
      profesor
      Moreno mladší. Zájemcům slouží jako duchovní průvodce a očistu někdy doplňuje modlitbami a zpěvy, po kterých často
      následuje krátké období klidu či půstu. V samotných hodinách rituální magie se pak studenti učí rozeznávat účinky
      bylinných přísad a chápat symboliku této vnitřní rovnováhy.
    </p>

    <h2>Živočisná magie</h2>
    <hr/>

    <p>Kromě rostlinné říše využívá rituální magie i sílu pralesní fauny, což dokládá náročný obřad <span
      className='text-highlighter'>kambo</span>. Při něm se
      <span className='text-highlighter'> sekret žáby</span> listovnice dvoubarvé <i>(Phyllomedusa bicolor)</i> <span
        className='text-highlighter'>vtírá do drobných ran na kůži</span>, předem
      vypálených doutnajícím dřívkem. To vyvolává intenzivní fyzickou reakci a následné <span
        className='text-highlighter'>posílení imunitního systému</span>.
      Celý proces je doprovázen zpěvy <span className='text-highlighter'>ikaros</span>.
    </p>

    <a className='game-archive-button' href="/casstellobruxxo/Ritualka1.html" target="_blank" rel="noopener noreferrer">Otevřít
      archiv hodiny (NonRPG 15. 10. 2025)</a>

    <h2>Castelobrušské rituály</h2>
    <hr/>

    <p>Kromě těchto tradičních praktik vyvinula škola i vlastní specifické postupy.
    </p>

    <h3>Rituál dešťové rezonance</h3>

    <p>Slouží k <span className='text-highlighter'>posílení růstu bylin</span> v okolí školy a úzce s ním pracuje
      spolek <span className='text-highlighter'>Ochránci pralesa</span>. Studenti při rituálu
      využívají rytmické podupávání, údery do dřevěných bubnů a zpěv <span className='text-highlighter'>ikaros</span> k
      ovlivnění geoquarků a aquaquarků, čímž
      ladí magickou síť tak, aby rostliny pohlcovaly vlhkost a transformovaly ji v čistou životní energii.
    </p>

    <h3>Zrcadlení Jaci</h3>
    <p>Noční rituál, který se provádí přímo u hradního jezírka nebo na střešních terasách. <span
      className='text-highlighter'>Do klidné hladiny vody</span> v
      jezírku nebo v obřadních miskách studenti <span className='text-highlighter'>symbolicky ukládají své obavy</span>,
      které jsou následně rozpuštěny očistným
      měsíčním světlem.
    </p>

    <h3>Sopro do jaguara</h3>

    <img src={jaguar} className='img-in-text img-in-text-left'/>

    <p>Tento rituál si oblíbilo zejména Bratrstvo jaguára, polotajné sdružení, které testuje hranice dovoleného – často
      například při zapovězených výpravách do ruin starých chrámů v podzemí. <span className='text-highlighter'>Směsí drceného ohnivého achátu a prášku
        urucum</span> (připravovaná ve vulkanických hmoždířích) se <span
        className='text-highlighter'>potírají spánky</span>. Tento obřad zostřuje smysly a díky dočasnému
      přeladění vnímání umožňuje studentovi <span className='text-highlighter'>vidět v naprosté tmě</span>.
    </p>

    <h2>Návštěvy kmenů</h2>
    <hr/>

    <p>Důležitým prvkem výuky rituální magie je <span className='text-highlighter'>kontakt s autentickými kouzelnickými kmeny</span> Amazonie.
      Mezi nejbližší
      spojence školy patří kmen <span className='text-highlighter'>Shipibo-Conibo</span>, mistři geometrických vzorů a
      písní <span className='text-highlighter'>ikaros</span>, a ekvádorská komunita <span
        className='text-highlighter'>Kichwa</span>,
      od které škola přejala ranní <span className='text-highlighter'>wayusové ceremonie</span>. Dalším cílem studijních
      cest je kmen <span className='text-highlighter'>Tuyuka</span>, známý jako Papouščí
      lidé, který se specializuje na <span className='text-highlighter'>magii ptačího peří</span>. Tuyukové věří, že
      každé pírko nese otisk letu, a učí studenty
      rituály k <span className='text-highlighter'>vytváření stabilních vzdušných proudů</span> využívaných během letu
      na kánoi. Vrcholem jejich učení je <span className='text-highlighter'>rituál
        půjčených křídel</span>, během něhož se studenti učí <span className='text-highlighter'>základům levitace</span>.
      Ačkoliv k samotnému vzestupu využívají hůlku a
      konkrétní kouzla, technika vyžaduje čerpání <span
        className='text-highlighter'>energie z okolí i z vlastního nitra</span>. Jde o hluboký <span
        className='text-highlighter'>meditační
        prostředek</span>, který slouží k propojení kouzelníka s tím, co se nachází nad ním.
    </p>

    <img src={levitace} className='img-in-text img-in-text-right'/>

    <p>Zcela odlišný přístup představují <span className='text-highlighter'>mestizos healers</span>, městští léčitelé
      operující v uzlech jako Iquitos. Tato
      komunita učí studenty, jak <span
        className='text-highlighter'>šamanské rituály adaptovat na moderní diagnostiku</span>. Jsou mistry v
      rozpoznávání nemocí
      uprostřed magického šumu velkoměst a využívají rituální předměty, které detekují kletby i v prostředí “znečištěném
      civilizací”. Studenti se u nich učí provádět <span className='text-highlighter'>očistné rituály pod tlakem času a v omezeném prostoru</span>.
    </p>

    <p>Zatímco tito léčitelé jsou světu otevření, jiné kmeny jako <span
      className='text-highlighter'>Matsés</span> nebo <span className='text-highlighter'>Yawanawá</span> si své rituály
      úzkostlivě chrání
      – povolují přístup jen některým profesorům, již jsou často zavázáni mlčenlivostí. Zcela izolované pak
      zůstávají <span className='text-highlighter'>neviditelné kmeny</span> v hloubi nedařského pralesa, jako jsou
      bájní <span className='text-highlighter'>Arakmbuti</span>, o kterých se věří, že dokáží vytvořit
      díry v realitě a zmizet před zraky kohokoliv nepovolaného. Studium v Castelobruxu tak vrcholí v terénu, kde
      studenti poznávají, že skutečná síla nepramení z ovládání přírody, ale ze schopnosti stát se její součástí.
    </p>

    <a className='game-archive-button' href="/casstellobruxxo/Ritualka2.html" target="_blank" rel="noopener noreferrer">Otevřít
      archiv hodiny (NonRPG 29. 10. 2025)</a>


  </div>
)

export default RitualniMagie