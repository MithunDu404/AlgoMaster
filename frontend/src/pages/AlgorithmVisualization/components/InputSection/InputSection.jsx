import React, { useState } from 'react';
import './InputSection.css';

const InputSection = ({ 
  selectedCategory, 
  customInput, 
  setCustomInput, 
  handleCustomInput 
}) => {
  const [arraySize, setArraySize] = useState(10);
  
  if (selectedCategory !== 'sorting') return null;

  const generateRandomArray = () => {
    const randomArray = Array.from({length: arraySize}, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setCustomInput(randomArray.join(','));
  };

  return (
    <div className="input-section">
      <div className="random-array-controls">
        <input
          type="number"
          min="5"
          max="50"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          placeholder="Array size"
        />
        <button onClick={generateRandomArray}>Generate Random Array</button>
      </div>
      <input
        type="text"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder="Enter comma-separated numbers"
      />
      <button onClick={handleCustomInput}>Apply</button>
    </div>
  );
};

export default InputSection;