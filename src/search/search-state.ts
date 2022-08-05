import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppRootState } from '../store';

interface SearchStateInterface {
  searchString: string;
  isSearchInProgress: boolean;
  items: Array<any>;
}

const initialState: SearchStateInterface = {
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
    setItems: (state, action: PayloadAction<Array<any>>) => {
      state.items = action.payload;
    },
  },
});

export const { setSearchString, startLoading, stopLoading, setItems } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const fetchItems = () => async (dispatch: AppDispatch, getState: () => AppRootState) => {
  const mockItems: any[] = [
    { id: 1, name: 'lofasz' },
    { id: 2, name: 'lofasz2' },
  ];

  dispatch(startLoading());
  const items = await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 500);
  });
  dispatch(setItems(items));
  dispatch(stopLoading());
};
