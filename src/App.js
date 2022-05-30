import './App.css';
import './App.scss';
import React from 'react';
import Text from './stories/Text';

function App() {
  console.log('debug env: ', process.env);
  return (
    <>
      <Text level='xxl'>Text XXL</Text>
      <Text level='xl'>Text XL</Text>
      <Text level='l'>Text L</Text>
      <Text></Text>
      <Text level='m'>Text M</Text>
      <Text level='s'>Text S</Text>
      <Text level='xs'>Text XS</Text>
      <div className='test-div'>
        <p className='test-p'>Paragraph</p>
      </div>
    </>
  );
}

export default App;
