import React from 'react'

const ColorPicker1 = ({ selectedColor, onColorChange }) => {
  return (
    <div style={{backgroundColor: selectedColor}}>
        <h2>ColorPicker1 Component</h2>
        <h5>Current Color: <button style={{backgroundColor: selectedColor}}>{selectedColor}</button></h5>
        <input type="color" value={selectedColor} onChange={(e) => onColorChange(e.target.value)}/>
    </div>
  )
}

export default ColorPicker1