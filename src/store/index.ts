import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from '../app/app-state';
import { searchReducer } from '../search/search-state';

export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
