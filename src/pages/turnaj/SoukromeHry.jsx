import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

import Artefakty from '../../img/turnaj/seminare/artefakty.png';
import Archeologie from '../../img/turnaj/seminare/archeologie.png';
import Komunikace from '../../img/turnaj/seminare/komunikace.png';
import Ritualka from '../../img/turnaj/seminare/ritualni_magie.png';
import Zveromagie from '../../img/turnaj/seminare/zveromagie.png';
import Kanoe from '../../img/turnaj/seminare/kanoe.png';

const SoukromeHry = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Útržky z Bradavic</h1></div>
    <br/>

    <h2>Doma v Brazílii</h2>
    <hr/>

    <h3>Snídaně</h3>

    <p><span className='text-highlighter'>Datum a čas:</span> 31. 8. 2025 (15:47 – 20:35)</p>
    <p><span className='text-highlighter'>Účastníci:</span> Juan Miguel Santos Ramírez, Mateo Benítez, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Studenti brazilské školy Castelobruxo se scházejí na společné snídani a diskutují o nadcházející cestě do Evropy a návštěvě Bradavic. Sofía se s chlapci špičkuje kvůli jejich neformálnímu oblečení a nedostatku vkusu, zatímco Mateo a Juan řeší praktické věci jako zimní výbavu nebo spánkový režim. Dojde i na téma magických aur, drahých kamenů a školních známek, které rozhodly o jejich účasti na výměnném pobytu. Hra končí odchodem Matea a Juana z jídelny s úmyslem vzbudit své další spolužáky, Césara a Luciu, na fotbal.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/BrazilieSnidane.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>


    <h2>Bradavická knihovna</h2>
    <hr/>

    <h3>Lucka a Bradavice</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 12. 10. 2025 (21:17 – 22:32) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Veronica Kiraz</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Lucia z Castelobruxa a Veronica z Nebelvíru se potkávají v knihovně před večerkou. Lucia hledá materiály pro esej do dějin čar a kouzel a obě dívky krátce diskutují o nadcházejícím turnaji a svých favoritech. Lucia přiznává, že ji po několika negativních zkušenostech s bradavickými studenty přešla chuť se turnaje aktivně účastnit. Po krátké výměně zdvořilostí se obě studentky rozloučí a odcházejí.</p>

    <h3>Luana a vzhledové trable</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 13. 10. 2025 (10:40 – 13:15) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Maxon Thatcher</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Luana z Castelobruxa a britský student Maxon se náhodně potkávají v bradavické knihovně, kde Luana hledá recepty na domácí lektvary, aby vylepšila svůj vzhled a zapadla mezi místní studenty. Maxon Luaně věnuje svou mikinu, aby ji zahřál v mrazivém skotském počasí, za což si vyslouží polibek na tvář. Společně diskutují o kulturních rozdílech, mudlovských technologiích, jako je herní konzole, a o přátelskosti studentů z různých škol. Maxon Luaně rozmlouvá nápad barvit si vlasy na blond a nabízí jí recepty na domácí šampony od své matky. Hra končí Maxonovým návrhem, aby ho Luana doprovodila a ukázala mu cestu do klubovny.</p>

    <h3>Astronomie ve čtyřech</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 15. 11. 2025 (15:03 – 17:38) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Elise Trevelyan, Christian Taylor Grey, Mateo Benítez, Catriel Ulises Condori</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Skupina studentů se v knihovně věnuje astronomickému projektu, přičemž Elise přichází s informacemi vytištěnými z mudlovské Wikipedie. Konverzace se rychle stáčí od učení k blížícímu se plesu a hledání doprovodu pro nezadaného Catriela. Elise v rámci "tréninku" zmanipuluje Catriela, aby si zkusil pozvání na ples nanečisto na Mateovi. Tato komická a mírně trapná situace končí rozpuštěním skupiny a odchodem studentů z knihovny.</p>

    <h3>Astronomie pro pokročilé</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 18. 11. 2025 (16:31 – 17:24) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Eli Harold Vaughn, Sofia Amarilis Perez, Lucia Juliana Navarro, Effrigo Nilrem Redsolle (knihovník)</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Trojice studentů (Eli, Sofia a Lucia) se schází v bradavické knihovně, aby vypracovali skupinový úkol do astronomie týkající se galaxií a hvězdných trojúhelníků. Eli projevuje značnou nedůvěru vůči brazilským studentům kvůli předchozím špatným zkušenostem, zatímco Lucia sází při hledání knih na svou intuici. Skupina nakonec úspěšně nachází potřebnou literaturu, včetně informací o trpasličí planetě Ceres. Po sesbírání zdrojů se rozhodují přesunout do studovny k dokončení práce.</p>

    <h3>..a další skupinová astronomie</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 21. 11. 2025 (17:34 – 20:29) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Livia Aurelia Ballmer, Inés Soraya Caro, Kasiopea Altbauer</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Livia z Kruvalu a Inés z Castelobruxa doprovázejí mladší bradavickou studentku Kasiopeu do knihovny za účelem výzkumu pro projekt. Dívky si vyměňují zkušenosti o drsných podmínkách a náročných terénních praxích na svých domovských školách, což Kasiopeu upřímně děsí. Inés se snaží pochopit bradavický systém prefektů, zatímco bojuje s místním chladným počasím. Po nalezení několika knih o astronomii se trojice odebírá do studovny.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/KolektivniUkolZAstra.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Kamenný most</h2>
    <hr/>

    <h3>Mateo a bradavická večerka</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 10. 2025 (22:42) – 11. 10. 2025 (1:46) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Elise Trevelyan, Mateo Benítez, Jared Ilai Moreno (profesor)</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo a Elise se potkávají po večerce na kamenném mostě, kde Mateo přiznává, že se v rozlehlém hradě ztratil. Jejich rozhovor o rozdílech mezi školami přeruší profesor Moreno, který je oba načapá při porušování školního řádu. Mateo se snaží neúspěšně vymlouvat na neznalost času a dokonce na "náboženskou upřímnost" pomocí křížku na krku. Profesor nakonec Elise propouští a Mateovi oznamuje, že za jeho noční toulky vymyslí adekvátní trest. Moreno doprovází Matea směrem k ubytování a cestou diskutují o bradavických kolejích a mezinárodních vztazích. Profesor vyjadřuje skepsi nad bradavickým bodovým systémem a přemýšlí o trestu, který by byl pro Matea skutečně užitečný, například přednáška z historie. Mateo se snaží odlehčit situaci dotazy na profesorův milostný život a krásu místních profesorek. Hra končí Mateovým návratem do brazilského stanu se slibem, že se příště nenechá chytit.
</p>

<a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/MateoChycenPoVecerce.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

<h2>Černé jezero - hygienické okénko</h2>
<hr />

<h3>Mateo a koupačka s Ivanem</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 6. 12. 2025 (20:15) – 7. 12. 2025 (0:38) - březen 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Ivan Nikolaevich Vasiliev, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo narazí u Černého jezera na kruvalského studenta Ivana, který se zde pravidelně otužuje a myje. Mateo se k němu impulsivně přidá do ledové vody, i když okamžitě začne mrznout a litovat svého rozhodnutí. Během koupele probírají kulturní rozdíly, život na severu a své předchozí zkušenosti z turnajových úkolů. Ivan nakonec Mateovi půjčí ručník a domluví se na dalším společném otužování, načež se oba rozcházejí do svých ubikací.
</p>


<a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/MateoSeKoupeSIvanem.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

<h2>Černé jezero</h2>
<hr />

<h3>Útěk a konfrontace</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 5. 11. 2025 (0:00 – 2:12) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Cindy Emberly Dinklage, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Nebelvírka Cindy pronásleduje Matea po večerce u jezera, protože mu chce "vysvětlit", aby se přestal stýkat s její nejlepší kamarádkou. Mateo se snaží utéct, ale zakopne a Cindy ho konfrontuje s jeho chováním vůči dívkám. Dojde k ostré slovní výměně o citech a porušování pravidel, po které Cindy Matea varuje, že ví, kde bydlí. Mateo nakonec v panice prchá do svého stanu, zatímco Cindy se vrací do hradu.</p>

<h3>Rozhovor u jezera</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 11. 2025 (18:34 – 22:35) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofía Sánchez, Joshua J. Pérez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Sofía se u jezera potkává s mrzimorským studentem Joshuou, který si všimne, že dívka mrzne, a nabídne jí deku a rukavice. Společně rozebírají své předsudky o ostatních školách a Sofía se svěřuje se svými obavami o osud obří olihně v jezeře. Joshua se snaží Sofíu okouzlit a navrhuje jí společné (zakázané) koupání v jezeře, až bude tepleji. Hra končí Joshuovou nabídkou doprovodu ke stanu a pozváním na horký nápoj.
</p>



    <h3>Zástupcova domluva</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 14. 11. 2025 (12:16 – 15:27) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Caetano Murhala (zástupce ředitele), Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span>  Zástupce brazilské školy Murhala si bere Matea na soukromý rozhovor, aby s ním probral jeho opakované porušování večerky a riziko vyloučení z turnaje. Murhala projevuje pochopení pro Mateovy chyby, ale důrazně ho varuje, že další stížnosti už nebudou tolerovány. Kromě kázeňských problémů spolu mluví i o turnajových úkolech, strachu z létání na koštěti a navazování mezinárodních přátelství. Murhala nakonec Mateovi nabízí pomoc se sháněním hodinek, aby už nemohl zmeškat večerku.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/MateoSiPovidaSMurhalou.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

       <h2>Ošetřovna</h2>
       <hr/>


<h3>Pirožky na usmířenou</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 25. 10. 2025 (20:31) – 26. 10. 2025 (00:02) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> César Jesus Giménez Castillero, Livia Aurelia Ballmer</p>
    <p><span className='text-highlighter'>Shrnutí:</span> César přichází na ošetřovnu navštívit Livii, která se zde zotavuje po vážném zranění (odštěpu ruky) z kurzu přemisťování. Jako omluvu za své minulé příliš hrr chování jí přináší kytici gerber a snaží se ji rozptýlit vtipkováním o brazilském temperamentu. Livia, ač původně zaskočená a v rozpacích, ho pohostí sýrovými pirožky od spolužáka Váni a společně vedou rozhovor o svých odlišných kulturách, jídle a jazycích. Césarovy pokusy o lichotky Livii viditelně vyvádějí z míry, přesto mezi nimi panuje uvolněná a přátelská atmosféra. Celá scéna končí Césarovým odchodem a vzájemným přáním dobré noci, zatímco Livia osamoceně přemítá nad kyticí a jeho slovy.</p>


<h3>Návštěva u lůžka a útěk před hennou</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 26. 10. 2025 (17:03) – 26. 10. 2025 (18:58) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofia Amarilis Perez, Eli Harold Vaughn</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Eli přichází navštívit Sofii, která se zotavuje na ošetřovně po nezvládnutém přemisťování, při němž utrpěla odštěp nohy. Jejich setkání se nese v duchu jemného španělského hašteření a vzájemného sbližování, kdy Eli přes masku bručouna dává najevo starost a Sofia ho láká do své blízkosti na lůžko. Atmosféra zhoustne, když se Sofia chystá k odchodu a Eli spatří její nohu zdobenou hennou a ortézou, což ho viditelně vyvede z míry. Eli se pod záminkou dalších povinností dává na rychlý ústup a nechává zmatenou Sofii, aby si své věci z ošetřovny odnesla sama. Hra končí Sofiiným osamělým odchodem a tichým láteřením nad Eliho náhlým zmizením.</p>


<h3>Odštěpy, koláče a vánoční plány</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 1. 11. 2025 (15:44) – 1. 11. 2025 (22:08) - listopad 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Juan Miguel Santos Ramírez, Maya Garcia-Berry, Mateo Benítez, Talphas Herkis</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Na ošetřovně se léčí Juan (odštěp nohy) a Maya (odštěp ruky), které postupně navštěvují jejich přátelé Mateo a Talphas. Mateo s Juanem probírají nešťastné zmizení uniformy během přemisťování a Mateo se snaží kamaráda rozptýlit humorem, zatímco Talphas přináší Maye koláče ze Síně a řeší s ní školní drby a plány na Vánoce. Po odchodu návštěvníků spolu Maya a Juan vedou tichý rozhovor o bolesti a náročnosti léčby, během něhož Maya pod vlivem lektvarů usíná. Juan se jí pokouší svěřit s něčím důležitým, ale když zjistí, že spí, rezignovaně se ukládá ke spánku také.</p>


<h3>Narozeniny na ošetřovně</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 22. 11. 2025 (14:13) – 22. 11. 2025 (18:13) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofía Sánchez, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo přichází na ošetřovnu navštívit Sofíi, která se zde zotavuje po nepodařeném pokusu o přemístění, při kterém utrpěla odštěp nohy. Setkání je o to významnější, že Mateo má ten den sedmnácté narozeniny, a Sofía pociťuje vinu, že místo plánované oslavy musí trávit čas u jejího lůžka. Během dlouhého společného odpoledne si oba vyznávají city, Mateo se snaží Sofíi rozptýlit humorem i odbornými radami k přemisťování a slibuje jí, že se vrátí hned další ráno i s kávou. Scéna končí něžným rozloučením, kdy Mateo odchází na večerní trénink a Sofía zůstává na ošetřovně s nadějí na brzké propuštění.</p>

<h3>Valentýnské drama a odhalená tajemství</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 29. 11. 2025 (19:57) – 30. 11. 2025 (04:25) - únor 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez, Juan Miguel Santos Ramírez, Kamilla Bokorova, Maya Garcia-Berry, Fuji Yamamoto, Madam Pomfreyová (NPC), Amorkové (NPC)</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo a Sofía tráví valentýnský večer na ošetřovně, kam postupně přicházejí další návštěvníci (Maya za Juanem) a Amorkové doručující magické valentýnky. Atmosféra houstne, když Mateo obdrží vzkaz od Cindy, který se snaží před žárlivou Sofíou utajit, zatímco Juan řeší své vlastní vztahové dilema. Kamilla Bokorova se probírá z bezvědomí a po obdržení valentýnky od anonymního „M“ propadá zoufalství; pomocí zapůjčené hůlky psaníčko teatrálně spálí, aby se zbavila důkazů o své zranitelnosti. Hra končí vynuceným tichem po večerce, kdy se postavy v osamění vyrovnávají se svými city a následky zranění.</p>
   
   <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/Osetrovna.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Hodina péče o kouzelné tvory</h2>
    <hr/>

    <h3>Hodina péče v Zapovězeném lese</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 13. 12. 2025 (18:29 – 20:24) - duben 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Annelies Castello (profesorka), Thomas Severin Gibson, Mattéo Saverio Grossi, Eli Harold Vaughn, Sofia Amarilis Perez, Inés Soraya Caro, Fuji Yamamoto, Noelle Aurora Skarsvik, Theodore Ian Everett</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Studenti se scházejí ve vstupní síni, kde je profesorka Castello překvapuje oznámením, že hodina proběhne v Zapovězeném lese namísto obvyklé hájenky. Theodore a Thomas jsou pověřeni nesením pytlů s moukou, zatímco profesorka magicky transportuje sud s masem. Cílem výpravy jsou testrálové, které profesorka zviditelňuje pro všechny přítomné pomocí moučného poprašku. Studenti se učí o klasifikaci nebezpečnosti tvorů a o pověrách spojených s těmito okřídlenými koňmi. V praktické části si většina studentů vyzkouší krmení Testrálů syrovým masem, což u některých, jako u Mattéa Grossiho, vyvolává silné emoce a vzpomínky. Thomas Gibson se projevuje jako zručný krotitel, když se mu podaří navázat kontakt s hříbětem. Inés a Theodore během hodiny utužují své přátelství a domlouvají si soukromé lekce létání na koštěti. Po skončení výuky se skupina postupně rozchází a vrací se z lesa zpět do hradu.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/RandiciHodinaPokt.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>
 
    <h2>Konec roku - loděnice</h2>
    <hr/>

    <h3>Poslední sbohem u loděnice</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 3. 1. 2026 (23:44) – 4. 1. 2026 (04:52) - červen 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Ivan Nikolaevich Vasiliev, Ghuhloalan Zipporah Elazar, Kamilla Bokorova, Catriel Ulises Condori, Mateo Benítez, Juan Miguel Santos Ramírez, Maya Garcia-Berry, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Po skončení turnaje se skupina studentů z Kruvalu a Castelobruxa schází k neformálnímu rozloučení v prostorách bradavické loděnice. Atmosféra se nese v duchu ošetřování šampiona Ivana, kterého se ujímá Kamilla s pomocí Matea, přičemž dochází k usmíření mezi bývalými soupeři. Studenti společně vzpomínají na uplynulý rok, sdílejí své plány na návrat domů a vyjadřují smutek nad končícím pobytem v Bradavicích. Mateo s Juanem vtipkují o svých minulých incidentech, zatímco Maya a Juan řeší svůj čerstvý vztah, který Maya veřejně přiznává. Postupem času se začínají projevovat únava a obavy z reakcí profesorů na porušení večerky. Skupina se postupně rozpadá, jak první dvojice odcházejí spát nebo se balit na ranní odjezd. Mezi Ghuhloalan a Catrielem dochází k tichému příslibu budoucího setkání na neutrální půdě. Celá hra končí odchodem posledních postav, Mayi a Juana, vstříc hradu za svítání.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/Rozlucka.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Černé jezero</h2>
    <hr />
    <h3>Večerní setkání u jezera</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 8. 10. 2025 21:21 – 9. 10. 2025 00:29 - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Lucia Juliana Navarro</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo a Lucia se scházejí u nočního jezera, kde jí Mateo po počátečním laškování předává ametystový náramek jako dárek. Lucia si gesto vyloží jako milostné vyznání a pokusí se Mateovi vyjádřit své city. Mateo ji však vzápětí odmítne s tím, že ji bere pouze jako nejlepší kamarádku, čímž ji uvrhne do tzv. "friendzone". Lucia propadá zoufalství a v slzách od jezera utíká. Mateo se ji pokouší utěšit objetím, ale nakonec ji nechává odejít a sám místo opouští.</p>

    <h3>U břehu Černého jezera</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 10. 2025 12:37 – 10. 10. 2025 16:55 - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Tristán Yeray Moreno, Eli Harold Vaughn, Sofia Amarilis Perez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Profesor Tristán Moreno provádí výzkum u jezera, kde se k němu připojuje jeho synovec Eli Vaughn. Společně diskutují o nehostinných podmínkách v havraspárské společenské místnosti a o rozdílech ve výuce mezi svými školami. Po celou dobu je ze stromu skrytě pozoruje Sofia Perez, kterou Tristán nakonec odhalí a Eli si stěžuje, že ho dívka už týden stalkuje. Eli a Tristán se nakonec rozhodnou přesunout do tepla hradu, zatímco Sofia po jejich odchodu vylézá z úkrytu a následuje je. Rozhovor končí Tristánovým sarkastickým zhodnocením bradavických studentů a jejich schopnosti přežít v Kruvalu.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/SofiaPStalkerka.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

       <h2>Bradavická klubovna</h2>
    <hr />

    <h3>Setkání u čaje a kočkovitých šelem</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 10. 2025 (14:31 – 16:55) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Elizabeth Alison McClair, Luana Mariana Almeida Soares</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Elizabeth si přichází do klubovny odpočinout se svým kotětem a připravit si horký nápoj. Potkává Luanu z Castelobruxo, která zde hledá svého bratra Gabriela a doprovází ji ocelot Aurí. Dívky společně diskutují o rozdílech ve výuce bylinkářství, chovu exotických mazlíčků v bradavickém hradu a nezvykle chladném skotském počasí. Luana si stěžuje na nedostatek praxe v hodinách a Eliz jí vysvětluje místní poměry i své nadšení pro sníh. Setkání končí vzájemným představením a společným odchodem směrem k bradavické knihovně.</p>


    <h3>Turnajové drama a hledání signálu</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 12. 10. 2025 (21:45) – 13. 10. 2025 (02:52) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Frederick Oliver Everhard, Mateo Benítez, Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Malý Frederick se v klubovně marně pokouší zprovoznit svůj gameboy, zatímco starší studenti z Castelobruxo, Mateo a Juan, řeší své milostné a sociální komplikace po nedávném turnajovém incidentu. Mateo se vyrovnává s hněvem své kamarádky Lucky a rozporuplnými city k Sofíi, přičemž mu Juan poskytuje pragmatické rady, jak situaci „nechat vyhnít“. Mezi osobními hovory se snaží Fredericka zabavit vysvětlováním, proč v Bradavicích nefunguje technologie a jak se hrají kouzelnické šachy. Hra končí odchodem Fredericka na ložnice a následným odchodem Juana a Matea z klubovny za dalším rozhovorem.</p>


    <h3>Usmíření a první vyznání pod pláštěm</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 24. 10. 2025 (16:18 – 20:43) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Eli Harold Vaughn, Sofia Amarilis Perez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Eli se snaží v klubovně v klidu učit, ale je vyrušen příchodem Sofíi, se kterou má napjatý vztah kvůli tajemstvím ohledně jeho původu, která Sofia nechtěně vyslechla. Po počátečním ignorování a popichování ohledně špatně připraveného kakaa dojde k emocionálnímu sblížení, kdy si Eli přivolá kouzlem plášť, aby zahřál promrzlou Sofii. V těsné blízkosti si vzájemně vyznají náklonnost, potvrdí si, že se mají rádi. Hra končí jejich společným odchodem z klubovny s příslibem dalšího setkání u horké čokolády.</p>


    <h3>Juanovo vakoveverčí tajemství</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 29. 10. 2025 (23:26) – 30. 10. 2025 (03:59) - listopad 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Maya Garcia-Berry, Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Maya a Juan se scházejí v noční klubovně u krbu, kde Juan vypráví o brazilském rituálu a své přípravě na turnajové úkoly. Během společné přípravy kakaa v kuchyňce Juan Mayu překvapí tím, že se promění ve svou zvířecí podobu – malou vakoveverku – a předvede jí své plachtění z výšky skříněk přímo na její rameno. Maya je jeho schopností registrovaného zvěromága fascinována a neskrývá úžas nad tímto nečekaným odhalením. Po přeměně zpět do lidské podoby Juan dopije kakao a nabídne Maye doprovod k cestě na její kolej.</p>

    <h3>Čokoláda pro Livii</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 6. 11. 2025 (19:47) – 7. 11. 2025 (01:20) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> César Jesus Giménez Castillero, Livia Aurelia Ballmer</p>
    <p><span className='text-highlighter'>Shrnutí:</span> César pozve Livii do klubovny, aby jí připravil horkou čokoládu podle receptu své rodiny z latino ameriky. Během přípravy nápoje v malé kuchyňce spolu vedou dialog o rozdílech mezi jejich školami, přičemž rozebírají výukové metody, disciplínu v Kruvalu a kontroverzní používání rituálních omamných čajů v Brazílii. César se snaží Livii polichotit a přiblížit jí spirituální chápání magie, zatímco ona si zachovává svůj typický odstup a kritický pohled na „nelegální“ praktiky. Navzdory kulturním střetům se atmosféra uvolní a César nakonec doprovodí Livii zpět k její lodi.</p>


    <h3>Od sporů k oficiálnímu vztahu</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 11. 2025 (13:21 – 17:24) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofia Amarilis Perez, Eli Harold Vaughn</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Eli a Sofia se setkávají v klubovně krátce po turnajovém úkolu, který mezi nimi prohloubil napětí. Eli, který má potíže s vyjadřováním emocí, se snaží Sofii omluvit za své předchozí chladné chování, zatímco ona se mu snaží vysvětlit základy empatie a mezilidských vztahů. Po dlouhém a místy neohrabaném dialogu plném vzájemného oťukávání a přiznání strachu ze sblížení Eli konečně položí klíčovou otázku na téma jejich vztahu. Hra vrcholí jejich prvním společným polibkem, oficiálním potvrzením, že spolu chodí, a jejich společným odchodem z klubovny ruku v ruce.</p>

    <h3>Reflexe oběti: Turnajové setkání</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 11. 2025 (17:50 – 22:54) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> uan Miguel Santos Ramírez, Melissa Nayra de León, Tristán Yeray Moreno (profesor), Chiara Antonia José, Mateo Benítez, César Jesus Giménez Castillero</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Skupina studentů z Castelobruxo se schází v klubovně se svým profesorem Tristanem Morenem k neformálnímu zhodnocení uplynulých událostí. Hlavním tématem diskuse je hluboká filozofická reflexe posledního turnajového úkolu a konceptu „oběti“, kdy každý student sdílí svou osobní zkušenost s tím, co musel v pevnosti odevzdat. Večer je protkán přátelským popichováním (zejména na účet Césara a jeho vztahu k Livii), nostalgií po domově a společným pitím bylinkového čaje na uklidnění. Celá hra končí po večerce, kdy profesor Moreno odvádí celou skupinu přes hrad bezpečně zpět do jejich stanu.</p>


    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/TristanASedanekSeStudenty.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Odpočívadlo v sedmém patře</h2>
    <hr />

    <h3>Odpolední studium a škádlení</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 5. 10. 2025 (10:02 – 15:20) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Eli Harold Vaughn, Sofia Amarilis Perez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Eli se pokouší v klidu studovat na odpočívadle, ale je vyrušen Sofií, která ho začne přátelsky provokovat a rýpat do jeho "morenovského" původu. Společně probírají své pocity z Bradavic, rozdíly mezi jejich domovskými zeměmi a Eliho nechuť k britskému počasí. Rozhovor se stočí k jejich mazlíčkům a Eliho zálibě v pojídání žab, což Sofii střídavě baví i děsí. Hra končí, když Sofia přesvědčí Eliho, aby jí udělal prohlídku hradu, a společně odcházejí.</p>


    <h3>Slzy a útěcha</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 10. 2025 (20:00 – 21:01) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Alejandro Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Zničená Lucia se uchyluje na odpočívadlo, kde pláče kvůli neopětovaným citům k Mateovi a pocitům méněcennosti. Nachází ji zde Alejandro Sánchez, který se ji snaží rozptýlit skládáním komplimentů na její vzhled. Lucia se mu svěřuje, že se cítí ošklivá, zatímco Mateo se dvoří jiným dívkám, včetně Alejandrovy sestry. Alejandro nabízí Lucii podporu a navrhuje, aby spolu začali trávit více času jako přátelé. Hra končí, když se oba rozhodnou zahnat hlad a společně odcházejí na jídlo.</p>


    <h3>Král hovadin a výlet za kakaem</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 12. 10. 2025 (13:45 – 15:53) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Alejandro Navarro, Chiara Antonia José</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Alejandro tráví čas o samotě na chodbě, kde ho nachází Chiara. Společně rozebírají Alejandrovy milostné trable, zejména jeho nedávné polibky s Luanou a Kirou, které vedly k nedorozuměním. Chiara Alejandra starostlivě poslouchá a snaží se ho rozveselit. Alejandro si stěžuje na britskou zimu a frustraci z nefunkčních plánů. Nakonec se oba rozhodnou opustit odpočívadlo a vydat se společně hledat horké kakao nebo maté, aby se zahřáli a pokračovali v rozhovoru.</p>

    <h3>Mezinárodní napětí a tajná mapa</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 12. 10. 2025 (21:27) – 13. 10. 2025 (0:40) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Fjodor Alexej Konovalov, César Jesus Giménez Castillero</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Unavená Luana si jde odpočinout na lavičku, kde ji nejdříve vyleká tichý Kruvalec Fjodor a vzápětí se objeví energický César, který se v hradě ztratil. Mezi studenty Castelobruxa a Kruvalu panuje zpočátku nejistota, ale César se snaží situaci odlehčit a s Fjodorem si dokonce přátelsky ťukne pěstí. Fjodor jim ukazuje své tajné mapy hradu a Luana si jednu z nich prohlíží, zatímco vtipkují o šikaně ze strany ducha Protivy. Fjodor skupinu varuje před hýbajícími se schody a všichni se společně vydávají dolů. Luana se k nim spěšně přidává, aby nezůstala na odpočívadle sama.</p>

    <h3>Rodinné tajemství a krev v pevnosti</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 9. 11. 2025 (22:07) – 10. 11. 2025 (0:58) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Eli Harold Vaughn, Tristán Yeray Moreno </p>
    <p><span className='text-highlighter'>Shrnutí:</span> Eli je na odpočívadle konfrontován svým strýcem Tristánem Morenem, se kterým vede vyostřený spor o rodinných vztazích a škole. Eli strýci vyčítá, že ho na seminářích vyčleňuje z kolektivu a dává mu nechtěnou speciální péči, což vnímá jako zradu. Atmosféra zhoustne, když Eli odhalí řeznou ránu na ruce a přizná se, že v kruvalské pevnosti rituálně obětoval "jejich společnou" krev. Tristán je touto informací o Eliho nebezpečném počínání šokován a marně se snaží o smířlivý tón. Eli hádku ukončuje strohým odchodem do havraspárské společenské místnosti.</p>

<a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/TristanHadkaSeSynovcem.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Zapovězený les</h2>
    <hr />


<h3>Setkání u Zapovězeného lesa</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 8. 10. 2025, 13:16 – 14:46 - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Tristán Yeray Moreno, Luana Mariana Almeida Soares</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Profesor Moreno se vrací ze Zapovězeného lesa se vzorkem houby, kde ho dostihne studentka Luana. Probírají nebezpečí lesa a akademické záměry studentky, přičemž profesor vtipkuje o jejích výmluvách ohledně hledání „orientačních bodů“. Luana si následně stěžuje na vysokou finanční náročnost místní výuky a žádá profesora o přímluvu u vedení školy. Tristán slibuje, že záležitost probere u čaje s vedením, a varuje Luanu před dalšími toulkami v rizikových oblastech. Na závěr ji doprovodí do bezpečnějších částí pozemků a domluví si společnou praktickou lekci ve skleníku na příští ráno.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/TristanNaselLuanu.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>

    <h2>Velká síň</h2>
    <hr />


    <h3>Seznamovací večeře po příjezdu</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 4. 10. 2025 (21:15) – 5. 10. 2025 (0:27) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Chu Son-woo, Sofía Sánchez, Mateo Benítez, Juan Miguel Santos Ramírez, Chiara Antonia José, César Jesus Giménez Castillero</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Studenti z Castelobruxa a Mahoutokora se po příjezdu a uvítacím ceremoniálu scházejí u společné večeře ve Velké síni. Zatímco Sofía a Son-woo vedou zdvořilou debatu o rozdílech v národních kuchyních a jazycích, skupinka kolem Juana a Césara se věnuje spíše humornému glosování britského prostředí. Mateo se během večera odhodlá a úspěšně pozve Chiaru na rande pomocí vyčarovaných květin. Celá scéna končí postupným odchodem studentů na kutě před nadcházejícím volným dnem.</p>

    <h3>Druhý večer a filozofování o čase</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 5. 10. 2025 (20:45) – 6. 10. 2025 (0:07)</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Inés Soraya Caro, Gabriel Sebastian Almeida Soares, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Luana a Inés se scházejí u ovoce a rozebírají své rozpačité dojmy z britských studentů a podivných školních pravidel. Později se k nim připojuje Gabriel, který s Inés zapřede humornou debatu o tom, zda je vzhledem k časovému posunu a tmě venku vlastně večer, nebo už ráno. Do hovoru nakrátko vstoupí i Mateo, který se soustředí spíše na četbu a rychlou svačinu před spaním. Scéna končí hromadným odchodem, kdy Inés odvádí Luanu hledat jejich ubytování.</p>

    <a className='game-archive-button' href="/casstellobruxxo/archivy-soukrome/VelkaSinPoPrijezduDvaVecery.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>


    <h2>Castelobrušský stan</h2>
    <hr />

    <h3>Nečekané přiznání a probdělá noc</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 9. 10. 2025 (22:18) – 10. 10. 2025 (3:55) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo se v noci potkává se Sofíou u dívčích ložnic a svěřuje se jí s rozkolem mezi ním a Luciou, kterou nechtěně citově ranil. Vysvětluje, že jí daroval ametystový náramek, což si Lucia vyložila jako projev lásky a vyznala mu city, které on ale neopětuje. Sofía Mateovi trpělivě naslouchá, snaží se mu vysvětlit ženské signály a poskytuje mu útěchu v podobě objetí na pohovce. Mateo propadá lítosti nad ztrátou nejlepší kamarádky a v emocionálním vyčerpání nakonec usíná Sofíi v náručí.</p>


    <h3>Emoční bouře a facka ve stanu</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 12. 10. 2025 (0:00 – 4:28) - září 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez, Lucia Juliana Navarro, Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Hra začíná návratem Matea a Sofíe z venkovní akce; oba se k sobě mají velmi blízko, Mateo jí půjčuje svůj plášť a probíhá mezi nimi flirtování. Jejich intimní chvilku u ohně přeruší Lucia, která je tajně pozorovala a následně Matea konfrontuje s jeho city k Sofíi. Emoce vyvrcholí, když Lucia vlepí Mateovi prudkou facku a s pláčem uteče ze stanu. Do situace se zapojuje i probuzený Juan, který se snaží situaci uklidnit a radí Sofíi, aby se nenechala Luciou vystrnadit z ložnice. Hra končí útěkem Sofíe ze stanu v Mateově plášti a celkovým rozvratem přátelských vztahů.</p>


    <h3>První polibek a noční smíření</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 17. 10. 2025 (0:13 – 4:11) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofia Sánchez, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Sofia sedí sama v noci u ohně, když ji překvapí Mateo přicházející s trsem banánů. Po počátečním popichování a Mateových vtipech o „bezdomovcích“ se atmosféra uklidní a oba si začnou vyjasňovat nedorozumění z posledních dní, kdy se Sofia skrývala na hradě. Sofia Matea zezadu obejme, což vyústí v moment, kdy ji Mateo políbí. Přestože Sofia polibek opětuje, vzápětí se v šoku odtáhne a oba propadnou pocitům viny a nejistoty, přičemž řeší, zda šlo o chybu kvůli Lucii. Hra končí rozpačitým rozloučením, pusou do vlasů od Sofie a jejich společným odchodem do ložnic.</p>


    <h3>Disciplinární řízení u ředitele Azeveda</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 18. 10. 2025 (19:00 – 21:26) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Mateo Benítez, Ernesto Azevedo (ředitel), Caetano Murhala (zástupce)</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Luana a Mateo jsou předvoláni k řediteli Azevedovi a zástupci Murhalovi, aby vysvětlili incident z hodiny přemisťování, kde došlo k násilnému střetu se studentkami jiné školy kvůli rituálnímu porážení ovce. Studenti se hájí kulturním šokem a neadekvátností kruvalských metod, přičemž Mateo přiznává, že v afektu sebral nůž, a Luana popisuje psychický nátlak a magické halucinace. Vedení školy sice vyjadřuje určité pochopení pro jejich emoce, ale zdůrazňuje nutnost reprezentace školy a sebeovládání. Hra končí udělením podmínečného vyloučení pro oba studenty a hrozbou jejich okamžitého odjezdu zpět do Brazílie, pokud se objeví další problémy.</p>

    <h3>Noční útěcha a sdílený strach z vyloučení</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 18. 10. 2025 (23:13) – 19. 10. 2025 (4:48) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez, Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo se vrací od ředitele otřesený rozsudkem o podmínečném vyloučení a hledá úkryt u Sofíi v hlavní části stanu. Sofía se ho snaží rozptýlit povídáním o broucích a věnuje mu japonský talisman pro štěstí, což vyústí v jejich první vědomý a opětovaný polibek. Romantickou chvíli přeruší příchod Juana, který je zprávou o Mateově trestu šokován a snaží se kamaráda logicky obhájit, zatímco Mateo propadá apatii a strachu, že bude muset školu opustit úplně. Hra končí nad ránem, kdy se všichni tři v tíživé atmosféře rozcházejí do svých ložnic s příslibem dalšího řešení situace.</p>


    <h3>Večerní napětí a milostné strategie</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 19. 10. 2025 (22:55) – 20. 10. 2025 (3:29) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Mateo Benítez, Sofía Sánchez, Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Hra začíná příchodem Lucie k ohni, ke které se postupně připojují Mateo, Sofía a Juan. Atmosféra je mrazivá, zejména mezi Luciou a dvojicí Mateo-Sofía, kteří se snaží svůj vztah před Luciou maskovat. Poté, co Lucia a Sofía odejdou spát, zůstávají Mateo a Juan sami a vedou „chlapský rozhovor“. Juan se přiznává k polibku s Mayou (i když má v Mexiku přítelkyni Xi) a radí Mateovi, jak naplánovat rande pro Sofíi, i když Mateo pochybuje o svých schopnostech a financích. Hra končí společným odchodem chlapců do ložnic, aby nezaspali ranní setkání s profesorem Morenem.</p>

    <h3>Noční kakao a plány do budoucna</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 22. 10. 2025 (23:17) – 23. 10. 2025 (1:35) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Alejandro Navarro, Luana Mariana Almeida Soares</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Alejandro relaxuje u ohně s horkým kakaem, když se do stanu po večerce tajně vkrade Luana. Po počátečním popichování ohledně její pozdní procházky se atmosféra uklidní a dvojice se oddává hlubšímu rozhovoru o své budoucnosti po škole. Alejandro se přiznává, že ho první úkoly v Turnaji změnily, chce se věnovat protijedům a hodlá se omluvit rodičům, zatímco Luana sní o magibotanickém výzkumu u rodiny Morenových. Hra končí něžným gestem, kdy Alejandro vyčaruje Luaně růži a oba nakonec vyčerpáním společně usínají v objetí.</p>


    <h3>Od historie k pozvání na rande</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 23. 10. 2025 (21:48) – 24. 10. 2025 (3:53) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofía Sánchez, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Sofía se v noci snaží dohnat učení dějepisu, když ji u stolu vyruší Mateo, který se právě vrátil z bludiště. Mateo se ji snaží od učení rozptýlit, dojde k hravému přetahování o učebnici a k polibku, ale situace zhoustne, když se dotknou tématu původu (mudlové vs. kouzelníci). Mateo se cítí dotčen Sofíiným vyjádřením a naštvaně odchází, ale Sofía ho dostihne, omluví se a přizná svou chybu. Mateo její omluvu přijme v objetí a konečně nahlas vysloví své přání pozvat ji na skutečné rande, což Sofía s překvapením a radostí přijímá.</p>

    <h3>Smíření a květina pro štěstí</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 25. 10. 2025 (23:54) – 26. 10. 2025 (4:46) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofia Sánchez, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Sofia utíká z plesu v slzách a schovává se před stanem. Mateo ji nachází a snaží se jí vysvětlit nedorozumění ohledně jiné dívky (Katya/Miya), kterou na plese pouze utěšoval. Po počátečním odtažitém chování Sofia povolí a Mateo ji překvapí vyčarovanou kyticí červených růží (kouzlo Orchideous). Mateo konečně oficiálně potvrzuje svůj zájem o rande, což Sofia s radostí přijímá. Hra vrcholí dlouhým polibkem a vzájemným vyznáním blízkosti, než se oba nad ránem rozloučí a odejdou spát do svých ložnic.</p>

    <h3>Rozchod Luany a Alejandra</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 25. 10. 2025 (22:14) – 26. 10. 2025 (1:35) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Inés Soraya Caro, Alejandro Navarro</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Luana sedí zničená po plese s růží v ruce a svěřuje se Inés se svými pochybnostmi o vztahu s Alejandrem. Inés se ji snaží podpořit, když do stanu vtrhne Alejandro. Ten místo útěchy Luaně narovinu oznámí, že se mu líbí jiná dívka (Katya) a že chce vztah s Luanou ukončit, aby „poznal sám sebe“ a vrátil se k pouhému přátelství. Situace vře, Inés na Alejandra zaútočí (facka a křik), zatímco Luana se snaží zachovat klid. Alejandro nakonec odchází a Luana, ačkoliv je zraněná, přijímá nabídku zůstat alespoň přáteli, protože o něj nechce úplně přijít.</p>


    <h3>Noční zpověď a obhajoba neobhajitelného</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 26. 10. 2025 (23:13) – 27. 10. 2025 (1:43) - říjen 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Luana Mariana Almeida Soares</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo přichází v pyžamu za Luanou k ohni, aby jí otevřeně řekl, že ho mrzí, jak se k ní Alejandro zachoval. Prozradí jí, že viděl, jak Jandro na plese „obtěžoval“ Katyu a tvrdil jí, že Luanu už nemiluje. Luana ho překvapí přiznáním, že o všem už ví a že se s ní Jandro rozešel, ale přesto se ho snaží před Mateem částečně obhajovat a svaluje vinu i na svou vlastní žárlivost a provokace. Mateo s jejím sebeobviňováním nesouhlasí, ale vidí, že Luana je emocionálně vyčerpaná, a tak debatu ukončuje nabídkou podpory. Hra končí jejich rozloučením a odchodem do ložnic.</p>


    <h3>Rozhovor u ohně: Od předků k Mateovi</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 27. 10. 2025 (22:45) – 28. 10. 2025 (2:17) - listopad 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Sofía Sánchez, Lucia Juliana Navarro</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Sofía, tradičně pomalovaná k uctění památky zesnulých, sedí u ohně a snaží se spojit se svými předky. Připojuje se k ní Lucia a obě dívky postupně přecházejí od debat o duších a bradavických schodech k tématu, které je obě trápí – k Mateovi. Lucia se svěřuje se svým zklamáním z toho, že ji Mateo odmítl, a Sofía přiznává, že jejich vztah je plný hádek a nejistoty. Obě dívky se shodují, že Mateo se chová jako "blbec" a "má v hlavě jen jednu mozkovou buňku", což jim přináší chvilkovou úlevu a sblížení.</p>


    <h3>Noční drby a bradavické absurdity</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 30. 10. 2025 (23:22) – 31. 10. 2025 (0:54) - listopad 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Inés Soraya Caro, Sofia Amarilis Perez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Inés a Sofia se pozdě v noci vrací do stanu a u společného ohniště rozebírají kulturní šok z bradavické školy. Obě dívky si stěžují na místní zmatený řád, přísnou večerku a především na podivné chování bradavických studentů (jako je "vtančení" do hodin pozdě nebo strkání si hůlek do nosu). Sofia se svěřuje se svými city k Ilaiovi (Elimu) a Inés popisuje své rozladění. Rozhovor je plný španělských výrazů, vzájemného popichování a sdílené nostalgie po domovské škole v Brazílii. Hra končí tím, že se obě dívky, unavené náročným dnem, choulí k sobě pod plášť a u ohně usínají.</p>

    <h3>Křehké příměří a návrat nejlepší kamarádky</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 2. 11. 2025 (23:13) – 3. 11. 2025 (1:51) - listopad 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Lucia sedí sama u ohně, když ji vyruší Mateo v pyžamu. Navzdory počáteční obrovské nervozitě a rozpakům spolu začnou mluvit o tom, zda je možné se po Luciině nevydařeném vyznání citů vrátit k pouhému přátelství. Mateo upřímně prosí o návrat své "nejlepší kámošky", zatímco Lucia vyjadřuje pochybnosti, zda to nebude příliš divné. V průběhu noci si vyjasňují i situaci se Sofíí, o které Mateo přiznává, že ho sice přitahuje, ale momentálně ho spíše štve. Hra končí nadějným příslibem, že se zítra uvidí znovu, a společným odchodem do ložnic.</p>


    <h3>Vzájemná péče a spravené účesy</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 7. 11. 2025 (21:43) – 8. 11. 2025 (1:47) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Lucia se vrací do stanu promrzlá a s neodborně uříznutými vlasy, které obětovala v pevnosti. Mateo, který se sám potýká se zraněním nohou a chodí o berli, jí nabídne pomoc a nůžkami jí zničený účes u ohně zarovná. Lucia mu laskavost oplatí tím, že mu pomocí léčitelského kouzla uzdraví jeho zraněné nohy. Během procedur si vyjasňují minulé křivdy a Mateo Lucii skládá komplimenty, čímž se jejich dříve napjaté přátelství dále upevňuje. Hra končí v přátelském duchu, kdy se oba v noci rozcházejí do svých ložnic.</p>


    <h3>Večer plný solidarity a „kokreténů“</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 8. 11. 2025 (22:43) – 9. 11. 2025 (2:52) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Juan Miguel Santos Ramírez, Luana Mariana Almeida Soares, Sofia Amarilis Perez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Hra začíná návratem studentů ze zasněžených bradavických pozemků k ohništi ve stanu. Poklidnou atmosféru naruší příchod Sofie, která je v slzách kvůli rozchodu s bradavickým studentem Elim (Ilaiem), jenž nedokázal přijmout její otevřené emoce. Ostatní spolužáci se okamžitě semknou do „objímací hromady“, utěšují ji a shodují se, že dotyčný Havraspár je „kokretén“ a nestojí za její slzy. Během noci emoce opadají a debata se přesouvá k lehčím tématům, jako jsou vánoční tradice, psaní závěrečných esejí a Mateovo rande se Sofií Sánchez. Hra končí v přátelském duchu, kdy se všichni postupně odebírají do ložnic s pocitem vzájemné opory.</p>


    <h3>Noční zpověď u profesora Morena</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 10. 11. 2025 (23:37) – 11. 11. 2025 (2:01) - prosinec 2008</p>
    <p><span className='text-highlighter'>Účastníci:</span> Luana Mariana Almeida Soares, Jared Ilai Moreno (profesor)</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Luana, která nemůže spát, sedí v noci u ohně a je překvapena příchodem profesora Jareda Morena v jeho zvířecí podobě šelmy. Luana se mu svěřuje se svým strachem ze ztráty kontroly nad sebou i svou magií, zejména po traumatickém zážitku v pevnosti, kde se nedokázala včas proměnit zpět. Profesor s ní sdílí vlastní zkušenosti s "špatným nastavením" v rámci rodiny Morenových a ujišťuje ji, že její silné emoce jsou v jejím věku přirozené. Nabízí jí pochopení a radí jí s adaptací na britské poměry, přičemž zdůrazňuje, že chyby jsou součástí učení. Hra končí, když profesor pošle Luanu spát, aby stihla ranní ceremonii jeho bratra.</p>

    <h3>Konfrontace u ohně a boty z Mexika</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 17. 11. 2025 (22:53) – 18. 11. 2025 (3:14) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo přichází do stanu bosý a rozrušený poté, co se dozvěděl, že Sofíi někam odnesl Joshua. Když Sofía dorazí (čtyři minuty po večerce), Mateo na ni udeří s otázkami ohledně zvukotěsné místnosti, kam ji měl Joshua vzít. Sofía se brání, že o vlastnostech místnosti nevěděla a že s Joshuou nic nemá, přičemž se snaží odvést pozornost k Mateovým chybějícím botám a slibuje mu poslat pro nové až z Mexika. Napětí se postupně mění v intimní rozhovor o důvěře, cucflecích a žárlivosti na ostatní dívky. Hra končí vzájemným ujištěním o lásce, polibky a odchodem do ložnic v mnohem klidnější atmosféře.</p>


    <h3>Projekt o souhvězdí Trojúhelníku a ponožková etiketa</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 19. 11. 2025 (0:00 – 1:48) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Lucia přichází k ohni s chameleonem Pedrem a potkává Matea, který nese kluběnku jménem Pes. Probírají své školní projekty (Lucia o souhvězdí Trojúhelníku, Mateo o hmyzu) a obtížnost studia přírody v mrazivém Skotsku. Mateo Lucii vysvětluje „ponožkovou etiketu“ mezi kluky – teorii, že tulení s kamarády není „gay“, pokud mají oba aktéři na sobě ponožky. Hovor se stočí i na nedávný ples a Luciiny ostříhané vlasy, které jí Mateo nabízí znovu zarovnat. Hra končí vzájemným přáním dobré noci a odchodem obou do ložnic.</p>


    <h3>Plánování narozenin a zvukotěsná místnost</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 20. 11. 2025 (22:23) – 21. 11. 2025 (2:20) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Juan Miguel Santos Ramírez, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Juan a Sofía se setkávají v prázdném stanu a zjistí, že Mateo i Juanova přítelkyně Maya mají narozeniny ve stejný den. Juan ukazuje Sofíi své nákresy magicky upravené květiny (Motýlice), která má připomínat motýla Batolce duhového. Sofía se svěřuje s nervozitou ohledně dárku pro Matea, načež jí Juan navrhuje uspořádat romantické rande v akustické místnosti hradu. Rozhovor se stočí k Juanovu milostnému trojúhelníku (přítelkyně Xi v Mexiku vs. Maya v Bradavicích) a končí Sofíiným zděšením nad praktickým využitím zvukotěsných stěn akustické místnosti.</p>

    <h3>Degustace „broučích“ fazolek a nácvik iluzí</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> Datum a čas: 22. 11. 2025 (22:30) – 23. 11. 2025 (1:01) - leden 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Lucia Juliana Navarro, Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo se vrací do stanu nadšený ze setkání s obřím broukem (kovopláštěm) a potkává Luciu, která pro něj má dárek – speciální edici Bertíkových fazolek s příchutěmi jako žížala nebo hlína. Společně fazolky ochutnávají a Mateo se neúspěšně pokouší použít kruvalské kouzlo Sýntra væra, aby změnil jejich odpornou chuť na cukrovou vatu. Lucia navrhuje Mateovi stáž na broučích farmách a debata se stočí k nebezpečí Zakázaného lesa a geologii Bradavic. Hra končí Mateovým neúspěšným pokusem o přeskočení ohně, vřelým objetím a odchodem obou přátel do ložnic.</p>

    <h3>Noční krize: Cindy a hrozba rozchodu</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 3. 12. 2025 (23:58) – 4. 12. 2025 (2:47) - březen 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez, Sofía Sánchez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo se v noci přiznává Sofíi, že porušil večerku, aby vyřešil problém se „valentýnkou“ od Cindy (dívky, která ho dříve šikanovala). Mateo šokuje Sofíi tvrzením, že se mu hnusné věci od Cindy začaly líbit a že ho straší v snech. Sofía propadá žárlivosti a bolesti, pláče a zvažuje rozchod, protože nevěří, že na Cindy dokáže Mateo přestat myslet. Mateo se v zoufalství vrhá na kolena, prosí o odpuštění a ujišťuje ji, že Cindy nechce a miluje jen ji. Sofía mu nakonec odpouští, oba se v slzách usmíří v pevném objetí a nad ránem společně odcházejí do svých ložnic.</p>


    <h3>Mateův nácvik Patrona a síla přátelství</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 5. 12. 2025 (1:52 – 2:56) - březen 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Mateo Benítez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Mateo přichází uprostřed noci k ohništi v pyžamu, aby o samotě trénoval kouzlo Expecto Patronum. Během několika pokusů se snaží vyvolat dostatečně silnou šťastnou vzpomínku, přičemž se v mysli vrací do prvního ročníku, kdy našel vzácného brouka a jeho přátelé Juan a César se mu namísto výsměchu rozhodli pomoct. Mateo reflektuje důležitost přátelství a přiznává si, že bez nich by mu bylo příliš smutno a kouzly by to nevyléčil. Přestože se mu nepodaří vyvolat plnou podobu patrona, kouzlo opakovaně produkuje alespoň modrou energii a jiskry. Hra končí Mateovou krátkou modlitbou a tichým odchodem zpět do ložnice.</p>


    <h3>Juanův nácvik Patrona a pouto z džungle</h3>
    <p><span className='text-highlighter'>Datum a čas:</span> 2. 1. 2026 (1:49 – 2:26) - červen 2009</p>
    <p><span className='text-highlighter'>Účastníci:</span> Juan Miguel Santos Ramírez</p>
    <p><span className='text-highlighter'>Shrnutí:</span> Juan přichází v noci k ohništi, aby osamocen trénoval vyvolání Patrona. Jako zdroj síly využívá vzpomínky na své nejlepší přátele, Matea a Césara, a jejich společné zážitky při přežívání v brazilské džungli. Soustředí se zejména na moment, kdy César vymyslel magické papírky, které je k sobě v divočině táhly, díky čemuž se po dnech bloudění vždy znovu našli. Po sérii neúspěšných pokusů se mu nakonec podaří vyvolat světle modrou energii patrona. Hra končí Juanovým smutným uvědoměním, že za pár dní turnaj končí a všichni odjedou domů.</p>



    <a className='game-archive-button' href="/casstellobruxxo/CasteloStan.html" target="_blank"
       rel="noopener noreferrer">Otevřít archiv</a>




{/*<h3> </h3>
    <p><span className='text-highlighter'>Datum a čas:</span> </p>
    <p><span className='text-highlighter'>Účastníci:</span> </p>
    <p><span className='text-highlighter'>Shrnutí:</span> </p>*/}
   
  </div>
)

export default SoukromeHry