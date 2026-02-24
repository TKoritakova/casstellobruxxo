import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import lekouzelnictvi from '../../img/predmety/uvod/lekouzelnictvi.png';
import magie_bezneho_uziti from '../../img/predmety/uvod/magie_bezneho_uziti.png';
import magie_obrany_a_utoku from '../../img/predmety/uvod/magie_obrany_a_utoku.png';
import obecna_magibotanika from '../../img/predmety/uvod/obecna_magibotanika.png';
import obecna_magizoologie from '../../img/predmety/uvod/obecna_magizoologie.png';
import PredmetyNav from './PredmetyNav';


const Hlavni = () => (
  <div>
    <PredmetyNav />

    <div className="main-header"><h1>Hlavní oborové předměty</h1></div>
  
    <p><span className='text-highlighter'>Specifikace:</span> Zpravidla trvají po celou dobu studia<br />
    <span className='text-highlighter'>Každoroční zakončení:</span> Každý rok se skládají zkoušky promítající praktické i teoretické znalosti.<br />
    <span className='text-highlighter'>Specializace:</span> Jeden z těchto předmětů si student musí zvolit jako svou specializaci. Zpravidla na to má čas do čtvrtého ročníku. Od pátého ročníku si pak vybírá téma, které chce po zbývající roky zkoumat, a na konci studia odevzdává <span className='text-highlighter'>esej</span>, kterou si následně musí obhájit.</p>


    <h3>Lékouzelnictví</h3>
    <img src={lekouzelnictvi} className='img-in-text img-in-text-right' />
    
    <p><span className='text-highlighter'>Během turnaje vyučovala:</span> Carmilla Iris José<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět opět jednoduše shrnutelný pomocí jeho názvu. Studentům je po dobu sedmi let poskytován <span className='text-highlighter'>komplexní průřez lékouzelnickými postupy</span> a dovednostmi nejen platnými v rámci Evropy a Severní Ameriky, ale hlavně speciálními postupy a znalostmi čerpajícími ze <span className='text-highlighter'>starých amazonských učení</span> a prastarých svitků, které jsou poskytovány výhradně studentům Castelobruxa.</p>


    <h3>Magie běžného užití</h3>
    <img src={magie_bezneho_uziti} className='img-in-text img-in-text-right' />

    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Caetano Murhala<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Tento sedmiletý kurz poskytuje studentům komplexní praktické znalosti <span className='text-highlighter'>kouzelných formulí a přeměňování</span>, od běžných kouzel až po složitější efekty. Studenti se učí precizně ovládat magickou energii, řetězit zaklínadla, <span className='text-highlighter'>kombinovat kouzla</span> a optimalizovat jejich účinnost při osobním i týmovém použití. Výuka se soustředí především na praktické dovednosti, s důrazem na přesnost, bezpečnost a kreativní aplikaci kouzel.</p>

    <h3>Magie obrany a útoku</h3>
    <img src={magie_obrany_a_utoku} className='img-in-text img-in-text-right' />

    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Demetrio Agamez<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Během sedmi let se studenti a studentky naučí komplexní strategie obrany i útoku, osvojí si, jaké kouzlo je kdy nejvýhodnější seslat a na co si při sesílání dávat největší pozor. Součástí výuky je také plánování bojových situací, <span className='text-highlighter'>využití prostředí</span> a <span className='text-highlighter'>magických artefaktů</span> v praxi. Studenti trénují scénáře, ve kterých kombinují ochranná i útočná kouzla, učí se reagovat na nečekané situace a analyzují historické souboje a bitvy kouzelníků, aby rozvinuli <span className='text-highlighter'>strategické myšlení</span>. O komplexním seznamu kleteb a zaklínadel ani nemluvě.</p>


    <h3>Obecná magibotanika</h3>
    <img src={obecna_magibotanika} className='img-in-text img-in-text-right' />

    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Jared Ilai Moreno<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět poskytuje studentům ucelený přehled o magické flóře, včetně <span className='text-highlighter'>anatomie a morfologie</span> rostlin. Studenti se učí systematiku a klasifikaci druhů, <span className='text-highlighter'>magické vlastnosti</span> jednotlivých rostlin a jejich historické či kulturní využití. Důraz je kladen na <span className='text-highlighter'>poznávací techniky</span> a schopnost rozlišovat mudlovské a kouzelnické druhy.</p>


    <h3>Obecná magizoologie</h3>
    <img src={obecna_magizoologie} className='img-in-text img-in-text-right' />

    <p><span className='text-highlighter'>Během turnaje vyučoval:</span> Caetano Murhala<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět poskytuje studentům ucelený přehled o takových druzích kouzelných tvorů, na které mohou běžně narazit. Studenti se seznamují s jejich <span className='text-highlighter'>anatomií, morfologií a základními magickými vlastnostmi</span>. Důraz je kladen na schopnost <span className='text-highlighter'>rozpoznat</span> jednotlivé druhy, porozumět jejich základním charakteristikám a odlišit běžné od magických tvorů, přičemž ekologie, praktické manipulace a pokročilé znalosti chování jsou vyhrazeny pro kurz chov a ochrana magických tvorů.</p>







  </div>
)

export default Hlavni