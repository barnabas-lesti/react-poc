import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './AppNavLink.scss';

interface AppNavLinkPropsInterface {
  to: string,
  labelKey: string,
  className? : string;
}

export function AppNavLink({ to, labelKey, className }: AppNavLinkPropsInterface) {
  const { t } = useTranslation();
  return (
    <NavLink
      className={({ isActive }) => 'AppNavLink' + (className ? ` ${className}` : '') + (isActive ? ' AppNavLink--active': '')}
      to={to}
    >
      {t(labelKey)}
    </NavLink>
  );
}
