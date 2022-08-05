import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchString: '',
    isSearchInProgress: true,
    items: [],
  },
  reducers: {
    setSearchString: (state, { payload }: { payload: { searchString: string } }) => {
      state.searchString = payload.searchString;
    },
    startLoading: (state) => {
      state.isSearchInProgress = true;
    },
    stopLoading: (state) => {
      state.isSearchInProgress = false;
    },
    setItems: (state, { payload }: { payload: { items: Array<never> } }) => {
      state.items = payload.items;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
