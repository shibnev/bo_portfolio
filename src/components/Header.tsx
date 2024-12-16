'use client'

import { useState } from 'react';
import Burger from './Burger';
// import NavModal from './NavModal';
import Link from 'next/link';
import { Me } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center border-b border-solid border-dark px-4 h-14`}
      >
        <Link
          href='./'
          className='text-sm text-primaryLight'>
          {toKebabCase(Me.name)}
        </Link>

        <Burger
          isOpen={isOpen}
          onClick={handleClick}
          className='md:hidden'
        />
      </header>

      {/* <NavModal
        onClick={handleClick}
        isShow={isOpen}
        className='top-14'
      /> */}
    </>
  )
}
