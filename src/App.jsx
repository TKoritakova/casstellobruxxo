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
        <Link to="/casstellobruxxo/">Úvod</Link>
        <Link to="/casstellobruxxo/skola">O škole</Link>
        <Link to="/casstellobruxxo/kmeny">Školní kmeny</Link>
        <Link to="/casstellobruxxo/predmety">Předměty</Link>
        <Link to="/casstellobruxxo/amazonie">Amazonie a okolí</Link>
  
      </nav>

      {/* 3. OBSAH (Zde se budou střídat stránky) */}
      <main className="content">
        <Routes>
          <Route path="/casstellobruxxo/" element={<Home />} />
          <Route path="/casstellobruxxo/kmeny" element={<Tribes />} />
          <Route path="/casstellobruxxo/predmety" element={<Subjects />} />
          <Route path="/casstellobruxxo/skola" element={<Skola />} />
          <Route path="/casstellobruxxo/amazonie" element={<Amazonie />} />
    

          <Route path="/casstellobruxxo/arashar" element={<Arashar />} />
          <Route path="/casstellobruxxo/kuaraori" element={<Kuaraori />} />
          <Route path="/casstellobruxxo/nomphyrian" element={<Nomphyrian />} />
          <Route path="/casstellobruxxo/pawanunga" element={<Pawanunga />} />

          <Route path="/casstellobruxxo/hlavni" element={<Hlavni />} />
          <Route path="/casstellobruxxo/vedlejsi" element={<Vedlejsi />} />
          <Route path="/casstellobruxxo/volitelne" element={<Volitelne />} />
          <Route path="/casstellobruxxo/vycvik" element={<Vycvik />} />

          <Route path="/casstellobruxxo/archeologie" element={<Archeologie />} />
          <Route path="/casstellobruxxo/komunikace" element={<Komunikace />} />

          <Route path="/casstellobruxxo/historie-skoly" element={<Historie />} />
          <Route path="/casstellobruxxo/profesori" element={<Profesori />} />

          <Route path="/casstellobruxxo/mytologie" element={<Mytolgoie />} />
          <Route path="/casstellobruxxo/pisne-ikaros" element={<PisneIkaros />} />
          <Route path="/casstellobruxxo/fauna-a-flora" element={<FaunaAFlora />} />
          <Route path="/casstellobruxxo/tradice-a-svatky" element={<TradiceASvatky />} />
          <Route path="/casstellobruxxo/jidlo" element={<Stravovani />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

