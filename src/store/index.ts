import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import { commonReducer } from './slices/common';
import { searchReducer } from './slices/search';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    search: searchReducer,
  },
  middleware: [thunk],
});

export type StateInterface = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
