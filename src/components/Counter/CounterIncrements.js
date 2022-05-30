import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../../Redux/Slices/counterSlice';
// import PropTypes from 'prop-types'

const CounterIncrements = (props) => {
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

CounterIncrements.propTypes = {};

export default memo(CounterIncrements);
