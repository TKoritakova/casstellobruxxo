import React from 'react'

import logo from '../img/uvod/logo.png';
import skola from '../img/uvod/skola.png';
import mapa from '../img/uvod/mapa.png';
import uniforma from '../img/uvod/uniforma.png';
import priroda from '../img/uvod/priroda.png';
import predkove from '../img/uvod/predkove.png';
import respekt from '../img/uvod/respekt.png';
import kouzla_castelo from '../img/uvod/kouzla_castelo.png';
import kouzla_evropa from '../img/uvod/kouzla_evropa.png';

const Home = () => (
  <div>
    
    <div className="main-header"><h1>Castelobruxo</h1></div>

    <p>Castelobruxo je kouzelnická škola nacházející se <span className='text-highlighter'>v Brazílii hluboko v Amazonském pralese</span>. Vzhledem ke své lokaci — daleko od civilizace, v okolí neprostupná džungle — má škola i vlastní přístup k výuce nebo magii celkově. Mimo to se od Bradavic liší i vzhledem, historií nebo mnoha zajímavostmi.</p>
    
   <img src={logo} className='img-50' />


   <h2>Umístění a vzhled</h2>
   <hr />

   <p>Škola se nachází přibližně ve středu jihoamerického kontinentu, hluboko v Amazonském pralese.  Všude v okolí jsou plně vzrostlé stromy deštného pralesa, hustý porost a velmi bohatá fauna i flóra. Samotná škola — ostatně stejně jako Bradavice — je pro obyčejného mudlu nenalezitelná, protože na místě, kde se nachází, vidí jenom <span className='text-highlighter'>staré ruiny</span>. Kouzelníci ale mohou vidět <span className='text-highlighter'>zlatý hrad</span>, který je architekturou v souladu s přírodou, dokonce je i zapuštěný v okolní džungli. Svým vzhledem také může připomenout <span className='text-highlighter'>mayskou nebo inckou architekturu</span>.</p>


   <img src={skola} className='img-30 img-margin-right-20' />
   <img src={mapa}  className='img-30 img-margin-left-20'  />

    <h2>Uniformy a příroda</h2>
    <hr />
    
    <p>Od Bradavic se škola neliší ani tím, že zde je také zaveden systém školních uniforem. Ty jsou zde lazené do tmavě zelené a zlaté barvy. Tato kombinace připomíná sounáležitost s přírodou, ve které je jejich nositel také velmi dobře maskován. Jsou dokonce <span className='text-highlighter'>uzpůsobeny velmi vysokým i velmi nízkým teplotám</span>, takže se dá použít v parném dni stejně dobře jako v chladné noci. Samotný přístup k přírodě je pro tamější studenty taktéž velmi důležitý. Pro lidi je velmi přirozená její ochrana, sounáležitost s ní nebo i <span className='text-highlighter'>maximální využití přírodních zdrojů bez zbytečného plýtvání</span> nebo ničení.</p>


    <img src={uniforma} className='img-30 img-margin-right-20' />
    <img src={priroda} className='img-30 img-margin-left-20' />

    <h2>Odlišná kultura</h2>
    <hr />
    
    <p>Vzhledem k tomu, že tamní lidé vyrůstali nebo vyrůstají v odlišných podmínkách, mají také úplně jiný přístup ke světu. Oproti Evropanům bývají často více zaměření na <span className='text-highlighter'>kolektiv</span>, více řeší <span className='text-highlighter'>úctu ke starším a k mrtvým</span> — s čímž se pojí i šamanství a uctívání duchů, jsou <span className='text-highlighter'>otevřenější a přímější v komunikaci</span> nebo mají přirozenější vztah k nebezpečí, se kterým se setkávají v přírodě na denní bázi. Většinu strachu tak mají nahrazenou <span className='text-highlighter'>přirozeným respektem a intuicí</span> a znalostí, jak v situacích reagovat.</p>


    <img src={predkove} className='img-30 img-margin-right-20' />
    <img src={respekt} className='img-30 img-margin-left-20' />


    <h2>Přístup k magii</h2>
    <hr />

    <p>S tím souvisí i samotné vnímání magie. V Castelobruxu se neučí kouzla stoprocentně striktně (přesné zaklínadlo, přesná inkantace), ale více otevřeně. Při kouzlení dávají větší důraz na <span className='text-highlighter'>myšlenky, vůli, moralitu</span> daného kouzla a samotné <span className='text-highlighter'>souznění s přírodou</span>. Většina kouzel tak využívá prvky okolní přírody a pracuje s ní. Samozřejmě se zde v poslední době hojně rozšířila i kouzla, která jsou běžně známá a používána v Evropě.</p>

    <img src={kouzla_castelo} className='img-30 img-margin-right-20' />
    <img src={kouzla_evropa} className='img-30 img-margin-left-20' />

    




  </div>
)

export default Home