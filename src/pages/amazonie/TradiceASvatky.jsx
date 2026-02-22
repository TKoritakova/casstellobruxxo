import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import afro_latinske_slavnosti from '../../img/kultura/slavnosti/afro_latinske_slavnosti.png';
import den_caipor from '../../img/kultura/slavnosti/den_caipor.png';
import den_duchu_pralesa from '../../img/kultura/slavnosti/den_duchu_pralesa.png';
import den_kouzelnych_rek from '../../img/kultura/slavnosti/den_kouzelnych_rek.png';
import dia_de_los_muertos from '../../img/kultura/slavnosti/dia_de_los_muertos.png';
import festa_junina_v_kouzelnicke_podobe from '../../img/kultura/slavnosti/festa_junina_v_kouzelnicke_podobe.png';
import festa_junina from '../../img/kultura/slavnosti/festa_junina.png';
import inti_raymi from '../../img/kultura/slavnosti/inti_raymi.png';
import karneval from '../../img/kultura/slavnosti/karneval.png';
import kouzelnicky_karneval from '../../img/kultura/slavnosti/kouzelnicky_karneval.png';
import noc_jaguara from '../../img/kultura/slavnosti/noc_jaguara.png';
import noc_predku from '../../img/kultura/slavnosti/noc_predku.png';
import slavnost_ohnivych_hadu from '../../img/kultura/slavnosti/slavnost_ohnivych_hadu.png';
import slavnosti_slunecnich_paprsku from '../../img/kultura/slavnosti/slavnosti_slunecnich_paprsku.png';

const TradiceASvatky = () => (
  <div>
    <nav className="second-nav">
                <Link to="/casstellobruxxo/mytologie">Mytologie</Link>
                <Link to="/casstellobruxxo/pisne-ikaros">Písně Ikaros</Link>
                <Link to="/casstellobruxxo/fauna-a-flora">Fauna a flóra</Link>
                <Link to="/casstellobruxxo/tradice-a-svatky">Tradice a svátky</Link>
                <Link to="/casstellobruxxo/jidlo">Jídlo</Link>
                <Link to="/casstellobruxxo/hudba-a-tanec">Hudba a tanec</Link>
                <Link to="/casstellobruxxo/oblekani">Oblékání</Link>
        </nav>    

    <div className="main-header"><h1>Tradice a svátky</h1></div>

    
    <h2>Tradice</h2>
    <hr />
    
    <p><span className='text-highlighter text-underline'>Sdílení jídla a pití</span></p>
    <p>V Latinské Americe je běžné, že jídlo není jen individuální záležitostí, ale <span className='text-highlighter'>příležitostí k setkávání</span>. Společné obědy s rodinou, přáteli nebo celou komunitou jsou samozřejmostí. V Argentině, Uruguayi a Paraguayi je silná tradice sdíleného pití <span className='text-highlighter'>maté</span> – jedna kalabasa a bombilla koluje mezi všemi. V Kolumbii a Venezuele se podobně sdílí <span className='text-highlighter'>arepas</span> nebo malé občerstvení při návštěvách.</p>
    
    <p><span className='text-highlighter text-underline'>Siesta a klid po obědě</span></p>
    <p>V mnoha teplejších oblastech je přirozenou tradicí dát si po obědě odpočinek. Ne vždy jde o skutečný spánek, ale spíše o čas, kdy se zavírají obchody, rodiny odpočívají doma a ulice se zklidní.</p>
    
    <p><span className='text-highlighter text-underline'>Tanec a hudba jako součást každodenního života</span></p>
    <p>Hudba a tanec nejsou vyhrazeny jen pro svátky, ale jsou součástí <span className='text-highlighter'>každodenní kultury</span>. Samba v Brazílii, tango v Argentině, salsa na Kubě nebo merengue v Dominikánské republice – každý region má své rytmy a je běžné, že si lidé spontánně zatancují doma, na ulici nebo při setkáních.</p>
    
    <p><span className='text-highlighter text-underline'>Rodinné a komunitní vazby</span></p>
    <p>Latinskoamerické rodiny jsou obvykle velmi soudržné. Tradicí je časté setkávání širší rodiny, silný respekt k rodičům a prarodičům a společné trávení času. Návštěvy nejsou formální, lidé často přicházejí „jen tak“ a společně jedí či popíjejí.</p>
    
    <p><span className='text-highlighter text-underline'>Fotbal jako každodenní rituál</span></p>
    <p>V mnoha zemích, především v Brazílii, Argentině a Mexiku, je fotbal víc než sport – je to součást identity. Hraní fotbalu na ulicích, sledování zápasů s přáteli a vášnivé debaty o týmech patří k běžnému životu.</p>
    
    <p><span className='text-highlighter text-underline'>Vyprávění příběhů a legend</span></p>
    <p>V komunitách, zejména na venkově, přetrvává tradice vyprávění legend, v nichž figurují <span className='text-highlighter'>duchové, kouzelná zvířata nebo historické postavy</span>. Často se vyprávějí u ohně, při rodinných setkáních nebo při večerním odpočinku.</p>
    
    <p><span className='text-highlighter text-underline'>Barevné trhy a každodenní obchodování</span></p>
    <p>Místní trhy nejsou jen místem k nákupu potravin, ale i společenskou událostí. Tradiční je smlouvání, ochutnávání jídla a živý kontakt s ostatními lidmi.</p>

    <p><span className='text-highlighter text-underline'>Pouliční umění</span></p>
    <p>V mnoha městech je běžné se setkat s hudebníky, tanečníky i malíři vystupujícími na ulicích. Ulice jsou vnímány jako prostor k životu, ne jen k přesunu z místa na místo.</p>


    <h2>Mudlovské svátky a slavnosti</h2>
    <hr />
    
    <h3>Karneval</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(hlavně Brazílie, ale i Kolumbie, Karibik)</p>
    
    <img src={karneval} className='img-in-text img-in-text-left' />
    
    <p>Touto dobou asi nejznámější a největší slavností celého regionu, znají a navštěvují jej lidi z celého světa. Koná se zpravidla <span className='text-highlighter'>před velikonoční nedělí</span> a <span className='text-highlighter'>trvá čtyři dny</span>. Ulice při něm zaplavují <span className='text-highlighter'>průvody</span> tanečníků, hudebníků, alegorických vozů a lidí v <span className='text-highlighter'>pestrobarevných maskách</span>. Tančí se <span className='text-highlighter'>samba</span>, lidi na sobě mají barevné kostýmy poseté peřím či flitry a neskutečně hlasitá hudba také patří k samozřejmostem. Karneval není pro místní jen zábavou – plní i společenskou funkci a to jako důležitá <span className='text-highlighter'>kulturní událost</span> vyjadřující <span className='text-highlighter'>radost ze života</span> a propojující různé vrstvy společnosti, potažmo i lidi, co se sjedou z celého světa.</p>

    <h3>Día de los Muertos</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Mexiko, částečně Střední Amerika)</p>
    <img src={dia_de_los_muertos} className='img-in-text img-in-text-right' />
    
    <p>Den mrtvých se slaví na <span className='text-highlighter'>začátku listopadu</span>, tedy v podobné době jako jeho bráška Halloween. Jihoameričtí mudlové připravují k příležitosti dne mrtvých <span className='text-highlighter'>oltáře</span> z květů cempasúchil, svíček, fotografií a jídel, která jejich milovaní zesnulí zbožňovali. Neslaví se jen doma, vychází se i do ulic a do těch malí i velcí nosí <span className='text-highlighter'>cukrové lebky</span>. Na rozdíl od jiných svátků slavených v tomto období v jiných kulturách nemá tento den smutný ani ponurý ráz. Naopak – je doprovázen veselím a radostí, protože místní <span className='text-highlighter'>věří, že se jejich zemřelí blízcí vracejí zpět</span>, aby mohli být alespoň na chvíli opět se svou rodinou.</p>


    <h3>Inti Raymi</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Peru, Bolívie, Ekvádor)</p>

    <img src={inti_raymi} className='img-in-text img-in-text-left' />
    
    <p>Jedná se o starý incký <span className='text-highlighter'>svátek slunce</span>, jenž je slavený při <span className='text-highlighter'>zimním slunovratu</span>, který ovšem na jižní polokouli připadá na <span className='text-highlighter'>červen</span>. Původně se spojoval s kultem slunečního boha Intiho. Mudlové tancují <span className='text-highlighter'>tradiční tance</span>, připravují <span className='text-highlighter'>obětní dary</span> v podobě kukuřice, ovoce či masa a pořádají slavnosti na počest <span className='text-highlighter'>boha slunce</span>. Je to spojení víry, přírody a komunity, které dodnes přitahuje tisíce místních lidí. Pro původní obyvatelstvo Peru měl hodně podobný význam, jako má pro studenty Castelobruxa rituál zhasnutí měsíce: <span className='text-highlighter'>nový začátek</span>.</p>

    <h3>Festa Junina</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Brazílie)</p>
    <img src={festa_junina} className='img-in-text img-in-text-right' />
    
    <p>Tento červnový svátek je spojen s tradicemi a obyčeji venkova. Slavící lidé se převlékají do <span className='text-highlighter'>barevných kostýmů připomínajících rolníky</span>, jejichž nedílnou součástí jsou pro muže velké <span className='text-highlighter'>slaměné klobouky</span> a pro ženy <span className='text-highlighter'>copy</span> a přimalované <span className='text-highlighter'>pihy na nose</span>. Všichni kolem ohňů v obélníkových formacích tančí <span className='text-highlighter'>lidový tanec quadrilhu</span> za hudby <span className='text-highlighter'>akordeonů a trianglů</span>, hrají veselou hru <span className='text-highlighter'>Bumba Meu Boi</span> a připravují <span className='text-highlighter'>kukuřičné pokrmy</span> jako třeba kukuřičná pasta pamonha, sladký pudink canjica, popcorn anebo třeba koláč bolo de fubá. Oslavy mají kořeny v křesťanském kalendáři a evropských tradicích, ale dnes jsou spíše veselou lidovou slavností.</p>

    <h3>Afro-latinské slavnosti</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Brazílie, Kuba)</p>
    
    <img src={afro_latinske_slavnosti} className='img-in-text img-in-text-left' />
    
    <p>Tyto svátky oslavují spojení kultur a rozmanitost, která je v podobě afrického odkazu zakořeněná v Latinské Americe a to například v podobě hudby, tance, umění anebo i jídla. Součástí oslav jsou i platformy, na nichž se mohou lidé dozvědět nové informace o těchto kulturách, a přiučit se něčemu, stejně jako je součástí například i <span className='text-highlighter'>propagace</span> afro-latinských podnikatelů či právě umělců. Podobné festivaly se pak konají na více místech ve světě, ale většinou tedy propagují hlavně kulturu – tanec, hudbu a jídlo – a méně jednotlivce z komunity.</p>

    <h2>Kouzelnické svátky a slavnosti</h2>
    <hr />
    
    <p>Kouzelníci, méně omezováni vzdáleností a naopak více kouzelnickou podstatou, tolik zpravidla nelpí na tradicích a slavnostech konajících se konkrétně ve svém městě. Naopak u nich dochází snadněji k <span className='text-highlighter'>míchání a sdílení kultur</span>, jelikož mnoho z nich se <span className='text-highlighter'>sjíždí i z velkých vzdáleností</span> užít si slavnosti například právě se svými přáteli, které poznali na škole. A dále během života, kouzelníci se mudlům úplně nevyhýbají, ale samozřejmě jim je příjemné se sejít na místě, kde mohou <span className='text-highlighter'>s volností vyjádřit svou podstatu</span>.</p>

    <h3>Kouzelnický karneval</h3>
    
    <img src={kouzelnicky_karneval} className='img-in-text img-in-text-left' />
    
    <p>Kouzelníci přejali mudlovský karneval, ale obohatili ho o magické prvky. <span className='text-highlighter'>Masky se samy mění, ožívají a reagují na hudbu</span>. Ohňostroje netvoří jen barevné světlice, ale <span className='text-highlighter'>podobu kouzelných zvířat</span>, která se chvíli vznášejí nad hlavami davu. Kouzla rytmicky rozsvěcují celé ulice v barvách samby a průvod působí dojmem, že se celé město proměnilo v <span className='text-highlighter'>jednu velkou živou iluzi</span>. Čerstvě dospělí rádi popíjejí koktejly s různými kouzly <span className='text-highlighter'>měnícími barvu</span> buďto jen jejich jazyka anebo například špiček prstů či vlasů.</p>

    <h3>Noc předků</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(kouzelnická verze Día de los Muertos)</p>

    <img src={noc_predku} className='img-in-text img-in-text-right' />
    
    <p>Kouzelníci slaví Den mrtvých podobně jako mudlové, ale jejich <span className='text-highlighter'>oltáře mají skutečnou moc</span>. S pomocí bezpečných <span className='text-highlighter'>rituálů</span> dokáží krátce navázat <span className='text-highlighter'>kontakt s dušemi zesnulých</span> – nikoliv v podobě přivolání ducha, jako při zakázané černé magii, ale spíše v náznaku: přízračném obrazu, hlasu či pocitu přítomnosti. <span className='text-highlighter'>Studenti si zdobí tělo malbami</span>, které se samy hýbou a mění, aby vyjádřili vztah k předkům. Vyrábí si sami také dny a občas i týdny dopředu <span className='text-highlighter'>masky</span>, které se pak díky kouzlům dokážou i <span className='text-highlighter'>hýbat</span> a ve vzácných příležitostech skrze ně může na studenta předek promluvit - v takové příležitosti se pak maska obvykle <span className='text-highlighter'>ponechává na památku</span>.</p>

    <h3>Slavnost slunečních paprsků</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(kouzelnická verze Inti Raymi)</p>

    <img src={slavnosti_slunecnich_paprsku} className='img-in-text img-in-text-left' />
    
    <p>Během tohoto svátku kouzelníci provádějí <span className='text-highlighter'>rituály ohně a světla</span>, které <span className='text-highlighter'>napodobují východ Slunce</span>. Kouzla vytvářejí paprsky, jež se šíří po obloze a působí dojmem, že celá škola či vesnice stojí přímo uprostřed sluneční záře. Lidé tančí <span className='text-highlighter'>v pončech vyšitých zlatou nití</span> a magické kresby na těle se rozjasňují se slunečním světlem. Na Castelobruxu pokračují oslavy i po zapadnutí slunce a po společných hodech při slavnostní večeři se pak scházejí pod měsícem a <span className='text-highlighter'>provádějí rituál zhasnutí měsíce</span>, jehož světlo také pochází ze zdroje slunečních paprsků.</p>

    <h3>Festa Junina v kouzelnické podobě</h3>

    <img src={festa_junina_v_kouzelnicke_podobe} className='img-in-text img-in-text-right' />
    
    <p>Ohně při této slavnosti <span className='text-highlighter'>zpívají lidskými hlasy</span>, vyprávějí příběhy o duších a hrdinech. <span className='text-highlighter'>Iluze venkovských vesnic ožívají</span> a lidé mohou krátce vstoupit do pohyblivého <span className='text-highlighter'>obrazu minulosti</span>. Kouzelnické soutěže v tanci dokáží změnit taneční plochu na <span className='text-highlighter'>živé pole plné květů nebo ohnivých stuh</span>, které se hýbou kolem tanečníků. Ti se odívají buďto jako předci z jejich rodiny anebo jako hrdinové z příběhů.</p>

    <h3>Den caipor</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Brazílie)</p>
  
    <img src={den_caipor} className='img-in-text img-in-text-left' />

    <p>Jedná se o čistě kouzelnický svátek bez mudlovské inspirace a kořenů. Oslavuje <span className='text-highlighter'>duchy pralesa – caipory –</span>, kteří chrání školu Castelobruxo a amazonské lesy. Studenti i dospělí připravují <span className='text-highlighter'>oltáře z ovoce, ořechů a květin</span>, které mají caipory potěšit. Během slavnosti se v areálu školy často objevují drobné postavičky caiporů, které škádlí studenty, hrají si s nimi a přijímají jejich dary. Jedná se o den, během nějž je <span className='text-highlighter'>bezpečné polevit v ostražitosti</span> a studenti se tak mohou bezstarostně oddávat <span className='text-highlighter'>žertíkům s caiporami</span>.</p>


    <h3>Slavnost ohnivých hadů</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Amazonie)</p>
    <img src={slavnost_ohnivych_hadu} className='img-in-text img-in-text-right' />
    <p>Kouzelníci slaví <span className='text-highlighter'>příchod období dešťů</span>, v průběhu nějž se v pralese objevují <span className='text-highlighter'>zářící kouzelní hadi</span> připomínající plamínky. Během slavnosti se zapalují kouzelné <span className='text-highlighter'>pochodně, které se vinou jako hadi mezi tanečníky</span>. Studenti se malují červenými a oranžovými vzory připomínajícími plameny a <span className='text-highlighter'>tančí kolem ohňů</span>, které zpívají v rytmu bubnů. Tento svátek slaví <span className='text-highlighter'>ochranu přírody a úctu k ní</span>, zakládá se na postavě z folklóru jménem Boitatá, která byla právě ochráncem přírody.</p>


    <h3>Noc jaguára</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Kolumbie, Brazílie, Guyana)</p>
    <img src={noc_jaguara} className='img-in-text img-in-text-left' />
    <p>Posvátný jaguár je v Latinské Americe odedávna spojován s mocí, silou a ochranou. Kouzelníci slaví jednou ročně noc, kdy se podle legend <span className='text-highlighter'>hranice mezi lidským a zvířecím světem stírá</span>. Studenti se účastní rituálů s malbami na těle v podobě jaguářích skvrn a vyprávějí se příběhy o zvěromázích a kouzelnících, kteří dokázali přijmout jaguáří podobu. Noc jaguára je vnímána jako chvíle odvahy, v níž se mladí kouzelníci učí čelit svým obavám.</p>

    <h3>Den kouzelných řek</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Andské země a Amazonie)</p>
    <img src={den_kouzelnych_rek} className='img-in-text img-in-text-right' />
    <p>Voda je v Latinské Americe chápána jako zdroj života i magie. Kouzelníci slaví den, kdy se <span className='text-highlighter'>uctívají řeky a vodní plochy celkově</span> – od andských jezer až po samotnou Amazonku. V Castelobruxu se tento svátek slaví <span className='text-highlighter'>nočním průvodem s lucernami</span>, které se vznášejí nad hladinou jezírka v areálu školy. Někteří kouzelníci věří, že kdo během slavnosti spatří tvář vodního ducha v odrazu, bude mít štěstí celý rok.</p>

    <h3>Den duchů pralesa</h3>
    <p className='text-highlighter text-align-center no-margin-top'>(Latinskoamerické kouzelné kmeny)</p>
    <img src={den_duchu_pralesa} className='img-in-text img-in-text-left' />
    <p>Tento svátek je spojen s přesvědčením předků, že <span className='text-highlighter'>prales a hory jsou obývány množstvím bytostí</span> neviditelných pro mudly. Během slavnosti kouzelníci malují své tělo přírodními barvami, které se během rituálů začnou hýbat a svítit. Kouzla otevírají krátce <span className='text-highlighter'>průchody do duchovního světa</span>, kde se dají spatřit stíny bytostí, které chrání zemi. Slavnost je pro mnohé zároveň <span className='text-highlighter'>oslavou i zkouškou odvahy</span>, pro jiné pouze oslavou předků, jelikož ne každý na existenci přírodních duchů věří.</p>



  </div>
)

export default TradiceASvatky