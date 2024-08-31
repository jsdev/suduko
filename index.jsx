import { useState } from 'react';
import { Input } from '@/components/ui/input';

const SudokuGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill('')));

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = value;
    setGrid(newGrid);
  };

  return (
    <div className="grid grid-cols-9 gap-0 max-w-md mx-auto">
      {grid.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Input
            key={`${rowIndex}-${colIndex}`}
            type="number"
            value={cell || ''}
            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
            className="w-10 h-10 text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min={1}
            max={9}
          />
        ))
      ))}
    </div>
  );
};

export default SudokuGrid;
