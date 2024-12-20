'use client'

import Burger from './Burger';
import Link from 'next/link';
import { Me } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';
import { useIsNavModal } from '@/context/nav-modal-provider';

export default function Header({ children }: { children: React.ReactNode }) {
  const navModalContext = useIsNavModal();
  const isNavOpen = navModalContext?.isNavOpen ?? false;
  const setNavOpen = navModalContext?.setNavOpen;

  return (
    <>
      <header
        className={`flex justify-between items-center line-b h-14`}
      >
        <Link
          href='/'
          className='main-text line-r px-4 h-full flex items-center'>
          {toKebabCase(Me.name)}
        </Link>

        {children}

        <Burger
          isOpen={isNavOpen}
          onClick={() => setNavOpen && setNavOpen(!isNavOpen)}
          className='md:hidden'
        />
      </header>
    </>
  )
}

