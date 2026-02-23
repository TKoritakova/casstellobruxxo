import { Link } from 'react-router-dom';

function SkolaNav() {
  return (
    <nav className="second-nav">
        <Link to="/historie-skoly">Historie školy</Link>
        <Link to="/profesori">Profesoři</Link>
        <Link to="/organizace-roku">Průběh školního roku</Link>
         <Link to="/skolni-dny">Školní dny</Link>
         <Link to="/zajimavosti">Zajímavosti</Link>
         <Link to="/domaci-mazlicci">Mazlíčci ve škole</Link>
         <Link to="/skolni-uniformy">Školní uniformy</Link>
         <Link to="/stravovani-ve-skole">Školní stravování</Link>
         <Link to="/prostory-skoly">Prostory školy</Link>

        
   
        
    </nav>
  );
}

export default SkolaNav;