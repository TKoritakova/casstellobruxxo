import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import MagieNav from './MagieNav'

import aegis_persona from '../../img/predmety/artefakty/obecne/aegis_persona.png';
import aeroquark from '../../img/predmety/artefakty/obecne/aeroquark.png';
import aethquark from '../../img/predmety/artefakty/obecne/aethquark.png';
import anima_verde from '../../img/predmety/artefakty/obecne/anima_verde.png';
import aqua_eructo from '../../img/predmety/artefakty/obecne/aqua_eructo.png';

import aquaquark from '../../img/predmety/artefakty/obecne/aquaquark.png';
import ferroquark from '../../img/predmety/artefakty/obecne/ferroquark.png';
import flipendo from '../../img/predmety/artefakty/obecne/flipendo.png';
import geoquark from '../../img/predmety/artefakty/obecne/geoquark.png';
import incendio from '../../img/predmety/artefakty/obecne/incendio.png';

import inflatus from '../../img/predmety/artefakty/obecne/inflatus.png';
import lumoquark from '../../img/predmety/artefakty/obecne/lumoquark.png';
import magikvarky_01 from '../../img/predmety/artefakty/obecne/magikvarky_01.png';
import noxquark from '../../img/predmety/artefakty/obecne/noxquark.png';
import pyroquark from '../../img/predmety/artefakty/obecne/pyroquark.png';

import umbraquark from '../../img/predmety/artefakty/obecne/umbraquark.png';
import vapoquark from '../../img/predmety/artefakty/obecne/vapoquark.png';
import vzpominka from '../../img/predmety/artefakty/obecne/vzpominka.png';

const Magikvarky = () => (
  <div>

    <MagieNav/>


    <div className="main-header"><h1>Magikvarky</h1></div>

    <img src={magikvarky_01} className='img-in-text img-in-text-right'/>

    <p>Celé fungování magie, jak se učí každý student v prvních letech studia, si je možné představit jako <span
      className='text-highlighter'>ovlivňování a ohýbání sítě magikvarků</span>. Pokud se na to ale podíváme více do
      hloubky, vše se zdá být ještě o něco <span className='text-highlighter'>komplikovanější</span> – síť totiž není na
      každém místě stejná, stabilní, pravidelná a ani nemá pevnou strukturu. Stejně tak všechny magikvarky nejsou stejné
      – <span className='text-highlighter'>existuje několik typů</span>, každý typ má určité <span
        className='text-highlighter'>vlastnosti</span>, kterými ovlivňuje své okolí. Zároveň mohou být magikvarky
      i <span className='text-highlighter'>různých velikostí</span>. Mezi magikvarky mohou a nemusí být <span
        className='text-highlighter'>můstky</span> – a pokud jsou, mohou mít <span className='text-highlighter'>různou délku, pevnost i pružnost</span>.
      Pochopit magii do hloubky tedy není vůbec jednoduché, proto se pro zjednodušení využívají určité <span
        className='text-highlighter'>reprezentace sítě</span>.</p>

    <p>V Jižní Americe nejznámější způsob – se kterým se můžete setkat například při používání artefaktu <span
      className='text-highlighter'>Olho de Vidro Anúrico</span> – rozděluje magikvarky do několika typů, každému typu
      přiděluje vlastnosti a <span className='text-highlighter'>určitou barvu</span>. Výhodou tohoto způsobu je, že na
      první pohled <span className='text-highlighter'>můžeme vidět typické vlastnosti</span> předmětu nebo kouzla, na
      jehož magikvarkovou vizualizaci se podíváme. Ani toto zobrazení ale <span className='text-highlighter'>není dokonale přesné</span> –
      typů magikvarků může být ještě o dost více, některé se mohou v mnoha věcech shodovat, ale v některých se lišit.
    </p>

    <h2>Základní typy magikvarků</h2>
    <hr/>

    <table className="post-tabulka">
      <tr>
        <td>Typ magikvarku</td>
        <td>Síla</td>
        <td>Barva (při vizualizaci)</td>
        <td>Typické projevy</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Aeroquark</span></td>
        <td><i>Ybytu (Vítr)</i></td>
        <td>Bílá, světle šedá</td>
        <td>myšlenky, rychlost, zvuk</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Aquaquark</span></td>
        <td><i>Yara (Voda)</i></td>
        <td>Modrá, tyrkysová</td>
        <td>léčení, proudění, intuice</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Geoquark</span></td>
        <td><i>Yvy (Země)</i></td>
        <td>Zelenohnědá</td>
        <td>stabilita, ochrana, hmota</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Lumoquark</span></td>
        <td><i>Sol (Světlo)</i></td>
        <td>Zářivě bílá</td>
        <td>očista, zjevení, pravda</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Noxquark</span></td>
        <td><i>Jaci (Temnota)</i></td>
        <td>Fialová, černá</td>
        <td>iluze, skrytí, klid</td>
      </tr>
      <tr>
        <td><span className='text-highlighter'>Pyroquark</span></td>
        <td><i>Tatá (Oheň)</i></td>
        <td>Zlato-rudá</td>
        <td>teplo, vášeň, destrukce</td>
      </tr>
    </table>

    <h3>Aeroquark (vzduch)</h3>

    <img src={aeroquark} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Charakteristika:</span> bílá až perleťová barva, rychlé oscilace, chvění,
      pohyb</p>

    <p>Aquaquark představuje <span className='text-highlighter'>intelekt, rychlost a často také komunikaci</span>. V
      síti se neustále <span className='text-highlighter'>pohybuje, chvěje a osciluje</span>. Díky tomu může
      připomínat <span className='text-highlighter'>nervovou soustavu</span> magie – informace oproti aquaquarkům
      přenáší <span className='text-highlighter'>rychle</span>. Aeroquarky významně reagují na <span
        className='text-highlighter'>rytmus a pravidelnost</span>, díky tomu jsou součástí veršovaných kouzel, manter a
      zpěvů.</p>

    <p>Ze všech typů kvarků bývá typicky <span className='text-highlighter'>nejmenší, nejlehčí a nejrychlejší</span>.
      Bývá vázán velmi <span className='text-highlighter'>slabými a pružnými můstky</span>. Je velmi složité tento typ
      magie uzemnit a kontrolovat, má tendenci samovolně klouzat skrz síť a vytvářet <span
        className='text-highlighter'>„šum”</span>.</p>

    <h3>Aquaquark (voda)</h3>
    <img src={aquaquark} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Charakteristika:</span> modrá až tyrkysová klidná záře, chladivý pocit,
      tvoření vírů, plynulost</p>

    <p>Zatímco pyroquark energii vytváří a spotřebovává, aquaquark ji <span className='text-highlighter'>uchovává a přenáší</span>.
      V magikvarkové síti má funkci základního <span className='text-highlighter'>přenosu informace</span>, díky své
      schopnosti plynulého toku – <span className='text-highlighter'>laminárního proudění</span> – je ideální pro <span
        className='text-highlighter'>paměťová kouzla, léčení nebo přenos emocí</span>. Ve vizualizaci se jeví jako
      chladivý proud, který vytváří <span className='text-highlighter'>hluboké víry</span>, ve kterých je uložený záměr
      kouzelníka, informace apod.</p>

    <p>Namísto překovávání a rozbíjení překážek volí magiquarky cestu <span className='text-highlighter'>obtékání</span>,
      okolní síť ovlivňují minimálně. Proto je důležitá u kouzel s převahou tohoto typu kvarku přítomnost i jiných typů
      – v opačném případě se může kouzlo <span className='text-highlighter'>rozplynout a ztratit efekt</span>.</p>

    <h3>Geoquark (země)</h3>
    <img src={geoquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> zelenohnědá, pevná struktura, ukotvení, uzly</p>

    <p>Geoquark si lze představit jako <span className='text-highlighter'>kostru celé sítě</span>. Tyto částice jsou ze
      všech <span className='text-highlighter'>nejtěžší, nejpomalejší</span> a mají tendenci se <span
        className='text-highlighter'>nejsilněji vázat do pevných uzlů</span>. Vytvářejí pravidelnou a stabilní síť, skrz
      kterou je těžké proniknout, proto se často využívají při <span className='text-highlighter'>ukládání magie do předmětů či tvoření bariér</span>.
      Kouzla s přítomností tohoto typu kvarků mají největší trvanlivost, dávají magii tvar a dlouhodobost.</p>

    <p>Práce s geoquarky vyžaduje <span className='text-highlighter'>trpělivost</span> – formování sítě trvá poměrně
      dlouho, po zformování je však <span className='text-highlighter'>těžko změnitelná</span>. Při absenci ostatních
      typů kvarků, primárně aeroquarků, hrozí <span className='text-highlighter'>zkostnatění sítě</span> – oblast se
      stane inertní, nereaguje na magii, pohlcuje okolní kouzla.</p>

    <h3>Lumoquark (světlo)</h3>
    <img src={lumoquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> ostrá, zářivě bílá až zlatá, geometrická přesnost</p>

    <p>Lumoquark je principem <span className='text-highlighter'>řádu, pravdy a dobra</span>. V síti působí jako
      organizační prvek – nutí ostatní částice <span className='text-highlighter'>formovat se do pravidelnějších struktur</span>.
      Používá se k (<i>oproti geoquarkům</i> <span className='text-highlighter'>flexibilnímu</span>) <span
        className='text-highlighter'>uchování stability sítě, odhalování iluzí nebo očistě</span>. Reaguje na
      přítomnost <span className='text-highlighter'>černé magie</span> – zvýší sílu svých vibrací a <span
        className='text-highlighter'>vypaluje</span> černomagické vazby v síti.</p>

    <p>Nebezpečím lumoquarku, v případě příliš silné koncentrace, je odhalení všech tajemství. V takovém případě je vše
      tak přesně strukturované, že síť <span className='text-highlighter'>ztrácí prostor pro tajemnost a dokonce i růst nové magie</span>.
    </p>

    <h3>Noxquark (temnota)</h3>
    <img src={noxquark} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Charakteristika:</span> černofialová, sametová, pohlcující tajemnost</p>

    <p>Noxquark nemusí vždy znamenat zlo nebo černou magii – jak je často chybně interpretován. Je principem <span
      className='text-highlighter'>klidu, tajemnosti a hloubky</span>. Vytváří v síti <span
      className='text-highlighter'>tiché kapsy</span> s nízkým šumem, izolované od okolí, kde může <span
      className='text-highlighter'>uchovat složitá kouzla</span>.</p>

    <p>Jsou naprosto klíčové pro <span className='text-highlighter'>iluze a schopnost neviditelnosti</span>. Pokud však
      noxquarky převládnou nad celou sítí, tvoří silné <span
        className='text-highlighter'>záchvěvy melancholie a apatie</span>, kterým může podlehnout okolí. Zároveň tvoří
      magickou slepotu.</p>

    <h3>Pyroquark (oheň)</h3>
    <img src={pyroquark} className='img-in-text img-in-text-right'/>
    <p><span className='text-highlighter'>Charakteristika:</span> zlatorudá barva, silný jas, teplo, tlak „zevnitř ven“
    </p>

    <p>Pyroquark je projevem <span className='text-highlighter'>čisté kinetické energie a změny</span>. V síti se chová
      ze všech <span className='text-highlighter'>nejagresivněji</span> – vyhledává nejvyšší energetický potenciál, má
      tendenci shlukovat se do vláken a společně <span className='text-highlighter'>vytvářet tlak</span> na své okolí.
    </p>

    <p>Funguje prakticky jako <span className='text-highlighter'>motor magie</span> – všechna silnější bojová kouzla
      využívají pyroquarky, které tvoří <span className='text-highlighter'>ostré a silně se měnící fraktály</span>.
      Dokážou <span className='text-highlighter'>nejrychleji</span> a <span
        className='text-highlighter'>nejvíce</span> ovlivnit okolní síť, na druhou stranu jsou však <span
        className='text-highlighter'>velmi nestabilní</span> a v případě přehuštění sítě hrozí <span
        className='text-highlighter'>řetězová reakce</span>, která rozbije všechny můstky a silně rozvibruje okolní
      magikvarky. Příkladem této řetězové reakce může být třeba <span className='text-highlighter'>zložár</span>, který
      tímto způsobem může zničit jakoukoliv magii, rozbitím sítě však <span className='text-highlighter'>ztrácí kouzelník kontrolu nad kouzlem</span>.
    </p>

    <h2>Kombikvarky</h2>
    <hr/>

    <p>Vzhledem ke komplexnosti magie se často můžete setkat i s kombinací několika těchto kvarků – těm říkáme <span
      className='text-highlighter'>kombiquarky</span>. Ty mohou být vytvořeny <span
      className='text-highlighter'>srážkou</span> dvou typů kvarků. Společně vytvoří novou <span
      className='text-highlighter'>stabilní částici s unikátními vlastnostmi</span>. Takový kvark může být vytvořený
      spojením <span className='text-highlighter'>jakýchkoliv dvou typů</span> – přestože některé jsou <span
        className='text-highlighter'>silně nestabilní</span> – nejčastější jsou však tyto čtyři:</p>

    <h3>Aethquark (éter = Aero + Lumo)</h3>
    <img src={aethquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> průzračnost, duhové odlesky</p>

    <p>Aethquark představuje <span className='text-highlighter'>nejjemnější formu</span> magické sítě. Kombinuje
      rychlost a kapacitu vzduchu s odhalující pravdou světla, vytváří tak v síti oblasti s <span
        className='text-highlighter'>obrovskou rychlostí přenosu informace a velmi vysokou spolehlivostí</span>. Na
      druhou stranu je ale <span className='text-highlighter'>velmi složité</span> takový kvark vůbec stvořit. I přesto,
      že po stvoření je velmi <span className='text-highlighter'>stabilní</span>, se částice při srážce málokdy spojí.
    </p>

    <p>Umožňuje <span className='text-highlighter'>nahlížet skrze prostor a často i skrz čas</span> bez toho, aby
      narušil sledovanou událost. Právě proto bývá často využíván v <span className='text-highlighter'>jasnovidectví a vizionářství</span>.
      Stejně tak se právě tento typ kvarku využívá, pokud se skrze magii chceme <span className='text-highlighter'>podívat na magikvarkovou síť</span> –
      dokáže totiž zobrazit i ty nejslabší stopy magie.</p>

    <h3>Ferroquark (kov = Pyro + Geo)</h3>
    <img src={ferroquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> temně oranžová žhnoucí, šedá krusta, jiskření</p>

    <p>Pokud se setká nepoddajnost <span className='text-highlighter'>země</span> s energií a silou <span
      className='text-highlighter'>ohně</span>, může vzniknout ferroquark. Tato částice umožňuje <span
      className='text-highlighter'>změnit strukturu</span> pevné hmoty <span className='text-highlighter'>zevnitř</span>.
      To je možné díky vlastnosti ferroquarku, který dokáže <span
        className='text-highlighter'>měnit pevnost a pružnost</span> svých vazeb. Proto může síť dočasně zvolnit vazby,
      přeuspořádat se a opět vazby zpevnit, čímž znovu vytvoří pevnou strukturu.</p>

    <p>Další užitečnou vlastností ferroquarku je <span className='text-highlighter'>paměť tvaru</span>. Předměty
      obsahující tento typ kvarků si mohou pamatovat, jak mají vypadat. Pokud jsou poté změněny nebo poškozeny, dokážou
      se <span className='text-highlighter'>samy navrátit do původního stavu</span>. Rizikem ferroquarku je <span
        className='text-highlighter'>reaktivita na magnetická pole nebo bouřky</span>.</p>

    <h3>Umbraquark (stín = Nox + Geo)</h3>
    <img src={umbraquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> matná černá, ticho, díra v realitě</p>

    <p>Pokud k <span className='text-highlighter'>noxquarku</span> přidáme sílu země, <span
      className='text-highlighter'>geoquarku</span>, částice kromě pouhého tlumení světla dokáže <span
      className='text-highlighter'>světlo i energii aktivně požírat</span>. Výsledkem spojení těchto dvou kvarků
      je <span className='text-highlighter'>nejtěžší a nejstabilnější částice</span>, kterou známe. Kromě využití
      v <span className='text-highlighter'>černé magii</span> se velmi často využívá i v magii <span
        className='text-highlighter'>ochranné</span>.</p>

    <p>Bariéry tvořené umbraquarkem nikdy kouzlo neodrazí, ale <span
      className='text-highlighter'>pohltí ho do sebe</span> a uvnitř své velmi husté struktury ho <span
      className='text-highlighter'>neutralizuje</span>. Často se také využívá k pohlcení <span
      className='text-highlighter'>nechtěných efektů při selhání rituálů</span>. Přestože je velmi užitečný, při jeho
      vysoké koncentraci do sebe může pohltit <span className='text-highlighter'>emoce i myšlenky</span>.</p>

    <h3>Vapoquark (pára = Pyro + Aqua)</h3>
    <img src={vapoquark} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Charakteristika:</span> mléčně bílá mlha, rudé záblesky, rozpínání</p>

    <p>Přestože jsou <span className='text-highlighter'>pyroquark</span> a <span
      className='text-highlighter'>aquaquark</span> považovány za <span className='text-highlighter'>protiklady</span> –
      vytvoření stabilní kombinace je tak složité – je vapoquark jedním z <span className='text-highlighter'>nejčastějších kombiquarků</span>.
      K jeho vytvoření je třeba energie a poměrně <span className='text-highlighter'>vyrovnaná koncentrace</span> obou
      druhů kvarků. Výsledkem je částice, která <span className='text-highlighter'>velmi rychle přenáší energii</span>,
      zároveň ale <span className='text-highlighter'>nehrozí otevřené hoření</span> nebo porušení okolní sítě. Na druhou
      stranu <span className='text-highlighter'>zvyšuje tlak</span> a <span className='text-highlighter'>brání viditelnosti</span> ve
      svém okolí.</p>

    <p>Pokud v síti převáží jeden ze dvou tvořících částicí, pak se začnou vapoquarky rozpadat, buďto začne kondenzovat
      voda, nebo pár pohltí oheň. Druhým rizikem je <span
        className='text-highlighter'>nekontrolovatelnost rozpínání</span> – pokud nemá síť dostatečný prostor na
      rozpínání, hrozí zvýšení tlaku až exploze.</p>


    <h2>Příklady vizualizace kouzel</h2>
    <hr/>

    <p>Právě tyto vizuální zobrazení a rozdělení magikvarků využívá <span className='text-highlighter'>artefakt skleněné žáby</span> k
      zobrazení magikvarkové sítě. Níže je vybraných několik kouzel z různých odvětví magie společně s popisem vzhledu
      při využití artefaktu. Samotný vzhled samozřejmě závisí na tom, jak <span className='text-highlighter'>silný kouzelník</span> kouzlo
      seslal, jaké v sobě měl <span className='text-highlighter'>emoce</span>, jaký je jeho <span
        className='text-highlighter'>záměr</span> apod.</p>

    <h3>Aegis persona – ochrana a empatie</h3>
    <img src={aegis_persona} className='img-in-text img-in-text-right'/>

    <p>Aegis persona se od ostatních štítových kouzel lehce liší – a to se samozřejmě projeví i v jeho magikvarkové
      podstatě. Vnitřní část štítu – ta, která míří směrem k chráněné osobě – je tvořena velmi <span
        className='text-highlighter'>řídkou krychlovou sítí</span> hnědozelených <span
        className='text-highlighter'>geoquarků</span>. Ty jsou na poměry geoquarků poměrně malé, i tak ale tvoří
      stabilní síť, která by měla být odolná proti útočným kouzlům. Z vnější strany štítu je pak síť o mnoho <span
        className='text-highlighter'>hustší</span>, přičemž převládají zářivě bílé <span
        className='text-highlighter'>lumiquarky</span>, které jsou doplněny několika temně černými <span
        className='text-highlighter'>umbraquarky</span>. Lumiquarky reprezentují <span className='text-highlighter'>dobrou vůli a empatii</span> sesilatele,
      přičemž umbraquarky fungují jako <span className='text-highlighter'>funkční pohlcení nebo oslabení kouzel</span>.
      Celá síť se lehce pohybuje a <span className='text-highlighter'>přizpůsobuje svůj tvar</span> osobě, kterou
      chrání. Stejně tak je <span className='text-highlighter'>propojena velmi silnými můstky</span>, pokud se tedy
      kouzelník pohne, celý štít se bez problému pohne s ním.</p>


    <h3>Anima Verde – léčitelská a přírodní magie</h3>
    <img src={anima_verde} className='img-in-text img-in-text-right'/>

    <p>U tohoto kouzla, a samozřejmě také u kouzel jemu podobných, převažuje přítomnost <span
      className='text-highlighter'>aquaquarků</span>. Ty v tomto případě reprezentuje <span
      className='text-highlighter'>sílu léčení</span> a všechny se pohybují v barevném spektru <span
      className='text-highlighter'>od zelené po tyrkysovou až světle modrou</span>. Seskupují se do <span
      className='text-highlighter'>malých spirálek</span>, které uprostřed mají několik zářivě bílých <span
      className='text-highlighter'>lumikquarků</span> – reprezentující světlo – a několik bílých, menších, rychle
      oscilujících <span className='text-highlighter'>aeroquarků</span> – ty reprezentují vzduch, dýchání. Tyto dva
      druhy kvarků jsou <span className='text-highlighter'>tenkými můstky</span> propojeny se svou spirálou a ladně v ní
      levitují. Spirály se postupně <span className='text-highlighter'>rozšiřují a zužují</span>, což reprezentuje
      samotný proces <span className='text-highlighter'>nádechu a výdechu</span>.</p>

    <h3>Aqua eructo – živel vody, útočné</h3>
    <img src={aqua_eructo} className='img-in-text img-in-text-right'/>

    <p><span className='text-highlighter'>Aquaquarky</span>, které tvoří převážnou část sítě po seslání tohoto kouzla,
      nejsou úplně typické pro kouzla útočná. Tomu napovídá i fakt, že <span
        className='text-highlighter'>stabilní síť</span> těchto modrých částic se pouze <span
        className='text-highlighter'>pomalu vlní z jedné strany na druhou</span> a zase zpět. Harmonii, kterou
      aquaquarky vytváření, pak rozbíjejí <span className='text-highlighter'>svítivě oranžové pyroquarky</span>. Těch je
      v síti dohromady asi jedna <span className='text-highlighter'>čtvrtina</span>, aktivně <span
        className='text-highlighter'>vibrují</span> a pokoušení se síť částic vody rozbít. To se jim podaří v ty
      okamžiky, kdy se společně <span className='text-highlighter'>uskupí, vytvoří shluk</span>, který <span
        className='text-highlighter'>vystřelí</span> jedním směrem – <span
        className='text-highlighter'>rozbije můstky</span> spojující aquaquarky a tím <span
        className='text-highlighter'>rozvlní i celou síť</span>.</p>

    <h3>Flipendo – útočné</h3>
    <img src={flipendo} className='img-in-text img-in-text-right'/>

    <p>Flipendo je jedno z útočných kouzel, které jako dominantní typ magikvarku mají <span
      className='text-highlighter'>aeroquark</span>. Proud těchto kvarků se <span className='text-highlighter'>pohybuje velmi rychle</span> směrem
      ke svému cíli, přičemž během toho ještě <span className='text-highlighter'>nesystematicky</span> každý jednotlivý
      aeroquark <span className='text-highlighter'>kmitá</span> do stran. Jsou však propojené <span
        className='text-highlighter'>slabými můstky</span>, které je drží stále v jednom svazku. Když se vibrace
      dostatečně zesílí, převezme iniciativu menší část <span className='text-highlighter'>pyroquarků</span>, které jsou
      do té doby pasivně uvnitř svazku. Síť se celá <span className='text-highlighter'>přeskupí</span> a pyroquarky
      vytvoří <span className='text-highlighter'>silnou vlnu</span>, která jako šíp vletí do cíle kouzla.</p>

    <h3>Incendio – živel ohně</h3>
    <img src={incendio} className='img-in-text img-in-text-right'/>

    <p>Jedno z mála kouzel, u kterého má jeden typ magikvarku <span
      className='text-highlighter'>absolutní převahu</span> – <span className='text-highlighter'>pyroquark</span>. Velká
      většina z nich je <span className='text-highlighter'>tmavě oranžová</span>, mezi nimi se ale pohybují i nějaké
      silně <span className='text-highlighter'>zářivé světle oranžové</span> a několik <span
        className='text-highlighter'>červených</span>. Společně vytváření <span className='text-highlighter'>nepravidelnou a silně pulzující síť</span>,
      která je velmi hustá. Každou chvíli to vypadá, že se nějaký pyroquark pokusí <span className='text-highlighter'>vytrhnout ze sítě</span>,
      což dá celou síť do pohybu – a tento pohyb připomíná <span className='text-highlighter'>plápolání plamene</span>.
      Občas se to dokonce <span className='text-highlighter'>podaří</span>, jeden pyroquark, nebo dokonce i menší shluk,
      se od ostatních oddělí – tento jev reprezentuje <span className='text-highlighter'>vylétnutí jiskry z ohně</span>.
    </p>

    <h3>Inflatus – transformace</h3>
    <img src={inflatus} className='img-in-text img-in-text-right'/>

    <p>Nafukovací kouzlo, Inflatus, už jenom tím, co dělá, dost napovídá, jak by mohlo z pohledu magikvarků vypadat. Ve
      středu kouzla se nachází velmi hustá <span className='text-highlighter'>spleť oranžových pyroquarků</span>, které
      zevnitř rozehřívají své okolí a jakoby se chtěly <span className='text-highlighter'>dostat ven</span>. Okolo nich
      je prostor vyplněný <span className='text-highlighter'>aeroquarky</span>, které se díky tepla z jádra pyroquarků
      velmi rychle <span className='text-highlighter'>pohybují a kmitají</span>, a <span
        className='text-highlighter'>vapoquarky</span>, které se, také díky teplotě ze středu, začínají <span
        className='text-highlighter'>rozpínat</span>. Do toho všeho v tomto prostoru poletuje několik větších bíle
      zářících <span className='text-highlighter'>lumiquarků</span>, které udržují kontrolu a <span
        className='text-highlighter'>brání nekontrolované explozi</span>. Na okraji kouzla je pak dost <span
        className='text-highlighter'>silnými můstky spojená síť</span> velkých <span
        className='text-highlighter'>lumiquarků</span>, které se pomalu <span
        className='text-highlighter'>rozpínají</span>, prodlužují můstky mezi sebou, čímž umožňují rozpínání vnitřní
      síti kvarků.</p>

    <h3>Vzpomínka – mysl, tajemnost</h3>
    <img src={vzpominka} className='img-in-text img-in-text-right'/>

    <p>Přestože zde nejde o kouzlo, rozhodně je zde magikvarků mnoho. Převládají ty fialové a černé barvy – jde o <span
      className='text-highlighter'>noxquarky</span> reprezentující <span className='text-highlighter'>tajemnost a hloubku</span>.
      Ty tvoří spletitou <span className='text-highlighter'>síť vláken a uzlů</span>. V úplném středu vytvářejí
      také <span className='text-highlighter'>mnoho menších kapes</span>, do kterých jsou uschovány myšlenky, vzpomínky
      a emoce. Spletité sítě poté propojují <span className='text-highlighter'>aeroquarky</span>, které jsou jako <span
        className='text-highlighter'>nitě spojující všechny kapsy</span>. Skrz ty čas od času putuje obsah kapes – <span
        className='text-highlighter'>myšlenky</span>. Mimo síť se v prostoru nacházejí také větší zářivě bílé <span
        className='text-highlighter'>lumiquarky</span> – symboly pravdy – které vše osvětlují – jako jediné <span
        className='text-highlighter'>temné a tajemné</span> místo zůstává již zmíněný <span
        className='text-highlighter'>střed</span>.</p>

  </div>
)

export default Magikvarky