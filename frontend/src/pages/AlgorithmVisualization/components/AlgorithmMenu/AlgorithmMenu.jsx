import React from 'react';
import './AlgorithmMenu.css';

const AlgorithmMenu = ({ 
  selectedCategory, 
  setSelectedCategory,  
  selectedAlgorithm, 
  setSelectedAlgorithm 
}) => {
  return (
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
            <button 
              className={selectedAlgorithm === 'insertionSort' ? 'active' : ''}
              onClick={() => setSelectedAlgorithm('insertionSort')}
            >
              Insertion Sort
            </button>
            <button 
              className={selectedAlgorithm === 'selectionSort' ? 'active' : ''}
              onClick={() => setSelectedAlgorithm('selectionSort')}
            >
              Selection Sort
            </button>
            <button 
              className={selectedAlgorithm === 'quickSort' ? 'active' : ''}
              onClick={() => setSelectedAlgorithm('quickSort')}
            >
              Quick Sort
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AlgorithmMenu;