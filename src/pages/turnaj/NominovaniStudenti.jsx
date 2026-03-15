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
import Archeologie from "../../img/turnaj/seminare/archeologie.png";
import Artefakty from "../../img/turnaj/seminare/artefakty.png";
import Komunikace from "../../img/turnaj/seminare/komunikace.png";
import Kanoe from "../../img/turnaj/seminare/kanoe.png";
import Ritualka from "../../img/turnaj/seminare/ritualni_magie.png";
import Zveromagie from "../../img/turnaj/seminare/zveromagie.png";

const NominovaniStudenti = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Účastníci</h1></div>

    <p>Studenti Castelobruxa nominovaní pro reprezentaci školy na turnaji a jejich profesorský dozor.</p>

    <h2>Pátý ročník</h2>
    <hr/>
    <div className='face-cards-wrapper'>
      <div className='clickable-face-card'>
        <Link to="/alejandro-sanchez" target='_blank'>
          <img src={AlejandroS} className='img-character'/>
          <p><span className='text-highlighter'>Alejandro Sánchez</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/catriel-ulises-condori" target='_blank'>
          <img src={Catriel} className='img-character'/>
          <p><span className='text-highlighter'>Catriel Ulises Condori</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/kira-soraia-rodrigues" target='_blank'>
          <img src={Kira} className='img-character'/>
          <p><span className='text-highlighter'>Kira Soraia Rodrigues</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/lucia-juliana-navarro" target='_blank'>
          <img src={Lucia} className='img-character'/>
          <p><span className='text-highlighter'>Lucia Juliana Navarro</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/melissa-nayra-de-leon" target='_blank'>
          <img src={Melissa} className='img-character'/>
          <p><span className='text-highlighter'>Melissa Nayra de León</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/sofia-sanchez" target='_blank'>
          <img src={SofiaS} className='img-character'/>
          <p><span className='text-highlighter'>Sofía Sánchez</span></p>
        </Link>
      </div>
    </div>

    <h2>Šestý ročník</h2>
    <hr/>
    <div className='face-cards-wrapper'>
      <div className='clickable-face-card'>
        <Link to="/cesar-jesus-gimenez-castillero" target='_blank'>
          <img src={Cesar} className='img-character'/>
          <p><span className='text-highlighter'>César Jesus Giménez Castillero</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/ines-soraya-caro" target='_blank'>
          <img src={Ines} className='img-character'/>
          <p><span className='text-highlighter'>Inés Soraya Caro</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/juan-miguel-santos-ramirez" target='_blank'>
          <img src={Juan} className='img-character'/>
          <p><span className='text-highlighter'>Juan Miguel Santos Ramírez</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/luan-caetanno" target='_blank'>
          <img src={Luan} className='img-character'/>
          <p><span className='text-highlighter'>Luan Caetanno</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/mateo-benitez" target='_blank'>
          <img src={Mateo} className='img-character'/>
          <p><span className='text-highlighter'>Mateo Benítez</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/mikel-ancco-de-leon" target='_blank'>
          <img src={Mikkel} className='img-character'/>
          <p><span className='text-highlighter'>Mikel Ancco de León</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/sofia-amarilis-perez" target='_blank'>
          <img src={SofiaP} className='img-character'/>
          <p><span className='text-highlighter'>Sofia Amarilis Perez</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/yara-quetzal-do-sol" target='_blank'>
          <img src={YaraS} className='img-character'/>
          <p><span className='text-highlighter'>Yara Quetzal do Sol</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/yara-monteiro" target='_blank'>
          <img src={YaraM} className='img-character'/>
          <p><span className='text-highlighter'>Yara Monteiro</span></p>
        </Link>
      </div>
    </div>

    <h2>Sedmý ročník</h2>
    <hr/>
    <div className='face-cards-wrapper'>
      <div className='clickable-face-card'>
        <Link to="/alejandro-navarro" target='_blank'>
          <img src={AlejandroN} className='img-character'/>
          <p><span className='text-highlighter'>Alejandro Navarro</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/chiara-antonia-jose" target='_blank'>
          <img src={Chiara} className='img-character'/>
          <p><span className='text-highlighter'>Chiara Antonia José</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/gabriel-sebastian-almeida-soares" target='_blank'>
          <img src={Gabriel} className='img-character'/>
          <p><span className='text-highlighter'>Gabriel Sebastian Almeida Soares</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/luana-mariana-almeida-soares" target='_blank'>
          <img src={Luana} className='img-character'/>
          <p><span className='text-highlighter'>Luana Mariana Almeida Soares</span></p>
        </Link>
      </div>
    </div>

    <h2>Profesorský dozor</h2>
    <hr/>

    <div className='face-cards-wrapper'>
      <div className='clickable-face-card'>
        <Link to="/caetano-murhala" target='_blank'>
          <img src={Murhala} className='img-character'/>
          <p><span className='text-highlighter'>Caetano Murhala</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/carmilla-iris-jose" target='_blank'>
          <img src={Carmila} className='img-character'/>
          <p><span className='text-highlighter'>Carmila Iris José</span></p>
        </Link>
      </div>
      <div className='student-face-card'>
        <img src={Demetrio} className='img-character'/>
        <p><span className='text-highlighter'>Demetrio Agamez</span></p>
      </div>
      <div className='student-face-card'>
        <img src={Ernesto} className='img-character'/>
        <p><span className='text-highlighter'>Ernesto Azevedo</span></p>
      </div>
      <div className='seminar-face-card'>
        <Link to="/jared-ilai-moreno" target='_blank'>
        <img src={Jared} className='img-character'/>
        <p><span className='text-highlighter'>Jared Ilai Moreno</span></p>
        </Link>
      </div>
      <div className='clickable-face-card'>
        <Link to="/tristan-yeray-moreno" target='_blank'>
          <img src={Tristan} className='img-character'/>
          <p><span className='text-highlighter'>Tristán Yeray Moreno</span></p>
        </Link>
      </div>


    </div>


  </div>
)

export default NominovaniStudenti