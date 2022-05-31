import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import {
  CounterDecrements,
  CounterDisplay,
  CounterIncrements,
  CounterReset,
} from './components/Counter';

function App() {
  return (
    <Suspense fallback={<div className='suspense-loader'>LOADING ...</div>}>
      <Provider store={store}>
        {/* {Counter && <Counter />} */}
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
      </Provider>
    </Suspense>
  );
}

export default App;
