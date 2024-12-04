import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IModalProps {
  className?: className
  children: children
}

export default function Modal({ className = '', children }: IModalProps) {
  return (
    <div className={classNames(className)}>
      <div className=''>{children}</div>
    </div>
  )
}
