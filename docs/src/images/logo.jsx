import React from 'react';

function Logo() {
  return (
    <svg className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,30 5,40 5,60 20,70 35,60 35,40" style={{ stroke: '#F87171', fill: 'none', strokeWidth: 2}}/>
      <text className="text-center text-base font-bold" x="10" y="55" style={{ fill: '#F87171' }}>RE</text>
    </svg>
  );
}

export default Logo;


