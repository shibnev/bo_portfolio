
import classNames from '@/helpers/ClassNames';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, type, className = '', disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={classNames(
        'text-sm text-white bg-primaryDark px-4 py-2 rounded-md w-max',
        className,
      )}
      type={type}
    >
      {children}
    </button>
  )
}
