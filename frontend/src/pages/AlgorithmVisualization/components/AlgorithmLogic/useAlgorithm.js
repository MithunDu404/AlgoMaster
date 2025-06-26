import { useState, useEffect, useRef } from 'react';
import useBubbleSort from './useBubbleSort';
import useMergeSort from './useMergeSort';

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

  useEffect(() => {
    let steps = [];
    if (selectedAlgorithm === 'bubbleSort') {
      steps = generateBubbleSortSteps(data);
    } else if (selectedAlgorithm === 'mergeSort') {
      steps = generateMergeSortSteps(data);
    }
    setAnimationSteps(steps);
    setCurrentStep(0);
    setCurrentExplanation(steps[0]?.explanation || '');
  }, [selectedAlgorithm, data, generateBubbleSortSteps, generateMergeSortSteps]);

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