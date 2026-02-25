import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import amarras_da_alma_01 from '../../img/predmety/artefakty/obecne/amarras_da_alma_01.png';
import amarras_da_alma_02 from '../../img/predmety/artefakty/obecne/amarras_da_alma_02.png';
import koren_matky_yvy_01 from '../../img/predmety/artefakty/obecne/koren_matky_yvy_01.png';
import koren_matky_yvy_02 from '../../img/predmety/artefakty/obecne/koren_matky_yvy_02.png';
import mapa_da_luz_viva_01 from '../../img/predmety/artefakty/obecne/mapa_da_luz_viva_01.png';

import mapa_da_luz_viva_02 from '../../img/predmety/artefakty/obecne/mapa_da_luz_viva_02.png';
import olho_de_vidro_anurico_01 from '../../img/predmety/artefakty/obecne/olho_de_vidro_anurico_01.png';
import olho_de_vidro_anurico_02 from '../../img/predmety/artefakty/obecne/olho_de_vidro_anurico_02.png';
import septajici_fletna_01 from '../../img/predmety/artefakty/obecne/septajici_fletna_01.png';
import septajici_fletna_02 from '../../img/predmety/artefakty/obecne/septajici_fletna_02.png';

import uvod_01 from '../../img/predmety/artefakty/obecne/uvod_01.png';
import uvod_02 from '../../img/predmety/artefakty/obecne/uvod_02.png';

import bylinky from '../../img/predmety/artefakty/vyroba/bylinky.png';
import cabaca_da_yara_vyroba_01 from '../../img/predmety/artefakty/vyroba/cabaca_da_yara_vyroba_01.png';
import cabaca_da_yara_vyroba_02 from '../../img/predmety/artefakty/vyroba/cabaca_da_yara_vyroba_02.png';
import cabaca_da_yara from '../../img/predmety/artefakty/vyroba/cabaca_da_yara.png';
import drevo from '../../img/predmety/artefakty/vyroba/drevo.png';

import elementy from '../../img/predmety/artefakty/vyroba/elementy.png';
import flauta_mboi_pua_vyroba_01 from '../../img/predmety/artefakty/vyroba/flauta_mboi_pua_vyroba_01.png';
import flauta_mboi_pua_vyroba_02 from '../../img/predmety/artefakty/vyroba/flauta_mboi_pua_vyroba_02.png';
import flauta_mboi_pua from '../../img/predmety/artefakty/vyroba/flauta_mboi_pua.png';
import kamen_paje_vyroba_01 from '../../img/predmety/artefakty/vyroba/kamen_paje_vyroba_01.png';

import kamen_paje_vyroba_02 from '../../img/predmety/artefakty/vyroba/kamen_paje_vyroba_02.png';
import kamen_paje from '../../img/predmety/artefakty/vyroba/kamen_paje.png';
import kovy from '../../img/predmety/artefakty/vyroba/kovy.png';
import materialy from '../../img/predmety/artefakty/vyroba/materialy.png';
import mineraly from '../../img/predmety/artefakty/vyroba/mineraly.png';

import morfo_rai_vyroba_01 from '../../img/predmety/artefakty/vyroba/morfo_rai_vyroba_01.png';
import morfo_rai_vyroba_02 from '../../img/predmety/artefakty/vyroba/morfo_rai_vyroba_02.png';
import morfo_rai from '../../img/predmety/artefakty/vyroba/morfo_rai.png';
import pulseira_de_coral_legenda from '../../img/predmety/artefakty/vyroba/pulseira_de_coral_legenda.png';
import pulseira_de_coral_vyroba from '../../img/predmety/artefakty/vyroba/pulseira_de_coral_vyroba.png';

import pulseira_de_coral from '../../img/predmety/artefakty/vyroba/pulseira_de_coral.png';
import tvorove_01 from '../../img/predmety/artefakty/vyroba/tvorove_01.png';
import tvorove_02 from '../../img/predmety/artefakty/vyroba/tvorove_02.png';
import uvod from '../../img/predmety/artefakty/vyroba/uvod.png';
import vyroba_01 from '../../img/predmety/artefakty/vyroba/vyroba_01.png';


const Artefakty = () => (
  <div>


    <div className="main-header"><h1>Magické artefakty</h1></div>


    <img src={uvod_01} className='img-in-text img-in-text-right'/>

    <p>Artefakty tvoří <span className='text-highlighter'>základ kouzelnického řemesla</span> v celé Jižní Americe. Od
      jednoduchých amuletů, které chrání domovy před zlými duchy, až po mocné nástroje schopné ovlivňovat počasí nebo
      posilovat kouzla čaroděje. Učí se, že artefakt <span
        className='text-highlighter'>nevzniká jen spojením materiálů</span>, ale především spojením významů. Každý
      kámen, vláknitá liána, zub, pírko či prach řeky nese vlastní <span className='text-highlighter'>symboliku</span>,
      ale teprve v harmonii se záměrem kouzelníka se z nich stává nástroj, který dokáže jednat, chránit, posílit nebo
      vést.</p>

    <p>Zásadní rozdíl oproti evropskému řemeslu spočívá v přístupu k látce samotné. Zatímco Evropa často spoléhá na kov,
      dřevo a přesnou formuli, amazonská tradice běžně pracuje s <span className='text-highlighter'>živými a přírodními elementy</span> -
      drahokamy, vzácnými rostlinami, částmi magických tvorů a především se <span className='text-highlighter'>silami stvoření</span>,
      které nelze vlastnit: Tatá (oheň), Yara (voda), Ybytu (vítr), Yvy (země) a Sol (Slunce). </p>


    <img src={uvod_02} className='img-in-text img-in-text-left'/>
    <p>To, co dělá artefakt artefaktem a zajišťuje jeho správný účinek, je především symbolika a správný <span
      className='text-highlighter'>výběr materiálů</span>, z nichž je vytvořen. Kombinací více takových prvků se
      jejich <span className='text-highlighter'>významy propojí</span> a posílí výsledný účinek. Kromě samotného výběru
      materiálů hraje zásadní roli plné soustředění a <span className='text-highlighter'>představivost</span> během
      výroby. Kouzelník musí vědomě chápat, <span className='text-highlighter'>proč</span> předmět tvoří, <span
        className='text-highlighter'>jaký má mít účel</span> a <span className='text-highlighter'>jakým způsobem má působit</span>.
      Teprve tehdy se dokáže napojit na jeho magii i bez pomoci složitých inkantací. A pokud mezi myslí tvůrce a
      použitými materiály zavládne skutečná <span className='text-highlighter'>harmonie</span>, může být magie artefaktu
      probuzena – a předmět se stává pravým artefaktem.</p>

    <h2>Účely artefaktů</h2>
    <hr/>

    <p>Každý artefakt má účel, na základě kterého je můžeme dělit do několika <span className='text-highlighter'>základních kategorií:</span>
    </p>

    <ul>
      <li><span className='text-highlighter'>Ochranné amulety</span> odhánějí zlé duchy a temnou magii a staví hranici
        mezi nositelem a tím, co se snaží proniknout dovnitř.
      </li>
      <li><span className='text-highlighter'>Posilující talismany</span> podporují odvahu, sílu nebo soustředění - v
        nositeli je vyvolají a udrží.
      </li>
      <li><span className='text-highlighter'>Komunikační předměty</span> pracují s rezonancí drahokamů, dalších
        materiálů a pamětí hlasu, aby přenesly zvuk, obraz nebo pocit.
      </li>
      <li><span className='text-highlighter'>Nástroje pro práci s přírodou</span> umožňují ovlivňovat růst rostlin,
        uklidnit tvory či přivolat déšť.
      </li>
      <li><span className='text-highlighter'>Obřadní předměty</span> propojují kouzelníka s duchy lesa a předky, je zde
        obzvlášť důležitá pokora, protože artefakt neotevírá dveře, které by si člověk zasloužil násilím.
      </li>
    </ul>


    <h2>Příklady amazonských artefaktů</h2>
    <hr/>

    <h3>Amarras da Alma</h3>
    <img src={amarras_da_alma_01} className='img-in-text img-in-text-right'/>

    <p>Amulety Amarras da Alma náleží k síle <span className='text-highlighter'>Yary</span>, vody, nositelce empatie.
      Tvoří jej <span className='text-highlighter'>dvojice přívěsků</span> zavěšených na kožených šňůrkách, vyrobených z
      bíle kaleného skla. Každý z amuletů má podobu drobné kuličky <span className='text-highlighter'>připomínající kapku rosy</span> a
      jemně září vlastním světlem. Při bližším zkoumání je možné zaznamenat <span className='text-highlighter'>tenké modré žilkování</span> ve
      tvaru větvených linií, připomínajících elektrické výboje pod hladinou vody.</p>

    <p>Použitý materiál není pouze dekorativní. Při výrobě amuletů se tradičně využívají <span
      className='text-highlighter'>šupiny ryb Electrophorus electricus</span> schopných elektrické komunikace, které
      jsou vázány do skleněné matrice. V tradici Yary je voda chápána jako nositel paměti, hlasu a proměny, a právě
      elektrické impulzy slouží jako symbol i <span className='text-highlighter'>médium přenosu vnitřních stavů mezi bytostmi</span>.
      Amulety jsou vždy vytvářeny v <span className='text-highlighter'>páru</span> a jejich účinek se projeví pouze
      tehdy, jsou-li oba nošeny současně.</p>

    <img src={amarras_da_alma_02} className='img-in-text img-in-text-left'/>

    <p>Jakmile jsou amulety nasazeny, <span className='text-highlighter'>umožňují přenos silné emoce mezi jejich nositeli</span>.
      Přenášená emoce není doprovázena obrazem ani slovním sdělením, ale je příjemcem vnímána <span
        className='text-highlighter'>náhle a intenzivně</span>, často jako tělesný či psychický pocit bez zjevného
      původu. Zdroj emoce musí být <span className='text-highlighter'>vyvolán vědomě</span>, obvykle prostřednictvím
      vzpomínky, která daný cit nese. Přijímající osoba následně interpretuje prožitý stav bez přímé znalosti jeho
      obsahu.</p>

    <p>Z hlediska účelu jsou Amarras da Alma řazeny především mezi <span className='text-highlighter'>komunikační předměty</span>,
      neboť umožňují přenos vnitřních stavů mezi dvěma osobami bez použití řeči. Zároveň nesou výrazné <span
        className='text-highlighter'>rysy obřadních artefaktů</span>, jelikož pracují s empatií, pamětí a důvěrou mezi
      účastníky. Artefakt nefunguje při pokusu o manipulaci či nátlak, jeho <span className='text-highlighter'>účinek je podmíněn otevřeností obou stran</span>.
    </p>

    <p>Původ artefaktu Amarras da Alma je spojován s pobřežními a říčními komunitami, které uctívaly Yaru jako
      ochránkyni paměti a vztahů. První zmínky o těchto amuletech pocházejí z <span
        className='text-highlighter'>rituálů</span> používaných při zasvěcení lovců, léčitelů a strážců vodních cest,
      kde bylo nutné <span className='text-highlighter'>zajistit tiché porozumění beze slov</span>. Podle tradice byly
      amulety vytvářeny vždy ve dvojici pro osoby, jejichž osudy měly být dočasně či trvale propojeny, a nebývaly určeny
      k dlouhodobému vlastnictví.</p>

    <h3>Mapa da Luz Viva</h3>
    <img src={mapa_da_luz_viva_01} className='img-in-text img-in-text-right'/>

    <p>Předmět příslušející k síle <span className='text-highlighter'>Sol</span>, slunci, má podobu menšího obdélníku či
      čtverce, který na první pohled může připomínat kouzelnický pergamen. Ve skutečnosti je však tvořen <span
        className='text-highlighter'>chameleoní kůží</span>, jejíž povrch je pokryt tenkou vrstvou průhledné, magicky
      zpevněné substance. Ta kůži uhlazuje, chrání a zároveň umožňuje průchod světla. Při bližším zkoumání je na ní
      patrná <span className='text-highlighter'>hustá síť jemných žilek</span> rozprostřená po celé ploše předmětu.</p>

    <p>Chameleoní kůže byla při výrobě dlouhodobě ošetřována <span className='text-highlighter'>odvarem z bioluminiscenčních hub</span>,
      jejichž vlastnosti byly následně stabilizovány magií. Výsledkem je povrch, který zůstává neaktivní, dokud není
      vystaven záměru uživatele a specifickým podmínkám okolí. Po aktivaci se na povrchu předmětu začnou <span
        className='text-highlighter'>rozsvěcet jednotlivá vlákna</span>, která společně vytvářejí <span
        className='text-highlighter'>schematickou mapu bezprostředního okolí do sta metrů</span>. Zobrazení není
      statické – <span className='text-highlighter'>přizpůsobuje se pohybu</span> držitele a zachovává správnou
      orientaci vůči světovým stranám, stejně jako držiteli ukazuje jeho polohu silněji svítícím křížkem na středu mapy.
      Artefakt nezobrazuje povrch terénu, ale strukturu prostoru: průchody, překážky, uzavřené oblasti a významné body.
    </p>

    <img src={mapa_da_luz_viva_02} className='img-in-text img-in-text-left'/>

    <p>Z hlediska účelu patří tento artefakt mezi <span className='text-highlighter'>komunikační předměty</span>, byť
      nedovoluje přímou komunikaci mezi dvěma entitami, ale jen zprostředkovává informace o okolním uspořádání světa.
    </p>

    <p>Původ tohoto artefaktu je spojován se starými <span
      className='text-highlighter'>kmeny z vnitrozemských oblastí</span>, které uctívaly Sol jako otce světla a nositele
      pravdy. Legenda praví, že <span className='text-highlighter'>první</span> taková mapa byla vytvořena ze
      svlečené <span className='text-highlighter'>kůže chameleona</span>, jenž přežil putování spálenou krajinou díky
      schopnosti přizpůsobit se slunci i stínu. Kůže byla ponořena do odvaru ze <span className='text-highlighter'>svítících hub sbíraných výhradně za poledního slunce</span>,
      kdy Sol stojí nejvýše. Teprve poté byla zasvěcena světlu v rituálu, při němž se mapa poprvé rozsvítila a odhalila
      skutečný tvar okolního prostoru.</p>

    <p>V kmenové tradici se věřilo, že artefakt neukazuje cestu tomu, kdo se snaží před tmou utéct, ale tomu, kdo je
      ochoten ji pochopit. Podle dochovaných záznamů a ústních tradic tak vznikaly mapy tohoto typu jako <span
        className='text-highlighter'>součást iniciačních zkoušek dospělosti</span>. Mladí členové kmene byli vysíláni do
      uměle vytvořených bludišť nebo přírodních labyrintů zahalených tmou, kde běžné světlo selhávalo. Předmět jim
      měl <span className='text-highlighter'>pomoct porozumět prostoru a nalézt vlastní cestu</span> skrze zkoušku, při
      níž měl jednotlivec dokázat, že je schopen číst pravdu světa bez přikrášlení a iluzí.</p>

    <h3>Šeptající flétna</h3>

    <img src={septajici_fletna_01} className='img-in-text img-in-text-right'/>

    <p>Šeptající flétna je předmět náležící k síle stvoření <span className='text-highlighter'>Ybytu</span>, větru,
      který tvoří kanál pro zpívaná kouzla a prastaré hlasy, stejně jako je spojován s duchovnem, svobodou a dechem.
      Vítr je také chápán chápán jako nositel pohybu, změny a vzdálených hlasů, flétna proto bývá označována jako <span
        className='text-highlighter'>šeptající nástroj</span>, skrze nějž lze tyto hlasy krátce zaslechnout. Využívá se
      hlavně <span className='text-highlighter'>pro propojení s duchy pralesa</span>, jejichž poselství přichází z dálky
      a nese hlasy míst, která jsme ještě nenavštívili. </p>

    <p>Vzhledově se jedná o <span className='text-highlighter'>drobnou flétnu modrostříbrné barvy</span>, jejíž povrch
      při dopadu světla vytváří jemné kovové odlesky. Přestože připomíná kovový nástroj, je vyrobena z magické rostliny
      zvané <span className='text-highlighter'>šeptalka posměšná</span>, která roste na okrajích školních pozemků
      Castelobruxa. Tato rostlina je známá svou schopností <span className='text-highlighter'>uchovávat slyšené zvuky a znovu je reprodukovat</span> v
      pozměněné podobě. Flétna si tuto vlastnost zachovává i po zpracování a funguje jako rezonátor paměti Ybytu.
      Neopakuje přesně melodie ani slova, ale <span
        className='text-highlighter'>pracuje s ozvěnami tónů, nálad a záměrů</span>, které v sobě vítr nese z různých
      míst a časů.</p>

    <img src={septajici_fletna_02} className='img-in-text img-in-text-left'/>

    <p>Použití flétny je obřadní a vyžaduje <span className='text-highlighter'>soustředění</span> spíše než technickou
      zdatnost. Kouzelník zahraje jednoduchý tón či krátkou melodii, která má vyjadřovat touhu po pohybu, změně nebo
      odpovědi. Následně v mysli formuluje <span className='text-highlighter'>otázku</span>, jež se týká jeho
      budoucnosti nebo další cesty. <span className='text-highlighter'>Odpověď</span> se neobjevuje ve formě jasného
      sdělení, ale skrze <span className='text-highlighter'>zvukové vjemy, pocity či představy</span> připomínající
      nejčastěji cizí krajinu, vzdálené místo nebo neznámý hlas. Význam těchto vjemů si musí uživatel <span
        className='text-highlighter'>vyložit sám</span>.</p>

    <p>Z hlediska účelu je flétna řazena především mezi <span className='text-highlighter'>obřadní předměty</span>,
      neboť, jak již bylo řečeno, slouží k propojení kouzelníka s duchy pralesa a pamětí přírody. Zároveň nese <span
        className='text-highlighter'>prvky komunikačních artefaktů</span>, jelikož pracuje s rezonancí hlasu. Flétna
      však <span className='text-highlighter'>neumožňuje vynutit si odpověď</span> a její účinek závisí na pokoře a
      otevřenosti uživatele. Otevírá pouze ty cesty, na něž je kouzelník připraven.</p>

    <p>Předmět <span className='text-highlighter'>pochází z období raných šamanských praktik</span>. Vytvořen byl jako
      pomůcka pro naslouchání duchovním proudům a paměti větru. Původní autor artefaktu není znám, dochované záznamy
      ukazují akorát jeho hojné rozšíření napříč kmeny.</p>

    <h3>Kořen Matky Yvy</h3>

    <img src={koren_matky_yvy_01} className='img-in-text img-in-text-right'/>

    <p>Artefakt známý jako Kořen Matky Yvy náleží k živlu <span className='text-highlighter'>Yvy</span>, zemi, a
      představuje jednu z nejstarších forem zemské magie, založené na péči, trpělivosti a <span
        className='text-highlighter'>přímém kontaktu s živým materiálem</span>. Artefakt má podobu <span
        className='text-highlighter'>náramku</span> tvořeného <span className='text-highlighter'>spletenými živými kořeny</span>,
      z nichž každý má odlišný tvar, tloušťku i strukturu, což činí každý kus jedinečným. Kořeny jsou propleteny tak,
      aby si zachovaly pružnost a životnost, a při nošení na kůži postupně reagují na tělesné teplo nositele.</p>

    <p>Při práci s artefaktem jsou využívány drobné <span className='text-highlighter'>části léčivých a posilujících rostlin</span>,
      které se do struktury náramku zaplétají během jeho aktivace. Používány bývají například tenké <span
        className='text-highlighter'>liány vilcacory</span> (posílení imunity), stonky keře <span
        className='text-highlighter'>paullinie cupany</span> (snížení únavy, povzbuzení, udržování bdělosti),
      větvičky <span className='text-highlighter'>mansoy alliacey</span> (čištění krve, antibiotické účinky, udržování
      zdravé kůže) či listy stromu <span className='text-highlighter'>croton lechleri</span>, známého pro svou „dračí
      krev“ (silné hojivé účinky). Výběr rostlin není náhodný a odráží záměr, s nímž je artefakt oživován. Právě tento
      záměr ovlivňuje výsledné zaměření náramku.</p>

    <img src={koren_matky_yvy_02} className='img-in-text img-in-text-left'/>

    <p>Použití Kořene Matky Yvy je založeno na přímém kontaktu s tělem. Během zaplétání rostlin do kořenové struktury
      nositel <span className='text-highlighter'>vědomě formuluje důvod</span>, proč artefakt vytváří, a propojuje jej
      se svým tělem. Náramek se nosí na kůži a během jeho používání je <span className='text-highlighter'>pravidelně vyživován několika kapkami vody s medem</span>,
      které slouží jako zdroj energie i symbol vzájemné výměny. Artefakt tak dočerpává životní sílu a zůstává funkční
      pouze tehdy, je-li o něj dlouhodobě pečováno. Zanedbání péče vede k jeho <span className='text-highlighter'>postupnému odumírání</span>.
    </p>

    <p>Z hlediska účelu patří Kořen Matky Yvy mezi mezi <span className='text-highlighter'>nástroje pro práci s přírodou a posilující artefakty</span>,
      neboť umožňuje přenos životní síly z rostlin na člověka. Je využíván ke zmírnění únavy, vyčerpání či oslabení
      organismu a může napomáhat i při regeneraci po otravách nebo dlouhodobém oslabení. </p>

    <p>Původ artefaktu sahá ke <span className='text-highlighter'>kultuře Ypîran</span>, kde se věřilo, že dřevo nese
      paměť. Podle dochovaných legend vznikaly první kořenové náramky při <span className='text-highlighter'>rituálech obnovy</span>,
      kdy byly živé kořeny splétány přímo v půdě a poprvé nasazeny ještě vlhké od země. Artefakt nebyl považován za
      nástroj, ale za <span className='text-highlighter'>živého společníka</span>, o nějž bylo třeba pečovat stejně jako
      o půdu či rostliny. Věřilo se, že čím více péče člověk kořeni věnuje, tím ochotněji mu Yvy navrací sílu, kterou mu
      sama poskytla.</p>

    <h3>Olho de Vidro Anúrico</h3>
    <img src={olho_de_vidro_anurico_01} className='img-in-text img-in-text-right'/>

    <p>Artefakt Olho de Vidro Anúrico, často přezdívaný jednoduše <span className='text-highlighter'>artefakt skleněné žáby</span>,
      je jedním z artefaktů příslušejících k síle stvoření ohně, <span className='text-highlighter'>Tatá</span>. Jde
      o <span className='text-highlighter'>skleněný náhrdelník ve tvaru kapky</span> pověšený na přírodním rostlinném
      provázku. Vnitřní část artefaktu je vyplněná na první pohled průhlednou substancí připomínající rosolovitou vodu
      či jinou tekutinu – ve skutečnosti však jde o <span
        className='text-highlighter'>magicky upravenou strukturu skla</span>. V úplném středu je malý proužek <span
        className='text-highlighter'>průhledné kůže</span> žáby <span className='text-highlighter'>Espadarana prosoblepon</span>.
      Tato žába je specifická tím, že povrch jejího těla je průhledný, prochází jím světlo.</p>

    <p>Po nasazení artefaktu a samozřejmě i správném a řádném <span className='text-highlighter'>naladěním jak na artefakt, tak na magii</span> samotnou,
      získá nositel schopnost vidět neviděné – <span className='text-highlighter'>strukturu magie</span>. Jednotlivé
      druhy a typy magikvarků jsou reprezentovány <span className='text-highlighter'>různými barvami</span>, artefakt
      umožňuje vidět pohyby, hustotu i <span className='text-highlighter'>můstky</span> spojující magikvarky.</p>

    <img src={olho_de_vidro_anurico_02} className='img-in-text img-in-text-left'/>

    <p>Užívání artefaktu je velmi <span className='text-highlighter'>náročné na lidskou mysl</span>. Vzhledem k tomu, že
      přesouvá mysl člověka z fyzické roviny do <span className='text-highlighter'>roviny magie</span>, ztrácí nositel
      přehled o <span className='text-highlighter'>prostoru</span> okolo sebe, mnohem náročněji může vnímat realitu a
      pokud nemá dostatečně silnou mysl nebo používá artefakt dlouho, může dokonce <span
        className='text-highlighter'>omdlít</span>. Proto se artefakt používá <span
        className='text-highlighter'>krátkodobě</span> a často za nějakým účelem.</p>

    <p>Každý materiál využitý k výrobě artefaktu skleněné žáby má svůj účel. Průzračné sklo symbolizuje <span
      className='text-highlighter'>zprůhlednění hranice mezi oběma světy</span>. Zároveň symbolizuje i samotnou sílu
      stvoření Tatá – vzhledem ke způsobu vypálení skla. Síla ohně patří k tomuto artefaktu hlavně díky interpretaci
      jako <span className='text-highlighter'>aktivní energie kouzel</span>. Stejný důvod jako sklo má i využití kůže
      průhledné žáby.</p>

    <p>Z hlediska účelu je řadíme mezi <span className='text-highlighter'>posilující artefakty</span>, protože zesilují
      kouzelníkovu schopnost vnímat magii a dávají této schopnosti vizuální podobu. Právě proto je třeba se na
      magii <span className='text-highlighter'>naladit</span> – čím lepší má kouzelník spojení s magií, tím lépe mu
      artefakt poslouží.</p>

    <p>První zmínky o Olho de Vidro Anúrico pocházejí již z dávných dob, kdy šamani domorodých kmenů náhrdelník
      využívali k <span className='text-highlighter'>odhalení temných sil a nemocí</span>, případně přicházejících <span
        className='text-highlighter'>nebezpečí</span>. Předpokládá se, že první artefakt byl vytvořen v okolí <span
        className='text-highlighter'>horního toku Amazonky</span>, odkud se velmi rychle <span
        className='text-highlighter'>rozšířil</span> do celého pralesa.</p>

    <a className='game-archive-button' href="/casstellobruxxo/Artefakty1.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv hodiny (NonRPG 2. 11. 2025)</a>

    <h2>Výroba artefaktů</h2>
    <hr/>

    <p>Výroba magických artefaktů patří mezi nejstarší a zároveň nejkomplexnější oblasti kouzelnického řemesla v Jižní
      Americe. Na rozdíl od běžného sesílání kouzel, která jsou pevně svázána s okamžikem a přítomností kouzelníka,
      představuje artefakt <span className='text-highlighter'>trvalý nosič magie</span>. Uchovává záměr svého tvůrce,
      paměť použitých materiálů i <span className='text-highlighter'>otisk sil</span>, které jej probudily k existenci.
    </p>

    <img src={uvod} className='img-in-text img-in-text-right'/>

    <p>Artefakt nevzniká pouhým mechanickým spojením jednotlivých částí. Je výsledkem <span
      className='text-highlighter'>rovnováhy mezi materiálem, symbolikou, záměrem a silami stvoření</span>. Pokud
      některá z těchto složek chybí nebo je narušena, výsledný předmět zůstane pouze běžným objektem, případně může nést
      nestabilní nebo nepředvídatelnou magii. Základním krokem výroby je proto <span className='text-highlighter'>porozumění účelu artefaktu ještě před samotným započetím práce</span>.
      Kouzelník musí vědět, proč artefakt vytváří, komu nebo čemu má sloužit a jakým způsobem má jeho magie působit.
      Stejně důležité je i pochopení <span className='text-highlighter'>hranic artefaktu</span>, protože správně
      vytvořený předmět není pouze silný, ale také bezpečný pro svého nositele i okolí.</p>

    <p>Výroba artefaktů je v tradici Castelobruxu úzce spojena s <span
      className='text-highlighter'>pěti silami stvoření</span>, které lze chápat jako základní směry magie. Tyto síly
      nepředstavují pouze zdroj energie, ale spíše principy, skrze které magie získává svůj charakter. <span
        className='text-highlighter'>Sol</span>, síla slunce, je spojena s rozumem, pravdou a řádem a často se objevuje
      u artefaktů zaměřených na jasnost mysli, odhalování nebo orientaci. <span className='text-highlighter'>Yvy</span>,
      země, představuje stabilitu, růst a léčitelství a její vliv je patrný především u ochranných a podpůrných
      artefaktů. <span className='text-highlighter'>Yara</span>, voda, je spojena s pamětí, empatií a proměnou a její
      magie se často objevuje u předmětů pracujících s emocemi, myslí nebo komunikací. <span
        className='text-highlighter'>Ybytu</span>, vítr, symbolizuje svobodu, duchovno a spojení s neviditelnými hlasy
      minulosti, zatímco <span className='text-highlighter'>Tatá</span>, oheň, představuje sílu proměny, energie a
      samotného probuzení magie. Artefakt může být spojen s jednou silou, ale složitější předměty často pracují s <span
        className='text-highlighter'>kombinací více sil současně</span>.</p>

    <img src={vyroba_01} className='img-in-text img-in-text-left'/>

    <p>Proces výroby vyžaduje od tvůrce <span className='text-highlighter'>hluboké soustředění</span> a <span
      className='text-highlighter'>jasnou představu výsledného účinku</span>. Kouzelník musí být schopen propojit
      vlastní mysl s použitými materiály a udržet mezi nimi harmonii. Pokud se tato harmonie podaří, může být magie
      artefaktu probuzena i bez složitých inkantací. V mnoha případech k probuzení dochází skrze některou ze sil
      stvoření, která slouží jako prostředník mezi materiálním světem a magií samotnou.</p>

    <p>Přestože <span className='text-highlighter'>existují tradiční postupy výroby</span>, nelze je chápat jako přesné
      recepty. Každý artefakt je do určité míry <span className='text-highlighter'>jedinečný</span>, protože reaguje
      nejen na kvalitu materiálů, ale také na osobnost tvůrce, prostředí vzniku i okamžitou rovnováhu sil stvoření. Z
      tohoto důvodu se v Castelobruxu klade důraz nejen na technické zvládnutí výroby, ale především na <span
        className='text-highlighter'>pochopení principů</span>, které za celým procesem stojí. Výroba artefaktu tak není
      pouze řemeslem, ale i <span className='text-highlighter'>formou dialogu mezi kouzelníkem, přírodou a magií samotnou</span>.
    </p>

    <h2>Amazonské materiály</h2>
    <hr/>

    <img src={materialy} className='img-in-text img-in-text-right'/>

    <p>Materiály používané při výrobě artefaktů nejsou vybírány pouze podle fyzických vlastností, ale především podle
      symboliky a takzvané magické paměti. Každý materiál v sobě nese <span className='text-highlighter'>určitou energii a význam</span>,
      které ovlivňují výsledný účinek artefaktu. Správná kombinace materiálů umožňuje propojení jejich významů a
      zesílení magie, zatímco nevhodná kombinace může vést k oslabení nebo nestabilitě výsledného předmětu.</p>

    <p>Níže uvedené materiály patří mezi <span className='text-highlighter'>nejčastěji používané v amazonské artefaktní tradici</span>.
    </p>

    <h3>Dřevo</h3>
    <p>Dřevo patří mezi nejzákladnější materiály artefaktní výroby. Je spojováno s <span className='text-highlighter'>životem, růstem, stabilitou a pamětí přírody</span>.
      Různé druhy dřeva však nesou odlišnou symboliku a využívají se pro rozdílné typy artefaktů.</p>

    <img src={drevo} className='img-in-text img-in-text-right'/>

    <ul>
      <li><span className='text-highlighter'>Pau-brasil</span> <i>(Caesalpinia echinata)</i> – symbol života, identity a
        historické paměti.
      </li>
      <li><span className='text-highlighter'>Kapok</span> <i>(Ceiba pentandra)</i> – posvátný strom, symbol spojení
        světů, snů a duchů.
      </li>
      <li><span className='text-highlighter'>Brazilský ořech</span> <i>(Bertholletia excelsa)</i> – symbol výživy,
        vitality a životní síly.
      </li>
      <li><span className='text-highlighter'>Ipe</span> <i>(Tabebuia spp.)</i> – symbol obnovy, krásy a dlouhověkosti.
      </li>
      <li><span className='text-highlighter'>Jacarandá</span> <i>(Dalbergia nigra)</i> – symbol ochrany, elegance a
        stabilní magie.
      </li>
      <li><span className='text-highlighter'>Mahagon</span> <i>(Swietenia spp.)</i> – symbol síly, moci a odolnosti.
      </li>
      <li><span className='text-highlighter'>Cumaru</span> <i>(Dipteryx odorata)</i> – symbol štěstí, harmonie a
        prosperity.
      </li>
      <li><span className='text-highlighter'>Jatobá</span> <i>(Hymenaea courbaril)</i> – symbol očisty a ochrany.</li>
      <li><span className='text-highlighter'>Sucupira</span> <i>(Bowdichia spp.)</i> – symbol pevnosti a stability.</li>
      <li><span className='text-highlighter'>Guaiacum</span> <i>(Lignum vitae)</i> – symbol rituální síly a vytrvalosti.
      </li>
      <li><span className='text-highlighter'>Palisandr amazonský</span> <i>(Dalbergia spruceana)</i> – symbol klidu
        mysli a mentální rovnováhy.
      </li>
      <li><span className='text-highlighter'>Balsa</span> <i>(Ochroma pyramidale)</i> – symbol vzduchu, snů a cest mezi
        světy.
      </li>
      <li><span className='text-highlighter'>Eukalyptus</span> <i>(Eucalyptus)</i> – symbol očisty, léčení a ochrany
        před nemocemi a zlými silami.
      </li>
      <li><span className='text-highlighter'>Guayacán</span> <i>(Guaiacum officinale)</i> – symbol dlouhověkosti a
        odolnosti proti temné magii.
      </li>
    </ul>


    <h3>Zpracované a univerzální materiály</h3>

    <p>Některé materiály nejsou spojeny s jedním konkrétním živlem, ale fungují jako <span className='text-highlighter'>nosič nebo stabilizátor</span> magie.
    </p>

    <ul>
      <li><span className='text-highlighter'>Papír, pergamen</span> – uchování myšlenek, paměti a znalostí.</li>
      <li><span className='text-highlighter'>Sklo</span> – symbol průhlednosti, pravdy a tvarování energie.</li>
      <li><span className='text-highlighter'>Keramika a hlína</span> – symbol tvoření, formování a spojení země s ohněm.
      </li>
    </ul>


    <h3>Kovy</h3>
    <p>Kovy jsou spojeny především se <span
      className='text-highlighter'>silou, vedením energie a stabilitou magie</span>.</p>

    <img src={kovy} className='img-in-text img-in-text-right'/>

    <ul>
      <li><span className='text-highlighter'>Železo</span> – síla, odolnost, uzemnění magie.</li>
      <li><span className='text-highlighter'>Zlato</span> – světlo, moudrost.</li>
      <li><span className='text-highlighter'>Cín</span> – poddajnost, rovnováha a harmonie.</li>
      <li><span className='text-highlighter'>Mangan</span> – proměna, odvaha, strukturální síla.</li>
      <li><span className='text-highlighter'>Lithium</span> – životní energie, světlo, reakce.</li>
      <li><span className='text-highlighter'>Měď</span> – intuice, láska, proudění magie.</li>
    </ul>

    <h3>Minerály a drahokamy</h3>
    <p>Drahokamy fungují jako <span className='text-highlighter'>zesilovače, stabilizátory nebo směrovače magie</span>.
    </p>

    <img src={mineraly} className='img-in-text img-in-text-right'/>

    <ul>
      <li><span className='text-highlighter'>Ametyst</span> – ochrana před klamy, duchovní čistota, vnitřní síla.</li>
      <li><span className='text-highlighter'>Topaz</span> – pravda, soustředění, odvaha.</li>
      <li><span className='text-highlighter'>Achát</span> – rovnováha, stabilita, zemská energie.</li>
      <li><span className='text-highlighter'>Akvamarín</span> – komunikace, intuice, emoce.</li>
      <li><span className='text-highlighter'>Křišťál, křemen</span> – zesílení magie, čistá esence světla.</li>
    </ul>


    <h3>Materiály spojené s tvory</h3>
    <p>Tyto materiály nesou <span className='text-highlighter'>instinktivní nebo přirozenou magii</span>. Největší sílu
      mají, pokud jsou získány <span className='text-highlighter'>dobrovolně</span>.</p>

    <ul>
      <li><span className='text-highlighter'>Skleněná žába</span> <i>(Centrolenidae)</i> – vhled a citlivost na magii.
      </li>
      <li><span className='text-highlighter'>Šípová žába</span> <i>(Dendrobatidae)</i> – obrana a energie.</li>
      <li><span className='text-highlighter'>Paúhoř elektrický</span> <i>(Electrophorus electricus)</i> – elektřina,
        komunikace.
      </li>
      <li><span className='text-highlighter'>Chameleon</span> <i>(Chamaeleoninae)</i> – proměna, klam, adaptace,
        zrcadlení.
      </li>
      <li><span className='text-highlighter'>Papoušek</span> <i>(Psittaciformes)</i> – komunikace a spojení s přírodou.
      </li>
      <li><span className='text-highlighter'>Pavouk</span> <i>(Araneae)</i> – osud a tvoření.</li>
      <li><span className='text-highlighter'>Opice</span> <i>(Anthropoidea)</i> – inteligence a svoboda.</li>
      <li><span className='text-highlighter'>Motýl</span> <i>(Lepidoptera)</i> – čistota, vzduch, krása, vnitřní světlo.
      </li>
      <li><span className='text-highlighter'>Mravenec</span> <i>(Formicidae)</i> – píle, kolektivní síla, společenství,
        vytrvalost.
      </li>
      <li><span className='text-highlighter'>Krovkovec stínový</span> <i>(Scutocaiman umbrosus)</i> – prastará síla a
        trpělivost.
      </li>
      <li><span className='text-highlighter'>Anakonda</span> <i>(Eunectes)</i> – životní cyklus a moc.</li>
      <li><span className='text-highlighter'>Delfín</span> <i>(Delphinidae)</i> – harmonie, přátelství, inteligence.
      </li>
      <li><span className='text-highlighter'>Orel</span> <i>(Accipitridae)</i> – vhled, svoboda, moudrost.</li>
      <li><span className='text-highlighter'>Kapybara</span> <i>(Hydrochoerus hydrochaeris)</i> – rovnováha živlů.</li>
      <li><span className='text-highlighter'>Korály Amazonky</span> <i>(Anthozoa)</i> – obnova a jednota.</li>
    </ul>

    <img src={tvorove_01} className='img-in-text'/>
    <img src={tvorove_02} className='img-in-text'/>

    <h3>Byliny</h3>

    <p>Byliny se používají především pro <span className='text-highlighter'>mentální, duchovní nebo léčivé účinky</span>.
    </p>

    <img src={bylinky} className='img-in-text img-in-text-right'/>

    <ul>
      <li><span className='text-highlighter'>Ayahuasca</span> <i>(Banisteriopsis caapi)</i> – vhled a duchovní otevření,
        liána duchů.
      </li>
      <li><span className='text-highlighter'>Chacruna</span> <i>(Psychotria viridis)</i> – vize a práce s časem.</li>
      <li><span className='text-highlighter'>Jergón sacha</span> <i>(Dracontium spruceanum)</i> – očista a obnova
        života.
      </li>
      <li><span className='text-highlighter'>Brazilský ženšen</span> <i>(Pfaffia paniculata)</i> – vitalita, imunita a
        životní síla.
      </li>
      <li><span className='text-highlighter'>Kokainovník pravý</span> <i>(Erythroxylum coca)</i> – energie, síla a
        vytrvalost.
      </li>
      <li><span className='text-highlighter'>Bioluminiscenční houby</span> – skryté poznání.</li>
    </ul>


    <h3>Elementární materiály</h3>
    <img src={elementy} className='img-in-text img-in-text-right'/>

    <p>Tyto prvky jsou považovány za <span className='text-highlighter'>přímé nositele sil stvoření</span>.</p>

    <ul>
      <li><span className='text-highlighter'>Kapka bouřkového deště</span> – esence vody, očištění a znovuzrození.</li>
      <li><span className='text-highlighter'>Popel posvátného ohně</span> – moudrost, obnova vůle, prastaří duchové.
      </li>
      <li><span className='text-highlighter'>Písek z Amazonky</span> – čas, stálost a propojení živlů.</li>
    </ul>


    <h2>Vybrané artefakty a jejich výroba</h2>
    <hr/>

    <h3>Cabaça da Yara</h3>

    <p className='text-highlighter text-align-center'>Nádoba Yary</p>

    <img src={cabaca_da_yara} className='img-in-text img-in-text-right'/>

    <p>Artefakt Cabaça da Yara je na první pohled běžně vypadající <span
      className='text-highlighter'>keramická nádoba</span>. Na vnější části je zdobena vlnovkami modré barvy, které
      připomínají rozbouřený tok řeky. Pokud je džbán naplněn vodou, z nitra artefaktu se rozezní <span
        className='text-highlighter'>zpěv mýtické Yary</span>. V širokém okolí dokáže <span
        className='text-highlighter'>zklidnit proud řeky</span>, čímž může ochránit území proti povodním, nebo
      částečně <span className='text-highlighter'>snížit intenzitu bouří</span>.</p>

    <p>Dnešní napodobeniny <span className='text-highlighter'>nemusí vypadat nutně stejně</span>, fungují však na
      podobném principu. Po naplnění nádoby vodou se v okolí rozezní <span className='text-highlighter'>tichý uklidňující ženský zpěv</span>.
      Dle síly artefaktu dokáže <span className='text-highlighter'>uklidnit lidskou mysl</span>, někdy však i <span
        className='text-highlighter'>zvířecí</span>. Druh zpěvu můžeme ovlivnit i tím, že místo vody naplníme
      nádobu <span className='text-highlighter'>odvarem z kouzelných bylin</span>.</p>

    <p>Pokud se na artefakt podíváme z hlediska dělení, pak bychom ho nejspíše zařadili mezi <span
      className='text-highlighter'>komunikační artefakty</span>, ale také mezi <span className='text-highlighter'>nástroje pro práci s přírodou</span>.
      Materiály využívané k vytvoření artefaktu mají kromě funkčnosti hlavně symbolický význam. Do keramiky získané z
      blízkosti <span className='text-highlighter'>palisandru</span> – schopnost <span className='text-highlighter'>uklidňovat mysl</span> –
      se přimíchává písek ze dna Amazonky. Ten funguje jako symbol samotné síly stvoření <span
        className='text-highlighter'>Yary</span>. Ta je důležitá pro schopnost <span className='text-highlighter'>empatie, práci s emocemi a s myslí</span>.
      Pírko <span className='text-highlighter'>papouška Muirá</span> dodává artefaktu schopnost vydávat zvuk. Při
      aktivaci se využívá i oheň, síla <span className='text-highlighter'>Tatá</span>, která je známá pro <span
        className='text-highlighter'>energii a aktivaci kouzel</span> celkově. Pokud všechny symboly uvedeme do <span
        className='text-highlighter'>harmonie</span>, spojí se všechny do jednoho a vznikne funkční artefakt.</p>

    <p><span className='text-highlighter text-underline'>Původ artefaktu</span></p>

    <p>S původní nádobou Iary se pojí legenda, že ji samotná <span className='text-highlighter'>Yara naplnila svým hlasem</span> a
      využívala ji k <span className='text-highlighter'>vábení mužů</span>. Tím, že dala nádobě svůj hlas, do ní
      přesunula i <span className='text-highlighter'>část své moci</span>, proto dokáže zklidnit vodu. Artefakt prý
      nalezl kmen etnické skupiny <span className='text-highlighter'>Tupinambá</span>, po kolonizaci Portugalci se
      dostal do <span className='text-highlighter'>Castelobruxa</span>. Artefakt si od té doby <span
        className='text-highlighter'>předávají ředitelé školy</span>. Kromě symboliky ho využívají i k <span
        className='text-highlighter'>ochraně</span> okolí školy. Od roku 1600 se začaly vyrábět i <span
        className='text-highlighter'>kopie tohoto artefaktu</span>, které i přes svou nesrovnatelně slabší moc bývají
      součástí mnoha domorodých kmenů.</p>

    <div className='green-box'>

      <p className='text-highlighter text-align-center'>Postup výroby – kopie artefaktu</p>

      <p><span className='text-highlighter text-underline'>1. Zklidnění písku z Amazonky</span></p>
      <img src={cabaca_da_yara_vyroba_01} className='img-in-text img-in-text-right'/>

      <p>Písek z Amazonky necháme schnout na kameni vystupujícím z vodního toku. V průběhu sedíme na okraji řeky,
        vnímáme její rytmus, zvuk a klid – a ten se snažíme vstřebat. Až tehdy můžeme pokračovat.</p>

      <p><span className='text-highlighter text-underline'>2. Spojení keramiky a písku</span></p>
      <p>Klidnými pohyby ve tvaru pohybu řeky vhněteme do keramiky písek. Představujeme si u toho proud řeky.</p>

      <p><span className='text-highlighter text-underline'>3. Výroba nádoby</span></p>
      <p>Keramiku vytvarujeme do podoby, kterou přizpůsobíme nádobě. Nádoba sama si o svůj tvar řekne, proto nejde
        vyrobit dvě nádoby zcela stejné.</p>

      <img src={cabaca_da_yara_vyroba_02} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>4. Přidání pírek papouška Muirá</span></p>
      <p>Již vytvarovanou nádobu z vnější strany obložíme pírky papouška. Pírka, která papoušek tvůrci artefaktu
        dobrovolně dá, zvyšují moc artefaktu. Během přikládání do pírek zašeptáme tichou uklidňující melodii. Na základě
        melodie můžeme ovlivnit výsledný tón i efekt artefaktu.</p>

      <p><span className='text-highlighter text-underline'>5. Vypálení nádoby (Aktivace Tatá)</span></p>
      <p>Celou nádobu vložíme do ohně a necháme pírka shořet. Jejich energie se díky síle Tatá do nádoby vtiskne. Na
        nádobě by měla zůstat struktura pírek.</p>
    </div>

    <br/>

    <h3>Pulseira de Coral/Ar</h3>
    <p className='text-highlighter text-align-center'>Náramek vzduchu</p>

    <img src={pulseira_de_coral} className='img-in-text img-in-text-right'/>

    <p>Drobný, ale dost výrazný náramek tvořený různě barevnými <span
      className='text-highlighter'>korály a zuby delfína</span>. Kromě schopnosti <span className='text-highlighter'>upravit svou velikost</span> ruce
      nositele se kolem něj při ponoření do vody vytvoří <span className='text-highlighter'>vzduchová bublina</span>.
      Velikost bubliny a délka efektu závisí na kvalitě materiálu a schopnostech tvůrce. Vzduchová bublina se <span
        className='text-highlighter'>postupně zmenšuje</span>, její magické schopnosti se pak <span
        className='text-highlighter'>doplní</span>, pokud se náramek vynoří nad vodu. Podle účinku by se dal zařadit
      mezi <span className='text-highlighter'>nástroje pro práci s přírodou</span>.</p>

    <p>Svůj význam zde samozřejmě hrají i využité materiály – <span className='text-highlighter'>korály</span>, které
      svým symbolem obnovy přinášejí vlastnost <span className='text-highlighter'>znovuzískání schopnosti vytvoření bubliny</span>,
      mimo jiné symbolizují i <span className='text-highlighter'>držení vzduchu pod vodou</span>. Tím, že pocházejí z
      ústí Amazonky, zajišťují fungování schopnosti <span className='text-highlighter'>jak ve sladké, tak i ve slané vodě</span>. <span
        className='text-highlighter'>Zuby delfína</span>, které i společně s korály symbolizují sílu <span
        className='text-highlighter'>Yary</span>, zároveň dodávají předmětu <span
        className='text-highlighter'>harmonii</span> a odkazují na <span
        className='text-highlighter'>původ artefaktu</span>. Pokud jsou delfínem <span className='text-highlighter'>dobrovolně darované</span>,
      pak je síla artefaktu o mnoho větší. <span className='text-highlighter'>Mléko kapybary</span> uvádí do <span
        className='text-highlighter'>rovnováhy</span> živel vody a živel vzduchu, sílu <span
        className='text-highlighter'>Ybytu</span>, protože artefakt potřebuje ke svému fungování síly obě. A protože
      není síla Ybytu reprezentována žádným materiálem, je naprosto <span className='text-highlighter'>klíčová pro aktivaci artefaktu</span>.
    </p>

    <p><span className='text-highlighter text-underline'>Původ artefaktu</span></p>
    <img src={pulseira_de_coral_legenda} className='img-in-text img-in-text-right'/>

    <p>Legendy praví, že kdysi dávno, ještě před příchodem Evropanů na americký kontinent, sídlil u ústí Amazonky <span
      className='text-highlighter'>neznámý kmen</span> významný tím, že se uměli <span className='text-highlighter'>velmi dobře potápět</span>.
      Náčelník tohoto kmene prý jednou pod hladinou narazil na korál, který okolo sebe měl <span
        className='text-highlighter'>obrovskou vzduchovou bublinu</span>. Ten byl ale tak pevně přirostlý k zemi, že ho
      sám nedokázal odříznout. S tím mu prý pomohl až <span className='text-highlighter'>delfín</span>, který plul
      kolem. Do korálu se zakousl a podařilo se mu <span className='text-highlighter'>část odtrhnout</span>. Avšak to
      jenom za cenu toho, že v korálu zůstaly <span className='text-highlighter'>tři jeho zuby</span>. Náčelník poté z
      korálu vytvořil <span className='text-highlighter'>náramek</span> a jako <span className='text-highlighter'>symbol oběti delfína</span> do
      něj zakomponoval i ony tři zuby. Korál od té doby zůstává <span className='text-highlighter'>stále živý</span>.
      Tento artefakt dokáže vytvořit bublinu tak velkou, že se do ní vejde <span className='text-highlighter'>až skupina tří lidí</span>,
      zároveň je jeho účinek <span className='text-highlighter'>trvalý</span>. Podle tého legendy se později začaly
      vyrábět i artefakty podobné, <span className='text-highlighter'>samotné korály však schopnost odpuzovat vodu nemají</span>.
    </p>


    <div className='green-box'>
      <p className='text-highlighter text-align-center'>Postup výroby – kopie artefaktu</p>

      <img src={pulseira_de_coral_vyroba} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter  text-underline'>1. Uctění oběti delfína</span></p>
      <p>Všechny zuby delfína vezmeme do dlaně, stiskneme ji a v přítomnosti zvuku tekoucí vody uctíme delfínovo upřímné
        a dobrovolné darování.</p>

      <p><span className='text-highlighter  text-underline'>2. Nadrcení a rozvaření zubu delfína</span></p>
      <p>Zahřejeme mléko kapybary, mezitím nadrtíme jeden zub delfína a do mléka ho přidáme a necháme rozpustit.</p>

      <p><span className='text-highlighter  text-underline'>3. Složení náramku</span></p>
      <p>Ostatní zuby delfína a korály nasuneme na rostlinný provázek. Ten následně do vařícího mléka vložíme tak, aby
        nerozrušil hladinu a nevydal žádné zvuky, jinak ho směs nemusí přijmout. Během tohoto kroku musíme cítit pokoru
        jak vůči delfínovi, tak kapybaře.</p>

      <p><span className='text-highlighter  text-underline'>4. Aktivace artefaktu (Aktivace Ybytu)</span></p>
      <p>Náramek ze směsi vyjmeme a myslíme na sílu Ybytu. Zhluboka se nadechneme a vydechneme přímo proti náramku, čímž
        se na něj naladíme a sdílíme s ním svůj dech.</p>
    </div>

    <br/>

    <h3>Kámen Pajé</h3>
    <img src={kamen_paje} className='img-in-text img-in-text-right'/>

    <p>Malý leštěný medailon vytvořený z brazilského ametystu nebo akvamarínu. Na jeho povrch je vryt barevný <span
      className='text-highlighter'>symbol X s čarou vycházející ze středu nahoru</span>. Kouzelníkovi, který ovládá řeč
      přírody, umožní bezpečněji a silněji <span className='text-highlighter'>navázat kontakt s lesními duchy</span>.
      Proto se řadí mezi <span className='text-highlighter'>obřadní</span>, ale zároveň i <span
        className='text-highlighter'>komunikační předměty</span>. Během komunikace zároveň <span
        className='text-highlighter'>dodává nositeli klid do duše</span> a pomáhá <span className='text-highlighter'>bezpečnému návratu do reality</span>.
    </p>

    <p>Kámen Pajé je artefaktem <span className='text-highlighter'>jak síly Yvy, tak Ybytu</span>. Yvy
      zprostředkovává <span className='text-highlighter'>spojení s přírodou</span>, s pralesem, a mimo jiné <span
        className='text-highlighter'>ukotvení</span>, přičemž Ybytu, vítr, je důležitý pro schopnost samotné <span
        className='text-highlighter'>duchovní komunikace</span>. Svou roli zde hrají zároveň i použité materiály –
      výběrem drahokamu určíme, jestli bude artefakt více zaměřený na <span className='text-highlighter'>duchovní čistotu</span> (v
      tom případě zvolíme <span className='text-highlighter'>ametyst</span>) nebo na <span className='text-highlighter'>intuici a komunikaci</span> (a
      tedy využijeme <span className='text-highlighter'>akvamarín</span>). Korálky ze stromu <span
        className='text-highlighter'>Pau-brasil</span> symbolizují <span className='text-highlighter'>život</span>,
      přičemž rostliny dodávají <span className='text-highlighter'>symbol vhledu (Banisteriopsis caapi), vizí (Psychotria viridis) a životní síly (Brazilský ženšen)</span>.
      Barvivo z <span className='text-highlighter'>šípové žáby</span> dává artefaktu veškerou <span
        className='text-highlighter'>energii</span>.</p>

    <p><span className='text-highlighter text-underline'>Původ artefaktu</span></p>
    <p>Tradice vytvářet artefakty zprostředkující komunikaci s duchy pralesa je v domorodých kmenech zakotvena už od
      pradávna. Tyto artefakty, v Brazílii často označované jako Kámen Pajé, se postupně vyvíjely, <span
        className='text-highlighter'>každý kmen používal k výrobě jiné materiály</span> a také měly artefakty <span
        className='text-highlighter'>různý efekt</span>. V Castelobruxu se od jeho založení uchytila <span
        className='text-highlighter'>jedna konkrétní varianta</span>.</p>

    <div className='green-box'>
      <p className='text-highlighter text-align-center'>Postup výroby – varianta Castelobruxo</p>

      <img src={kamen_paje_vyroba_01} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>1. Vyrytí symbolu komunikace do drahokamu</span></p>
      <p>Do vybraného drahokamu pomocí diamantového hrotu vyryjeme symbol komunikace, během toho se naladíme na duchy
        pralesa a požádáme je o svolení, že artefakt můžeme vytvořit. Pokud cítíme zápornou odpověď, pak se do tvorby
        vůbec nepouštíme.</p>

      <p><span className='text-highlighter text-underline'>2. Napuštění čtyřech korálků pryskyřicí z Kopaivy</span></p>
      <p>Korálky z Brazilwoodu napustíme předem rozpuštěnou pryskyřicí z Kopaivy, čímž dřevu vytvoříme “kůži”.</p>

      <p><span className='text-highlighter text-underline'>3. Uvaření barvy</span></p>
      <p>Z Banisteriopsis caapi, Psychotria viridis uděláme velmi silný odvar, přimícháme barvu z šípové žáby. Vaříme
        tak dlouho, než ve výparech začneme vnímat vlastní hlas.</p>

      <p><span className='text-highlighter text-underline'>4. Nanesení barvy</span></p>
      <p>Připravenou barvu malým štětečkem naneseme do rýhy v drahokamu, necháme zaschnout.</p>

      <img src={kamen_paje_vyroba_02} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>5. Složení náhrdelníku (Aktivace Yvy)</span></p>
      <p>Drahokam a čtyři nyní už tmavě rudé korálky navlékáme na kožený provázek, který nakonec svážeme. Složený
        náhrdelník položíme na zem a položíme na něj ruku. Snažíme se pocítit spojení se zemí, tím artefakt ukotvíme –
        zajistí bezpečný návrat z duchovní úrovně.</p>

      <p><span className='text-highlighter text-underline'>6. Aktivace (Aktivace Ybytu)</span></p>
      <p>Pálíme brazilský ženšen, pouze do úst vdechneme kouř z něj. Ten necháme v ústech tak dlouho, než se dostane do
        našeho vědomí, pak ho do náhrdelníku vdechneme.</p
      ></div>

    <br/>

    <h3>Flauta Mboí-Puã</h3>

    <img src={flauta_mboi_pua} className='img-in-text img-in-text-right'/>

    <p>Malá flétna vyřezaná z mahagonu, v jejíž dutině je uložen svazek chlupů opice Saimiri A’rua a drobné peříčko
      orla. Podle <span className='text-highlighter'>otevřeného či zakrytého otvoru</span> dokáže vydávat tón,
      který <span className='text-highlighter'>přiláká nebo naopak odradí lesní tvory</span>. Její magie působí na
      instinkty a magické „stopy“ zvířat spojených s pralesem. Díky tomu ji řadíme mezi <span
        className='text-highlighter'>nástroje pro práci s přírodou</span>.</p>

    <p>Při výrobě se zaměřujeme primárně na síly <span className='text-highlighter'>Yara a Ybytu</span>. Yara je
      důležitá pro <span className='text-highlighter'>empatii</span>, kterou k tvorům máme, <span
        className='text-highlighter'>klid a komunikaci</span>. Ybytu zachovává <span
        className='text-highlighter'>svobodu</span> každého živého tvora, tudíž se stará o to, aby celý artefakt <span
        className='text-highlighter'>nefungoval násilně</span>. Síla Ybytu je důležitá také kvůli využití <span
        className='text-highlighter'>mahagonového dřeva</span>, které dává flétně <span className='text-highlighter'>velkou sílu a moc</span>. <span
        className='text-highlighter'>Chlupy opice Saimiri A’rua</span> dodávají předmětu <span
        className='text-highlighter'>cit pro magii lesa</span>, <span
        className='text-highlighter'>peříčko orla</span> podporuje sílu Ybytu a zesiluje <span
        className='text-highlighter'>vhled a vedení</span>. Kapka <span
        className='text-highlighter'>bouřkového deště</span> symbolizuje ryzí sílu <span
        className='text-highlighter'>Yara</span> a využití <span
        className='text-highlighter'>eukalyptu a cumaru</span> přináší celý artefakt do <span
        className='text-highlighter'>harmonie</span>. U Mboí-Puã je výroba velmi složitá proto, že všechny materiály je
      náročné dostat do souznění.</p>

    <p><span className='text-highlighter text-underline'>Původ artefaktu</span></p>

    <p>První Flétna Mboí-Puã se objevila v <span className='text-highlighter'>prastarých kmenech, které sloužily duchům větru a lesa</span>.
      Podle legendy ji poprvé vytvořil <span className='text-highlighter'>šaman Iramã</span>, aby utišil neklidný prales
      a navrátil do něj rovnováhu. Každý rod měl <span
        className='text-highlighter'>vlastní kombinaci zvířecích částí</span> vkládaných dovnitř; některé zůstávají
      dodnes tajné. Verze učící se v Castelobruxu je jednou z tradičních, běžně používaných variant.</p>

    <div className='green-box'>

      <p className='text-highlighter text-align-center'>Postup výroby – tradiční varianta</p>

      <img src={flauta_mboi_pua_vyroba_01} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>1. Příprava dřeva (Naladění na Yara)</span></p>
      <p>Mahagon se na několik hodin vloží do teplé směsi z bouřkového deště, eukalyptu a cumaru. Dřevo se tím zjemní a
        „otevře“ pro přijmutí záměru.</p>

      <p><span className='text-highlighter text-underline'>2. Vyřezání (Dech Ybytu)</span></p>
      <p>Facónem, tradičním jihoamerickým nožem, se opatrně vyřeže dutina a tvar flétny. Při řezbě se udržuje pravidelný
        rytmus dechu – symbol propojení s Ybytu, silou větru a hlasů pralesa. Zároveň se snažíme nechat se dřevem vést –
        vyřezávání pak půjde hladčeji.</p>

      <img src={flauta_mboi_pua_vyroba_02} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>3. Vložení svazku</span></p>
      <p>Do středu se vloží svázané opičí chlupy s jedním peříčkem orla. Tento prvek představuje „srdce hlasu“ –
        moudrost a instinkt v rovnováze.</p>

      <p><span className='text-highlighter text-underline'>4. Zavření a vyřezání otvoru</span></p>
      <p>Dřevo se uzavře a vytvoří se otvor na měnění funkce.</p>

      <p><span className='text-highlighter text-underline'>5. Aktivace (Ybytu)</span></p>
      <p>Tvůrce do flétny třikrát vydechne – probuzení, nasměrování, uzavření. Pokud tón při zkoušce zní čistě a dřevo
        lehce zavoní, je artefakt probuzen.</p>
    </div>

    <br/>


    <h3>Morfo’Rai</h3>
    <p className='text-highlighter text-align-center'>Motýlí cesta</p>

    <img src={morfo_rai} className='img-in-text img-in-text-right'/>

    <p>Artefakt Morfo’Rai je <span className='text-highlighter'>drobný, křehce působící šíp z balsového dřeva, motýlích křídel a křišťálového jádra</span>.
      Po vystřelení z luku nebo vyhození do vzduchu rukou <span className='text-highlighter'>plachtí vzduchem</span>.
      Jakmile dopadne na zem, jeho <span className='text-highlighter'>krystal se rozzáří</span> a z místa dopadu se
      rozvine <span className='text-highlighter'>světelná stezka vedoucí zpět k majiteli</span>. Poutník tak vždy najde
      cestu, i v temném lese či spletité džungli. Při letu křídla artefaktu působí dojmem živého motýla, který ukazuje
      směr.</p>

    <p>Artefakt řadíme mezi <span className='text-highlighter'>posilující</span>, vzhledem k tomu, že <span
      className='text-highlighter'>posiluje schopnost orientace</span>, zároveň mezi <span className='text-highlighter'>nástroje pro práci s přírodou</span>,
      vzhledem k tomu, že dokáže <span className='text-highlighter'>číst terén a vybrat nejlepší cestu</span>. Velmi
      důležitá je síla stvoření <span className='text-highlighter'>Sol</span>, která symbolizuje <span
        className='text-highlighter'>světlo, pravdu</span> a zároveň vlastnosti <span className='text-highlighter'>odhalování a orientace</span>. <span
        className='text-highlighter'>Křišťál</span> reprezentuje <span
        className='text-highlighter'>průzračnost a světlo</span>, <span
        className='text-highlighter'>balsové dřevo</span> svou lehkostí připomíná <span className='text-highlighter'>proplouvání vzduchem a cestu</span>, <span
        className='text-highlighter'>křídla motýla</span> rodu Morpho hledají <span className='text-highlighter'>vnitřní světlo</span> a
      pomáhají <span className='text-highlighter'>navigovat artefakt v prostoru</span>.</p>

    <p><span className='text-highlighter text-underline'>Původ artefaktu</span></p>

    <p>Artefakt pochází ze samotného <span className='text-highlighter'>srdce amazonského pralesa</span>. Podle záznamů
      výzkumníků z Castelobruxa první exempláře vytvořili <span className='text-highlighter'>kouzelní šamani z kmene Moruhá</span>,
      který uctíval zejména noční hmyz a světélkující tvory džungle. Tito kouzelníci věřili, že motýlí křídla propojená
      s krystalem dokáží <span className='text-highlighter'>vést ztracené poutníky hustou a nebezpečnou džunglí</span>,
      kde se bez světla snadno člověk ztratí.</p>

    <div className='green-box'>

      <p className='text-highlighter text-align-center'>Postup výroby</p>

      <img src={morfo_rai_vyroba_01} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>1. Příprava dřeva</span></p>

      <p>Z balsy vyřežeme tenkou tyčku. Začneme od většího odřezku a po malých kouscích okrajujeme, než jsme s tloušťkou
        šípu spokojeni. Balza je měkké dřevo, je lepší pracovat po menších kouscích. Během vyřezávání myslíme na pevnou
        víru ve správný směr. Po vyřezání odstraníme hrubší nedostatky a nakonec povrch zahladíme, obojí pomocí
        navlhčeného kusu látky, v němž bude hlína smíchaná s pískem, která působí jako přírodní smirkový papír. Nakonec
        dřevo čistým vlhkým hadříkem očistíme.</p>

      <p><span className='text-highlighter text-underline'>2. Příprava křišťálového jádra</span></p>

      <p>Křišťál vykoupáme ve vodě a čistým hadříkem pořádně osušíme a naleštíme. Během čištění vyvoláme vzpomínku na
        domov.</p>

      <img src={morfo_rai_vyroba_02} className='img-in-text img-in-text-right'/>

      <p><span className='text-highlighter text-underline'>3. Sestavení a spojení</span></p>

      <p>Na čistém a rovném povrchu sestavíme šíp tak, jak má vypadat - zleva vedle sebe tak umístíme křišťál, poté
        opracované dřevo a nakonec čtyři sušená křídla, která rozestavíme tak, jak mají být na šíp připojena. Spoje
        opatrně zalijeme rozehřátou pryskyřicí a necháme zaschnout.</p>

      <p><span className='text-highlighter text-underline'>4. Aktivace (Yvy)</span></p>

      <p>Tvůrce šípu vezme artefakt do ruky a symbolicky ho pustí lehce před sebe směrem k místu, které bere za svůj
        domov. S dotykem země se artefakt aktivuje a zapamatuje si svého tvůrce.</p>
    </div>

    <a className='game-archive-button' href="/casstellobruxxo/Artefakty2.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv hodiny (NonRPG 28. 11. 2025)</a>

  </div>
)

export default Artefakty