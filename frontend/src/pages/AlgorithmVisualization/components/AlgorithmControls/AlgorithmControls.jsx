import React from 'react';
import './AlgorithmControls.css';
import ControlPanel from '../ControlPanel/ControlPanel';
import InputSection from '../InputSection/InputSection';

const AlgorithmControls = ({
  isPlaying,
  handlePlayPause,
  handleStepBack,
  handleStepForward,
  handleReset,
  speed,
  setSpeed,
  selectedCategory,
  customInput,
  setCustomInput,
  handleCustomInput
}) => {
  return (
    <div className="algorithm-controls">
      <ControlPanel
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleStepBack={handleStepBack}
        handleStepForward={handleStepForward}
        handleReset={handleReset}
        speed={speed}
        setSpeed={setSpeed}
      />
      <InputSection
        selectedCategory={selectedCategory}
        customInput={customInput}
        setCustomInput={setCustomInput}
        handleCustomInput={handleCustomInput}
      />
    </div>
  );
};

export default AlgorithmControls;