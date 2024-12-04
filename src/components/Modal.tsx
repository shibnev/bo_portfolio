import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IModalProps {
  className?: className
  children: children
  isShow: boolean
}

export default function Modal({ className = '', children, isShow = false }: IModalProps) {
  return (
    <div className={
      classNames(
        { 'opacity-0': !isShow },
        { 'pointer-events-none': !isShow },
        'absolute w-full h-full left-0 bottom-0 right-0',
        className,
      )
    }>
      <div className=''>{children}</div>
    </div>
  )
}
