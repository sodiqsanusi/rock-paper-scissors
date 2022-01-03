import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: false};
export const rulesSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    open: (state)=> {
      state.value = !state.value
    }
  }
});

export const {open} = rulesSlice.actions;
export default rulesSlice.reducer;