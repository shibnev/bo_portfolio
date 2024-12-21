
import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IButtonProps {
  children: children;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: className;
}

export default function Button({
  children,
  type,
  className = '',
  disabled
}: IButtonProps) {
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
