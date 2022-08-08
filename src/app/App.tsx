import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.scss';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { AppMobileSidebar } from './AppMobileSidebar';
import { appRoutes } from './appRoutes';
import { closeSidebar } from './appState';
import { useAppDispatch } from '../store/hooks';

export function App() {
  const location = useLocation()
  const dispatch = useAppDispatch()

  // Router navigation event listener
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div className='App'>
      <AppMobileSidebar />
      <AppHeader />
      <main className='App__content'>
        <Routes location={location}>
          {appRoutes.map(({ path, Page }, index) => (<Route key={index} path={path} element={<Page />} />))}
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}
