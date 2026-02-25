import {Link} from 'react-router-dom';

function PredmetyNav() {
  return (
    <nav className="second-nav">
      <Link to="/hlavni">Hlavní oborové předměty</Link>
      <Link to="/vedlejsi">Vedlejší oborové předměty</Link>
      <Link to="/volitelne">Volitelné předměty</Link>
      <Link to="/vycvik">Terénní výcvik</Link>
    </nav>
  );
}

export default PredmetyNav;