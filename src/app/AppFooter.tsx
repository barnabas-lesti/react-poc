import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppFooter.scss';
import brandLogo from './brand-logo.svg';

import { AppNavLink } from './AppNavLink';

const footerLinks: Array<{ to: string, labelKey: string }> = [
  { to: '/',          labelKey: 'app.footer.home' },
  { to: '/about-us',  labelKey: 'app.footer.aboutUs' },
  { to: '/search',    labelKey: 'app.footer.search' },
  { to: '/prototype', labelKey: 'app.footer.prototype' },
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
