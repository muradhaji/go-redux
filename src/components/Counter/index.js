import React, { lazy, memo } from 'react';
// import PropTypes from 'prop-types';

const CounterDisplay = lazy(() => import('./CounterDisplay'));
const CounterIncrements = lazy(() => import('./CounterIncrements'));
const CounterDecrements = lazy(() => import('./CounterDecrements'));
const CounterReset = lazy(() => import('./CounterReset'));

const Counter = (props) => {
  return (
    <>
      {CounterDisplay && (
        <div>
          <CounterDisplay />
        </div>
      )}
      {CounterIncrements && (
        <div>
          <CounterIncrements />
        </div>
      )}
      {CounterDecrements && (
        <div>
          <CounterDecrements />
        </div>
      )}
      {CounterReset && (
        <div>
          <CounterReset />
        </div>
      )}
    </>
  );
};

Counter.propTypes = {};

export default memo(Counter);

export { CounterDisplay, CounterIncrements, CounterDecrements, CounterReset };
