'use client';

import { children } from '@/types';
import { useState } from 'react';

interface IAsideAccordionProps {
  header?: string;
  children?: children;
}

export default function AsideAccordion({ header, children }: IAsideAccordionProps) {
  const [isActive, setActive] = useState<boolean>(true);

  return (
    <div>
      <div className=''>
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
