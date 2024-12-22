'use client';

import { children, className } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import ArrowIcon from '../../public/icons/arrow.svg';

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
          <Image
            src={ArrowIcon}
            alt='arrow'
            width={10}
            height={10}
            className={`transform ${isActive ? 'rotate-90' : ''}`}
          />
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
