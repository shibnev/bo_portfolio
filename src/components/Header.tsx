'use client'

import Burger from './Burger';
import Link from 'next/link';
import { Me } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';
import { useIsNavModal } from '@/context/nav-modal-provider';
import Nav from '@/components/Nav';
import NavModal from '@/components/NavModal';

// interface IHeaderProps {
//   navList: { name: string; href: string; id: string }[];
// }

export default function Header() {
  const navModalContext = useIsNavModal();
  const isNavOpen = navModalContext?.isNavOpen ?? false;
  const setNavOpen = navModalContext?.setNavOpen;

  return (
    <>
      <header
        className={`flex justify-between items-center line-b h-14`}
      >
        <div className='border-solid h-full border-dark md:border-r px-4 aside-width flex items-center'>
          <Link
            href='/'
            className='main-text hover:text-white transition-colors w-max'>
            {toKebabCase(Me.name)}
          </Link>
        </div>

        <Nav
          className='hidden md:flex flex-col md:flex-row mr-auto'
        />

        <Burger
          isOpen={isNavOpen}
          onClick={() => setNavOpen && setNavOpen(!isNavOpen)}
          className='md:hidden px-4'
        />
      </header>

      <NavModal
        className='md:hidden'
      />
    </>
  )
}

