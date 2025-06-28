import React, { useRef, useEffect, useState } from 'react';
import './SortingVisualization.css';

const SortingVisualization = ({ 
  selectedAlgorithm, 
  animationSteps, 
  currentStep 
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    const timer = setTimeout(updateWidth, 10);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const currentData = animationSteps[currentStep];
  if (!currentData) return null;

  const maxValue = Math.max(...currentData.array);
  const gap = 2;
  const availableWidth = containerWidth - (gap * (currentData.array.length - 1));
  const barWidth = Math.max(availableWidth / currentData.array.length, 1);
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
                (currentData.mergePhase ? 'merging-range' : 'splitting-range') :
              (currentData.partitionRange && index >= currentData.partitionRange[0] && index <= currentData.partitionRange[1]) ? 'partition-range' :
              (currentData.keyIndex === index) ? 'key-element' :
              (currentData.minIndex === index) ? 'min-element' :
              (currentData.pivotIndex === index) ? 'pivot-element' : ''
            } ${currentData.currentMaxIndex === index ? 'current-max' : ''}`}
            style={{
              height: `${(value / maxValue) * 300}px`,
              width: `${barWidth}px`
            }}
          >
            <span className="bar-value">{value}</span>
          </div>
        ))}
        
        {/* Bubble Sort highlight */}
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
        
        {/* Merge Sort highlight */}
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
        
        {/* Quick Sort highlight */}
        {selectedAlgorithm === 'quickSort' && 
         currentData.partitionRange && 
         currentData.partitionRange.length === 2 && (
          <div 
            className="partition-highlight"
            style={{
              left: `${currentData.partitionRange[0] * totalBarWidth}px`,
              width: `${(currentData.partitionRange[1] - currentData.partitionRange[0] + 1) * totalBarWidth - gap}px`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SortingVisualization;