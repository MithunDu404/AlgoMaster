import React, { useState, useEffect, useRef } from 'react';
import './AlgorithmVisualization.css';
import AlgorithmMenu from './components/AlgorithmMenu/AlgorithmMenu';
import ControlPanel from './components/ControlPanel/ControlPanel';
import InputSection from './components/InputSection/InputSection';
import SortingVisualization from './components/SortingVisualization/SortingVisualization';
import ExplanationPanel from './components/ExplanationPanel/ExplanationPanel';

const AlgorithmVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState('sorting');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [customInput, setCustomInput] = useState('64,34,25,12,22,11,90');
  const [animationSteps, setAnimationSteps] = useState([]);
  const [currentExplanation, setCurrentExplanation] = useState('');
  const animationRef = useRef(null);

  // Generate animation steps for bubble sort
  const generateBubbleSortSteps = (arr) => {
    const steps = [];
    const workingArray = [...arr];
    const n = workingArray.length;

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      currentMaxIndex: -1,
      explanation: 'Starting Bubble Sort algorithm'
    });

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          array: [...workingArray],
          comparing: [j, j + 1],
          swapping: [],
          currentMaxIndex: n - i - 1,
          explanation: `Comparing elements at positions ${j} and ${j + 1}: ${workingArray[j]} and ${workingArray[j + 1]}`
        });

        if (workingArray[j] > workingArray[j + 1]) {
          [workingArray[j], workingArray[j + 1]] = [workingArray[j + 1], workingArray[j]];
          steps.push({
            array: [...workingArray],
            comparing: [],
            swapping: [j, j + 1],
            currentMaxIndex: n - i - 1,
            explanation: `Swapped ${workingArray[j + 1]} and ${workingArray[j]} because ${workingArray[j + 1]} > ${workingArray[j]}`
          });
        }
      }
    }

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      currentMaxIndex: -1,
      explanation: 'Bubble Sort completed! Array is now sorted.'
    });

    return steps;
  };

  // Generate animation steps for merge sort
  const generateMergeSortSteps = (arr) => {
    const steps = [];
    const workingArray = [...arr];
    
    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      range: [],
      mergePhase: false,
      explanation: 'Starting Merge Sort algorithm'
    });

    function mergeSort(start, end, mergePhase = false) {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        
        // Show left half being processed
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [],
          range: [start, mid],
          mergePhase: false,
          explanation: `Splitting left half: indices ${start} to ${mid}`
        });
        
        mergeSort(start, mid);
        
        // Show right half being processed
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [],
          range: [mid+1, end],
          mergePhase: false,
          explanation: `Splitting right half: indices ${mid+1} to ${end}`
        });
        
        mergeSort(mid + 1, end);
        
        // Show merging
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [],
          range: [start, end],
          mergePhase: true,
          explanation: `Merging: indices ${start} to ${end}`
        });
        
        merge(start, mid, end);
      }
    }

    function merge(start, mid, end) {
      let i = start;
      let j = mid + 1;
      const temp = [];
      
      while (i <= mid && j <= end) {
        steps.push({
          array: [...workingArray],
          comparing: [i, j],
          swapping: [],
          range: [start, end],
          mergePhase: true,
          explanation: `Comparing elements at ${i} (${workingArray[i]}) and ${j} (${workingArray[j]})`
        });
        
        if (workingArray[i] <= workingArray[j]) {
          temp.push(workingArray[i++]);
        } else {
          temp.push(workingArray[j++]);
        }
      }
      
      while (i <= mid) temp.push(workingArray[i++]);
      while (j <= end) temp.push(workingArray[j++]);
      
      for (let k = start; k <= end; k++) {
        workingArray[k] = temp[k - start];
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [k],
          range: [start, end],
          mergePhase: true,
          explanation: `Placing element ${workingArray[k]} at position ${k}`
        });
      }
    }

    mergeSort(0, workingArray.length - 1);
    
    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      range: [],
      mergePhase: false,
      explanation: 'Merge Sort completed! Array is now sorted.'
    });

    return steps;
  };

  useEffect(() => {
    if (selectedCategory === 'sorting') {
      let steps = [];
      if (selectedAlgorithm === 'bubbleSort') {
        steps = generateBubbleSortSteps(data);
      } else if (selectedAlgorithm === 'mergeSort') {
        steps = generateMergeSortSteps(data);
      }
      setAnimationSteps(steps);
      setCurrentStep(0);
      setCurrentExplanation(steps[0]?.explanation || '');
    }
  }, [selectedAlgorithm, data]);

  useEffect(() => {
    if (animationSteps.length > 0 && currentStep < animationSteps.length) {
      setCurrentExplanation(animationSteps[currentStep].explanation);
    }
  }, [currentStep, animationSteps]);

  useEffect(() => {
    if (isPlaying && currentStep < animationSteps.length - 1) {
      animationRef.current = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, speed);
    } else {
      setIsPlaying(false);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isPlaying, currentStep, speed, animationSteps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepForward = () => {
    if (currentStep < animationSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleCustomInput = () => {
    try {
      const newData = customInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
      if (newData.length > 0) {
        setData(newData);
      }
    } catch (error) {
      alert('Please enter valid comma-separated numbers');
    }
  };

  const renderSortingVisualization = () => {
    const currentData = animationSteps[currentStep];
    if (!currentData) return null;

    const maxValue = Math.max(...currentData.array);
    const barWidth = Math.max(600 / currentData.array.length - 2, 20);
    const gap = 2;
    const totalBarWidth = barWidth + gap;
    
    return (
      <div className="sorting-visualization">
        <div className="bars-container">
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

  return (
    <div className="algorithm-visualization">
      <div className="algorithm-menu">
        <div className="category-selector">
          <button 
            className={selectedCategory === 'sorting' ? 'active' : ''}
            onClick={() => setSelectedCategory('sorting')}
          >
            Sorting
          </button>
        </div>
        
        <div className="algorithm-selector">
          {selectedCategory === 'sorting' && (
            <>
              <button 
                className={selectedAlgorithm === 'bubbleSort' ? 'active' : ''}
                onClick={() => setSelectedAlgorithm('bubbleSort')}
              >
                Bubble Sort
              </button>
              <button 
                className={selectedAlgorithm === 'mergeSort' ? 'active' : ''}
                onClick={() => setSelectedAlgorithm('mergeSort')}
              >
                Merge Sort
              </button>
            </>
          )}
        </div>
      </div>

      <div className="main-content">
        <div className="center-panel">
          <div className="visualization-area">
            {renderSortingVisualization()}
          </div>
          <div className="explanation-panel">
            {currentExplanation}
          </div>
          
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
          
          {selectedCategory === 'sorting' && (
            <div className="input-section">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter comma-separated numbers"
              />
              <button onClick={handleCustomInput}>Apply</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualization;