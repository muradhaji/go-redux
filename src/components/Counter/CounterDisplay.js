import React, { memo } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const CounterDisplay = ({ counterSlice }) => {
  const { value = 0 } = counterSlice || {};

  return (
    <>
      <h2>Counter value: {value}</h2>
    </>
  );
};

CounterDisplay.propTypes = {};

const mapStateToProps = (state) => {
  const { counter: counterSlice = null } = state || {};
  return { counterSlice };
};

export default connect(mapStateToProps, {})(memo(CounterDisplay));
