'use client'

import { useState } from 'react';
import Burger from './Burger';
import Link from 'next/link';
import { Me } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';
import NavModal from './NavModal';

export default function Header({ navList }: { navList: { name: string, href: string, id: string }[] }) {
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
          href='/'
          className='text-sm text-primaryLight'>
          {toKebabCase(Me.name)}
        </Link>

        <Burger
          isOpen={isOpen}
          onClick={handleClick}
          className='md:hidden'
        />
      </header>
      <NavModal
        isShow={isOpen}
        navList={navList}
        onClick={handleClick}
      />
    </>
  )
}
