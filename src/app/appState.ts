import { createSlice } from '@reduxjs/toolkit';

interface AppStateInterface {
  isSidebarOpen: boolean;
}

const initialState: AppStateInterface = {
  isSidebarOpen: false,
};

const getBody = () => document.getElementsByTagName('body')[0];

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openSidebar: (state) => {
      getBody().classList.add('no-scroll');
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      getBody().classList.remove('no-scroll');
    },
  },
});

export const { openSidebar, closeSidebar } = appSlice.actions;
export const appReducer = appSlice.reducer;
