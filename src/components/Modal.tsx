'use client'

import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';

interface IModalProps {
  className?: className
  children: children
  isShow: boolean
  position?: string
  onClick?: () => void
}

export default function Modal({ className = '', children, isShow = false, position = 'absolute', onClick }: IModalProps) {
  if (!isShow) return null;

  return (
    <div
      onClick={onClick}
      className={
        classNames(
          {
            'opacity-0': !isShow,
            'pointer-events-none': !isShow,
          },
          'w-full left-0 bottom-0 right-0',
          position,
          className,
        )
      }>
      {children}
    </div>
  )
}
