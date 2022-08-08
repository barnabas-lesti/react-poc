import { ReactElement } from 'react';

import { AboutUsPage } from '../aboutUs/AboutUsPage';
import { HomePage } from '../home/HomePage';
import { ItemPage } from '../item/ItemPage';
import { NotFound } from '../not-found/NotFound';
import { PrototypePage } from '../prototype/PrototypePage';
import { SearchPage } from '../search/SearchPage';

type AppRouteType = {
  path: string;
  Page: () => ReactElement;
}

export const appRoutes: Array<AppRouteType> = [
  { path: '/',          Page: HomePage },
  { path: '/about-us',  Page: AboutUsPage },
  { path: '/search',    Page: SearchPage },
  { path: '/item/:id',  Page: ItemPage },
  { path: '/prototype', Page: PrototypePage },
  { path: '*',          Page: NotFound },
];
