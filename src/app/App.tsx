import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import { AboutUsPage } from '../pages/about-us/AboutUsPage';
import { HomePage } from '../pages/home/HomePage';
import { ItemPage } from '../pages/item/ItemPage';
import { NotFound } from '../pages/not-found/NotFound';
import { SearchPage } from '../pages/search/SearchPage';

export function App() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>{t('header.home')}</Link>
            </li>
            <li>
              <Link to='/about-us'>{t('header.aboutUs')}</Link>
            </li>
            <li>
              <Link to='/search'>{t('header.search')}</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/item' element={<ItemPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <ul>
            <li>
              <Link to='/'>{t('footer.home')}</Link>
            </li>
            <li>
              <Link to='/about-us'>{t('footer.aboutUs')}</Link>
            </li>
            <li>
              <Link to='/search'>{t('footer.search')}</Link>
            </li>
          </ul>
        </footer>
      </Router>
    </div>
  );
}
