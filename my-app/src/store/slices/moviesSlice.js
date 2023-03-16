import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice= createSlice({
  name:'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action){
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  /* this state is only for list of movies*/
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;