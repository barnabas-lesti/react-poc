import { ReactElement } from 'react';

import { AboutUsPage } from '../aboutUs/AboutUsPage';
import { HomePage } from '../home/HomePage';
import { ItemPage } from '../item/ItemPage';
import { NotFound } from '../not-found/NotFound';
import { PrototypePage } from '../prototype/PrototypePage';
import { SearchPage } from '../search/SearchPage';

interface AppRoute {
  path: string;
  Page: () => ReactElement;
}

export const appRoutes: Array<AppRoute> = [
  { path: '/',          Page: HomePage },
  { path: '/about-us',  Page: AboutUsPage },
  { path: '/search',    Page: SearchPage },
  { path: '/item',      Page: ItemPage },
  { path: '/prototype', Page: PrototypePage },
  { path: '*',          Page: NotFound },
];
