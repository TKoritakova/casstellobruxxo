import {Link} from 'react-router-dom';

function TurnajNav() {
  return (
    <nav className="second-nav">
      <Link to="/prubeh-turnaje">Průběh turnaje</Link>
      <Link to="/zadani">Zadání</Link>
      <Link to="/vypracovani">Vypracování</Link>
      <Link to="/vysledky">Výsledky turnaje</Link>
    </nav>
  );
}

export default TurnajNav;