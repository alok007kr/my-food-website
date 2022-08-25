
import './Navbar.css';
import Logo from '../../images/logo.png';
import Cart from '../../images/cart-black.png';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-link">
          <ul>
            <Link spy={true} to='Home' smooth={true}>
              <li>
                <a href="#">Home</a>
            </li>
            </Link>
            <Link spy={true} to='About' smooth={true}>
              <li>
                <a href="#">About</a>
            </li>
            </Link>
            <Link spy={true} to='Menu' smooth={true}>
              <li>
                <a href="#">Menu</a>
            </li>
            </Link>
            <Link spy={true} to='Recipe' smooth={true}>
              <li>
                <a href="#">Recipe</a>
            </li>
            </Link>
           <Link spy={true} to='Review' smooth={true}>
              <li>
                <a href="#">Review</a>
            </li>
            </Link>
            <Link spy={true} to='Contact' smooth={true}>
              <li>
                <a href="#">Contact</a>
            </li>
            </Link>
            <li>
            <a href="#">
              <img src={Cart} alt="cart" />
            </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;