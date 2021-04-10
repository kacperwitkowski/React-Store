import Nav from "./svg/bars-solid.svg";
import CloseMenu from "./svg/times-solid.svg";
import ShoppingCart from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./scss/Header.scss";
import {DataContext} from './Context'

const Header = () => {
  const [isShowed, setIsShowed] = useState(false);



const contextSpan = useContext(DataContext)
const {cart} = contextSpan;
  
  const menuToggle = () => setIsShowed(!isShowed);

if(isShowed) {
  document.body.style.overflowY = "hidden";
} else {
  document.body.style.overflowY = "";
}

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Nav} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Mike</Link>
        </h1>
      </div>
      <nav>
        <ul className={isShowed ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={CloseMenu} alt="close" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <Link to="/cart">
          <span>{cart.length}</span>
            <img src={ShoppingCart} alt="" width="40" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
