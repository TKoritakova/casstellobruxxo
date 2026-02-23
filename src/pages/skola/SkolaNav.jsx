import { Link } from 'react-router-dom';

function SkolaNav() {
  return (
    <nav className="second-nav">
        <Link to="/historie-skoly">Historie školy</Link>
        <Link to="/profesori">Profesoři</Link>
    </nav>
  );
}

export default SkolaNav;