import React, { memo } from 'react';
import { connect } from 'react-redux';
import { decrement, decrementByAmount } from '../../Redux/Slices/counterSlice';
import PropTypes from 'prop-types';

const CounterDecrements = ({ decrement, decrementByAmount }) => {
  return (
    <>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          decrementByAmount(3);
        }}
      >
        Decrement By 3
      </button>
    </>
  );
};

CounterDecrements.propTypes = {
  decrement: PropTypes.func,
  decrementByAmount: PropTypes.func,
};

export default connect(null, { decrement, decrementByAmount })(
  memo(CounterDecrements)
);
