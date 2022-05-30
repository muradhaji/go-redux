import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../../Redux/Slices/counterSlice';
// import PropTypes from 'prop-types';

const CounterReset = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(reset());
      }}
    >
      Reset
    </button>
  );
};

CounterReset.propTypes = {};

export default CounterReset;
