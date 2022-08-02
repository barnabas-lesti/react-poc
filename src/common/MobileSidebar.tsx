import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MobileSidebar.scss';
import brandLogo from '../assets/brand-logo.svg';
import { NavLink } from 'react-router-dom';

import { StateInterface } from '../store';
import { closeSidebar } from '../store/common';

export function MobileSidebar({ name, children }: { name: string, children: any }) {
  const openSidebarName = useSelector((state: StateInterface) => state.common.openSidebarName)
  const dispatch = useDispatch()

  return (
    <nav className={'MobileSidebar' + (openSidebarName === name ? ' MobileSidebar--open': '')}>
      <div className='MobileSidebar__header'>
        <NavLink to='/'>
          <img className='MobileSidebar__brand' src={brandLogo} alt='Brand Logo' />
        </NavLink>
        <span
          className='MobileSidebar__closeIcon material-icons'
          onClick={() => dispatch(closeSidebar())}
        >
          close
        </span>
      </div>
      <div className='MobileSidebar__content'>
        {children}
      </div>
    </nav>
  );
}
