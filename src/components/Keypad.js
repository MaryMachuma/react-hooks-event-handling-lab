// Code Keypad Component Here

import React from 'react';

function Keypad() {
  // Event handler for the input change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password"
        onChange={handleChange} // Add the event handler
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;