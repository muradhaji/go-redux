import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CounterDisplay = (props) => {
  const { counter: counterSlice = null } = useSelector((state) => state) || {};

  const { value = 0 } = counterSlice || {};

  return (
    <>
      <h2>Counter value: {value}</h2>
    </>
  );
};

CounterDisplay.propTypes = {};

export default memo(CounterDisplay);
