import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, decrementByAmount } from '../../Redux/Slices/counterSlice';
// import PropTypes from 'prop-types';

const CounterDecrements = (props) => {
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

CounterDecrements.propTypes = {};

export default CounterDecrements;
