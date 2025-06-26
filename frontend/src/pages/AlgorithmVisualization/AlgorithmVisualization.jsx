import React from 'react';
import './AlgorithmVisualization.css';
import AlgorithmMenu from './components/AlgorithmMenu/AlgorithmMenu';
import AlgorithmControls from './components/AlgorithmControls/AlgorithmControls';
import VisualizationManager from './components/VisualizationManager/VisualizationManager';
import useAlgorithm from './components/AlgorithmLogic/useAlgorithm';

const AlgorithmVisualization = () => {
  const {
    selectedAlgorithm,
    setSelectedAlgorithm,
    isPlaying,
    speed,
    setSpeed,
    currentStep,
    data,
    setData,
    animationSteps,
    currentExplanation,
    handlePlayPause,
    handleStepForward,
    handleStepBack,
    handleReset,
    handleCustomInput
  } = useAlgorithm();

  const [customInput, setCustomInput] = React.useState('64,34,25,12,22,11,90');
  const [selectedCategory, setSelectedCategory] = React.useState('sorting');

  const onCustomInput = () => {
    handleCustomInput(customInput);
  };

  return (
    <div className="algorithm-visualization">
      <AlgorithmMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />

      <div className="main-content">
        <div className="center-panel">
          <VisualizationManager
            selectedAlgorithm={selectedAlgorithm}
            animationSteps={animationSteps}
            currentStep={currentStep}
            currentExplanation={currentExplanation}
          />
          
          <AlgorithmControls
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
            handleStepBack={handleStepBack}
            handleStepForward={handleStepForward}
            handleReset={handleReset}
            speed={speed}
            setSpeed={setSpeed}
            selectedCategory={selectedCategory}
            customInput={customInput}
            setCustomInput={setCustomInput}
            handleCustomInput={onCustomInput}
          />
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualization;