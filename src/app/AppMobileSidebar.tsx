import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './AppMobileSidebar.scss';
import brandLogo from './appBrandLogo.svg';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeSidebar } from './appState';
import { SearchForm } from '../search/SearchForm';
import { AppNavLink } from './AppNavLink';

const links: Array<{ to: string, labelKey: string }> = [
  { to: '/',          labelKey: 'app.sidebar.home' },
  { to: '/about-us',  labelKey: 'app.sidebar.aboutUs' },
  { to: '/search',    labelKey: 'app.sidebar.search' },
  { to: '/prototype', labelKey: 'app.sidebar.prototype' },
];

export function AppMobileSidebar() {
  const { isSidebarOpen } = useAppSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  return (
    <div className={'AppMobileSidebar' + (isSidebarOpen ? ' AppMobileSidebar--open': '')}>
      <div className='AppMobileSidebar__header'>
        <NavLink to='/'>
          <img className='AppMobileSidebar__brand' src={brandLogo} alt='Brand Logo' />
        </NavLink>
        <span
          className='AppMobileSidebar__closeIcon material-icons'
          onClick={() => dispatch(closeSidebar())}
        >
          close
        </span>
      </div>
      <div className='AppMobileSidebar__content'>
        <SearchForm
          onSubmit={() => navigate('/search')}
          className='AppMobileSidebar__searchForm'
        />
        <nav>
          {links.map(({ to, labelKey }, index) => (
            <AppNavLink className='AppMobileSidebar__link' key={index} to={to} labelKey={labelKey} />
          ))}
        </nav>
      </div>
    </div>
  );
}
