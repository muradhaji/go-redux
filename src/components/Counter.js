import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from '../Redux/Slices/counterSlice';

const Counter = (props) => {
  const dispatch = useDispatch();

  const { counter: counterSlice = null } = useSelector((state) => state) || {};

  const { value = 0 } = counterSlice || {};

  return (
    <>
      <div>Counter value: {value}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3));
        }}
      >
        Increment By 3
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(decrementByAmount(3));
        }}
      >
        Decrement By 3
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </>
  );
};

Counter.propTypes = {};

export default memo(Counter);
