import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppFooter.scss';
import brandLogo from '../assets/brand-logo.svg';

import { AppNavLink } from './AppNavLink';

const footerLinks: Array<{ to: string, labelKey: string }> = [
  { to: '/',          labelKey: 'footer.home' },
  { to: '/about-us',  labelKey: 'footer.aboutUs' },
  { to: '/search',    labelKey: 'footer.search' },
  { to: '/prototype', labelKey: 'footer.prototype' },
];

export function AppFooter() {
  return (
    <footer className='AppFooter'>
      <div className='AppFooter__brand'>
        <NavLink to='/'>
          <img className='AppFooter__brandImage' src={brandLogo} alt='Brand Logo' />
        </NavLink>
      </div>
      <div className='AppFooter__links'>
        {footerLinks.map(({ to, labelKey }, index) => (<AppNavLink className='AppFooter__link' key={index} to={to} labelKey={labelKey} />))}
      </div>
    </footer>
  );
}
