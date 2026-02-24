import { Link } from 'react-router-dom';

function MagieNav() {
  return (
    <nav className="second-nav">
        <Link to="/kouzla">Kouzla</Link>
        <Link to="/zveromagie">Zvěromagie</Link>
        <Link to="/magie-smyslu">Magie smyslů</Link>
        <Link to="/halucinace-a-vnitrni-vize">Halucinace a vnitřní vize</Link>
        <Link to="/magikvarky">Magikvarky</Link>
        
    </nav>
  );
}

export default MagieNav;