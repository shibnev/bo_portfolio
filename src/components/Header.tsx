'use client'

// import Burger from './Burger';
import Link from 'next/link';
import { Me } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';
// import { useIsNavModal } from '@/context/nav-modal-provider';
import Nav from '@/components/Nav';
import NavModal from '@/components/NavModal';

interface IHeaderProps {
  navList: { name: string; href: string; id: string }[];
}

export default function Header({ navList }: IHeaderProps) {
  // const navModalContext = useIsNavModal();
  // const isNavOpen = navModalContext?.isNavOpen ?? false;
  // const setNavOpen = navModalContext?.setNavOpen;

  return (
    <>
      <header
        className={`flex justify-between items-center line-b h-14`}
      >
        <Link
          href='/'
          className='main-text line-r px-4 h-full flex items-center w-3/12 md:w-2/12'>
          {toKebabCase(Me.name)}
        </Link>

        <Nav
          className='hidden md:flex flex-col md:flex-row mr-auto'
          list={navList}
        />

        {/* <Burger
          isOpen={isNavOpen}
          onClick={() => setNavOpen && setNavOpen(!isNavOpen)}
          className='md:hidden'
        /> */}
      </header>

      <NavModal
        className='md:hidden'
        navList={navList}
      />
    </>
  )
}

