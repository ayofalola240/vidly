import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <NavLink className='navbar-brand' to='/'>
        Vidly
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link ' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/costumers'>
            Costumers
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/loginForm'>
                Login
              </NavLink>
              <NavLink className='nav-item nav-link' to='/registerForm'>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/profile'>
                {user.name}
              </NavLink>
              <NavLink className='nav-item nav-link' to='/logout'>
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
