import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

//Selector
export const getFilter = state => state.filter.filter;
