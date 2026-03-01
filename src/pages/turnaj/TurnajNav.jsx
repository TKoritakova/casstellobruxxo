import {Link} from 'react-router-dom';

function TurnajNav() {
  return (
    <nav className="second-nav">
      <Link to="/ucastnici">Účastníci</Link>
      <Link to="/zadani-a-vypracovani">Zadání a vypracování</Link>
      <Link to="/vysledky">Výsledky turnaje</Link>
      <Link to="/seminare">Semináře</Link>
      <Link to="/utrzky-z-bradavic">Útržky z Bradavic</Link>
    </nav>
  );
}



export default TurnajNav;