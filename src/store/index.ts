import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './counter';

export * from './StoreInterface';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
