import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppHeader.scss';
import brandLogo from './brand-logo.svg';
import { openSidebar } from './app-state';
import { useAppDispatch } from '../store/hooks';

export function AppHeader() {
  const dispatch = useAppDispatch();

  return (
    <header className='AppHeader'>
      <span
        className='AppHeader__mobileMenuIcon AppHeader__icon material-icons'
        onClick={() => dispatch(openSidebar())}
      >
        menu
      </span>

      <NavLink to='/'>
        <img className='AppHeader__brand' src={brandLogo} alt='Brand Logo' />
      </NavLink>

      <div className='AppHeader__controls'>
        <NavLink className='AppHeader__searchIconLink' to='/search'>
          <span className='AppHeader__icon material-icons'>search</span>
        </NavLink>
        <NavLink to='/cart'>
          <span className='AppHeader__icon material-icons'>shopping_cart</span>
        </NavLink>
      </div>
    </header>
  );
}
