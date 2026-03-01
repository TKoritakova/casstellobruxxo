import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

import Luan from '../../img/postavy/luan_caetanno.png';
import Catriel from '../../img/postavy/catriel_ulises_condori.png';
import Luana from '../../img/postavy/luana_mariana_almeida_soares.jpg';
import Ines from '../../img/postavy/ines_soraya_caro.jpg';
import SofiaP from '../../img/postavy/sofia_amarilis_perez.png';
import Mikkel from '../../img/postavy/mikel_ancco_de_leon.png';
import AlejandroS from '../../img/postavy/alejandro_sanchez.png';
import Kira from '../../img/postavy/kira_soraia_rogrigues.png';
import Melissa from '../../img/postavy/melissa_nayra_de_leon.png';
import Cesar from '../../img/postavy/cesar_jesus_gimenez_castillero.png';
import Juan from '../../img/postavy/juan_miguel_santos_ramirez.jpg';
import Mateo from '../../img/postavy/mateo_benitez.png';
import YaraM from '../../img/postavy/yara_monteiro.png';
import Chiara from '../../img/postavy/chiara_antonia_jose.jpg';
import AlejandroN from '../../img/postavy/alejandro_navarro.png';
import Lucia from '../../img/postavy/lucia_juliana_navarro.png';
import SofiaS from '../../img/postavy/sofia_sanchez.png';
import YaraS from '../../img/postavy/yara_quetzal_do_sol.png';
import Gabriel from '../../img/postavy/gabriel_sebastian_almeida_soares.jpg';

import Ernesto from '../../img/postavy/ernesto_azevado.png';
import Murhala from '../../img/postavy/caetano_murhala_02.png';
import Carmila from '../../img/postavy/carmila_iris_jose.png';
import Demetrio from '../../img/postavy/demetrio_agamez.png';
import Jared from '../../img/postavy/jared_ilai_moreno.png';
import Tristan from '../../img/postavy/tristan_yeray_moreno.png';

const NominovaniStudenti = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Účastníci</h1></div>

    <p>Studenti Castelobruxa nominovaní pro reprezentaci školy na turnaji a jejich profesorský dozor.</p>

    <h2>Pátý ročník</h2>
    <hr/>
    <div className='face-cards-wrapper'>


      <div className='student-face-card'>
        <img src={AlejandroS} className='img-character'/>
        <p>Alejandro Sánchez</p>
      </div>
      <div className='student-face-card'>
        <img src={Catriel} className='img-character'/>
        <p>Catriel Ulises Condori</p>
      </div>
      <div className='student-face-card'>
        <img src={Kira} className='img-character'/>
        <p>Kira Soraia Rodrigues</p>
      </div>

      <div className='student-face-card'>
        <img src={Lucia} className='img-character'/>
        <p>Lucia Juliana Navarro</p>
      </div>
      <div className='student-face-card'>
        <img src={Melissa} className='img-character'/>
        <p>Melissa Nayra de León</p>
      </div>


      <div className='student-face-card'>
        <img src={SofiaS} className='img-character'/>
        <p>Sofía Sánchez</p>
      </div>

    </div>


    <h2>Šestý ročník</h2>
    <hr/>
    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={Cesar} className='img-character'/>
        <p>César Jesus Giménez Castillero</p>
      </div>

      <div className='student-face-card'>
        <img src={Ines} className='img-character'/>
        <p>Inés Soraya Caro</p>
      </div>

      <div className='student-face-card'>
        <img src={Juan} className='img-character'/>
        <p>Juan Miguel Santos Ramírez</p>
      </div>

      <div className='student-face-card'>
        <img src={Luan} className='img-character'/>
        <p>Luan Caetanno</p>
      </div>

      <div className='student-face-card'>
        <img src={Mateo} className='img-character'/>
        <p>Mateo Benítez</p>
      </div>

      <div className='student-face-card'>
        <img src={Mikkel} className='img-character'/>
        <p>Mikel Ancco de León</p>
      </div>
      <div className='student-face-card'>
        <img src={SofiaP} className='img-character'/>
        <p>Sofia Amarilis Perez</p>
      </div>
      <div className='student-face-card'>
        <img src={YaraS} className='img-character'/>
        <p>Yara Quetzal do Sol</p>
      </div>

      <div className='student-face-card'>
        <img src={YaraM} className='img-character'/>
        <p>Yara Monteiro</p>
      </div>

    </div>


    <h2>Sedmý ročník</h2>
    <hr/>

    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={AlejandroN} className='img-character'/>
        <p>Alejandro Navarro</p>
      </div>

      <div className='student-face-card'>
        <img src={Chiara} className='img-character'/>
        <p>Chiara Antonia José</p>
      </div>

      <div className='student-face-card'>
        <img src={Gabriel} className='img-character'/>
        <p>Gabriel Sebastian Almeida Soares</p>
      </div>
      <div className='student-face-card'>
        <img src={Luana} className='img-character'/>
        <p>Luana Mariana Almeida Soares</p>
      </div>

    </div>


    <h2>Profesorský dozor</h2>
    <hr/>

    <div className='face-cards-wrapper'>
      <div className='student-face-card'>
        <img src={Murhala} className='img-character'/>
        <p>Caetano Murhala</p>
      </div>
      <div className='student-face-card'>
        <img src={Carmila} className='img-character'/>
        <p>Carmila Iris José</p>
      </div>
      <div className='student-face-card'>
        <img src={Demetrio} className='img-character'/>
        <p>Demetrio Agamez</p>
      </div>
      <div className='student-face-card'>
        <img src={Ernesto} className='img-character'/>
        <p>Ernesto Azevedo</p>
      </div>
      <div className='student-face-card'>
        <img src={Jared} className='img-character'/>
        <p>Jared Ilai Moreno</p>
      </div>
      <div className='student-face-card'>
        <img src={Tristan} className='img-character'/>
        <p>Tristán Yeray Moreno</p>
      </div>


    </div>


  </div>
)

export default NominovaniStudenti