import React, { useRef, useEffect, useState } from 'react';
import './SortingVisualization.css';

const SortingVisualization = ({ 
  selectedAlgorithm, 
  animationSteps, 
  currentStep 
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0); // fallback width

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    const timer = setTimeout(updateWidth, 10);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () =>{
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const currentData = animationSteps[currentStep];
  if (!currentData) return null;

  const maxValue = Math.max(...currentData.array);
  const gap = 2;
  const availableWidth = containerWidth - (gap * (currentData.array.length - 1));
  const barWidth = Math.max(availableWidth / currentData.array.length, 20);
  const totalBarWidth = barWidth + gap;
  
  return (
    <div className="sorting-visualization">
      <div className="bars-container" ref={containerRef}>
        {currentData.array.map((value, index) => (
          <div
            key={index}
            className={`bar ${
              currentData.comparing.includes(index) ? 'comparing' :
              currentData.swapping.includes(index) ? 'swapping' :
              (currentData.range && index >= currentData.range[0] && index <= currentData.range[1]) ? 
                (currentData.mergePhase ? 'merging-range' : 'splitting-range') : ''
            } ${currentData.currentMaxIndex === index ? 'current-max' : ''}`}
            style={{
              height: `${(value / maxValue) * 300}px`,
              width: `${barWidth}px`
            }}
          >
            <span className="bar-value">{value}</span>
          </div>
        ))}
        
        {selectedAlgorithm === 'bubbleSort' && 
         currentData.swapping && 
         currentData.swapping.length === 2 && (
          <div 
            className="swap-highlight"
            style={{
              left: `${Math.min(...currentData.swapping) * totalBarWidth}px`,
              width: `${(Math.abs(currentData.swapping[0] - currentData.swapping[1]) + 1) * totalBarWidth - gap}px`
            }}
          />
        )}
        
        {selectedAlgorithm === 'mergeSort' && 
         currentData.range && 
         currentData.range.length === 2 && (
          <div 
            className={`range-highlight ${currentData.mergePhase ? 'merging' : 'splitting'}`}
            style={{
              left: `${currentData.range[0] * totalBarWidth}px`,
              width: `${(currentData.range[1] - currentData.range[0] + 1) * totalBarWidth - gap}px`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SortingVisualization;