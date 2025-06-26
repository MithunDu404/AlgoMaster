import { useCallback } from 'react';

const useBubbleSort = () => {
  const generateSteps = useCallback((arr) => {
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
  }, []);

  return { generateSteps };
};

export default useBubbleSort;