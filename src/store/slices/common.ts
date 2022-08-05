import { createSlice } from '@reduxjs/toolkit';

const getBody = () => document.getElementsByTagName('body')[0];

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    openSidebarName: '',
  },
  reducers: {
    openSidebar: (state, { payload }: { payload: { sidebarName: string } }) => {
      getBody().classList.add('no-scroll');
      state.openSidebarName = payload.sidebarName;
    },
    closeSidebar: (state) => {
      getBody().classList.remove('no-scroll');
      state.openSidebarName = '';
    },
  },
});

export const commonActions = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
