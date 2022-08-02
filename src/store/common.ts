import { createSlice } from '@reduxjs/toolkit';

const getBody = () => document.getElementsByTagName('body')[0];

interface CommonActionInterface {
  payload: {
    sidebarName: string;
  }
}

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    openSidebarName: '',
  },
  reducers: {
    openSidebar: (state, { payload }: CommonActionInterface) => {
      getBody().classList.add('no-scroll');
      state.openSidebarName = payload.sidebarName;
    },
    closeSidebar: (state) => {
      getBody().classList.remove('no-scroll');
      state.openSidebarName = '';
    },
  },
});

export const { openSidebar, closeSidebar } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
