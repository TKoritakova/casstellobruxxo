import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MagieNav from './MagieNav'

import boure from '../../img/predmety/zveromagie/boure.png';
import dusevni_neuplnost from '../../img/predmety/zveromagie/dusevni_neuplnost.png';
import etika from '../../img/predmety/zveromagie/etika.png';
import louhovani_listu from '../../img/predmety/zveromagie/louhovani_listu.png';
import naladeni from '../../img/predmety/zveromagie/naladeni.png';

import premena_zpet from '../../img/predmety/zveromagie/premena_zpet.png';
import registrace from '../../img/predmety/zveromagie/registrace.png';
import rizika from '../../img/predmety/zveromagie/rizika.png';
import uvod from '../../img/predmety/zveromagie/uvod.png';

const Zveromagie = () => (
  <div>
    
    <MagieNav />
    

    <div className="main-header"><h1>Zvěromagie</h1></div>

    <p><i>= schopnost dle své vůle přecházet mezi lidskou a zvířecí podobou bez ztráty lidského vědomí</i></p>

    <img src={uvod} className='img-in-text img-in-text-right' />

    <p>K získání schopnosti zvěromagie je důležitá dobrá znalost <span className='text-highlighter'>přeměňování, nadání na lektvary, pevná vůle a vytrvalost</span>. V Castelobruxu sahá od fyzické proměny až po <span className='text-highlighter'>hluboké duchovní propojení s přírodním duchem zvířete</span>. Každý krok vedoucí ke konečné přeměně vyžaduje přesnost, trpělivost a hlavně <span className='text-highlighter'>duševní připravenost</span> – neboť kouzelník, který nerozumí sobě, se nemůže správně proměnit v jinou bytost.</p>

    <p>Duše zvířete, do jehož podoby se zvěromág přeměňuje, se nenachází vně člověka, ale dřímá v něm od jeho narození – stačí ji proměnit. Každý zvěromág se tak dokáže přeměnit pouze v jednoho konkrétního tvora – toho, jehož podstata nejvíce odpovídá jeho nitru. Tento <span className='text-highlighter'>tvar nelze volit, neboť je odrazem duše, ne rozumu</span>. V průběhu života kouzelníka se však, stejně jako podoba patrona, může za specifických podmínek změnit. K tomu je ale potřeba změna vnitřní identity člověka nebo změna hodnot.</p>

    <p className='text-highlighter text-align-center'>„Neovládáme zvíře, uzavíráme s ním spojenectví.“</p>

    <h2>Cesta k přeměně</h2>
    <hr />
    <p>Tradiční, evropský přístup k přeměně se skládá z pěti kroků:</p>

    <div className='green-box'>
        <img src={louhovani_listu} className='img-in-text img-in-text-right' />
        
        <p><span className='text-highlighter text-underline'>1. Louhování listu mandragory v ústech</span></p>
        <p>Od úplňku do úplňku následujícího louhujeme list mandragory v ústech. Tento proces nelze přerušit, list nemůžeme vyjmout ani spolknout, jinak musíme proces opakovat.</p>

        <p><span className='text-highlighter text-underline'>2. Vyjmutí mandragory</span></p>
        <p><span className='text-highlighter'>Za jasného úplňku</span> (nezatemnělého mraky) <span className='text-highlighter'>vyplivneme list mandragory do nádoby v dosahu měsíčních paprsků</span>. Pokud měsíc není jasně vidět, vyjmeme mandragoru, nahradíme ji jinou a čekáme do dalšího úplňku.</p>

        <p><span className='text-highlighter text-underline'>3. Vaření lektvaru:</span></p>
        <p>Z listu mandragory využitého v předchozích krocích, společně s vlasem budoucího zvěromága, stříbrnou lžičkou s <span className='text-highlighter'>rosou nedotčenou sluncem a kuklou lišaje smrtihlava</span>.</p>

        <p><span className='text-highlighter text-underline'>4. Sesílání kouzla</span></p>
        <p>Během každého východu a západu slunce, až do první bouře po úplňku, sesíláme zvěromážské kouzlo. Hůlkou míříme na vlastní srdce a vyslovíme formuli <span className='text-highlighter'>amato animo animato animagus</span>.</p><center><p><i>„Zavazuji se dýchat životem zvířete, které jsem v sobě poznal.“</i></p></center>

        <p><span className='text-highlighter text-underline'>5. Vypití lektvaru</span></p>
        <p>V průběhu bouře naposledy sešleme zvěromážské kouzlo a následně vypijeme připravený zvěromážský lektvar. Tím je proces dokončen.</p>
    </div>

    <p>Castelobruxo celý proces doplňuje o další fáze, které pomáhají přirozenosti a plynulosti cesty k přeměně. Tyto kroky tak nejsou zcela nutné k nabytí schopnosti, pomáhají ale poznání sebe sama a své zvířecí podoby.</p>

    <div  className='green-box'>
        <p ><span className='text-highlighter text-underline'>1. Poznání vlastního ducha</span> <i>(Conhecer o Espírito)</i></p>
        <p>Tato fáze probíhá ještě před prvním úplňkem a vložením listu mandragory do úst. Člověk, který se má stát zvěromágem, tráví o samotě čas v džungli. Učí se naslouchat přírodě a snaží se rozpoznat znamení, která by mohla odhalit jeho zvířecího průvodce. V tom mu může pomoci i podoba jeho patrona – poměrně běžně se stává, že se podoby shodují. V této fázi se neprovádějí žádná kouzla – kouzelník je v tichu, využívá meditace a vnímá okolní přírodu.</p>

        <p><span className='text-highlighter text-underline'>2. Spojení s prastarým dechem</span> <i>(Sopro Antigo)</i></p>
        <p>Po vložení mandragory do úst je třeba co nejméně mluvit. Místo toho se doporučuje naslouchat tepům džungle/přírody. V té znovu tráví mnoho času a snaží se s ní duchem ztotožnit.</p>

        <img src={boure} className='img-in-text img-in-text-right' />
        
        <p><span className='text-highlighter text-underline'>3. Přijetí bouře</span> <i>(Aceitação da Tempestade)</i></p>
        <p>Bouře v tomto případě není chápána jen jako počasí, ale jako symbol proměny – chaos, v němž se rodí rovnováha. Lektvar se proto pije pod otevřeným nebem, nikdy ne uvnitř. Kouzelník se nechá pohltit deštěm.</p>

        <p><span className='text-highlighter text-underline'>4. Přijetí zvířecí podoby</span></p>
        <p>Cesta k přeměně nekončí první přeměnou, ale následují podrobné studie o konkrétním druhu tvora. Součástí je i přivykání na život v jeho kůži, ztotožnění se s ním samotným nebo s celým druhem. V nové podobě se poté snažíme začlenit do přírody.</p>
    </div>

    <h2>Rizika a chyby</h2>
    <hr />
    
    <p><span className='text-highlighter'>Nedbalost</span> v kterémkoli kroku může vést k neúspěchu nebo k <span className='text-highlighter'>nebezpečné deformaci</span>. Například při zapomenutí nebo špatném splnění některého z kroků je třeba <span className='text-highlighter'>celý proces zopakovat</span>. Jedním z největších rizik je uvíznutí mezi oběma podobami – s částmi těla zvířecími i lidskými. Proto se doporučují časté konzultace s experty na zvěromagii. Nejlépe celou cestu provádět pod jeho dohledem.</p>

    <img src={rizika} className='img-in-text img-in-text-right' />
    
    <p>Zvěromág, který se izoluje a tráví ve své zvířecí podobě příliš mnoho času, může <span className='text-highlighter'>přestat rozlišovat mezi svým lidským a zvířecím já</span>. V lidské podobě se pak mohou začít probouzet zvířecí instinkty – impulzivnější jednání nebo ztráta sociálních schopností. Stejně tak si mysl zvykne na lidské tělo a může pro ni být těžší si zpět zvyknout na to lidské. Pokud zvěromág zemře v podobě zvířete, pak v ní zůstává, jelikož nedošlo ke zpětné přeměně.</p>

{/*

<span className='text-highlighter'>Proměna je vnímána jako dar ducha džungle</span>, ne osobní výkon. <span className='text-highlighter'>Každé zvíře nese poselství</span> – jaguár sílu a trpělivost, tukan zřetelnost řeči, kapybara společenství, mravenečník soustředění. Někteří zvěromágové dokonce tvrdí, že slyší hlasy svých zvířecích druhů i v lidské podobě – to je známka úplného souladu.</p>

<center><h2>Etika a registrace</h2><hr /></center><img src="https://i.postimg.cc/L6989XXp/registrace.png" style="float:left; margin-left:5px; margin-right:15px; width:27%;border: solid 2px #2e8b57;margin-bottom:0px;"><p><span className='text-highlighter'>Ministerské úřady</span> po celém světě <span className='text-highlighter'>požadují registraci zvěromágů</span>. V případě, že se odhalí, že někdo ovládá schopnost zvěromagie, ale není registrovaný, může být potrestán například pobytem v Azkabanu. V Jižní Americe jsou tresty nižší – za to se více klade důraz na <span className='text-highlighter'>odpovědnost vůči přírodě</span>. Zneužití zvířecí podoby k podvodu, špionáži či lovu je těžkým proviněním, neboť tím čaroděj uráží ducha svého zvířete.</p>
<img src="https://i.postimg.cc/J4rzrnn8/etika.png" style="float:right; margin-right:5px; margin-left:15px; width:27%;border: solid 2px #2e8b57;margin-bottom:0px;margin-top:0px"><p>Zvěromagie není cesta pro všechny. Vyžaduje trpělivost, pokoru a odvahu čelit vlastnímu nitru. Úspěšná přeměna není koncem, ale začátkem – od této chvíle nese kouzelník odpovědnost nejen za sebe, ale i za druhého tvora, který s ním sdílí jedno tělo.</p>
<center><p><span className='text-highlighter'>„Neučíme se stát zvířaty. Učíme se znovu být součástí džungle.“</span></p></center>

<center><h2>Přeměna samotná</h2><hr /></center><p>Stát se zvěromágem je pouze začátek. Skutečné umění spočívá v <span className='text-highlighter'>ovládnutí samotné proměny</span> – tedy v umění měnit tělo i ducha v naprosté harmonii. Nejde o pouhý fyzický přechod, ale o <span className='text-highlighter'>přeladění bytí</span> z lidské vibrace na zvířecí a zpět.

Stejně jako při kouzlení, i zde je rozhodujícím faktorem <span className='text-highlighter'>stav mysli</span>. Zvěromág musí dosáhnout <span className='text-highlighter'>emoční rovnováhy</span> – klidné mysli, v níž se lidské a zvířecí aspekty duše propojí.

Fáze přeměny:</p>
<div style="margin:5px;padding:10px;border: solid 2px #2e8b57;"><img src="https://i.postimg.cc/65tfBdnJ/naladeni.png" className='img-in-text img-in-text-right' /><p><span className='text-highlighter'>1. Naladění</span>
Před samotnou přeměnou se zklidníme a připravíme se na ni. Ke zklidnění můžeme zavřít oči, vyrovnat a zpomalit dech a upozadit nepotřebné myšlenky. Soustředíme se na vlastní tělo, pulz srdce a života kolem sebe. Stejně tak na duši zvířete, která v nás dřímá. Ne jako na cíl, ale jako na přítele, kterého zveme domů.

<span className='text-highlighter'>2. Přijetí</span>
Přeladíme vlastní rezonanci na tu námi chtěnou. K tomu nám může pomoci představa, jak se naše duše rozpíná a <span className='text-highlighter'>splývá s duší zvířete</span>. <span className='text-highlighter'>Často se využívá</span> krátká <span className='text-highlighter'>imaginace prostředí</span>, kde by se zvíře cítilo přirozeně.

<span className='text-highlighter'>3. Proměna</span>
Během samotné proměny se tkáně i vnitřní magie přeuspořádávají podle obrazu zvířete. Proces bývá doprovázen teplem, tlakem na srdci nebo ztrátou rovnováhy. Při správném a trénovaném provedení je proměna plynulá a téměř bezbolestná. Při prvních proměnách trvá proces déle.

<span className='text-highlighter'>4. Stabilizace</span>
Po dosažení zvířecí podoby je nutné zůstat relativně v klidu. Zvěromág vnímá svět novými smysly, na které si musí zvyknout, zároveň si ale musí uchovat vědomí lidského já. Příliš silné emoce – strach, euforie, agrese – mohou způsobit <span className='text-highlighter'>přetržení spojení</span> a (nedokonalý) návrat do lidské formy dříve, než je žádoucí.</p></div>
<p>Během přeměny je třeba mít emoce pod kontrolou. V závislosti na tom, jaká emoce kouzelníka ovládá, proběhne samotná proměna:</p><div style="padding:0px 15px;margin-bottom:-15px;font-family: 'Ancizar Serif', serif;font-optical-sizing: auto;font-size:14px;">• <span className='text-highlighter'>strach</span> → rozpad přeměny, částečná deformace těla
• <span className='text-highlighter'>vztek</span> → násilné a neúplné proměny, ztráta jemné motoriky
• <span className='text-highlighter'>klid</span> → plynulý přechod mezi podobami</div>

<center><h2>Přeměna zpět</h2><hr /></center><img src="https://i.postimg.cc/KzbRt5Z8/premenazpet.png" style="float:left; margin-left:5px; margin-right:15px; width:27%;border: solid 2px #2e8b57;margin-bottom:0px;"><p>Před přeměnou zpět provede kouzelník tzv. <span className='text-highlighter'>akt zkrocení</span> – uklidní v sobě duši zvířete, poděkuje jí a pozve zpět do středu svou lidskou podobu. K tomuto aktu může pomoci mantra: <span className='text-highlighter'>„Eu sou o mesmo, em todas as formas.“</span> <i>(Jsem týž, ve všech podobách.)</i></p>




<center><h2>Bytí ve zvířecí podobě</h2><hr /></center><p>Proměnou získává zvěromág <span className='text-highlighter'>všechny vlastnosti a schopnosti</span> typické pro daný zvířecí druh (např. jedovatost, ektotermie, síla, schopnost regenerace, dýchání pod vodou). To vše vzniká díky <span className='text-highlighter'>přeměně tkání</span>, některé vlastnosti (jako např. ptačí zpěv nebo let, echolokace) lze však nabýt a zdokonalit až učením. Po zpětné přeměně zvířecí vlastnosti ztrácí, tvor sice dřímá v jeho nitru, je ale třeba ho probudit.

Zvíře, do kterého se přeměníme, může nést <span className='text-highlighter'>drobné znamení</span> odpovídající lidskému vzhledu (např. jizvy, brýle, barva vlasů). Mimo to může mít i znamení oblečení, ve kterém se přoměnil. To se po zpětné přeměně vrátí.

Magická podstata zvěromága zajišťuje, že v podobě zvířete <span className='text-highlighter'>stárne tempem odpovídajícím lidskému životu</span>, nikoliv krátkému věku daného zvířete.</p>

<center><h2>Neúplné přeměny a jejich léčba</h2><hr /></center><p>Dříve se neúplná proměna – tzv. <span className='text-highlighter'>polomorfie</span> – považovala za trvalý stav. Současné výzkumy v oblasti přeměňovací magie však přinesly nové postupy, jak tyto stavy <span className='text-highlighter'>zvrátit nebo stabilizovat</span>. Fungují při přeměně tam i zpět.

Typy neúplných přeměn:</p>
<div style="margin:5px;padding:10px;border: solid 2px #2e8b57;"><p><span className='text-highlighter'>1. Fyziologická neúplnost</span>
<span className='text-highlighter'>Část těla zůstane lidská či zvířecí</span> (záleží na směru přeměny) – obvykle v důsledku šoku, paniky nebo přerušení koncentrace. Dá se léčit pomocí lektvaru tělesné rovnováhy, který se vaří z listů marapuamy a sporýše lékařského.</p>

<img src="https://i.postimg.cc/vmgN5W0r/dusevnineuplnost.png" className='img-in-text img-in-text-right' /><p><span className='text-highlighter'>2. Duševní neúplnost</span>
Tělo se promění zcela, ale <span className='text-highlighter'>mysl zůstane roztříštěná</span> – kouzelník cítí zvířecí instinkty silněji než lidské. Dá se léčit působením kouzla <span className='text-highlighter'>Reanimare Animum</span>, vedeným zkušeným mistrem, který pomůže znovu sjednotit vědomí  

<span className='text-highlighter'>3. Trvalé rozštěpení</span>
Nejvzácnější, ale nejnebezpečnější z forem. Kouzelník zůstane v <span className='text-highlighter'>pololidském-polozvířecím těle</span> a vnímá obě formy současně – jak v hladině psychické, tak fyzické. K léčbě se využívá kombinace runové stabilizace, elixíru „Esência da Lua Cheia“ a sjednocující rituál <i>Chamado do Outro Eu</i>.</p></div>

<center><h2>Naši zvěromágové</h2><hr /></center>
<div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start;"><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('murhala-clovek').style.opacity='0'; document.getElementById('murhala-zvire').style.opacity='1';" onmouseout="document.getElementById('murhala-clovek').style.opacity='1'; document.getElementById('murhala-zvire').style.opacity='0';"><div id="murhala-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/CMnJ2YDZ/murhala.png" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Caetano Murhala</span></p></center></div><div id="murhala-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/xdhY0ndv/murhala-zvire.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Harpyje</span></p></center></div></div><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('jared-clovek').style.opacity='0'; document.getElementById('jared-zvire').style.opacity='1';" onmouseout="document.getElementById('jared-clovek').style.opacity='1'; document.getElementById('jared-zvire').style.opacity='0';"><div id="jared-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/yxRP3XBr/jared.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Jared Ilai Moreno</span></p></center></div><div id="jared-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/QC7bKks0/jared-zvire.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Margay</span></p></center></div></div><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('tristan-clovek').style.opacity='0'; document.getElementById('tristan-zvire').style.opacity='1';" onmouseout="document.getElementById('tristan-clovek').style.opacity='1'; document.getElementById('tristan-zvire').style.opacity='0';"><div id="tristan-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/0y2jHk3D/tristan.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Tristán Yeray Moreno</span></p></center></div><div id="tristan-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/P5rJFXc1/tristan-zvire.png" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Tukan žlutohrdlý</span></p></center></div></div></div>

<div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start;"><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('chiara-clovek').style.opacity='0'; document.getElementById('chiara-zvire').style.opacity='1';" onmouseout="document.getElementById('chiara-clovek').style.opacity='1'; document.getElementById('chiara-zvire').style.opacity='0';"><div id="chiara-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/nV9TWZ7V/chiara.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Chiara Antonia José</span></p></center></div><div id="chiara-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/hvmrQbgZ/chiara-zvire.png" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Rajka červená</span></p></center></div></div><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('gabriel-clovek').style.opacity='0'; document.getElementById('gabriel-zvire').style.opacity='1';" onmouseout="document.getElementById('gabriel-clovek').style.opacity='1'; document.getElementById('gabriel-zvire').style.opacity='0';"><div id="gabriel-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/sfGKLySG/gabriel.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Gabriel Sebastian Almeida Soares</span></p></center></div><div id="gabriel-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/d3CBZmvf/gabriel-zvire.png" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Korálovec</span></p></center></div></div><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('luana-clovek').style.opacity='0'; document.getElementById('luana-zvire').style.opacity='1';" onmouseout="document.getElementById('luana-clovek').style.opacity='1'; document.getElementById('luana-zvire').style.opacity='0';"><div id="luana-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/jqnv1KNL/luana.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Luana Mariana Almeida Soares</span></p></center></div><div id="luana-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/mk9w1NRX/luana-zvire.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Ocelot</span></p></center></div></div></div>

<div style="display: flex; gap: 20px; justify-content: center; align-items: flex-start;"><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('ines-clovek').style.opacity='0'; document.getElementById('ines-zvire').style.opacity='1';" onmouseout="document.getElementById('ines-clovek').style.opacity='1'; document.getElementById('ines-zvire').style.opacity='0';"><div id="ines-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/xjNgZYHX/ines.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Inés Soraya Caro</span></p></center></div><div id="ines-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/FzSZkgmG/ines-zvire.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Jaguarundi</span></p></center></div></div><div style="position: relative; width: 27%; min-height: 170px;" onmouseover="document.getElementById('juan-clovek').style.opacity='0'; document.getElementById('juan-zvire').style.opacity='1';" onmouseout="document.getElementById('juan-clovek').style.opacity='1'; document.getElementById('juan-zvire').style.opacity='0';"><div id="juan-clovek" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 1; z-index: 1;"><img src="https://i.postimg.cc/Kc3QWFLk/juan.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Juan Miguel Santos Ramírez</span></p></center></div><div id="juan-zvire" style="position: absolute; top: 0; left: 0; width: 100%; transition: opacity 1.3s ease; opacity: 0; z-index: 2;"><img src="https://i.postimg.cc/sfGKLySV/juan-zvire.jpg" style="width: 100%; border: solid 2px #2e8b57; display: block; margin:0px;"><center><p style="font-family: 'Ancizar Serif', serif; font-size: 14px; margin-top: 5px;"><b style="color:#2e8b57; text-shadow: 1px 1px 5px #000000;"><i>Vakoveverka létavá</span></p></center></div></div></div>

   */}

   


  </div>
)

export default Zveromagie