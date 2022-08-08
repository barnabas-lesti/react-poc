import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { httpApi } from '../common/httpApi';
import { AppDispatch, AppRootState } from '../store';
import { SearchListItemInterface } from './SearchListItemInterface';

type SearchStateType = {
  searchString: string;
  isSearchInProgress: boolean;
  items: Array<SearchListItemInterface>;
}

const initialState: SearchStateType = {
  searchString: '',
  isSearchInProgress: true,
  items: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    startLoading: (state) => {
      state.isSearchInProgress = true;
    },
    stopLoading: (state) => {
      state.isSearchInProgress = false;
    },
    setItems: (state, action: PayloadAction<Array<SearchListItemInterface>>) => {
      state.items = action.payload;
    },
  },
});

export const { setSearchString, startLoading, stopLoading, setItems } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const fetchItems = () => async (dispatch: AppDispatch, getState: () => AppRootState) => {
  const { search: { searchString } } = getState();
  dispatch(startLoading());

  const items = await httpApi.get<Array<SearchListItemInterface>>(`/search?searchString=${searchString}`)

  dispatch(setItems(items));
  dispatch(stopLoading());
};
