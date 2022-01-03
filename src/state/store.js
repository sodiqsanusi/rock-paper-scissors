import {configureStore} from '@reduxjs/toolkit';
import scoreReducer from './slices/scoreSlice';
import rulesReducer from './slices/rulesSlice';

const store = configureStore({
  reducer:{
    scores: scoreReducer,
    rules: rulesReducer,
  }
});

export default store;