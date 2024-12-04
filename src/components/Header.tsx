"use client"

import { useEffect, useState } from 'react';
import Burger from './Burger';
import NavModal from './NavModal';
import Link from 'next/link';
import { Me } from '@/types';

const HEADER_HEIGHT = 14
const HEADER_PADDING = 'p-4'


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`flex justify-between border-b border-solid border-dark ${HEADER_PADDING} h-${HEADER_HEIGHT}`}
      >
        <Link
          href='./'
          className='text-sm text-primaryLight'>
          {Me.name.toLowerCase().replace(' ', '-')}
        </Link>

        <Burger
          isOpen={isOpen}
          onClick={handleClick}
        />
      </header>

      <NavModal
        onClick={handleClick}
        isShow={isOpen}
        className={`top-${HEADER_HEIGHT} ${HEADER_PADDING}`}
      />
    </>
  )
}
