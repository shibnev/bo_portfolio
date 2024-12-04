"use client"

import { useState } from 'react';
import Burger from './Burger';
import NavModal from './NavModal';

const HEADER_HEIGHT = 14
const HEADER_PADDING = 'p-4'


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={`flex justify-between border-b border-solid border-dark ${HEADER_PADDING} h-${HEADER_HEIGHT}`}>
        <p className='text-sm text-primaryLight'>micheal-weaver</p>
        <Burger isOpen={isOpen} onClick={handleClick} />
      </header>

      <NavModal isShow={isOpen} className={`top-${HEADER_HEIGHT} ${HEADER_PADDING}`} />
    </>
  )
}
