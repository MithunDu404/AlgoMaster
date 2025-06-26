import React from 'react';
import './InputSection.css';

const InputSection = ({ 
  selectedCategory, 
  customInput, 
  setCustomInput, 
  handleCustomInput 
}) => {
  if (selectedCategory !== 'sorting') return null;

  return (
    <div className="input-section">
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