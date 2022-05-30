import { Suspense } from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './Redux/store';
import './App.css';

// const Counter = lazy(() => import('./components/Counter'));

function App() {
  return (
    <Suspense fallback={<div className='suspense-loader'>LOADING ...</div>}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </Suspense>
  );
}

export default App;
