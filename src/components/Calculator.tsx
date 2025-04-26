import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { evaluateExpression } from '../utils/calculations';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [memory, setMemory] = useState<number>(0);

  const handleButtonClick = (value: string) => {
    switch (value) {
      case '=':
        try {
          const calculatedResult = evaluateExpression(input);
          setResult(calculatedResult.toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setInput('');
        setResult('');
        break;
      case 'CE':
        setInput(input.slice(0, -1));
        break;
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setInput(input + memory.toString());
        break;
      case 'M+':
        try {
          const currentValue = evaluateExpression(input);
          setMemory(memory + currentValue);
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'M-':
        try {
          const currentValue = evaluateExpression(input);
          setMemory(memory - currentValue);
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'sin':
        setInput(input + 'sin(');
        break;
      case 'cos':
        setInput(input + 'cos(');
        break;
      case 'tan':
        setInput(input + 'tan(');
        break;
      case 'log':
        setInput(input + 'log(');
        break;
      case 'ln':
        setInput(input + 'ln(');
        break;
      case 'π':
        setInput(input + 'π');
        break;
      case 'e':
        setInput(input + 'e');
        break;
      case '√':
        setInput(input + '√(');
        break;
      case 'x²':
        setInput(input + '^2');
        break;
      case 'x^y':
        setInput(input + '^');
        break;
      case 'ANS':
        setInput(input + result);
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  const handleKeyboardInput = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const key = e.key;

    if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Escape') {
      handleButtonClick('C');
    } else if (key === 'Backspace') {
      handleButtonClick('CE');
    } else if (/[0-9+\-*/()^.]/.test(key)) {
      handleButtonClick(key);
    }
  };

  return (
    <div 
      className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden max-w-md w-full mx-auto"
      tabIndex={0}
      onKeyDown={handleKeyboardInput}
    >
      <Display input={input} result={result} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;