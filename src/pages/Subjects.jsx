import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Subjects = () => (
  <div>
    
    <div className="main-header"><h1>Výuka na Castelobruxu</h1></div>

    <p>Učební plány školy jsou rozděleny do čtyř hlavních bloků: hlavní oborové, vedlejší oborové, vedlejší volitelné předměty a povinný terénní výcvik. Toto členění studentům poskytuje vyvážené rozložení studia a zároveň je podrobuje náročnému procesu, jehož cílem je co nejkomplexnější připravenost na život v kouzelnické komunitě.</p>

    <p><span className='text-highlighter'>Stupnice známkování:</span>
    <ul>
      <li>Dechberoucí</li>
      <li>Uspokojivé</li>
      <li>Průměrné</li>
      <li>Podprůměrné</li>
      <li>Příšerné</li>
      <li>Katastrofické</li>
    </ul>
    
    </p>

    <p>V případě, že student na konci roku získá z hlavních oborových předmětů známku Příšerná a Katastrofická, musí daný předmět opravit. V případě, že se mu to nepodaří, není jiné možnosti než ho vyloučit. Hlavní oborové předměty jsou povinné a trvají sedm let.</p>

    <p>U vedlejších oborových a vedlejších volitelných předmětů je možnost opravit předmět a v případě neúspěšné opravy jej i opakovat.</p>

   
    <h2>Hlavní oborové předměty</h2>
    <hr />
    
  
    <p><span className='text-highlighter'>Specifikace:</span> Zpravidla trvají po celou dobu studia<br />
    <span className='text-highlighter'>Každoroční zakončení:</span> Každý rok se skládají zkoušky promítající praktické i teoretické znalosti.<br />
    <span className='text-highlighter'>Specializace:</span> Jeden z těchto předmětů si student musí zvolit jako svou specializaci. Zpravidla na to má čas do čtvrtého ročníku. Od pátého ročníku si pak vybírá téma, které chce po zbývající roky zkoumat, a na konci studia odevzdává <span className='text-highlighter'>esej</span>, kterou si následně musí obhájit.</p>


    <h3>Lékouzelnictví</h3>
    <img src="https://i.postimg.cc/15LJ48Zd/L-kouzelnictv.png" className='img-in-text img-in-text-right' />
    
    
    <p><span className='text-highlighter'>Během turnaje vyučuje:</span> Carmilla Iris José<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Předmět opět jednoduše shrnutelný pomocí jeho názvu. Studentům je po dobu sedmi let poskytován <span className='text-highlighter'>komplexní průřez lékouzelnickými postupy</span> a dovednostmi nejen platnými v rámci Evropy a Severní Ameriky, ale hlavně speciálními postupy a znalostmi čerpajícími ze <span className='text-highlighter'>starých amazonských učení</span> a prastarých svitků, které jsou poskytovány výhradně studentům Castelobruxa.</p>


   




  </div>
)

export default Subjects