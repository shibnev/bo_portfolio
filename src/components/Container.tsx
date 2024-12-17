import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IContainerProps {
  className?: className
  children: children
}

export default function Container({ children, className = '' }: IContainerProps) {
  return (
    <div className={classNames('container mx-auto container-padding-x h-full', className)}>
      {children}
    </div>
  )
}
