import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SkolaNav from './SkolaNav'

import ranni_vyuka from '../../img/zivot_na_skole/ranni_vyuka.png';
import odpoledni_siesta from '../../img/zivot_na_skole/odpoledni_siesta.png';
import vecere from '../../img/zivot_na_skole/vecere.png';
import astronomie from '../../img/zivot_na_skole/astronomie.png';
import jezirko from '../../img/zivot_na_skole/jezirko.png';
import ruiny from '../../img/zivot_na_skole/ruiny.png';
import lanovy_park from '../../img/zivot_na_skole/lanovy_park.png';
import hipogryfi_klub from '../../img/zivot_na_skole/hipogryfi_klub.png';
import wayusa_obrad from '../../img/zivot_na_skole/wayusa_obrad.png';
import dobrodruzna_vyprava from '../../img/zivot_na_skole/dobrodruzna_vyprava.png';



const SkolniDen = () => (
  <div>
    
    <SkolaNav />
    

    <div className="main-header"><h1>Školní dny</h1></div>

  

    <h2>Typický školní den</h2><hr />
    
    <p>Typický školní den začíná v Castelobruxu poměrně <span className='text-highlighter'>brzy ráno</span>, protože zejména v období sucha se <span className='text-highlighter'>horké a vlhké amazonské klima</span> přes den rychle stává těžším na snášení. Je tedy třeba začít se dnem co nejdříve a studentům je doporučováno vstávat mezi šestou a půl sedmou. Snídaně je podávána od sedmé do osmé hodiny ranní ve společenských prostorách jednotlivých kmenů.</p> 

    <p>První <span className='text-highlighter'>vyučovací hodiny začínají kolem osmé hodiny ráno</span> a za dopoledne studenti zpravidla stihnou navštívit dvě až tři hodiny. <span className='text-highlighter'>Všechny hodiny nejsou stejně dlouhé</span>, záleží na předmětu, který si student zapíše. Trvání se pohybuje v rozmezí padesáti minut až dvou hodin. Stejně jako jsou různě dlouhé výukové bloky, jsou různě dlouhé i přestávky mezi nimi, které dávají studentům vždy dostatek času se dostat přes areál školy na další hodinu. <span className='text-highlighter'>Výuka probíhá po jednotlivých ročnících.</span></p> 

    <p>Oběd se podává opět v prostorách jednotlivých kmenů mezi dvanáctou a půl druhou. Po jídle mají studenti volný čas určený k odpočinku – <span className='text-highlighter'>siestu</span>. V horkých dnech je odpolední dusno venku téměř nesnestielné, výuka je tedy přerušena a studentům je doporučováno zdržovat se v kmenových prostorách, kde se vzduch díky kouzlům tolik neohřívá. Je možné si dát odpoledního šlofíka, natáhnout se do hamaky a číst si, dohánět domácí úkoly, případně dělat cokoliv, co studenti uznají za vhodné.</p>

    <img src={ranni_vyuka} className='img-in-text' />
    <img src={odpoledni_siesta} className='img-in-text' />

    <p><span className='text-highlighter'>Výuka pokračuje ve čtyři hodiny odpoledne</span> dalšími třemi až čtyřmi výukovými bloky. Večeře je podávána proti typickým britským zvykům poměrně pozdě, mezi devátou a desátou hodinou večer. Co se jídla týče, je to hlavní událost dne a studenti na ni míří do <span className='text-highlighter'>slavnostního sálu</span> v menší ze dvou hlavních budov, kde se všechny kmeny nají spolu.</p> 

    <p>Po večeři mají studenti volný čas, s jedinou výjimkou, kterou jsou hodiny astrologie a astronomie. Ty ze zjevných důvodů mají některé dny výuku ve večerních hodinách. <span className='text-highlighter'>Večerka nastává až v jednu hodinu ráno</span>, přesto je studentům po večeři spíše doporučováno trávit volný čas v budovách nebo na označených cestách, noční průzkum džungle může mít fatální následky.</p> 

    <p>Změna zažitého režimu nastává v sobotu, kdy je výuka soustředěna jen do dopoledních hodin. Po siestě tak mají studenti volné odpoledne, které mohou strávit, jak se jim zlíbí. <span className='text-highlighter'>Sobotní večery jsou věnovány společenským akcím</span>, ať už kmenovým nebo celoškolním. Často jsou také spojeny s oslavou nějakého svátku.</p> 

    <p><span className='text-highlighter'>Neděle je dnem klidu.</span> Je to jediný den v týdnu, kdy studenti nemají výuku a mohou ho strávit zcela dle svého uvážení. Mají povolený pozdní budíček a jídla jsou podávána delší dobu, aby nikdo nezůstal o hladu. Pokud student nechce trávit den sám a vymýšlet si program, může se zapojit do aktivit, které na tento den vymýšlí ostatní studenti či profesoři.</p>

     <img src={vecere} className='img-in-text' />
     <img src={astronomie} className='img-in-text' />

    <h2>Volný čas</h2>
    <hr />
  
    <p>Studenti mohou trávit chvíle odpočinku na mnoha místech v areálu, přičemž každé z nich nabízí jinou atmosféru a možnosti. Nejčastějším cílem jsou <span className='text-highlighter'>pralesní zahrady</span>, chráněné silnými kouzly, v nichž se dá bezpečně procházet mezi exotickými rostlinami, odpočívat v hamakách, nebo se v klidu učit. Oblíbeným místem je také <span className='text-highlighter'>jezírko s vodopádem</span>, kam studenti chodí plavat, i když vstup je povolen jen v přesně stanovených hodinách, během kterých je přítomen profesorský dozor. Mnozí se uchylují do <span className='text-highlighter'>knihovny</span> umístěné v menší z hlavních budov, jejíž stinná zákoutí poskytují ideální útočiště jak k učení, tak k soukromým rozhovorům.</p>

    <p>Hudebně založení studenti mohou zamířit do <span className='text-highlighter'>hudebního pavilonu</span>. Tam se tančí, hraje na hudební nástroje nebo jen tak odpočívá za zvuků hudby. Ti odvážnější vyhledávají podzemní chodby vedoucí do <span className='text-highlighter'>ruin starých chrámů</span>. Ty jsou sice oficiálně zapovězené, ale poskytují dostatek prostoru pro tajné schůzky nebo experimenty s kouzly. Pro romantické povahy se zase hodí kouzly zabezpečené <span className='text-highlighter'>střešní terasy</span>, odkud je krásný výhled na hvězdnou oblohu a okolní džungli, nehrozí nebezpečí pádů ani otravných komárů.</p>

    <img src={jezirko} className='img-in-text' />
    <img src={ruiny} className='img-in-text' />

    <p>Nechybí ani sportovní aktivity. Studenti se mohou naučit létat a hrát <span className='text-highlighter'>famfrpál</span>, jenž zde ovšem nemá tradici v podobě turnaje. Kromě prostoru pro klasické létání na koštěti je v areálu školy umístěn i <span className='text-highlighter'>lanový park</span> tvořený z nejrůznějších přírodnin, kde studenti mohou trénovat svou zručnost a rovnováhu, stejně jako <span className='text-highlighter'>parkurové dovednosti</span>.</p>

    <p>Také je možnost věnovat se <span className='text-highlighter'>ručním pracem</span> – vyrábění masek, kouzelných amuletů nebo šperků z místních materiálů. Malé dílny, kde je možné s takovou výrobou experimentovat, se nachází v pavilonu poblíž tomu hudebnímu.</p>

    <p><span className='text-highlighter'>Společenské večery,</span> zejména o víkendech, jsou vyhrazeny tanci, hudbě a slavnostem, které často navazují na brazilské a latinskoamerické svátky.</p>

    <p>Život studentů obohacují i spolky a kroužky. Jedním takovým je <span className='text-highlighter'>Castelobrušský hipogryfí klub</span>, který sdružuje studenty se zájmem o kouzelné tvory, lektvary a bylinkářství a umožňuje jim jejich schopnosti nadále rozvíjet. Obdobné zaměření má i spolek <span className='text-highlighter'>Ochránců pralesa</span>, který se stará o zkoumání a udržování biodiverzity. Ti, již vyhledávají dobrodružství, se často přidávají k <span className='text-highlighter'>Bratrstvu jaguára</span>, polo-tajnému sdružení, které testuje hranice dovoleného. Kulturně založení studenti působí v <span className='text-highlighter'>Hudebním a tanečním klubu</span>, zatímco ti vědečtější tráví čas u <span className='text-highlighter'>Mladých badatelů</span>, kteří tvoří artefakty. Nechybí ani astronomický spolek s názvem <span className='text-highlighter'>Ocas komety</span>, který pořádá noční pozorování hvězd z teras školy.</p> 

    <img src={lanovy_park} className='img-in-text' />
    <img src={hipogryfi_klub} className='img-in-text' />

    <p>Kromě studentských spolků je možné zapojit se i do jednorázových akcí pořádaných profesory. Ty mohou mít různé náplně, od <span className='text-highlighter'>dobrodružné výpravy</span> do lesa po <span className='text-highlighter'>organizovaný nácvik tanců</span> nebo společný rituál. Profesoři nestojí jen bokem jako autoritativní figury, ale snaží se studentům jejich pobyt ve škole co nejvíce zpestřit.</p>

    <p>Ranní ptáčata se tak například mohou ještě před snídaní scházet s profesorem Morenem mladším a popíjet <span className='text-highlighter'>wayusový nápoj,</span> připravený z listů <i>Ilex guayusa</i> – druhu cesmíny. Tento obřad, inspirovaný praxí kmenu Kichwa a komunity Achuar v ekvádorské oblasti Napo, probíhá nad ránem a umožňuje studentům sdílet své sny, moudrost a poznatky. Nápoj podporuje „otevření hrdla“ – pomáhá studentům uvolnit zábrany a snadněji vyjádřit své myšlenky a pocity ostatním.</p>

    <p>Volný čas na Castelobruxu tedy není jen odpočinkem od výuky, ale tvoří důležitou součást života školy. Studenti mají možnost rozvíjet své zájmy, budovat přátelství a zapojit se do pestrého kulturního i společenského života, který je pro tuto kouzelnickou instituci tak typický. </p>

    <img src={wayusa_obrad} className='img-in-text' />
    <img src={dobrodruzna_vyprava} className='img-in-text' />


   


  </div>
)

export default SkolniDen