'use client'

import { useState, useEffect } from 'react';
import Burger from './Burger';
import Link from 'next/link';
import { Me, RestApi } from '@/types';
import toKebabCase from '@/helpers/toKebabCase';
import NavModal from '@/components/NavModal';
import getData from '@/helpers/getData';
import Nav from './Nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navList, setNavList] = useState<{ name: string; href: string; id: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: { name: string; href: string; id: string }[] = await getData(RestApi.url + RestApi.pages);

      const dataMap = data.map((item) => (
        { name: item.name, href: item.href, id: item.id }
      ));

      setNavList(dataMap);
    };
    fetchData();
  }, []);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev)
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

        <Nav
          className='hidden md:flex flex-col md:flex-row mr-auto text-sm text-primaryLight'
          list={navList}
        />

        <Burger
          isOpen={isOpen}
          onClick={handleClick}
          className='md:hidden'
        />
      </header>
      <NavModal
        className='md:hidden'
        isShow={isOpen}
        navList={navList}
        onClick={handleClick}
      />
    </>
  )
}

