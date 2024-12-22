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
          className='p-2 cursor-pointer text-sm lowercase flex items-center gap-2 bg-dark'
          onClick={() => setActive(!isActive)}
        >
          <Image
            src={ArrowIcon}
            alt='arrow'
            width={6}
            height={6}
            className={`transform ${isActive ? 'rotate-90' : ''} transition-transform ml-1`}
          />
          <div>
            {header}
          </div>
        </div>

        {isActive && (
          <div className='p-2 text-sm '>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
