import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import vycvik from '../../img/predmety/uvod/povinny_terenni_vycvik.png';


const Vycvik = () => (
  <div>
    <nav className="second-nav">
        <Link to="/casstellobruxxo/hlavni">Hlavní oborové předměty</Link>
        <Link to="/casstellobruxxo/vedlejsi">Vedlejší oborové předměty</Link>
        <Link to="/casstellobruxxo/volitelne">Volitelné předměty</Link>
        <Link to="/casstellobruxxo/vycvik">Terénní výcvik</Link>
    </nav>
    
  
    <div className="main-header"><h1>Povinný terénní výcvik</h1></div>

    
    <p><span className='text-highlighter'>Specifikace:</span> Tento předmět vzhledem ke svému specifickému průběhu tvoří samostatnou kategorii. Jak vyplývá z názvu, je povinný pro všechny, <span className='text-highlighter'>v případě zdravotní nezpůsobilosti je možné udělat výjimku</span>. Probíhá po celou dobu studia.<br />
    <span className='text-highlighter'>Zakončení:</span> V závěru sedmého ročníku studenti absolvují <span className='text-highlighter'>týdenní výpravu do neznámé části pralesa</span>. Musí se zorientovat podle správné mapy, plnit cestou úkoly a zároveň si zajistit nocleh, obživu i vzájemnou ochranu. Úspěšné zvládnutí expedice slouží jako završení celého kurzu.</p>

    <img src={vycvik} className='img-in-text img-in-text-right' />
    
    <p><span className='text-highlighter'>Během turnaje vyučuje:</span> Demetrio Agamez<br />
    <span className='text-highlighter'>Délka:</span> Nepravidelná výuka<br />
    <span className='text-highlighter'>Náplň předmětu:</span> Alespoň desetkrát do roka se konají intenzivní terénní výpravy, které kombinují <span className='text-highlighter'>fyzickou zdatnost, orientační schopnosti a týmovou spolupráci</span>. Studenti nosí těžké batohy, absolvují parkourové úseky v lese, orientační běhy, lanová centra a stromolezení. Cílem je připravit je na náročné praktické situace, posílit vytrvalost, obratnost a schopnost rychle reagovat v neznámém prostředí. Kurz podporuje také vzájemnou důvěru mezi studenty a učí <span className='text-highlighter'>strategickému plánování při náročných aktivitách</span>.</p>

        





  </div>
)

export default Vycvik