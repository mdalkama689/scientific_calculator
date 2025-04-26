import React from 'react';

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="p-4 bg-slate-800 text-right">
      <div className="h-8 text-slate-300 text-lg overflow-x-auto whitespace-nowrap mb-1 font-mono">
        {input || '0'}
      </div>
      <div className="h-12 text-white text-3xl font-semibold overflow-x-auto whitespace-nowrap font-mono">
        {result || '0'}
      </div>
    </div>
  );
};

export default Display;