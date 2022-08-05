import React from 'react';

import './MobileSidebar.scss';
import brandLogo from '../assets/brand-logo.svg';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { commonActions } from '../store/slices/common';

export function MobileSidebar({ name, children }: { name: string, children: any }) {
  const openSidebarName = useAppSelector((state) => state.common.openSidebarName)
  const dispatch = useAppDispatch()

  return (
    <div className={'MobileSidebar' + (openSidebarName === name ? ' MobileSidebar--open': '')}>
      <div className='MobileSidebar__header'>
        <NavLink to='/'>
          <img className='MobileSidebar__brand' src={brandLogo} alt='Brand Logo' />
        </NavLink>
        <span
          className='MobileSidebar__closeIcon material-icons'
          onClick={() => dispatch(commonActions.closeSidebar())}
        >
          close
        </span>
      </div>
      <div className='MobileSidebar__content'>
        {children}
      </div>
    </div>
  );
}
