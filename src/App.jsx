import {useState, useEffect, Children} from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Tribes from './pages/kmeny/Kmeny'
import Subjects from './pages/predmety/Predmety'
import Skola from './pages/skola/SkolaUvod'
import Amazonie from './pages/amazonie/Amazonie'


import Arashar from './pages/kmeny/Arashar'
import Kuaraori from './pages/kmeny/Kuaraori'
import Nomphyrian from './pages/kmeny/Nomphyrian'
import Pawanunga from './pages/kmeny/Pawanunga'

import Hlavni from './pages/predmety/Hlavni'
import Vedlejsi from './pages/predmety/Vedlejsi'
import Volitelne from './pages/predmety/Volitelne'
import Vycvik from './pages/predmety/Vycvik'

import Komunikace from './pages/predmety/Komunikace'
import Archeologie from './pages/predmety/Archeologie'

import Historie from './pages/skola/Historie'
import Profesori from './pages/skola/Profesori'

import Mytolgoie from './pages/amazonie/Mytologie'
import PisneIkaros from './pages/amazonie/PisneIkaros'
import FaunaAFlora from './pages/amazonie/FaunaAFlora'
import TradiceASvatky from './pages/amazonie/TradiceASvatky'
import Stravovani from './pages/amazonie/Stravovani'
import HudbaATance from './pages/amazonie/HudbaATance'
import Oblekani from './pages/amazonie/Oblekani'
import Hulky from './pages/amazonie/Hulky'
import SkolniRok from './pages/skola/SkolniRok'
import SkolniDen from './pages/skola/SkolniDen'
import Zajimavosti from './pages/skola/Zajimavosti'
import Mazlicci from './pages/skola/Mazlicci'
import Uniformy from './pages/skola/Uniformy'
import JidloVeSkole from './pages/skola/JidloVeSkole'
import Prostory from './pages/skola/Prostory'
import Magie from './pages/magie/Magie'
import Kouzla from './pages/magie/Kouzla'
import Zveromagie from './pages/magie/Zveromagie'
import MagieSmyslu from './pages/magie/MagieSmyslu'
import Halucinace from './pages/magie/Halucinace'
import Magikvarky from './pages/magie/Magikvarky'
import Artefakty from './pages/predmety/Artefakty'
import Kanoe from './pages/predmety/Kanoe'
import Astronomie from './pages/predmety/Astronomie'
import RitualniMagie from "./pages/predmety/RitualniMagie.jsx";

import Turnaj from "./pages/turnaj/Turnaj.jsx";
import ZadaniAVypracovani from "./pages/turnaj/ZadaniAVypracovani.jsx";
import NominovaniStudenti from "./pages/turnaj/NominovaniStudenti.jsx";
import Vysledky from "./pages/turnaj/Vysledky.jsx";
import Seminare from "./pages/turnaj/Seminare.jsx";
import SoukromeHry from './pages/turnaj/SoukromeHry.jsx'

import InesSorayaCaro from './pages/postavy/InesSorayaCaro.jsx'
import AlejandroSanchez from "./pages/postavy/AlejandroSanchez.jsx";
import CatrielUlisesCondori from "./pages/postavy/CatrielUlisesCondori.jsx";
import KiraSoraiaRodrigues from "./pages/postavy/KiraSoraiaRodrigues.jsx";
import LuciaJulianaNavarro from "./pages/postavy/LuciaJulianaNavarro.jsx";
import MelissaNayraDeLeon from "./pages/postavy/MellisaNayraDeLeon.jsx";
import SofiaSanchez from "./pages/postavy/SofiaSanchez.jsx";
import CesarJesusGimenezCastillero from "./pages/postavy/CesarJesusGimenezCastillero.jsx";
import JuanMiguelSantosRamirez from "./pages/postavy/JuanMiguelSantosRamirez.jsx";
import LuanCaetanno from "./pages/postavy/LuanCaetanno.jsx";
import MateoBenitez from "./pages/postavy/MateoBenitez.jsx";
import MikelAnccoDeLeon from "./pages/postavy/MikelAnccoDeLeon.jsx";
import SofiaAmarilisPerez from "./pages/postavy/SofiaAmarilisPerez.jsx";
import YaraMonteiro from "./pages/postavy/YaraMonteiro.jsx";
import YaraQuetzalDoSol from "./pages/postavy/YaraQuetzalDoSol.jsx";
import AlejandroNavarro from "./pages/postavy/AlejandroNavarro.jsx";
import ChiaraAntoniaJose from "./pages/postavy/ChiaraAntoniaJose.jsx";
import GabrielSebastianAlmeidaSoares from "./pages/postavy/GabrielSebastianAlmeidaSoares.jsx";
import LuanaMarianaAlmeidaSoares from "./pages/postavy/LuanaMarianaAlmeidaSoares.jsx";


function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    // 1. Reset pro celé okno
    window.scrollTo(0, 0);

    //console.log("Cesta se změnila na:", pathname);

    // 2. Reset pro hlavní kontejner
    const contentElement = document.querySelector('.app-container');
    if (contentElement) {
      contentElement.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {


  return (
    <div className="app-container">

      <ScrollToTop/>

      {/* 1. NADPIS */}
      <header>
        <h1>Castelobruxo</h1>
        <p>Studium pod korunami pralesa</p>

      </header>

      {/* 2. MENU */}
      <nav className="main-nav">
        <Link to="/">Úvod</Link>
        <Link to="/skola">O škole</Link>
        <Link to="/kmeny">Školní kmeny</Link>
        <Link to="/predmety">Předměty</Link>
        <Link to="/magie">Magie</Link>
        <Link to="/amazonie">Amazonie a okolí</Link>
        <Link to="/turnaj">Turnaj</Link>

      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/kmeny" element={<Tribes/>}/>
          <Route path="/predmety" element={<Subjects/>}/>
          <Route path="/skola" element={<Skola/>}/>
          <Route path="/amazonie" element={<Amazonie/>}/>
          <Route path="/magie" element={<Magie/>}/>


          <Route path="/arashar" element={<Arashar/>}/>
          <Route path="/kuaraori" element={<Kuaraori/>}/>
          <Route path="/nomphyrian" element={<Nomphyrian/>}/>
          <Route path="/pawanunga" element={<Pawanunga/>}/>

          <Route path="/hlavni" element={<Hlavni/>}/>
          <Route path="/vedlejsi" element={<Vedlejsi/>}/>
          <Route path="/volitelne" element={<Volitelne/>}/>
          <Route path="/vycvik" element={<Vycvik/>}/>

          <Route path="/archeologie" element={<Archeologie/>}/>
          <Route path="/komunikace" element={<Komunikace/>}/>
          <Route path="/artefakty" element={<Artefakty/>}/>
          <Route path="/kanoe" element={<Kanoe/>}/>
          <Route path="/astronomie" element={<Astronomie/>}/>
          <Route path="/ritualni-magie" element={<RitualniMagie/>}/>

          <Route path="/historie-skoly" element={<Historie/>}/>
          <Route path="/profesori" element={<Profesori/>}/>
          <Route path="/organizace-roku" element={<SkolniRok/>}/>
          <Route path="/skolni-dny" element={<SkolniDen/>}/>
          <Route path="/zajimavosti" element={<Zajimavosti/>}/>
          <Route path="/domaci-mazlicci" element={<Mazlicci/>}/>
          <Route path="/skolni-uniformy" element={<Uniformy/>}/>
          <Route path="/stravovani-ve-skole" element={<JidloVeSkole/>}/>
          <Route path="/prostory-skoly" element={<Prostory/>}/>

          <Route path="/mytologie" element={<Mytolgoie/>}/>
          <Route path="/pisne-ikaros" element={<PisneIkaros/>}/>
          <Route path="/fauna-a-flora" element={<FaunaAFlora/>}/>
          <Route path="/tradice-a-svatky" element={<TradiceASvatky/>}/>
          <Route path="/jidlo" element={<Stravovani/>}/>
          <Route path="/hudba-a-tanec" element={<HudbaATance/>}/>
          <Route path="/oblekani" element={<Oblekani/>}/>
          <Route path="/hulky" element={<Hulky/>}/>

          <Route path="/kouzla" element={<Kouzla/>}/>
          <Route path="/zveromagie" element={<Zveromagie/>}/>
          <Route path="/magie-smyslu" element={<MagieSmyslu/>}/>
          <Route path="/halucinace-a-vnitrni-vize" element={<Halucinace/>}/>
          <Route path="/magikvarky" element={<Magikvarky/>}/>

          <Route path="/turnaj" element={<Turnaj/>}/>
          <Route path="/zadani-a-vypracovani" element={<ZadaniAVypracovani/>}/>
          <Route path="/ucastnici" element={<NominovaniStudenti/>}/>
          <Route path="/vysledky" element={<Vysledky/>}/>
          <Route path="/seminare" element={<Seminare/>}/>
          <Route path="/utrzky-z-bradavic" element={<SoukromeHry/>}/>

          <Route path="/ines-soraya-caro" element={<InesSorayaCaro/>}/>
          <Route path="/alejandro-sanchez" element={<AlejandroSanchez/>}/>
          <Route path="/catriel-ulises-condori" element={<CatrielUlisesCondori/>}/>
          <Route path="/kira-soraia-rodrigues" element={<KiraSoraiaRodrigues/>}/>
          <Route path="/lucia-juliana-navarro" element={<LuciaJulianaNavarro/>}/>
          <Route path="/melissa-nayra-de-leon" element={<MelissaNayraDeLeon/>}/>
          <Route path="/sofia-sanchez" element={<SofiaSanchez/>}/>

          <Route path="/cesar-jesus-gimenez-castillero" element={<CesarJesusGimenezCastillero/>}/>
          <Route path="/juan-miguel-santos-ramirez" element={<JuanMiguelSantosRamirez/>}/>
          <Route path="/luan-caetanno" element={<LuanCaetanno/>}/>
          <Route path="/mateo-benitez" element={<MateoBenitez/>}/>
          <Route path="/mikel-ancco-de-leon" element={<MikelAnccoDeLeon/>}/>
          <Route path="/sofia-amarilis-perez" element={<SofiaAmarilisPerez/>}/>
          <Route path="/yara-monteiro" element={<YaraMonteiro/>}/>
          <Route path="/yara-quetzal-do-sol" element={<YaraQuetzalDoSol/>}/>

          <Route path="/alejandro-navarro" element={<AlejandroNavarro/>}/>
          <Route path="/chiara-antonia-jose" element={<ChiaraAntoniaJose/>}/>
          <Route path="/gabriel-sebastian-almeida-soares" element={<GabrielSebastianAlmeidaSoares/>}/>
          <Route path="/luana-mariana-almeida-soares" element={<LuanaMarianaAlmeidaSoares/>}/>

        </Routes>
      </main>
    </div>
  )
}

export default App

