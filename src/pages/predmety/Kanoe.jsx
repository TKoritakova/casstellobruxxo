import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import kanoe_01 from '../../img/utrzky/kanoe_01.png';
import kanoe_02 from '../../img/utrzky/kanoe_02.png';


const Kanoe = () => (
  <div>
    

    <div className="main-header"><h1>Let na kanoi</h1></div>

    <p>Mezi tradiční dopravní prostředky Jižní Ameriky patří <span className='text-highlighter'>létající kanoe</span>, jeden z nejstarších způsobů přepravy v kouzelnickém světě. Už první století dokládá jejich využívání domorodými obyvateli Amazonie k překonávání nehostinného terénu. Castelobrušští studenti se s jejich pomocí na začátku školního roku <span className='text-highlighter'>přepravují od břehu Amazonky až k jezeru u školy</span>.</p>

    <h2>Vzlet</h2>
    <hr />
    
    <p>Začíná vždy z vodní hladiny – z řeky, jezera nebo tůně. Kanoe potřebuje k letu <span className='text-highlighter'>otevřenou cestu mezi vodou a nebem</span>, protože právě tam proudí energie spojující oba světy. Ideální je jasná noc, kdy jsou hvězdy dobře viditelné – jejich světlo pomáhá kormidelníkovi naladit se na <span className='text-highlighter'>nebeský proud</span>.</p>
    
    <img src={kanoe_01} className='img-in-text img-in-text-right' />
    
    <p>Cestující (většinou tři a jeden kormidelník) si posedají do kanoe, zatímco řidič se postaví na záď s dlouhým pádlem podobným gondolovému. Jeden ze studentů drží <span className='text-highlighter'>keramickou misku s magickou vodou</span>, která reaguje na sílu proudu. Dokud není kormidelník v souladu s rytmem vody a nebe, hladina v misce se neklidně přelévá. Jakmile se sladí s proudem, voda se uklidní – to je znamení, že přišel čas vzlétnout.</p>

    <p>Pro úspěšný, plynulý vzlet kormidelník zpívá <span className='text-highlighter'>ikaros vody</span>, nezáleží na melodii ani konkrétních slovech, ale na rytmu a dechu. Jeho hlas se mísí se šploucháním hladiny a pomalým pohybem pádla, dokud se z hlubin nevynoří proud, který loď zvedne vzhůru.</p>

    <h2>Ovládání</h2>
    <hr/>
    
    <p>Kanoe se ovládá podobně <span className='text-highlighter'>jako gondola</span>. Kormidelník stojí na zádi a pomocí pádla určuje směr i výšku:</p>
    
    <ul>
        <li>odrážení do stran mění směr,</li>
        <li>záběrem vpřed zrychluje,</li>
        <li>sklopením pádla dolů stoupá,</li>
        <li>pohybem pádlem vzhůru klesá.</li>
    </ul>



    <img src={kanoe_02} className='img-in-text img-in-text-left' />
    
    <p>Během letu sleduje <span className='text-highlighter'>vzdušné proudy</span> – neviditelné cesty mezi hvězdami a vodou, které vedou bezpečně skrz nebe. I ve dne lze let uskutečnit, i když je to náročnější: kormidelník se musí naladit na <span className='text-highlighter'>neviditelné hvězdy</span>, které zůstávají přítomné i za světla. Místo světla hvězd se tehdy řídí vibracemi vody v misce, které odrážejí proudění skrytého nebeského dechu. Za dne však hrozí, že kanoe bude spatřena mudly – proto bývají denní lety krátké a držené nízko nad pralesem.</p>

    <h2>Přistání</h2>
    <hr/>
    
    <p>K přistání je třeba nalézt další vodní těleso. Kormidelník začne zpívat hlubší a pomalejší <span className='text-highlighter'>ikaros</span>, který proud postupně ztišuje. Kanoe klesá, až se hladce dotkne vody. Po přistání kormidelník <span className='text-highlighter'>hladinu jemně pohladí</span> – výraz vděku za bezpečný let. Říká se, že kdo zapomene poděkovat vodě, tomu se příště proud nemusí otevřít.</p>


    
     <a className='game-archive-button' href="/casstellobruxxo/Kanoe.html" target="_blank" rel="noopener noreferrer">Otevřít archiv hodiny (NonRPG 19. 11. 2025)</a>




  </div>
)

export default Kanoe