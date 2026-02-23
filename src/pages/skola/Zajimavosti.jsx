import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SkolaNav from './SkolaNav'




const Zajimavosti = () => (
  <div>
    
    <SkolaNav />
    

    <div className="main-header"><h1>Zajímavosti</h1></div>

  
  <ul>
    <li><span className='text-highlighter'>Každý student čtvrtého ročníku absolvuje týdenní zkoušku přežití:</span> bez hůlky, bez kouzelného předmětu, s úkolem najít určitou rostlinu nebo zvíře a vrátit se živý. Je to považováno za zkoušku dospělosti. Ještě se nestalo, že by zkouška nebyla splněna.</li>
    <li>Jednou za dvanáct měsíců se koná <span className='text-highlighter'>rituál „Zhasnutí měsíce“,</span> během něhož studenti pomocí starodávných kouzel "zakryjí" měsíc obřadním kouřem z posvátných bylin. Jde o symbolické přerušení času a cyklů, které studentům umožňuje spirituálně „začít znovu“.</li>
    <li>K tajemstvím školních pozemků patří také <span className='text-highlighter'>strom Xitapê</span>, který dokáže zprostředkovat zprávy na dálku. Když člověk položí ruku na jeho kmen a myslí na určitou osobu, strom vyryje vzkaz do svého listu. Ten se pak odlomí a dorazí až k adresátovi, ať se nachází kdekoli. Tento způsob komunikace byl obzvlášť ceněný během období izolace školy.</li>
    <li><span className='text-highlighter'>Velká část všech spořádaných plodin je pěstována na škole</span>. Studenti se podílejí a škola je tak do jisté míry soběstačnou jednotkou. Maso a jiné suroviny pak buď nakupují, anebo mění s okolními kmeny, které peníze neznají a neužívají.</li>
  </ul>
  



   


  </div>
)

export default Zajimavosti