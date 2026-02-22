import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import arepas from '../../img/kultura/jidlo/arepas.png';
import asado from '../../img/kultura/jidlo/asado.png';
import feijoada from '../../img/kultura/jidlo/feijoada.png';
import mofongo from '../../img/kultura/jidlo/mofongo.png';
import pachamanca from '../../img/kultura/jidlo/pachamanca.png';


const Stravovani = () => (
  <div>
    
    <nav className="second-nav">
                <Link to="/casstellobruxxo/mytologie">Mytologie</Link>
                <Link to="/casstellobruxxo/pisne-ikaros">Písně Ikaros</Link>
                <Link to="/casstellobruxxo/fauna-a-flora">Fauna a flóra</Link>
                <Link to="/casstellobruxxo/tradice-a-svatky">Tradice a svátky</Link>
                <Link to="/casstellobruxxo/jidlo">Jídlo</Link>
                <Link to="/casstellobruxxo/hudba-a-tanec">Hudba a tanec</Link>
                <Link to="/casstellobruxxo/oblekani">Oblékání</Link>
        </nav>
    

    <div className="main-header"><h1>Stravování</h1></div>

    <p>Jídlo a pití v Latinské Americe odráží rozmanitost celého kontinentu – od Karibiku až po Vysoké Andy. Stravování je barevné, plné chutí a často propojené se společenským životem. V mnoha zemích je jídlo vnímáno nejen jako prostředek k utišení hladu, ale i jako důležitý moment sdílení a oslavy.</p>

    <img src={feijoada} className='img-in-text img-in-text-left' />
    
    <p>V Brazílii je nejoblíbenějším národním jídlem <span className='text-highlighter'>feijoada</span>, hutný pokrm z černých fazolí a masa, který se podává s rýží a maniokovou moukou. Typické jsou také <span className='text-highlighter'>pão de queijo</span>, malé sýrové bochánky, a sladké dezerty jako<span className='text-highlighter'> brigadeiro</span>. Z nápojů dominuje silná káva a také <span className='text-highlighter'>cachaça</span>, třtinový destilát, který je základem slavného koktejlu <span className='text-highlighter'>caipirinha</span>.</p>

    <img src={asado} className='img-in-text img-in-text-right' />
    
    <p>V Argentině, Chile a Uruguayi patří mezi nejoblíbenější pokrmy <span className='text-highlighter'>empanadas</span> – taštičky z těsta plněné masem, sýrem nebo zeleninou, které se pečou či smaží. Obvykle se podávají jako rychlé občerstvení nebo na oslavách. V těchto zemích zároveň dominuje <span className='text-highlighter'>asado</span>, tradiční grilování, při kterém se na ohni připravují velké kusy masa, a také pití <span className='text-highlighter'>maté</span>, čaje z listů cesmíny, který se sdílí mezi přáteli z kalabasy a kovové bombilly, tedy z nádoby připomínající kokosový ořech a kovové slámky se sítkem.</p>

    <img src={pachamanca} className='img-in-text img-in-text-left' />
    
    <p>Peru je známé především díky <span className='text-highlighter'>ceviche</span>, syrovým rybám marinovaným v limetkové šťávě s chilli a koriandrem. Ve vysokohorských oblastech And se připravuje <span className='text-highlighter'>pachamanca</span>, maso a zelenina pečené v jámě vyložené rozpálenými kameny. Sladkým nápojem typickým pro Peru je <span className='text-highlighter'>chicha morada</span>, připravovaná z fialové kukuřice.</p>

    <img src={arepas} className='img-in-text img-in-text-right' />
    
    <p>V Kolumbii a Venezuele se běžně připravují <span className='text-highlighter'>arepas</span>, placky z kukuřičné mouky, které se plní sýrem, masem nebo zeleninou. Oblíbené jsou i <span className='text-highlighter'>empanadas</span> v místní variantě, často smažené a plněné bramborami, sýrem nebo masem. V Kolumbii se k jídlu pije <span className='text-highlighter'>aguapanela</span>, sladký nápoj z třtinového cukru, zatímco Venezuela je proslulá svými kakaovými produkty a horkou čokoládou.</p>

    <p>Mexiko, ač geograficky spadá do Severní Ameriky, bývá do latinskoamerické kuchyně počítáno. Je proslulé pro <span className='text-highlighter'>tacos</span>, <span className='text-highlighter'>tamales</span> a <span className='text-highlighter'>pálivé omáčky</span>. Také zde mají svou verzi <span className='text-highlighter'>empanadas</span>, často sladkou, plněnou ovocem nebo dýní. K pití je oblíbená <span className='text-highlighter'>horchata</span>, sladký nápoj z rýže a skořice, nebo kvašený nápoj z agáve <span className='text-highlighter'>pulque</span>.</p>

    <img src={mofongo} className='img-in-text img-in-text-left' />
    
    <p>Karibská oblast, zejména Kuba a Portoriko, přináší do latinskoamerické kuchyně vliv tropů. Podává se zde <span className='text-highlighter'>ropa vieja</span>, trhané hovězí maso, nebo <span className='text-highlighter'>mofongo</span>, pokrm z banánů smažených a tlučených s česnekem a masem. Z nápojů je zde nejvýznamnější <span className='text-highlighter'>rum</span>, základ místních koktejlů, které jsou součástí kulturní tradice stejně jako hudba a tanec.</p>

    
   


  </div>
)

export default Stravovani