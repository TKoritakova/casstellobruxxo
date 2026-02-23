import { useState, useEffect } from 'react' 
import { Routes, Route, Link, useLocation } from 'react-router-dom' 

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


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset pro celé okno
    window.scrollTo(0, 0);

    //console.log("Cesta se změnila na:", pathname);
     
    // 2. Reset pro tvůj hlavní kontejner (zkusíme oba způsoby)
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

      <ScrollToTop />

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
        <Link to="/amazonie">Amazonie a okolí</Link>
  
      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kmeny" element={<Tribes />} />
          <Route path="/predmety" element={<Subjects />} />
          <Route path="/skola" element={<Skola />} />
          <Route path="/amazonie" element={<Amazonie />} />
    

          <Route path="/arashar" element={<Arashar />} />
          <Route path="/kuaraori" element={<Kuaraori />} />
          <Route path="/nomphyrian" element={<Nomphyrian />} />
          <Route path="/pawanunga" element={<Pawanunga />} />

          <Route path="/hlavni" element={<Hlavni />} />
          <Route path="/vedlejsi" element={<Vedlejsi />} />
          <Route path="/volitelne" element={<Volitelne />} />
          <Route path="/vycvik" element={<Vycvik />} />

          <Route path="/archeologie" element={<Archeologie />} />
          <Route path="/komunikace" element={<Komunikace />} />

          <Route path="/historie-skoly" element={<Historie />} />
          <Route path="/profesori" element={<Profesori />} />
          <Route path="/organizace-roku" element={<SkolniRok />} />
          <Route path="/skolni-dny" element={<SkolniDen />} />

          <Route path="/mytologie" element={<Mytolgoie />} />
          <Route path="/pisne-ikaros" element={<PisneIkaros />} />
          <Route path="/fauna-a-flora" element={<FaunaAFlora />} />
          <Route path="/tradice-a-svatky" element={<TradiceASvatky />} />
          <Route path="/jidlo" element={<Stravovani />} />
          <Route path="/hudba-a-tanec" element={<HudbaATance />} />
          <Route path="/oblekani" element={<Oblekani />} />
          <Route path="/hulky" element={<Hulky />} />

        </Routes>
      </main>
    </div>
  )
}

export default App

