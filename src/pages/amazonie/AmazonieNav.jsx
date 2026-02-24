import { Link } from 'react-router-dom';

function AmazonieNav() {
  return (
    <nav className="second-nav">
      <Link to="/fauna-a-flora">Fauna a flóra</Link>
      <Link to="/mytologie">Mytologie</Link>
      <Link to="/tradice-a-svatky">Tradice a svátky</Link>

      <Link to="/hudba-a-tanec">Hudba a tanec</Link>
      <Link to="/pisne-ikaros">Písně Ikaros</Link>
      
      
      <Link to="/jidlo">Jídlo</Link>
      <Link to="/oblekani">Oblékání</Link>
      <Link to="/hulky">Tradiční hůlky</Link> 
    </nav>
  );
}

export default AmazonieNav;