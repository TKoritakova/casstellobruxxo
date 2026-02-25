import {Link} from 'react-router-dom';

function KmenyNav() {
  return (
    <nav className="second-nav">
      <Link to="/arashar">Arashar</Link>
      <Link to="/kuaraori">Kuaraori</Link>
      <Link to="/nomphyrian">Nomphyrian</Link>
      <Link to="/pawanunga">Pawanunga</Link>
    </nav>
  );
}

export default KmenyNav;