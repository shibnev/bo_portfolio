import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IAsideProps {
  children?: children
  className: className
}

export default function Aside({ children, className = '' }: IAsideProps) {
  return (
    <div
      className={
        classNames(
          'border-solid border-dark border-b md:border-r',
          className,
        )
      }
    >
      {children}
    </div>
  )
}
