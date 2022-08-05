import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import './AppHeader.scss';
import brandLogo from '../assets/brand-logo.svg';
import { AppNavLink } from './AppNavLink';
import { MobileSidebar } from '../common/MobileSidebar';
import { SearchForm } from '../common/SearchForm';
import { commonActions } from '../store/slices/common';

const mobileSidebarLinks: Array<{ to: string, labelKey: string }> = [
  { to: '/',          labelKey: 'sidebar.home' },
  { to: '/about-us',  labelKey: 'sidebar.aboutUs' },
  { to: '/search',    labelKey: 'sidebar.search' },
  { to: '/prototype', labelKey: 'sidebar.prototype' },
];

export function AppHeader() {
  const sidebarName = 'AppHeaderMobileSidebar';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className='AppHeader'>
      <MobileSidebar name={sidebarName}>
        <SearchForm
          onSubmit={() => navigate('/search')}
          className='AppHeader__searchForm'
        />
        <nav>
          {mobileSidebarLinks.map(({ to, labelKey }, index) => (
            <AppNavLink className='AppHeader__sidebarLink' key={index} to={to} labelKey={labelKey} />
          ))}
        </nav>
      </MobileSidebar>

      <span
        className='AppHeader__mobileMenuIcon AppHeader__icon material-icons'
        onClick={() => dispatch(commonActions.openSidebar({ sidebarName }))}
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
