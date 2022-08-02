import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import { AboutUsPage, HomePage, ItemPage, NotFound, PrototypePage, SearchPage } from '../pages';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { closeSidebar } from '../store/common';

export function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  // Router navigation event listener
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div className='App'>
      <AppHeader />
      <main className='App__content'>
        <Routes location={location}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/item' element={<ItemPage />} />
          <Route path='/prototype' element={<PrototypePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}
