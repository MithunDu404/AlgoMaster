import { useCallback } from 'react';

const useInsertionSort = () => {
  const generateSteps = useCallback((arr) => {
    const steps = [];
    const workingArray = [...arr];
    const n = workingArray.length;

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      keyIndex: -1,
      explanation: 'Starting Insertion Sort algorithm'
    });

    for (let i = 1; i < n; i++) {
      const key = workingArray[i];
      let j = i - 1;

      steps.push({
        array: [...workingArray],
        comparing: [i, j],
        swapping: [],
        keyIndex: i,
        explanation: `Selecting key element at index ${i} (${key})`
      });

      while (j >= 0 && workingArray[j] > key) {
        steps.push({
          array: [...workingArray],
          comparing: [j, j + 1],
          swapping: [],
          keyIndex: i,
          explanation: `Comparing key ${key} with element at index ${j} (${workingArray[j]})`
        });

        workingArray[j + 1] = workingArray[j];
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [j, j + 1],
          keyIndex: i,
          explanation: `Shifting element ${workingArray[j]} from index ${j} to ${j + 1}`
        });

        j--;
      }

      workingArray[j + 1] = key;
      steps.push({
        array: [...workingArray],
        comparing: [],
        swapping: [j + 1],
        keyIndex: -1,
        explanation: `Inserting key ${key} at correct position ${j + 1}`
      });
    }

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      keyIndex: -1,
      explanation: 'Insertion Sort completed! Array is now sorted.'
    });

    return steps;
  }, []);

  return { generateSteps };
};

export default useInsertionSort;