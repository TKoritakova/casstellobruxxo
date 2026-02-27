import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

import Artefakty from '../../img/turnaj/seminare/artefakty.png';
import Archeologie from '../../img/turnaj/seminare/archeologie.png';
import Komunikace from '../../img/turnaj/seminare/komunikace.png';
import Ritualka from '../../img/turnaj/seminare/ritualni_magie.png';
import Zveromagie from '../../img/turnaj/seminare/zveromagie.png';

const Seminare = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Semináře</h1></div>
    <p>V průběhu turnaje v Bradavicích <span className='text-highlighter'>castelobrušští profesoři</span> obohatili studenty ostatních škol o <span className='text-highlighter'>vědomosti, dovednosti a znalosti</span> jim vlastní. Studenti tedy mohly navštívit tyto <span className='text-highlighter'>semináře</span>:</p>

      <h3>Seznam seminářů</h3>

    <div className='face-cards-wrapper'>
        <div className='seminar-face-card'>
            <Link to="/artefakty" target='_blank'><img src={Artefakty} className='img-character' />
                <p><span className='text-highlighter'>Artefakty</span></p></Link>
        </div>
        <div className='seminar-face-card'>
            <Link to="/archeologie" target='_blank'><img src={Archeologie} className='img-character' />
            <p><span className='text-highlighter'>Archeologie</span></p></Link>
        </div>
        <div className='seminar-face-card'>
            <Link to="/ritualni-magie" target='_blank'><img src={Ritualka} className='img-character' />
            <p><span className='text-highlighter'>Rituální magie</span></p></Link>
        </div>

        <div className='seminar-face-card'>
            <Link to="/komunikace" target='_blank'><img src={Komunikace} className='img-character' />
            <p><span className='text-highlighter'>Komunikace s tvory</span></p></Link>
        </div>
        <div className='seminar-face-card'>
            <Link to="/zveromagie" target='_blank'><img src={Zveromagie} className='img-character' />
            <p><span className='text-highlighter'>Zvěromagie</span></p></Link>
        </div>
    </div>
  </div>
)

export default Seminare