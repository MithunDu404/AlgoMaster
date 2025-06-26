import React from 'react';
import './ExplanationPanel.css';

const ExplanationPanel = ({ currentExplanation }) => {
  return (
    <div className="explanation-panel">
      {currentExplanation}
    </div>
  );
};

export default ExplanationPanel;