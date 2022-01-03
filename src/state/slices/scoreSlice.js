import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: true};

export const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    increment: (state) =>{
      state.value= true;
    },
    decrement: (state) => {
      state.value= false;
    }
  }
})

export const {increment, decrement} = scoreSlice.actions;
export default scoreSlice.reducer;