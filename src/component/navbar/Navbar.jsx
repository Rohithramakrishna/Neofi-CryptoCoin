import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <header>
        <img src="" alt="" />

        <nav>
          <ul>
            <li>
              <Link to="/">Trade</Link>
            </li>
            <li>
              <Link to="/Page2">Earn</Link>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <button class="connect-wallet-btn">Connect Wallet</button>
      </header>
    </div>
  );
}

export default Navbar
