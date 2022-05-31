import React, { memo } from 'react';
import { connect } from 'react-redux';
import { increment, incrementByAmount } from '../../Redux/Slices/counterSlice';
import PropTypes from 'prop-types';

const CounterIncrements = ({ increment, incrementByAmount }) => {
  return (
    <>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          incrementByAmount(3);
        }}
      >
        Increment By 3
      </button>
    </>
  );
};

CounterIncrements.propTypes = {
  increment: PropTypes.func,
  incrementByAmount: PropTypes.func,
};

export default connect(null, { increment, incrementByAmount })(
  memo(CounterIncrements)
);
