import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AmazonieNav from './AmazonieNav';

import caipora from '../../img/fauna_a_flora/caipora.png';
import guaracura from '../../img/fauna_a_flora/guaracura.png';
import kovoplast from '../../img/fauna_a_flora/kovoplast.png';
import krovkovec from '../../img/fauna_a_flora/krovkovec.png';
import luminora from '../../img/fauna_a_flora/luminora.png';
import papratka from '../../img/fauna_a_flora/papratka.png';
import septalka from '../../img/fauna_a_flora/septalka.png';
import vretenka from '../../img/fauna_a_flora/vretenka.png';
import zvonohlidek from '../../img/fauna_a_flora/zvonohlidek.png';

const FaunaAFlora = () => (
  <div>
    <AmazonieNav/>

    <div className="main-header"><h1>Fauna a flóra</h1></div>


    <p>Amazonský prales patří mezi <span className='text-highlighter'>nejbohatší ekosystémy světa</span>, pokud jde o
      počet druhů živých organismů. Na ploše větší
      než celá Evropa se roční období nestřídají podle teplot, ale podle množství srážek – <span
        className='text-highlighter'>období dešťů</span> zaplavuje nížiny
      a proměňuje les ve spletitou vodní síť, zatímco během <span className='text-highlighter'>sucha</span> se stezky
      prašně lesknou pod žhnoucím sluncem. Vlhkost
      se však z prostředí nikdy zcela nevytrácí; vzduch je stále těžký, nasycený vlhkostí a vůněmi pralesa. Většinu
      obyvatel tvoří mudlovské druhy – známé <span className='text-highlighter'>opice</span>, <span
        className='text-highlighter'>jaguáři</span>, <span className='text-highlighter'>kajmani</span> či <span
        className='text-highlighter'>tisíce druhů hmyzu</span> – ale tam, kde žijí
      kouzelníci, se začíná odhalovat skrytá vrstva pralesa. V blízkosti čarodějnických vesnic a škol, jako je
      Castelobruxo, se objevují tvorové a rostliny, o jejichž existenci nemá mudlovská věda ani tušení.</p>

    <Link className='game-archive-button with-arrow' to="/mytologie" target="_blank" rel="noopener noreferrer">Číst
      více o mytologii</Link>

    <img src={caipora} className='img-in-text img-in-text-left'/>

    <p>Školní pozemky střeží Caipory – malí, chlupatí <span className='text-highlighter'>duchové džungle</span>,
      ochránci lesa, zvířat i rostlin. Objevují se po setmění a starají se o <span className='text-highlighter'>rovnováhu života</span>.
      Jsou hraví a zlomyslní;
      dokážou cestovatele zmást nebo svést z cesty, ale jejich šprýmy mají jasný cíl – <span
        className='text-highlighter'>chránit prales</span>. Kdo přichází s
      respektem, nemusí se jich bát.</p>

    <p><span className='text-highlighter'>Až čtyřiceticentimetrový amazonský brouk</span> má pro obyvatele školy jako
      zdroj materiálu nezastupitelný význam. Jeho
      krovky mají kovový lesk v odstínech temně zelené až černé a jsou protkány jemnými stříbřitými žilkami, které při
      pohybu vrhají slabý magický třpyt.
    </p>


    <img src={kovoplast} className='img-in-text img-in-text-right'/>

    <p>Kovoplášť obývá hluboké oblasti amazonského pralesa, zejména v okolí kouzelnických vesnic a <span
      className='text-highlighter'>neprozkoumaných
      říčních ramen</span>. Živí se dřevem a mízou magických stromů. Jeho <span className='text-highlighter'>larvy přežívají až deset let ve tlejícím dřevě</span>,
      které
      jim poskytuje ochranu i potravu, zatímco <span
        className='text-highlighter'>dospělý brouk se dožívá pouhého roku</span>. Během této doby se páří a klade
      vajíčka do dalších kmenů. Pokud se cítí <span className='text-highlighter'>ohrožen, vydává silný ultrazvukový „cvakot“, který dokáže dezorientovat</span> většinu
      tvorů na několik minut; u člověka trvá tento účinek zhruba jednu minutu.</p>

    <p>Krovky kovopláště mají velkou cenu – jsou lehké, ale téměř nerozbitné – odolávají většině řezacích kouzel a
      snesou i silný tlak. Využívají se například k <span className='text-highlighter'>výrobě famfrpálových a vojenských uniforem</span>.
      Sběr je však přísně
      regulován. Krovky se mohou získávat pouze z přirozeně uhynulých jedinců nebo z brouků odchovaných na
      specializovaných farmách v odlehlých částech Amazonie.</p>

    <img src={krovkovec} className='img-in-text img-in-text-left'/>

    <p>Noční předátor blízce <span className='text-highlighter'>příbuzný kajmanům</span> má tmavě olivovou kůži se
      stříbřitými šupinami, které mu umožňují dokonale <span className='text-highlighter'>splývat
      se stínem vody</span>. Kromě toho disponuje i dalšími obrannými adaptacemi – dokáže na krátký čas <span
        className='text-highlighter'>ztlumit svůj pach i
      vibrace</span> vlastního pohybu, čímž se stává pro šelmy číhající u vody téměř <span
        className='text-highlighter'>nepostřehnutelným</span>. Jeho oči s pruhovanou
      sítnicí a odrazivou vrstvou mu umožňují <span className='text-highlighter'>vidět i v téměř úplné tmě</span>, takže
      je stejně obratným lovcem jako
      uprchlíkem. Živí se převážně rybami, ale při nedostatku potravy nebo vhodné příležitosti dokáže <span
        className='text-highlighter'>ulovit i
        kovopláště obrovské</span>. Na rozdíl od běžných krokodýlovitých má vyvinuté <span className='text-highlighter'>jedové žlázy</span>.
      Jejich toxin obsahuje enzym,
      který narušuje strukturu kovoplášťových krovek, takže svou kořist snadno stráví. Jed sice není pro člověka
      smrtelný, ale způsobuje prudkou bolest a dočasné ochromení svalů – proto je rozumné se mu vyhýbat. V kouzelnickém
      světě jsou jeho <span className='text-highlighter'>zuby ceněny jako vzácný artefakt</span>; v práškové podobě se
      používají do lektvarů schopných narušit
      ochranné pečeti.</p>

    <p>Populace krovkovce stínového je poměrně stabilní a <span
      className='text-highlighter'>nevyžaduje zvláštní ochranu</span>, naopak jeho přítomnost zvyšuje
      ohrožení kovoplášťů obrovských. Studenti Castelobruxa jsou varováni, aby se v období rojení kovoplášťů k vodním
      plochám nepřibližovali – právě tehdy jsou krovkovci nejaktivnější a nejagresivnější.</p>

    <img src={vretenka} className='img-in-text img-in-text-right'/>

    <p>V temných houštinách a mezi stromy pralesa číhá fascinující, leč nebezpečný <span className='text-highlighter'>obří motýl s křídly rudě červené
      barvy</span>, jež pod slunečním světlem připomínají tekoucí krev. Přitahuje ho teplo a lidský pach. <span
      className='text-highlighter'>Živí se magickou
      energií</span>, kterou vysává z kouzelníků během spánku. Zanechává po sobě kořist slabou a vyčerpanou. Jedinou
      ochranou
      je <span className='text-highlighter'>zavěsit nad místo spánku čerstvé listy posvátných stromů Xitapê</span>,
      jejichž vůni vřetenky nesnesou.
    </p>

    <img src={zvonohlidek} className='img-in-text img-in-text-left'/>

    <p>Vedle nebezpečných tvorů žijí v Amazonii i bytosti přátelštějšího rázu. Jednou z nich je zvonohlídek
      pralesní, <span className='text-highlighter'>drobný savec s modrozelenou srstí</span>, jež v noci jemně
      fosforeskuje. Svůj název získal podle <span className='text-highlighter'>zvonivých tónů, které vydává klepáním dlouhého ocasu o větve</span>.
      Tyto melodické
      zvuky zklidňují okolí a tlumí agresivitu tvorů. Kouzelníci si všimli, že přítomnost zvonohlídků <span
        className='text-highlighter'>zlepšuje
        soustředění při kouzlení</span>, a proto jsou považováni za dobré znamení. Jejich vliv však může narušovat
      přirozené
      teritoriální chování zvířat, vyvolat chaos v přirozené hierarchii a oslabovat místní populace. Živí se ovocem a
      drobným hmyzem a lidem neškodí – naopak často doprovázejí studenty Castelobruxa při nočních pochůzkách svým
      tichým <span className='text-highlighter'>světélkováním</span>, které proměňuje prales v klidné, pohádkové místo –
      alespoň do chvíle, než se ozve cvakot kovopláště
      či šelest vřetenky.</p>

    <img src={guaracura} className='img-in-text img-in-text-right'/>

    <p>Jedná se o popínavou liánu s tmavě fialovými
      květy, které se <span className='text-highlighter'>rozvíjejí pouze za bouře</span>. Její kořeny <span
        className='text-highlighter'>dokážou pohlcovat zbloudilou magii</span> – kouzla seslaná
      neúmyslně či bez cíle se do nich „vsáknou“ a rozptýlí. Proto bývá vysazována <span className='text-highlighter'>kolem školních skleníků a učeben</span>,
      kde
      chrání okolí před nekontrolovaným působením magie. <span
        className='text-highlighter'>Během bouřek její květy září</span> jemným světlem, takže prales
      působí, jako by v něm svítily stovky malých lampionů.</p>

    <img src={papratka} className='img-in-text img-in-text-left'/>

    <p>Tato kapradina je <span className='text-highlighter'>citlivá na hluk a prudké pohyby</span>. Pokud se v její
      blízkosti ozve hlasité slovo či dojde k razantnímu gestu, výtrusnice se okamžitě otevřou a do vzduchu <span
        className='text-highlighter'>uvolní oblak
        stříbřitých spor</span>. Ty se po vdechnutí na krátký čas usadí v nosohltanu a vyvolávají nepříjemný <span
        className='text-highlighter'>pocit provinilosti</span> a
      studu – jako by jedinec vyrušil něco posvátného. Díky tomu se využívá k <span className='text-highlighter'>udržování ticha v knihovnách</span> a
      meditačních
      zahradách, i přestože přecitlivělé exempláře občas spustí hromadné „záchvaty lítosti“ studentů.</p>

    <img src={luminora} className='img-in-text img-in-text-right'/>

    <p>Jde o lišejník rostoucí
      především <span className='text-highlighter'>na kmenech starých stromů</span>. Na první pohled se zdá nenápadný,
      jeho povrch však pokrývají drobné
      fosforeskující tečky. Tento lišejník má jedinečnou schopnost – v přítomnosti člověka, necítí-li se ohrožen, jeho
      světélkující tečky rozsvítí směrem, který <span className='text-highlighter'>označuje nejbezpečnější cestu ven z pralesa</span>.
      Jeho využití je součástí
      výuky orientace v terénu. Studenti se učí lišejník „zklidnit“ a získat si jeho důvěru, aby se později v případě
      nouze stal jejich průvodcem.</p>

    <img src={septalka} className='img-in-text img-in-text-left'/>

    <p>Je to <span className='text-highlighter'>vysoká rákosovitá bylina</span> s dutými stonky a kopinatými listy
      pokrytými jemnými chloupky. V období květu rozvíjí
      drobné modrostříbrné květy s metalickým leskem zvláště výrazným na měsíčním světle. Jakmile v její blízkosti někdo
      promluví, listy se rozechvějí a <span className='text-highlighter'>napodobí jeho hlas</span> – často s lehce
      ironickým podtónem. Když se kolem sejde víc
      lidí, šeptalka dokáže celou debatu zopakovat zpětně, což z ní činí postrach studentů pokoušejících se za tajných
      rozhovorů přejít po chodbách.</p>

    <p>Z jejích usušených stonků se vyrábějí „šeptající flétny“, nástroje, které dokážou <span
      className='text-highlighter'>opakovat krátké melodie</span>.
      Používají se v rituálech, zejména <span className='text-highlighter'>během zpěvů ikaros</span>, při nichž
      doprovázejí šamany u volání duchů pralesa.</p>

    <Link className='game-archive-button with-arrow' to="/artefakty" target="_blank" rel="noopener noreferrer">Číst
      více o artefaktech</Link>

    <p>Šeptalka roste nejčastěji v polostínu mokřadů a <span className='text-highlighter'>podél stezek</span>, kde se
      často pohybují lidé či zvířata. Čím živější
      je místo, tím bujněji prospívá; v hlubokém tichu však chřadne z „nudy“.</p>

    <br/>
    <hr/>

    <p>Amazonský prales je živoucí organismus, <span className='text-highlighter'>spletitá síť vztahů</span>, kde se
      každý zvuk, pach i záchvěv větru stává
      součástí neustálého dialogu mezi tvory a rostlinami – ať už magickými, či obyčejnými. Čarodějové žijící v jeho
      srdci se naučili tento dialog vnímat a respektovat. Vědí, že magie pralesa není jen v kouzlech a tvorech schopných
      oslnivých triků, ale i v <span className='text-highlighter'>rovnováze, která mezi nimi panuje.</span></p>

    <p>Kdo vstoupí do pralesa s pyšným srdcem, toho čeká bloudění, výsměch šeptalky a cvakot kovopláště v zádech. Kdo
      však kráčí tiše, <span className='text-highlighter'>s úctou a pozorností</span>, může spatřit světélkující
      luminoru, zaslechnout zvonění pralesních strážců
      a třeba i získat přízeň Caipor. Amazonský prales totiž není jen místo – je to zkouška charakteru. A ti, kteří ji
      složí se ctí, nacházejí v jeho hlubinách víc než znalosti. Nacházejí spojence.</p>


  </div>
)

export default FaunaAFlora