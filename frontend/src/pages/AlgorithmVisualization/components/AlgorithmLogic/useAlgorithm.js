import { useState, useEffect, useRef } from 'react';
import useBubbleSort from './useBubbleSort';
import useMergeSort from './useMergeSort';
import useInsertionSort from './useInsertionSort';
import useSelectionSort from './useSelectionSort';
import useQuickSort from './useQuickSort';

const useAlgorithm = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [animationSteps, setAnimationSteps] = useState([]);
  const [currentExplanation, setCurrentExplanation] = useState('');
  const animationRef = useRef(null);

  const { generateSteps: generateBubbleSortSteps } = useBubbleSort();
  const { generateSteps: generateMergeSortSteps } = useMergeSort();
  const { generateSteps: generateInsertionSortSteps } = useInsertionSort();
  const { generateSteps: generateSelectionSortSteps } = useSelectionSort();
  const { generateSteps: generateQuickSortSteps } = useQuickSort();

  useEffect(() => {
    let steps = [];
    switch (selectedAlgorithm) {
      case 'bubbleSort':
        steps = generateBubbleSortSteps(data);
        break;
      case 'mergeSort':
        steps = generateMergeSortSteps(data);
        break;
      case 'insertionSort':
        steps = generateInsertionSortSteps(data);
        break;
      case 'selectionSort':
        steps = generateSelectionSortSteps(data);
        break;
      case 'quickSort':
        steps = generateQuickSortSteps(data);
        break;
      default:
        steps = generateBubbleSortSteps(data);
    }
    setAnimationSteps(steps);
    setCurrentStep(0);
    setCurrentExplanation(steps[0]?.explanation || '');
  }, [selectedAlgorithm, data, generateBubbleSortSteps, generateMergeSortSteps, 
      generateInsertionSortSteps, generateSelectionSortSteps, generateQuickSortSteps]);

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

  const handleCustomInput = (customInput) => {
    try {
      const newData = customInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
      if (newData.length > 0) {
        setData(newData);
      }
    } catch (error) {
      alert('Please enter valid comma-separated numbers');
    }
  };

  return {
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
  };
};

export default useAlgorithm;