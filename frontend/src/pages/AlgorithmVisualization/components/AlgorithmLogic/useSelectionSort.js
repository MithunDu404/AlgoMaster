import { useCallback } from 'react';

const useSelectionSort = () => {
  const generateSteps = useCallback((arr) => {
    const steps = [];
    const workingArray = [...arr];
    const n = workingArray.length;

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      minIndex: -1,
      currentIndex: -1,
      explanation: 'Starting Selection Sort algorithm'
    });

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      steps.push({
        array: [...workingArray],
        comparing: [],
        swapping: [],
        minIndex,
        currentIndex: i,
        explanation: `Starting pass ${i + 1}, assuming minimum is at index ${minIndex} (${workingArray[minIndex]})`
      });

      for (let j = i + 1; j < n; j++) {
        steps.push({
          array: [...workingArray],
          comparing: [minIndex, j],
          swapping: [],
          minIndex,
          currentIndex: i,
          explanation: `Comparing current minimum ${workingArray[minIndex]} with element at ${j} (${workingArray[j]})`
        });

        if (workingArray[j] < workingArray[minIndex]) {
          minIndex = j;
          steps.push({
            array: [...workingArray],
            comparing: [],
            swapping: [],
            minIndex,
            currentIndex: i,
            explanation: `New minimum found at index ${minIndex} (${workingArray[minIndex]})`
          });
        }
      }

      if (minIndex !== i) {
        [workingArray[i], workingArray[minIndex]] = [workingArray[minIndex], workingArray[i]];
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [i, minIndex],
          minIndex: -1,
          currentIndex: i,
          explanation: `Swapping elements at positions ${i} and ${minIndex}`
        });
      }
    }

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      minIndex: -1,
      currentIndex: -1,
      explanation: 'Selection Sort completed! Array is now sorted.'
    });

    return steps;
  }, []);

  return { generateSteps };
};

export default useSelectionSort;