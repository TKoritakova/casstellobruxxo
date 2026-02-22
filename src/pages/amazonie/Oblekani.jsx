import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import domorodci_01 from '../../img/kultura/obleceni/domorodci_01.png';
import domorodci_02 from '../../img/kultura/obleceni/domorodci_02.png';
import peru_01 from '../../img/kultura/obleceni/peru_01.png';
import peru_02 from '../../img/kultura/obleceni/peru_02.png';


const Oblekani = () => (
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

    <div className="main-header"><h1>Styl oblékání</h1></div>

    <p>Oblékání v Latinské Americe je taktéž velmi rozmanité. Ve velkých městech se lidé oblékají podobně jako jinde ve světě – převládá <span className='text-highlighter'>moderní</span>, pohodlná a funkční móda, která reflektuje i tropické klima. V brazilských a karibských městech se nosí lehké <span className='text-highlighter'>bavlněné košile, barevné šaty a sandály</span>, zatímco v chladnějších oblastech And se více využívá vlna, tradičně z alpaky či lamy, a typické jsou <span className='text-highlighter'>pestrobarevné svetry, ponča a pletené čepice chullo</span>. Městské prostředí si tak bere to nejlepší z globálního stylu, ale doplňuje ho o regionální prvky – jasné barvy, výrazné vzory a přírodní materiály.</p>

    <img src={peru_01} className='img-in-text' />
    <img src={peru_02} className='img-in-text' />

    <p><span className='text-highlighter'>Tradiční oblékání</span> původních kmenů a venkovských komunit je dnes spíše na ústupu a využívá se při slavnostech. V Amazonii bývají tyto oděvy často jednoduché, přizpůsobené vlhkému a horkému prostředí. Místní kmeny používají <span className='text-highlighter'>lehké látky tkané z přírodních vláken</span>, <span className='text-highlighter'>suknice</span> z rostlinných vláken a k tomu <span className='text-highlighter'>ozdoby z peří a korálků</span>. Důležitou roli zde hrají také <span className='text-highlighter'>tělesné kresby</span> – červené, černé nebo bílé barvy připravované z rostlin a minerálů se nanášejí na kůži a nesou nejen estetickou, ale i rituální hodnotu. Tyto malby vyjadřují <span className='text-highlighter'>příslušnost</span> ke skupině, <span className='text-highlighter'>osobní sílu</span> nebo <span className='text-highlighter'>ochranu před zlými duchy</span>.</p>

    <img src={domorodci_01} className='img-in-text' />
    <img src={domorodci_02} className='img-in-text' />

    <p>V horských oblastech <span className='text-highlighter'>And</span> se tradiční kroj liší podle regionu, vždy je však barevný a výrazný. Ženy nosí <span className='text-highlighter'>sukně polleras, zdobené šály a klobouky</span>, muži <span className='text-highlighter'>ponča a vlněné čepice</span>. Tyto oděvy nejsou pouze praktické – chrání proti chladu – ale zároveň jsou nositeli identity a kulturní hrdosti. V některých oblastech se i zde využívají <span className='text-highlighter'>kresby na tělo</span>, zejména při slavnostech a obřadech, kdy jsou kombinovány s <span className='text-highlighter'>maskami a tkanými ozdobami</span>.</p>


    


  </div>
)

export default Oblekani