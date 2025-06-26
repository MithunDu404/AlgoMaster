import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ 
  isPlaying, 
  handlePlayPause, 
  handleStepBack, 
  handleStepForward, 
  handleReset, 
  speed, 
  setSpeed 
}) => {
  return (
    <div className="control-panel">
      <button onClick={handlePlayPause} className="control-btn">
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <button onClick={handleStepBack} className="control-btn">⏮️</button>
      <button onClick={handleStepForward} className="control-btn">⏭️</button>
      <button onClick={handleReset} className="control-btn">🔄</button>
      
      <div className="speed-control">
        <label>Speed:</label>
        <input
          type="range"
          min="100"
          max="2000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span>{speed}ms</span>
      </div>
    </div>
  );
};

export default ControlPanel;