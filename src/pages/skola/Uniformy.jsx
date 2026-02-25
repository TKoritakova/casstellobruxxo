import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SkolaNav from './SkolaNav'

import arashar from '../../img/zivot_na_skole/uniformy/arashar.png';
import kazdodenni from '../../img/zivot_na_skole/uniformy/kazdodenni.png';
import kuaraori from '../../img/zivot_na_skole/uniformy/kuaraori.png';
import nomphyrian from '../../img/zivot_na_skole/uniformy/nomphyrian.png';
import pawanunga from '../../img/zivot_na_skole/uniformy/pawanunga.png';
import plast from '../../img/zivot_na_skole/uniformy/plast.png';
import taska from '../../img/zivot_na_skole/uniformy/taska.png';


import uniforma from '../../img/uvod/uniforma.png';


const Uniformy = () => (
  <div>

    <SkolaNav/>


    <div className="main-header"><h1>Školní uniformy</h1></div>

    <br/>


    <img src={uniforma} className='img-in-text img-in-text-left'/>


    <p>Uniformy na Castelobruxu jsou lazené do tmavě zelené a zlaté barvy. Tato kombinace připomíná sounáležitost s
      přírodou, ve které je jejich nositel také velmi dobře maskován. Jsou dokonce <span className='text-highlighter'>uzpůsobeny velmi vysokým i velmi nízkým teplotám</span>,
      takže se dají použít v parném dni stejně dobře jako v chladné noci.</p>


    <br/>
    <br/>


    <hr/>

    <img src={plast} className='img-clothes-2 img-in-text-right'/>

    <p>Velmi důležitou a výraznou součástí uniformy jsou <span
      className='text-highlighter'>nepromokavé zelené pláště</span> z lehkého materiálu, které ukazují na spojení školy
      s přírodou a džunglí, v níž se nachází. Zdobené jsou zlatým lemováním a tradičními symboly. U dolního lemu je
      možné vidět kené, tradiční umění složené z geometrických tvarů, které vyjadřují spiritualitu. Nad kené je odkaz na
      amazonské artefakty, kterým se říká muiraquitãs. Tyto artefakty měly velmi často podobu žáby vyřezané do dřeva
      nebo kamene a sloužily na ochranu.</p>

    <p>Pod pláštěm studenti nosí <span className='text-highlighter'>každodenní oblečení</span> složené ze zeleného
      vršku, který symbolizuje listí, a hnědých kalhot, které vzhledem připomínají kůru. Kalhoty jsou součástí i dívčí
      verze uniformy z důvodu praktičnosti pro snazší pohyb po lese. Oblečení je volné, pohodlné a snadné k oblékání.
    </p>

    <img src={kazdodenni} className='img-clothes-2 img-in-text-left'/>

    <p>Důležitou součástí každodenního oděvu je <span className='text-highlighter'>pásek, na který je možné přivazovat menší taštičky a váčky</span>,
      ve kterých je možné nosit vše, co bude student během dne potřebovat – od přísad do lektvarů a potřeb pro rituály,
      až po krmení pro nejrůznější tvory.</p>

    <p>Pro <span className='text-highlighter'>slavnosti</span> a další zvláštní příležitosti mají studenti druhou verzi
      oblečení pod plášť. Ta se skládá z bělavého vršku, který je navíc dozdobený dalšími geometrickými vzory. Dívčí
      verze uniformy obsahuje v tomto případě sukni, protože zde již není praktičnost prioritou. Spodní části obou verzí
      jsou v zelené barvě se zlatým dolním lemem. Ani tentokrát uniformám nechybí pásek, který je v tomto případě určen
      na uchycení tradičních barevných ozdob, kterými jsou šátky, peříčka, třásničky a korále.</p>

    <p><span className='text-highlighter'>Barvy ozdob jsou určeny kmenovou příslušností.</span> Arashar (sladcí) mají
      růžové a zelené ozdoby, Pawanunga (slaní) hnědé a červené, Kuaraori (hořcí) žluté a oranžové a Nomphyrian (kyselí)
      fialové a tyrkysové.</p>

    <img src={arashar} className='img-clothes-2'/>
    <img src={kuaraori} className='img-clothes-2'/>
    <img src={nomphyrian} className='img-clothes-2'/>
    <img src={pawanunga} className='img-clothes-2'/>

    <p>Ke každodenní uniformě patří i středně velká zelená <span className='text-highlighter'>taška</span>, kterou je
      možné pohodlně připevnit k pásku. I ta obsahuje kmenové barvy v ozdobných stužkách.</p>


    <img src={taska} className='img-clothes'/>


  </div>
)

export default Uniformy