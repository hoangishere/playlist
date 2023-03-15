import { configureStore, createSlice } from '@reduxjs/toolkit';

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
     // 
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
})

// console.log(songsSlice.actions.addSong());
// console.log(store)
const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong("Some Song!"));

const finalState = store.getState();
console.log(JSON.stringify(finalState));