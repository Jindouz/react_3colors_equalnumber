import React, { useState } from 'react';

function NumberInput({ onNumberSubmit }) {
  const [number, setNumber] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    onNumberSubmit(number);
  };

  return (
    <div style={{backgroundColor: '#15e052'}}>
        <h2>NumberInput Component</h2>
        <h5>Equal Number Check:</h5>
      <input type="number" value={number} onChange={handleInputChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default NumberInput;