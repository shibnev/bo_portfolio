import classNames from '@/helpers/ClassNames';
import { children, className, ContainerStyle, HeaderStyle } from '@/types';

interface IContainerProps {
  className?: className
  children: children
}

export default function Container({ children, className = '' }: IContainerProps) {
  return (
    <div className={classNames(`container mx-auto ${ContainerStyle.padding}`, className)}>
      {children}
    </div>
  )
}
