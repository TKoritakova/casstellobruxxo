import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Tribes = () => (
  <div>
    
    <nav className="second-nav">
        <Link to="/casstellobruxxo/arashar">Arashar</Link>
        <Link to="/casstellobruxxo/kuaraori">Kuaraori</Link>
        <Link to="/casstellobruxxo/nomphyrian">Nomphyrian</Link>
        <Link to="/casstellobruxxo/pawanunga">Pawanunga</Link>
    </nav>

    <div className="main-header"><h1>Kmeny</h1></div>

    
    <p>Místo tradičních kolejí jsou v Castelobruxu zavedeny čtyři kmeny, do kterých jsou studenti rozřazeni pomocí <span className='text-highlighter'>stromu Umamiri</span>. Na začátku svého studia okusí jeho <span className='text-highlighter'>plody</span> a <span className='text-highlighter'>chuť</span>, kterou na jazyku ucítí, určí, do kterého kmene bude daný student patřit.

        <ul>
            <li>Sladká chuť → <span className='text-highlighter'>Arashar </span></li>
            <li>Slaná chuť → <span className='text-highlighter'>Pawanunga </span></li>
            <li>Hořká chuť → <span className='text-highlighter'>Kuaraori</span></li>
            <li>Kyselá chuť → <span className='text-highlighter'>Nomphyrian</span></li>
        </ul>

    </p>


    <h2>Kmenové vedení</h2>
    <hr />
    
    <p>V Castelobruxu zastávají funkci ekvivalentní k bradavickým prefektům takzvaní <span className='text-highlighter'>„monitoři”</span>. Nejsou to přísní dohlížitelé, ale spíše starší sourozenci, kteří pomáhají mladším. Vedou je do džungle, učí základní bezpečnosti a ukazují hranice školy. Funkci vykonávají studenti <span className='text-highlighter'>od pátého do sedmého ročníku</span>, přičemž o jejich <span className='text-highlighter'>výběru rozhodují učitelé společně s Caiporami</span>, spirituálními bytostmi, které dokáží vycítit, zda má dotyčný dostatek respektu k pralesu. Monitoři tak mají značnou důvěru, ale pokud by je Caipora přistihla při porušení pravidel, následky by nesla celá škola. Jejich vztah k ostatním studentům je přátelský, spíše na bázi předávání zkušeností než autoritativního vedení.</p>

    <p>Profesorští vedoucí jednotlivých kmenů, zvaní <span className='text-highlighter'>„curandero“</span>, jsou spíše mentoři než správci. Vycházejí z role tradičních léčitelů a duchovních. Jejich hlavním posláním je <span className='text-highlighter'>udržovat ducha kmene</span>, střežit jeho tradice a vést studenty nejen při studiu, ale také v <span className='text-highlighter'>osobním rozvoji</span>. Dbají na to, aby studenti neztráceli spojení s prostředím a vždy udržovali rovnováhu s přírodou.</p>



  </div>
)

export default Tribes