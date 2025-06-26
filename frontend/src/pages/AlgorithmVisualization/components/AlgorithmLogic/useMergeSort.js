import { useCallback } from 'react';

const useMergeSort = () => {
  const generateSteps = useCallback((arr) => {
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
        
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [],
          range: [start, mid],
          mergePhase: false,
          explanation: `Splitting left half: indices ${start} to ${mid}`
        });
        
        mergeSort(start, mid);
        
        steps.push({
          array: [...workingArray],
          comparing: [],
          swapping: [],
          range: [mid+1, end],
          mergePhase: false,
          explanation: `Splitting right half: indices ${mid+1} to ${end}`
        });
        
        mergeSort(mid + 1, end);
        
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
  }, []);

  return { generateSteps };
};

export default useMergeSort;