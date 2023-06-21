import React, { useState } from 'react';


interface BingoNumberGeneratorProps {
  onDrawnNumber: (newDrawnNumber: Number) => void;
}

export default function BingoNumberGenerator ({onDrawnNumber}: BingoNumberGeneratorProps) {

  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);
  const [bingoNumbers, setBingoNumbers] = useState<number[] | number[]>(Array.from({ length: 75 }, (_, i) => i + 1));

  const generateNumber = () => {
    const index = Math.floor(Math.random() * bingoNumbers.length);
    const number = bingoNumbers[index];
    bingoNumbers.splice(index, 1); // Remove the number from the array so it can't be generated again
    setBingoNumbers(bingoNumbers)
    // console.log("remaining numbers", bingoNumbers)
    setGeneratedNumber(number)
    onDrawnNumber(number)
  };

  return (
    <div>
      <button onClick={generateNumber}>Generate number</button>
      {generatedNumber && <div>The next bingo number is: {generatedNumber}</div>}
    </div>
  );
};