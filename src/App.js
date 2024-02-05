import { useState } from "react";
import ColorPicker1 from "./ColorPicker1";
import ColorPicker2 from "./ColorPicker2";
import ColorPicker3 from "./ColorPicker3";
import NumberInput from "./NumberInput";


function App() {
  const [color, setColor] = useState('red')
  const [result, setResult] = useState('')

  const handleColorChange = (newColor) => {
    setColor(newColor)
  }

  const handleNumberSubmit = (number) => {
    const isEqual = number % 2 === 0;
    setResult(`${number} is ${isEqual ? 'an equal' : 'not an equal'} number`);
  };

  return (
    <div className="App" style={{ backgroundColor: '#75ffe8', textAlign: 'center' }}>
      <h1>App Component</h1>
      <h6>Current Color: <button style={{ backgroundColor: color }}>{color}</button></h6>
      <div><h3>{result}</h3></div>
      <br />
      <ColorPicker1 selectedColor={color} onColorChange={handleColorChange} />
      <br />

      <ColorPicker2 selectedColor={color} onColorChange={handleColorChange} />
      <br />
      <ColorPicker3 selectedColor={color} onColorChange={handleColorChange} />
      <br />
      <NumberInput onNumberSubmit={handleNumberSubmit} />
      <br />
    </div>
  );
}

export default App;
