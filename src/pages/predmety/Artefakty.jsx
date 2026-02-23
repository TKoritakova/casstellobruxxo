import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

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



const Artefakty = () => (
  <div>

   
    
    <div className="main-header"><h1>Magické artefakty</h1></div>


    <img src={uvod_01} className='img-in-text img-in-text-right' />
    
    <p>Artefakty tvoří <span className='text-highlighter'>základ kouzelnického řemesla</span> v celé Jižní Americe. Od jednoduchých amuletů, které chrání domovy před zlými duchy, až po mocné nástroje schopné ovlivňovat počasí nebo posilovat kouzla čaroděje. Učí se, že artefakt <span className='text-highlighter'>nevzniká jen spojením materiálů</span>, ale především spojením významů. Každý kámen, vláknitá liána, zub, pírko či prach řeky nese vlastní <span className='text-highlighter'>symboliku</span>, ale teprve v harmonii se záměrem kouzelníka se z nich stává nástroj, který dokáže jednat, chránit, posílit nebo vést.</p>

    <p>Zásadní rozdíl oproti evropskému řemeslu spočívá v přístupu k látce samotné. Zatímco Evropa často spoléhá na kov, dřevo a přesnou formuli, amazonská tradice běžně pracuje s <span className='text-highlighter'>živými a přírodními elementy</span> - drahokamy, vzácnými rostlinami, částmi magických tvorů a především se <span className='text-highlighter'>silami stvoření</span>, které nelze vlastnit: Tatá (oheň), Yara (voda), Ybytu (vítr), Yvy (země) a Sol (Slunce). </p>


    <img src={uvod_02} className='img-in-text img-in-text-left' />
    <p>To, co dělá artefakt artefaktem a zajišťuje jeho správný účinek, je především symbolika a správný <span className='text-highlighter'>výběr materiálů</span>, z nichž je vytvořen. Kombinací více takových prvků se jejich <span className='text-highlighter'>významy propojí</span> a posílí výsledný účinek. Kromě samotného výběru materiálů hraje zásadní roli plné soustředění a <span className='text-highlighter'>představivost</span> během výroby. Kouzelník musí vědomě chápat, <span className='text-highlighter'>proč</span> předmět tvoří, <span className='text-highlighter'>jaký má mít účel</span> a <span className='text-highlighter'>jakým způsobem má působit</span>. Teprve tehdy se dokáže napojit na jeho magii i bez pomoci složitých inkantací. A pokud mezi myslí tvůrce a použitými materiály zavládne skutečná <span className='text-highlighter'>harmonie</span>, může být magie artefaktu probuzena – a předmět se stává pravým artefaktem.</p>

    <h2>Účely artefaktů</h2>
    <hr />
    
    <p>Každý artefakt má účel, na základě kterého je můžeme dělit do několika <span className='text-highlighter'>základních kategorií:</span></p>
    
    <ul>
        <li><span className='text-highlighter'>Ochranné amulety</span> odhánějí zlé duchy a temnou magii a staví hranici mezi nositelem a tím, co se snaží proniknout dovnitř.</li>
        <li><span className='text-highlighter'>Posilující talismany</span> podporují odvahu, sílu nebo soustředění - v nositeli je vyvolají a udrží.</li>
        <li><span className='text-highlighter'>Komunikační předměty</span> pracují s rezonancí drahokamů, dalších materiálů a pamětí hlasu, aby přenesly zvuk, obraz nebo pocit.</li>
        <li><span className='text-highlighter'>Nástroje pro práci s přírodou</span> umožňují ovlivňovat růst rostlin, uklidnit tvory či přivolat déšť.</li>
        <li><span className='text-highlighter'>Obřadní předměty</span> propojují kouzelníka s duchy lesa a předky, je zde obzvlášť důležitá pokora, protože artefakt neotevírá dveře, které by si člověk zasloužil násilím.</li>
    </ul>


    <h2>Příklady amazonských artefaktů</h2>
    <hr />
    
    <h3>Amarras da Alma</h3>
    <img src={amarras_da_alma_01} className='img-in-text img-in-text-right' />
    
    <p>Amulety Amarras da Alma náleží k síle <span className='text-highlighter'>Yary</span>, vody, nositelce empatie. Tvoří jej <span className='text-highlighter'>dvojice přívěsků</span> zavěšených na kožených šňůrkách, vyrobených z bíle kaleného skla. Každý z amuletů má podobu drobné kuličky <span className='text-highlighter'>připomínající kapku rosy</span> a jemně září vlastním světlem. Při bližším zkoumání je možné zaznamenat <span className='text-highlighter'>tenké modré žilkování</span> ve tvaru větvených linií, připomínajících elektrické výboje pod hladinou vody.</p>

    <p>Použitý materiál není pouze dekorativní. Při výrobě amuletů se tradičně využívají <span className='text-highlighter'>šupiny ryb Electrophorus electricus</span> schopných elektrické komunikace, které jsou vázány do skleněné matrice. V tradici Yary je voda chápána jako nositel paměti, hlasu a proměny, a právě elektrické impulzy slouží jako symbol i <span className='text-highlighter'>médium přenosu vnitřních stavů mezi bytostmi</span>. Amulety jsou vždy vytvářeny v <span className='text-highlighter'>páru</span> a jejich účinek se projeví pouze tehdy, jsou-li oba nošeny současně.</p>

    <img src={amarras_da_alma_02} className='img-in-text img-in-text-left' />
    
    <p>Jakmile jsou amulety nasazeny, <span className='text-highlighter'>umožňují přenos silné emoce mezi jejich nositeli</span>. Přenášená emoce není doprovázena obrazem ani slovním sdělením, ale je příjemcem vnímána <span className='text-highlighter'>náhle a intenzivně</span>, často jako tělesný či psychický pocit bez zjevného původu. Zdroj emoce musí být <span className='text-highlighter'>vyvolán vědomě</span>, obvykle prostřednictvím vzpomínky, která daný cit nese. Přijímající osoba následně interpretuje prožitý stav bez přímé znalosti jeho obsahu.</p>

    <p>Z hlediska účelu jsou Amarras da Alma řazeny především mezi <span className='text-highlighter'>komunikační předměty</span>, neboť umožňují přenos vnitřních stavů mezi dvěma osobami bez použití řeči. Zároveň nesou výrazné <span className='text-highlighter'>rysy obřadních artefaktů</span>, jelikož pracují s empatií, pamětí a důvěrou mezi účastníky. Artefakt nefunguje při pokusu o manipulaci či nátlak, jeho <span className='text-highlighter'>účinek je podmíněn otevřeností obou stran</span>.</p>

    <p>Původ artefaktu Amarras da Alma je spojován s pobřežními a říčními komunitami, které uctívaly Yaru jako ochránkyni paměti a vztahů. První zmínky o těchto amuletech pocházejí z <span className='text-highlighter'>rituálů</span> používaných při zasvěcení lovců, léčitelů a strážců vodních cest, kde bylo nutné <span className='text-highlighter'>zajistit tiché porozumění beze slov</span>. Podle tradice byly amulety vytvářeny vždy ve dvojici pro osoby, jejichž osudy měly být dočasně či trvale propojeny, a nebývaly určeny k dlouhodobému vlastnictví.</p>

    <h3>Mapa da Luz Viva</h3>
    <img src={mapa_da_luz_viva_01} className='img-in-text img-in-text-right' />
    
    <p>Předmět příslušející k síle <span className='text-highlighter'>Sol</span>, slunci, má podobu menšího obdélníku či čtverce, který na první pohled může připomínat kouzelnický pergamen. Ve skutečnosti je však tvořen <span className='text-highlighter'>chameleoní kůží</span>, jejíž povrch je pokryt tenkou vrstvou průhledné, magicky zpevněné substance. Ta kůži uhlazuje, chrání a zároveň umožňuje průchod světla. Při bližším zkoumání je na ní patrná <span className='text-highlighter'>hustá síť jemných žilek</span> rozprostřená po celé ploše předmětu.</p>

    <p>Chameleoní kůže byla při výrobě dlouhodobě ošetřována <span className='text-highlighter'>odvarem z bioluminiscenčních hub</span>, jejichž vlastnosti byly následně stabilizovány magií. Výsledkem je povrch, který zůstává neaktivní, dokud není vystaven záměru uživatele a specifickým podmínkám okolí. Po aktivaci se na povrchu předmětu začnou <span className='text-highlighter'>rozsvěcet jednotlivá vlákna</span>, která společně vytvářejí <span className='text-highlighter'>schematickou mapu bezprostředního okolí do sta metrů</span>. Zobrazení není statické – <span className='text-highlighter'>přizpůsobuje se pohybu</span> držitele a zachovává správnou orientaci vůči světovým stranám, stejně jako držiteli ukazuje jeho polohu silněji svítícím křížkem na středu mapy. Artefakt nezobrazuje povrch terénu, ale strukturu prostoru: průchody, překážky, uzavřené oblasti a významné body. </p>

    <img src={mapa_da_luz_viva_02} className='img-in-text img-in-text-left' />
    
    <p>Z hlediska účelu patří tento artefakt mezi <span className='text-highlighter'>komunikační předměty</span>, byť nedovoluje přímou komunikaci mezi dvěma entitami, ale jen zprostředkovává informace o okolním uspořádání světa.</p>

    <p>Původ tohoto artefaktu je spojován se starými <span className='text-highlighter'>kmeny z vnitrozemských oblastí</span>, které uctívaly Sol jako otce světla a nositele pravdy. Legenda praví, že <span className='text-highlighter'>první</span> taková mapa byla vytvořena ze svlečené <span className='text-highlighter'>kůže chameleona</span>, jenž přežil putování spálenou krajinou díky schopnosti přizpůsobit se slunci i stínu. Kůže byla ponořena do odvaru ze <span className='text-highlighter'>svítících hub sbíraných výhradně za poledního slunce</span>, kdy Sol stojí nejvýše. Teprve poté byla zasvěcena světlu v rituálu, při němž se mapa poprvé rozsvítila a odhalila skutečný tvar okolního prostoru.</p>

    <p>V kmenové tradici se věřilo, že artefakt neukazuje cestu tomu, kdo se snaží před tmou utéct, ale tomu, kdo je ochoten ji pochopit. Podle dochovaných záznamů a ústních tradic tak vznikaly mapy tohoto typu jako <span className='text-highlighter'>součást iniciačních zkoušek dospělosti</span>. Mladí členové kmene byli vysíláni do uměle vytvořených bludišť nebo přírodních labyrintů zahalených tmou, kde běžné světlo selhávalo. Předmět jim měl <span className='text-highlighter'>pomoct porozumět prostoru a nalézt vlastní cestu</span> skrze zkoušku, při níž měl jednotlivec dokázat, že je schopen číst pravdu světa bez přikrášlení a iluzí.</p>

    <h3>Šeptající flétna</h3>
    
    <img src={septajici_fletna_01} className='img-in-text img-in-text-right' />
    
    <p>Šeptající flétna je předmět náležící k síle stvoření <span className='text-highlighter'>Ybytu</span>, větru, který tvoří kanál pro zpívaná kouzla a prastaré hlasy, stejně jako je spojován s duchovnem, svobodou a dechem. Vítr je také chápán chápán jako nositel pohybu, změny a vzdálených hlasů, flétna proto bývá označována jako <span className='text-highlighter'>šeptající nástroj</span>, skrze nějž lze tyto hlasy krátce zaslechnout. Využívá se hlavně <span className='text-highlighter'>pro propojení s duchy pralesa</span>, jejichž poselství přichází z dálky a nese hlasy míst, která jsme ještě nenavštívili. </p>

    <p>Vzhledově se jedná o <span className='text-highlighter'>drobnou flétnu modrostříbrné barvy</span>, jejíž povrch při dopadu světla vytváří jemné kovové odlesky. Přestože připomíná kovový nástroj, je vyrobena z magické rostliny zvané <span className='text-highlighter'>šeptalka posměšná</span>, která roste na okrajích školních pozemků Castelobruxa. Tato rostlina je známá svou schopností <span className='text-highlighter'>uchovávat slyšené zvuky a znovu je reprodukovat</span> v pozměněné podobě. Flétna si tuto vlastnost zachovává i po zpracování a funguje jako rezonátor paměti Ybytu. Neopakuje přesně melodie ani slova, ale <span className='text-highlighter'>pracuje s ozvěnami tónů, nálad a záměrů</span>, které v sobě vítr nese z různých míst a časů.</p>

    <img src={septajici_fletna_02} className='img-in-text img-in-text-left' />
    
    <p>Použití flétny je obřadní a vyžaduje <span className='text-highlighter'>soustředění</span> spíše než technickou zdatnost. Kouzelník zahraje jednoduchý tón či krátkou melodii, která má vyjadřovat touhu po pohybu, změně nebo odpovědi. Následně v mysli formuluje <span className='text-highlighter'>otázku</span>, jež se týká jeho budoucnosti nebo další cesty. <span className='text-highlighter'>Odpověď</span> se neobjevuje ve formě jasného sdělení, ale skrze <span className='text-highlighter'>zvukové vjemy, pocity či představy</span> připomínající nejčastěji cizí krajinu, vzdálené místo nebo neznámý hlas. Význam těchto vjemů si musí uživatel <span className='text-highlighter'>vyložit sám</span>.</p>

    <p>Z hlediska účelu je flétna řazena především mezi <span className='text-highlighter'>obřadní předměty</span>, neboť, jak již bylo řečeno, slouží k propojení kouzelníka s duchy pralesa a pamětí přírody. Zároveň nese <span className='text-highlighter'>prvky komunikačních artefaktů</span>, jelikož pracuje s rezonancí hlasu. Flétna však <span className='text-highlighter'>neumožňuje vynutit si odpověď</span> a její účinek závisí na pokoře a otevřenosti uživatele. Otevírá pouze ty cesty, na něž je kouzelník připraven.</p>

    <p>Předmět <span className='text-highlighter'>pochází z období raných šamanských praktik</span>. Vytvořen byl jako pomůcka pro naslouchání duchovním proudům a paměti větru. Původní autor artefaktu není znám, dochované záznamy ukazují akorát jeho hojné rozšíření napříč kmeny.</p>

    <h3>Kořen Matky Yvy</h3>
    
    <img src={koren_matky_yvy_01} className='img-in-text img-in-text-right' />
    
    <p>Artefakt známý jako Kořen Matky Yvy náleží k živlu <span className='text-highlighter'>Yvy</span>, zemi, a představuje jednu z nejstarších forem zemské magie, založené na péči, trpělivosti a <span className='text-highlighter'>přímém kontaktu s živým materiálem</span>. Artefakt má podobu <span className='text-highlighter'>náramku</span> tvořeného <span className='text-highlighter'>spletenými živými kořeny</span>, z nichž každý má odlišný tvar, tloušťku i strukturu, což činí každý kus jedinečným. Kořeny jsou propleteny tak, aby si zachovaly pružnost a životnost, a při nošení na kůži postupně reagují na tělesné teplo nositele.</p>

    <p>Při práci s artefaktem jsou využívány drobné <span className='text-highlighter'>části léčivých a posilujících rostlin</span>, které se do struktury náramku zaplétají během jeho aktivace. Používány bývají například tenké <span className='text-highlighter'>liány vilcacory</span> (posílení imunity), stonky keře <span className='text-highlighter'>paullinie cupany</span> (snížení únavy, povzbuzení, udržování bdělosti), větvičky <span className='text-highlighter'>mansoy alliacey</span> (čištění krve, antibiotické účinky, udržování zdravé kůže) či listy stromu <span className='text-highlighter'>croton lechleri</span>, známého pro svou „dračí krev“ (silné hojivé účinky). Výběr rostlin není náhodný a odráží záměr, s nímž je artefakt oživován. Právě tento záměr ovlivňuje výsledné zaměření náramku.</p>

    <img src={koren_matky_yvy_02} className='img-in-text img-in-text-left' />
    
    <p>Použití Kořene Matky Yvy je založeno na přímém kontaktu s tělem. Během zaplétání rostlin do kořenové struktury nositel <span className='text-highlighter'>vědomě formuluje důvod</span>, proč artefakt vytváří, a propojuje jej se svým tělem. Náramek se nosí na kůži a během jeho používání je <span className='text-highlighter'>pravidelně vyživován několika kapkami vody s medem</span>, které slouží jako zdroj energie i symbol vzájemné výměny. Artefakt tak dočerpává životní sílu a zůstává funkční pouze tehdy, je-li o něj dlouhodobě pečováno. Zanedbání péče vede k jeho <span className='text-highlighter'>postupnému odumírání</span>.</p>

    <p>Z hlediska účelu patří Kořen Matky Yvy mezi mezi <span className='text-highlighter'>nástroje pro práci s přírodou a posilující artefakty</span>, neboť umožňuje přenos životní síly z rostlin na člověka. Je využíván ke zmírnění únavy, vyčerpání či oslabení organismu a může napomáhat i při regeneraci po otravách nebo dlouhodobém oslabení. </p>

    <p>Původ artefaktu sahá ke <span className='text-highlighter'>kultuře Ypîran</span>, kde se věřilo, že dřevo nese paměť. Podle dochovaných legend vznikaly první kořenové náramky při <span className='text-highlighter'>rituálech obnovy</span>, kdy byly živé kořeny splétány přímo v půdě a poprvé nasazeny ještě vlhké od země. Artefakt nebyl považován za nástroj, ale za <span className='text-highlighter'>živého společníka</span>, o nějž bylo třeba pečovat stejně jako o půdu či rostliny. Věřilo se, že čím více péče člověk kořeni věnuje, tím ochotněji mu Yvy navrací sílu, kterou mu sama poskytla.</p>

    <h3>Olho de Vidro Anúrico</h3>
    <img src={olho_de_vidro_anurico_01} className='img-in-text img-in-text-right' />
    
    <p>Artefakt Olho de Vidro Anúrico, často přezdívaný jednoduše <span className='text-highlighter'>artefakt skleněné žáby</span>, je jedním z artefaktů příslušejících k síle stvoření ohně, <span className='text-highlighter'>Tatá</span>. Jde o <span className='text-highlighter'>skleněný náhrdelník ve tvaru kapky</span> pověšený na přírodním rostlinném provázku. Vnitřní část artefaktu je vyplněná na první pohled průhlednou substancí připomínající rosolovitou vodu či jinou tekutinu – ve skutečnosti však jde o <span className='text-highlighter'>magicky upravenou strukturu skla</span>. V úplném středu je malý proužek <span className='text-highlighter'>průhledné kůže</span> žáby <span className='text-highlighter'>Espadarana prosoblepon</span>. Tato žába je specifická tím, že povrch jejího těla je průhledný, prochází jím světlo.</p>

    <p>Po nasazení artefaktu a samozřejmě i správném a řádném <span className='text-highlighter'>naladěním jak na artefakt, tak na magii</span> samotnou, získá nositel schopnost vidět neviděné – <span className='text-highlighter'>strukturu magie</span>. Jednotlivé druhy a typy magikvarků jsou reprezentovány <span className='text-highlighter'>různými barvami</span>, artefakt umožňuje vidět pohyby, hustotu i <span className='text-highlighter'>můstky</span> spojující magikvarky.</p>

    <img src={olho_de_vidro_anurico_02} className='img-in-text img-in-text-left' />
    
    <p>Užívání artefaktu je velmi <span className='text-highlighter'>náročné na lidskou mysl</span>. Vzhledem k tomu, že přesouvá mysl člověka z fyzické roviny do <span className='text-highlighter'>roviny magie</span>, ztrácí nositel přehled o <span className='text-highlighter'>prostoru</span> okolo sebe, mnohem náročněji může vnímat realitu a pokud nemá dostatečně silnou mysl nebo používá artefakt dlouho, může dokonce <span className='text-highlighter'>omdlít</span>. Proto se artefakt používá <span className='text-highlighter'>krátkodobě</span> a často za nějakým účelem.</p>

    <p>Každý materiál využitý k výrobě artefaktu skleněné žáby má svůj účel. Průzračné sklo symbolizuje <span className='text-highlighter'>zprůhlednění hranice mezi oběma světy</span>. Zároveň symbolizuje i samotnou sílu stvoření Tatá – vzhledem ke způsobu vypálení skla. Síla ohně patří k tomuto artefaktu hlavně díky interpretaci jako <span className='text-highlighter'>aktivní energie kouzel</span>. Stejný důvod jako sklo má i využití kůže průhledné žáby.</p>

    <p>Z hlediska účelu je řadíme mezi <span className='text-highlighter'>posilující artefakty</span>, protože zesilují kouzelníkovu schopnost vnímat magii a dávají této schopnosti vizuální podobu. Právě proto je třeba se na magii <span className='text-highlighter'>naladit</span> – čím lepší má kouzelník spojení s magií, tím lépe mu artefakt poslouží.</p>

    <p>První zmínky o Olho de Vidro Anúrico pocházejí již z dávných dob, kdy šamani domorodých kmenů náhrdelník využívali k <span className='text-highlighter'>odhalení temných sil a nemocí</span>, případně přicházejících <span className='text-highlighter'>nebezpečí</span>. Předpokládá se, že první artefakt byl vytvořen v okolí <span className='text-highlighter'>horního toku Amazonky</span>, odkud se velmi rychle <span className='text-highlighter'>rozšířil</span> do celého pralesa.</p>






   




  </div>
)

export default Artefakty