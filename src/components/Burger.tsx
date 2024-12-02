"use client"
import { useState } from 'react';
import cls from '@/helpers/ClassNames';

export default function Burger({ className }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick} className={cls('flex flex-col justify-center items-center', className)}>
      <span className={`bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
      <span className={`bg-primaryLight block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
          'opacity-0' : 'opacity-100'
        }`} >
      </span>
      <span className={`bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>

    </button>
  )
}
