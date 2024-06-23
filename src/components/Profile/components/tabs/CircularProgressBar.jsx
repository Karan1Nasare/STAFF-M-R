// src/components/CircularProgressBar.jsx
import React from 'react';

const CircularProgressBar = ({
  size,
  strokeWidth,
  percentage,
  color,
  maxPercentage,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const maxOffset = circumference * ((100 - maxPercentage) / 100);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className='rotate-[-90deg]'>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        stroke='#3a3a3a' // Darker grey for the background circle
        fill='none'
        strokeDasharray={`${circumference * (maxPercentage / 100)} ${circumference}`}
        strokeDashoffset={maxOffset}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={color}
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default CircularProgressBar;
