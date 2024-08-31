import { useState } from 'react';
import { Input } from '@/components/ui/input';

const SudokuGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill('')));

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = [...grid];
    if (value === '' || (value >= 0 && value <= 9)) {
      newGrid[rowIndex][colIndex] = value;
      setGrid(newGrid);
    }
  };

  return (
    <div className="grid grid-cols-9 gap-0 max-w-md mx-auto">
      {grid.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={cell}
            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
            className="w-10 h-10 text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={1}
          />
        ))
      ))}
    </div>
  );
};

export default SudokuGrid;
