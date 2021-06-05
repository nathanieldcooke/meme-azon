import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)


  return (
    <nav>
      <span>Meme-Azon</span>
      <ul>
        <li>
          <NavLink className='nav_link' to="/" exact={true} activeClassName="active">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink className='nav_link' to="/login" exact={true} activeClassName="active">
            {(user) ? null : <button>Log In</button>}
          </NavLink>
        </li>
        <li>
          <NavLink className='nav_link' to="/sign-up" exact={true} activeClassName="active">
            {(user) ? null : <button>Sign Up</button>}
          </NavLink>
        </li>
        <li>
          <NavLink className='nav_link' to="/demo-sign-up" exact={true} activeClassName="active">
            {(user) ? null : <button>Demo</button>}
          </NavLink>
        </li>
        <li>
          <NavLink className='nav_link' to="/shop" exact={true} activeClassName="active">
            {(user) ? <button>Shop</button> : null}
          </NavLink>
        </li>
        <li>
          <NavLink className='nav_link' to="/cart" exact={true} activeClassName="active">
            {(user) ? <button>Cart</button> : null}
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        <li>
          {(user) ? <LogoutButton/> : null}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
