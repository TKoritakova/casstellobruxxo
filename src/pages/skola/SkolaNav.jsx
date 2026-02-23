import { Link } from 'react-router-dom';

function SkolaNav() {
  return (
    <nav className="second-nav">
        <Link to="/historie-skoly">Historie školy</Link>
        <Link to="/profesori">Profesoři</Link>
        <Link to="/organizace-roku">Průběh školního roku</Link>
         <Link to="/skolni-dny">Školní dny</Link>
        
    </nav>
  );
}

export default SkolaNav;