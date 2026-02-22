import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

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
    
    
    <div className="main-header"><h1>Fauna a flóra</h1></div>

    
    <p>Amazonský prales patří mezi nejbohatší ekosystémy světa, pokud jde o počet druhů živých organismů. Na ploše větší než celá Evropa se roční období nestřídají podle teplot, ale podle množství srážek – období dešťů zaplavuje nížiny a proměňuje les ve spletitou vodní síť, zatímco během sucha se stezky prašně lesknou pod žhnoucím sluncem. Vlhkost se však z prostředí nikdy zcela nevytrácí; vzduch je stále těžký, nasycený vlhkostí a vůněmi pralesa. Většinu obyvatel tvoří mudlovské druhy – známé opice, jaguáři, kajmani či tisíce druhů hmyzu – ale tam, kde žijí kouzelníci, se začíná odhalovat skrytá vrstva pralesa. V blízkosti čarodějnických vesnic a škol, jako je Castelobruxo, se objevují tvorové a rostliny, o jejichž existenci nemá mudlovská věda ani tušení.</p>

    <img src={caipora} className='img-in-text img-in-text-left' />
    
    <p>Školní pozemky střeží <span className='text-highlighter'>Caipory</span> – malí, chlupatí duchové džungle, ochránci lesa, zvířat i rostlin. Objevují se po setmění a starají se o rovnováhu života. Jsou hraví a zlomyslní; dokážou cestovatele zmást nebo svést z cesty, ale jejich šprýmy mají jasný cíl – chránit prales. Kdo přichází s respektem, nemusí se jich bát.</p>

    <p>Vedle duchů džungle je pro obyvatele školy důležitý i další amazonský tvor – <span className='text-highlighter'>kovoplášť obrovský</span>, brouk dosahující velikosti až čtyřiceti centimetrů. Jeho krovky mají kovový lesk v odstínech temně zelené až černé a jsou protkány jemnými stříbřitými žilkami, které při pohybu vrhajíí slabý magický třpyt.</p>


    <img src={kovoplast} className='img-in-text img-in-text-right' />
    
    <p>Kovoplášť obývá hluboké oblasti amazonského pralesa, zejména v okolí kouzelnických vesnic a neprozkoumaných říčních ramen. Živí se dřevem a mízou magických stromů. Jeho larvy přežívají až deset let ve tlejícím dřevě, které jim poskytuje ochranu i potravu, zatímco dospělý brouk se dožívá pouhého roku. Během této doby se páří a klade vajíčka do dalších kmenů. Pokud se cítí ohrožen, vydává silný ultrazvukový „cvakot“, který dokáže dezorientovat většinu tvorů na několik minut; u člověka trvá tento účinek zhruba jednu minutu.</p>

    <p>Krovky kovopláště mají velkou cenu – jsou lehké, ale téměř nerozbitné – odolávají většině řezacích kouzel a snesou i silný tlak. Využívají se například k výrobě famfrpálových a vojenských uniforem. Sběr je však přísně regulován. Krovky se mohou získávat pouze z přirozeně uhynulých jedinců nebo z brouků odchovaných na specializovaných farmách v odlehlých částech Amazonie.</p>

    <img src={krovkovec} className='img-in-text img-in-text-left' />
    
    <p>Jeho přirozeným nepřítelem je <span className='text-highlighter'>krovkovec stínový</span>, blízký příbuzný kajmanů. Tento noční predátor má tmavě olivovou kůži se stříbřitými šupinami, které mu umožňují dokonale splývat se stínem vody. Kromě toho disponuje i dalšími obrannými adaptacemi – dokáže na krátký čas ztlumit svůj pach i vibrace vlastního pohybu, čímž se stává pro šelmy číhající u vody téměř nepostřehnutelným. Jeho oči s pruhovanou sítnicí a odrazivou vrstvou mu umožňují vidět i v téměř úplné tmě, takže je stejně obratným lovcem jako uprchlíkem. Živí se převážně rybami, ale při nedostatku potravy nebo vhodné příležitosti dokáže ulovit i kovopláště obrovské. Na rozdíl od běžných krokodýlovitých má vyvinuté jedové žlázy. Jejich toxin obsahuje enzym, který narušuje strukturu kovoplášťových krovek, takže svou kořist snadno stráví. Jed sice není pro člověka smrtelný, ale způsobuje prudkou bolest a dočasné ochromení svalů – proto je rozumné se mu vyhýbat. V kouzelnickém světě jsou jeho zuby ceněny jako vzácný artefakt; v práškové podobě se používají do lektvarů schopných narušit ochranné pečeti.</p>

    <p>Populace krovkovce stínového je poměrně stabilní a nevyžaduje zvláštní ochranu, naopak jeho přítomnost zvyšuje ohrožení kovoplášťů obrovských. Studenti Castelobruxa jsou varováni, aby se v období rojení kovoplášťů k vodním plochám nepřibližovali – právě tehdy jsou krovkovci nejaktivnější a nejagresivnější.</p>

    <img src={vretenka} className='img-in-text img-in-text-right' />
    
    <p>V temných houštinách a mezi stromy číhají další magičtí tvorové, kteří jsou stejně fascinující jako nebezpeční. Jedním z nich je <span className='text-highlighter'>vřetenka krvavá</span> – obří motýl s křídly rudě červené barvy, jež se na slunci lesknou jako tekoucí krev. Přitahuje ho teplo a lidský pach. Živí se magickou energií, kterou vysává z kouzelníků během spánku. Zanechává po sobě kořist slabou a vyčerpanou. Jedinou ochranou je zavěsit nad místo spánku čerstvé listy posvátných stromů Xitapê, jejichž vůni vřetenky nesnesou.</p>

    <img src={zvonohlidek} className='img-in-text img-in-text-left' />
    
    <p>Vedle nebezpečných tvorů žijí v Amazonii i bytosti přátelštějšího rázu. Jednou z nich je <span className='text-highlighter'>zvonohlídek pralesní</span>, drobný savec s modrozelenou srstí, jež v noci jemně fosforeskuje. Svůj název získal podle zvonivých tónů, které vydává klepáním dlouhého ocasu o větve. Tyto melodické zvuky zklidňují okolí a tlumí agresivitu tvorů. Kouzelníci si všimli, že přítomnost zvonohlídků zlepšuje soustředění při kouzlení, a proto jsou považováni za dobré znamení. Jejich vliv však může narušovat přirozené teritoriální chování zvířat, vyvolat chaos v přirozené hierarchii a oslabovat místní populace. Živí se ovocem a drobným hmyzem a lidem neškodí – naopak často doprovázejí studenty Castelobruxa při nočních pochůzkách svým tichým světélkováním, které proměňuje prales v klidné, pohádkové místo – alespoň do chvíle, než se ozve cvakot kovopláště či šelest vřetenky.</p>

    <img src={guaracura} className='img-in-text img-in-text-right' />
    
    <p>Z flóry stojí za zmínku <span className='text-highlighter'>guaracura</span>, popínavá liána s tmavě fialovými květy, které se rozvíjejí pouze za bouře. Její kořeny dokážou pohlcovat zbloudilou magii – kouzla seslaná neúmyslně či bez cíle se do nich „vsáknou“ a rozptýlí. Proto bývá vysazována kolem školních skleníků a učeben, kde chrání okolí před nekontrolovaným působením magie. Během bouřek její květy září jemným světlem, takže prales působí, jako by v něm svítily stovky malých lampionů.</p>

    <img src={papratka} className='img-in-text img-in-text-left'  />
    
    <p>Vedle guaracury se na školních pozemcích vyskytuje také <span className='text-highlighter'>papratka kajícná</span>, kapradina citlivá na hluk a prudké pohyby. Pokud se v její blízkosti ozve hlasité slovo či dojde k razantnímu gestu, výtrusnice se okamžitě otevřou a do vzduchu uvolní oblak stříbřitých spor. Ty se po vdechnutí na krátký čas usadí v nosohltanu a vyvolávají nepříjemný pocit provinilosti a studu – jako by jedinec vyrušil něco posvátného. Díky tomu se využívá k udržování ticha v knihovnách a meditačních zahradách, i přestože přecitlivělé exempláře občas spustí hromadné „záchvaty lítosti“ studentů.</p>

    <img src={luminora} className='img-in-text img-in-text-right' />
    
    <p>Mezi nižšími rostlinami pak vyniká <span className='text-highlighter'>luminora</span>, lišejník rostoucí především na kmenech starých stromů. Na první pohled se zdá nenápadný, jeho povrch však pokrývají drobné fosforeskující tečky. Tento lišejník má jedinečnou schopnost – v přítomnosti člověka, necítí-li se ohrožen, jeho světélkující tečky rozsvítí směrem, který označuje nejbezpečnější cestu ven z pralesa. Jeho využití je součástí výuky orientace v terénu. Studenti se učí lišejník „zklidnit“ a získat si jeho důvěru, aby se později v případě nouze stal jejich průvodcem.</p>

    <img src={septalka} className='img-in-text img-in-text-left' />
    
    <p>Další z významných pralesních rostlin představuje <span className='text-highlighter'>šeptalka posměšná</span>, vysoká rákosovitá bylina s dutými stonky a kopinatými listy pokrytými jemnými chloupky. V období květu rozvíjí drobné modrostříbrné květy s metalickým leskem zvláště výrazným na měsíčním světle. Jakmile v její blízkosti někdo promluví, listy se rozechvějí a napodobí jeho hlas – často s lehce ironickým podtónem. Když se kolem sejde víc lidí, šeptalka dokáže celou debatu zopakovat zpětně, což z ní činí postrach studentů pokoušejících se za tajných rozhovorů přejít po chodbách.</p>

    <p>Z jejích usušených stonků se vyrábějí „šeptající flétny“, nástroje, které dokážou opakovat krátké melodie. Používají se v rituálech, zejména během zpěvů ikaros, při nichž doprovázejí šamany u volání duchů pralesa.</p>

    <p>Šeptalka roste nejčastěji v polostínu mokřadů a podél stezek, kde se často pohybují lidé či zvířata. Čím živější je místo, tím bujněji prospívá; v hlubokém tichu však chřadne z „nudy“.</p>

    <br />
    <hr />

    <p>Amazonský prales je živoucí organismus, spletitá síť vztahů, kde se každý zvuk, pach i záchvěv větru stává součástí neustálého dialogu mezi tvory a rostlinami – ať už magickými, či obyčejnými. Čarodějové žijící v jeho srdci se naučili tento dialog vnímat a respektovat. Vědí, že magie pralesa není jen v kouzlech a tvorech schopných oslnivých triků, ale i v rovnováze, která mezi nimi panuje.</p>

    <p>Kdo vstoupí do pralesa s pyšným srdcem, toho čeká bloudění, výsměch šeptalky a cvakot kovopláště v zádech. Kdo však kráčí tiše, s úctou a pozorností, může spatřit světélkující luminoru, zaslechnout zvonění pralesních strážců a třeba i získat přízeň Caipor. Amazonský prales totiž není jen místo – je to zkouška charakteru. A ti, kteří ji složí se ctí, nacházejí v jeho hlubinách víc než znalosti. Nacházejí spojence.</p>





  </div>
)

export default FaunaAFlora