import React from 'react'

const ColorPicker2 = ({ selectedColor, onColorChange }) => {
  return (
    <div style={{backgroundColor: selectedColor}}>
        <h2>ColorPicker2 Component</h2>
        <h5>Current Color: <button style={{backgroundColor: selectedColor}}>{selectedColor}</button></h5>
        <input type="color" value={selectedColor} onChange={(e) => onColorChange(e.target.value)}/>
    </div>
  )
}

export default ColorPicker2