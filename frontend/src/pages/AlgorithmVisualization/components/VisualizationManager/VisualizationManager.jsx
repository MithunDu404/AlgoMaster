import React from 'react';
import './VisualizationManager.css';
import SortingVisualization from '../SortingVisualization/SortingVisualization';
import ExplanationPanel from '../ExplanationPanel/ExplanationPanel';

const VisualizationManager = ({
  selectedAlgorithm,
  animationSteps,
  currentStep,
  currentExplanation
}) => {
  return (
    <div className="visualization-manager">
      <div className="visualization-area">
        <SortingVisualization
          selectedAlgorithm={selectedAlgorithm}
          animationSteps={animationSteps}
          currentStep={currentStep}
        />
      </div>
      <ExplanationPanel currentExplanation={currentExplanation} />
    </div>
  );
};

export default VisualizationManager;