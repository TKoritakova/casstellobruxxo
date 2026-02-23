import { Link } from 'react-router-dom';

function MagieNav() {
  return (
    <nav className="second-nav">
        <Link to="/kouzla">Kouzla</Link>
        <Link to="/zveromagie">Zvěromagie</Link>
        
        
    </nav>
  );
}

export default MagieNav;