import { useCallback } from 'react';

const useQuickSort = () => {
  const generateSteps = useCallback((arr) => {
    const steps = [];
    const workingArray = [...arr];

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      pivotIndex: -1,
      partitionRange: [],
      explanation: 'Starting Quick Sort algorithm'
    });

    function quickSort(start, end) {
      if (start < end) {
        if(end-start+1<=2){

          steps.push({
            array: [...workingArray],
            comparing: [start,end],
            swapping: [],
            pivotIndex: -1,
            partitionRange: [start, end],
            explanation: `Comparing element at ${start} (${workingArray[start]}) with pivot ${workingArray[end]}`
          });

          if(workingArray[start] > workingArray[end]){
            [workingArray[start], workingArray[end]] = [workingArray[end], workingArray[start]];
            steps.push({
              array: [...workingArray],
              comparing: [],
              swapping: [start, end],
              pivotIndex: -1,
              partitionRange: [start, end],
              explanation: `Swapping elements at ${start} and ${end}`
            });
          }
          return;
        }
        const partitionIndex = partition(start, end);
        if(partitionIndex-1 > start){
          steps.push({
            array: [...workingArray],
            comparing: [],
            swapping: [],
            pivotIndex: -1,
            partitionRange: [start, partitionIndex - 1],
            explanation: `Sorting left partition from ${start} to ${partitionIndex - 1}`
          });
          quickSort(start, partitionIndex - 1);
        }

        if(partitionIndex+1 < end){
          steps.push({
            array: [...workingArray],
            comparing: [],
            swapping: [],
            pivotIndex: -1,
            partitionRange: [partitionIndex + 1, end],
            explanation: `Sorting right partition from ${partitionIndex + 1} to ${end}`
          });
          quickSort(partitionIndex + 1, end);
        }
      }
    }

    function partition(start, end) {
      const pivot = workingArray[end];
      let partitionIndex = start;

      steps.push({
        array: [...workingArray],
        comparing: [],
        swapping: [],
        pivotIndex: end,
        partitionRange: [start, end],
        explanation: `Selecting pivot at index ${end} (${pivot})`
      });

      for (let i = start; i < end; i++) {
        steps.push({
          array: [...workingArray],
          comparing: [i, end],
          swapping: [],
          pivotIndex: end,
          partitionRange: [start, end],
          explanation: `Comparing element at ${i} (${workingArray[i]}) with pivot ${pivot}`
        });

        if (workingArray[i] <= pivot) {
          if (i !== partitionIndex) {
            [workingArray[i], workingArray[partitionIndex]] = [workingArray[partitionIndex], workingArray[i]];
            steps.push({
              array: [...workingArray],
              comparing: [],
              swapping: [i, partitionIndex],
              pivotIndex: end,
              partitionRange: [start, end],
              explanation: `Swapping elements at ${i} and ${partitionIndex}`
            });
          }
          partitionIndex++;
        }
      }

      [workingArray[partitionIndex], workingArray[end]] = [workingArray[end], workingArray[partitionIndex]];
      steps.push({
        array: [...workingArray],
        comparing: [],
        swapping: [partitionIndex, end],
        pivotIndex: -1,
        partitionRange: [],
        explanation: `Placing pivot in final position at ${partitionIndex}`
      });

      return partitionIndex;
    }

    quickSort(0, workingArray.length - 1);

    steps.push({
      array: [...workingArray],
      comparing: [],
      swapping: [],
      pivotIndex: -1,
      partitionRange: [],
      explanation: 'Quick Sort completed! Array is now sorted.'
    });

    return steps;
  }, []);

  return { generateSteps };
};

export default useQuickSort;