import { configureStore } from '@reduxjs/toolkit'
import { commonReducer } from './common';

import { counterReducer } from './counter';

export interface StateInterface {
  common: {
    openSidebarName: string;
  },
  counter: {
    value: number;
  };
}

export const store = configureStore({
  reducer: {
    common: commonReducer,
    counter: counterReducer,
  },
});
