import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      if (state.value !== 0) {
        state.value = 0;
      }
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
