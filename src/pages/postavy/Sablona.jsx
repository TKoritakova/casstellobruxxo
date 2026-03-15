import React from 'react'

import JMENO OBRAZKU from '../../img/medailonky/NAZEV OBRAZKU VE SLOZCE';

const Sablona = () => (
  <div>

    <div className="main-header"><h1>JMENO</h1></div>
    {/* ID */}
    
    <img src={JMENO OBRAZKU} className='img-in-text-small img-in-text-right'/>

    <p><span className='text-highlighter'>Narozeniny:</span></p>
    <p><span className='text-highlighter'>Původ:</span></p>
    <p><span className='text-highlighter'>Národnost:</span></p>
    <p><span className='text-highlighter'>Bydliště:</span></p>

    <hr/>
    <p><span className='text-highlighter'>Faceclaim:</span></p>
    <p><span className='text-highlighter'>Výška:</span></p>
    <p><span className='text-highlighter'>Váha:</span></p>
    <p><span className='text-highlighter'>Barva očí:</span></p>
    <p><span className='text-highlighter'>Barva vlasů:</span></p>

    <hr/>
    <p><span className='text-highlighter'>Kmen:</span></p>
    <p><span className='text-highlighter'>Hlavní oborový předmět:</span></p>
    <p><span className='text-highlighter'>Patron:</span></p>
    <p><span className='text-highlighter'>Bubák:</span></p>
    <p><span className='text-highlighter'>Hůlka:</span></p>


  </div>
)

export default Sablona