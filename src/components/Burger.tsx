"use client";
import { useState } from 'react';
import cls from '@/helpers/ClassNames';

interface BurgerProps {
  className?: string;
}

interface BurgerLineProps {
  isOpen: boolean;
  lineIndex: number;
}

function BurgerLine({ isOpen, lineIndex }: BurgerLineProps): JSX.Element {
  const lineStyles = [
    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5',
    isOpen ? 'opacity-0' : 'opacity-100',
    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
  ];

  return (
    <span
      className={cls(
        'bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm',
        lineIndex === 2 ? 'my-0.5' : '',
        lineStyles[lineIndex - 1]
      )}
    />
  );
}

export default function Burger({ className = '' }: BurgerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className={cls('flex flex-col justify-center items-center', className)}
      aria-label="toggle navigation menu"
      type="button"
    >
      {[1, 2, 3].map((lineIndex) => (
        <BurgerLine key={lineIndex} isOpen={isOpen} lineIndex={lineIndex} />
      ))}
    </button>
  );
}
