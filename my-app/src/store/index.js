import { configureStore, createSlice } from '@reduxjs/toolkit';

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
  }
})

const songsSlice = createSlice ({
  name: 'song',
  initialState: [],
  reducers: {
    //'song' + '/' + 'addSong' = 'song/addSong'
    // this action will perform for us by addSong
    addSong(state, action) {
      // this state is not the big state object
      // it is a piece of state that get manager by this reducers
      state.push(action.payload);
    },
    //'song' + '/' + 'RemoveSong' = 'song/RemoveSong'
    removeSong(state, action) {
     // action.payload === string, the song we want to remove
     // state is the array of song
     const index = state.indexOf(action.payload);
     state.splice(index, 1);
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
})

console.log(store.getState());
export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
