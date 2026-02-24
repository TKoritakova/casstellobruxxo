import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MagieNav from './MagieNav'

import smysly1 from '../../img/utrzky/smysly_01.png';
import smysly2 from '../../img/utrzky/smysly_02.png';


const MagieSmyslu = () => (
  <div>
    
    <MagieNav />
    

    <div className="main-header"><h1>Magie smyslů</h1></div>
    
    <img src={smysly1} className='img-in-text img-in-text-right' />
    
    <p>Džungle není jen kulisou života, je to živoucí organismus, který neustále promlouvá. Kouzelníci z Castelobruxa se neučí přírodu ovládat, ale plně ji <span className='text-highlighter'>vnímat</span>. K tomu využívají širokou škálu <span className='text-highlighter'>magické flóry</span>, která dokáže <span className='text-highlighter'>lidské smysly vyostřit až na samotnou hranici možností.</span> Tato magie není postavena na slovech a gestech, ale na hlubokém spojení s dary země.</p>

    <h2>Rozšířené vnímání</h2>
    <hr />
    <p>Využití magických rostlin – ať už v podobě lektvarů, pokrmů nebo rituálních vykuřovadel – umožňuje kouzelníkovi <span className='text-highlighter'>vnímat svět v jeho syrové, magické podstatě</span>:</p>
    
    <ul>
        <li><span className='text-highlighter'>Zrak:</span> Světlo pronikající korunami stromů se rozpadá do celého spektra barev, které běžné oko nevidí. Kouzelník dokáže rozeznat aury rostlin i neviditelné stopy magických tvorů.</li>
        <li><span className='text-highlighter'>Sluch:</span> Zpěv ptáků a šumění listí přestanou být hlukem a stanou se srozumitelnou mapou dění v džungli. Každé prasknutí větvičky vypráví příběh o tom, co se blíží.</li>
        <li><span className='text-highlighter'>Chuť a čich:</span> I prostá voda z pramene přináší explozi minerálních chutí, skrze které lze cítit složení půdy, ze které vyvěrá. Vůně květin získávají hloubku a prostorový rozměr.</li>
        <li><span className='text-highlighter'>Hmat:</span> Kůže se stává citlivou na ty nejjemnější nuance – kouzelník cítí blížící se změnu tlaku vzduchu (déšť) nebo vibrace země pod nohama vzdálených zvířat.</li>
    </ul>
    

    <h2>Dary rostlin</h2>
     <hr />
    <img src={smysly2} className='img-in-text img-in-text-left'  />
    
    <p>K posílení smyslů se využívá každá část rostliny – <span className='text-highlighter'>od kořenů až po kůru</span>. Nejsnazší a nejrychlejší cestou je <span className='text-highlighter'>inhalace vzácných pylů</span>. Jejich účinek je okamžitý, ale prchavý. Pyl lze uchovávat v ozdobných váčcích, avšak časem jeho síla vyprchává, podobně jako vzpomínka na sen. Tato technika je klíčová pro bezpečnou cestu neprostupným terénem, ale vyžaduje cvik – nezkušený jedinec může <span className='text-highlighter'>podlehnout smyslovému přetížení</span>, kdy je intenzita světa příliš drtivá a vede k panice.</p>


  

   


  </div>
)

export default MagieSmyslu