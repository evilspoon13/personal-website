"use client";

import React from 'react';

const LineNumbers: React.FC = () => {
  const lines = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="line-gutter" aria-hidden="true">
      {lines.map((num) => (
        <div key={num} className="line-num">
          {num}
        </div>
      ))}
    </div>
  );
};

export default LineNumbers;
