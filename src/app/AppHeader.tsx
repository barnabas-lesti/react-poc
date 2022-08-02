import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AppHeader.scss';
import brandLogo from '../assets/brand-logo.svg';
import { AppNavLink } from './AppNavLink';
import { openSidebar } from '../store/common';
import { MobileSidebar } from '../common/MobileSidebar';

const mobileSidebarLinks: Array<{ to: string, labelKey: string }> = [
  { to: '/',          labelKey: 'sidebar.home' },
  { to: '/about-us',  labelKey: 'sidebar.aboutUs' },
  { to: '/search',    labelKey: 'sidebar.search' },
  { to: '/prototype', labelKey: 'sidebar.prototype' },
];

export function AppHeader() {
  const sidebarName = 'AppHeaderMobileSidebar';
  const dispatch = useDispatch()

  return (
    <header className='AppHeader'>
      <MobileSidebar name={sidebarName}>
        {mobileSidebarLinks.map(({ to, labelKey }, index) => (<AppNavLink className='AppHeader__sidebarLink' key={index} to={to} labelKey={labelKey} />))}
      </MobileSidebar>

      <span
        className="AppHeader__mobileMenuIcon material-icons"
        onClick={() => dispatch(openSidebar({ sidebarName }))}
      >
        menu
      </span>
      <NavLink to='/'>
        <img className='AppHeader__brand' src={brandLogo} alt='Brand Logo' />
      </NavLink>
    </header>
  );
}
