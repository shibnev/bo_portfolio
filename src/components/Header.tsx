"use client"

import { useState } from 'react';
import Burger from './Burger';
import NavModal from './NavModal';
import Link from 'next/link';
import { Me, HeaderStyle, ContainerStyle } from '@/types';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center border-b border-solid border-dark ${ContainerStyle.padding} h-${HeaderStyle.height}`}
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
        className={`top-${HeaderStyle.height}`}
      />
    </>
  )
}
