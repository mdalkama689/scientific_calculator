import React from 'react';
import { buttonVariants } from '../utils/buttonVariants';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const scientificButtons = [
    'sin', 'cos', 'tan',
    'log', 'ln', 'π',
    'e', '√', 'x²',
    'x^y', '(', ')',
  ];

  const memoryButtons = ['MC', 'MR', 'M+', 'M-'];

  const mainButtons = [
    'C', 'CE', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', 'ANS', '=',
  ];

  return (
    <div className="p-2 bg-slate-900">
      <div className="grid grid-cols-4 gap-2 mb-2">
        {memoryButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => onButtonClick(btn)}
            className={buttonVariants.memory}
          >
            {btn}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-2">
        {scientificButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => onButtonClick(btn)}
            className={buttonVariants.scientific}
          >
            {btn}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {mainButtons.map((btn) => {
          let variant: keyof typeof buttonVariants = 'number';
          
          if (['C', 'CE', '%'].includes(btn)) {
            variant = 'clear';
          } else if (['+', '-', '*', '/'].includes(btn)) {
            variant = 'operator';
          } else if (btn === '=') {
            variant = 'equals';
          } else if (btn === 'ANS') {
            variant = 'memory';
          } else if (btn === '0') {
            variant = 'zero';
          }
          
          return (
            <button
              key={btn}
              onClick={() => onButtonClick(btn)}
              className={buttonVariants[variant]}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keypad;