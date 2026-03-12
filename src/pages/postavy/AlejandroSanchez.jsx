import React from 'react'

import alex from '../../img/medailonky/alejandro_sanchez.jpg';

const AlejandroSanchez = () => (
  <div>

    <div className="main-header"><h1>Alejandro Sánchez</h1></div>
    {/* id = 10877 */}

    <img src={alex} className='img-in-text-small img-in-text-right'/>

    <p><span className='text-highlighter'>Narozeniny:</span> 28. dubna 1993</p>
    <p><span className='text-highlighter'>Původ:</span> Čistokrevný</p>
    <p><span className='text-highlighter'>Národnost:</span> Mexická</p>
    <p><span className='text-highlighter'>Bydliště:</span> Vilka v Polacnu - Mexico City</p>

    <hr/>
    <p><span className='text-highlighter'>Faceclaim:</span> Ashton (ig: 1bedhead)</p>
    <p><span className='text-highlighter'>Výška:</span> 175 cm</p>
    <p><span className='text-highlighter'>Váha:</span> 67 kg</p>
    <p><span className='text-highlighter'>Barva očí:</span> Hnědá</p>
    <p><span className='text-highlighter'>Barva vlasů:</span> Hnědá</p>

    <hr/>
    <p><span className='text-highlighter'>Kmen:</span> Nomphyrian (kyselý)</p>
    <p><span className='text-highlighter'>Hlavní oborový předmět:</span> Magie obrany a útoku</p>
    <p><span className='text-highlighter'>Bubák:</span> Situace, kdy mu někdo říká, že je trapák</p>
    <p><span className='text-highlighter'>Hůlka:</span> Dřevo z brazilského růžového dřeva a v jádru chlup z jaguára</p>

    <hr/>

    <p>Alex se narodil do víceméně bohaté čistokrevné rodiny v Mexiku, tedy vlastně rodičům Marii a Carlosovi, ale nikdy
      to nebylo takové to "čistokrevné", jako říkají stereotypy. Spíš normální rodina s velkým barákem a jako bonus
      kouzly. Během základní školy měl čas i na spoustu zájmů, jako třeba <span
        className="text-highlighter">surfování</span>, <span className="text-highlighter">skateboarding</span>, hru
      na <span className="text-highlighter">kytaru</span>, sbírání <span
        className="text-highlighter">pokémon kartiček</span>, <span className="text-highlighter">jídlo</span> nebo <span
        className="text-highlighter">auta</span>. Nejlepšího kámoše mu dělal (a stále dělá) <span
        className="text-highlighter">pejsek Burrito</span>.</p>

    <p>Je to docela náročný klučina, ke každému se chová tak trochu jinak. <span className="text-highlighter">Ségru provokuje</span>,
      ale udělal by pro ni cokoliv (přeci jen je o tři minuty starší), před cizími se <span
        className="text-highlighter">snaží vypadat cool</span> a před kámoši už se přetvařuje trochu míň, no. Přestože
      je dost šikovným studentem, <span className="text-highlighter">skoro šprtem</span>, snaží se to krýt, skoro že by
      se za to styděl, protože to mu přeci kazí tu děsně "cool image".</p>


  </div>
)

export default AlejandroSanchez