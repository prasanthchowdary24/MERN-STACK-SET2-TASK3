import React from 'react';
import ColorPicker from './Components/ColorPicker.js';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <ColorPicker colors={['yellow', 'grey', 'brown','pink', 'purple']} />
    </div>
  );
}

export default App;