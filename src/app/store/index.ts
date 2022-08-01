import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './counter';

export interface StateInterface {
  counter: {
    value: number;
  };
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
