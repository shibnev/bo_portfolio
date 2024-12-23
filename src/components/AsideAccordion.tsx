'use client';

import { children, className } from '@/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../../public/icons/arrow.svg';

interface IAsideAccordionProps {
  header?: string
  children?: children
  className?: className
  isOpen?: boolean
}

export default function AsideAccordion({ className, header, children, isOpen = false }: IAsideAccordionProps) {
  const [isActive, setActive] = useState<boolean>(isOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      // Toggle the content's max-height for smooth opening and closing
      if (!isActive) {
        el.style.maxHeight = '0';
      } else {
        el.style.maxHeight = el.scrollHeight + 'px';
      }
    }
  }, [ref, isActive]);


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
          <div className='select-none'>
            {header}
          </div>
        </div>

        <div
          ref={ref}
          className='w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out  line-b'
        >
          <div className='px-2 py-4 flex flex-col gap-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
