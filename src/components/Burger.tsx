'use client'
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';

interface IBurgerLineProps {
  isOpen: boolean
  lineIndex: number
}

function BurgerLine({ isOpen, lineIndex }: IBurgerLineProps): JSX.Element {
  const lineStyles = [
    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5',
    isOpen ? 'opacity-0' : 'opacity-100',
    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
  ];

  return (
    <span
      className={classNames(
        'bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm group-hover:bg-white',
        lineIndex === 2 ? 'my-0.5' : '',
        lineStyles[lineIndex - 1]
      )}
    />
  );
}
interface IBurgerProps {
  className?: className
  isOpen: boolean
  onClick?: () => void
}

export default function Burger({ className = '', isOpen, onClick }: IBurgerProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classNames('flex flex-col justify-center items-center group', className)}
      aria-label="toggle navigation menu"
      type="button"
    >
      {[1, 2, 3].map((lineIndex) => (
        <BurgerLine key={lineIndex} isOpen={isOpen} lineIndex={lineIndex} />
      ))}
    </button>
  );
}
