// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  // Event handler for the focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for the blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      <button
        onFocus={handleFocus} // Add the focus event handler
        onBlur={handleBlur}   // Add the blur event handler
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;