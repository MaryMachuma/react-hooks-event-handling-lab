import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad'; // Import Keypad component
import EyesOnMe from './components/EyesOnMe'; // Import EyesOnMe component

// Render both components directly
ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);