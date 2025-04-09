'use client';

import React, { ReactNode } from 'react';
import Arrow from '@/app/assets/icons/svgs/Arrow';

type ButtonProps = {
  children: ReactNode;
 
  className?: string;
};

const Button = ({ children, className = '' }: ButtonProps) => {
  return (
    <button
      
      className={`
        flex items-center justify-between gap-2 
        border-2 border-cyan-400 text-cyan-300 
        px-6 py-2 md:px-5 md:py-2.5 rounded-4xl 
        hover:bg-cyan-400 hover:text-black 
        transition-all duration-300 
        text-sm sm:text-base md:text-xl 
        ${className}
      `}
    >
      {children}
      <div className='bg-cyan-400 p-2.5 rounded-full translate-x-[35%]'>
        <Arrow className='w-3.5' />
      </div>
    </button>
  );
};


export default Button;
