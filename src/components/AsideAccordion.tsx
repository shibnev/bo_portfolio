'use client';

import { children, className } from '@/types';
import { useState } from 'react';

interface IAsideAccordionProps {
  header?: string
  children?: children
  className?: className
  isOpen?: boolean
}

export default function AsideAccordion({ className, header, children, isOpen = false }: IAsideAccordionProps) {
  const [isActive, setActive] = useState<boolean>(isOpen);

  return (
    <div>
      <div className={className}>
        <div
          className='px-4 py-2 cursor-pointer text-sm lowercase'
          onClick={() => setActive(!isActive)}
        >
          {header}
        </div>
        {isActive && (
          <div className='px-4 py-2 text-sm '>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
