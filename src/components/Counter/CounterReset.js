import React, { memo } from 'react';
import { connect } from 'react-redux';
import { reset } from '../../Redux/Slices/counterSlice';
import PropTypes from 'prop-types';

const CounterReset = ({ reset }) => {
  return (
    <button
      onClick={() => {
        reset();
      }}
    >
      Reset
    </button>
  );
};

CounterReset.propTypes = {
  reset: PropTypes.func,
};

export default connect(null, { reset })(memo(CounterReset));
