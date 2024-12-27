'use client'

import Link from 'next/link';
import { className } from '@/types';
import classNames from '@/helpers/ClassNames';
import { usePathname } from 'next/navigation'
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';
import { useEffect, useState } from 'react';

interface INavProps {
  className?: className;
}

export default function Nav({ className = '' }: INavProps) {
  const currentPath = usePathname();
  const [list, setList] = useState<{ name: string; href: string; id: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const dataPages = await fetchDataFromFirebase('pages');

      const list = [dataPages[0].main, dataPages[0].about, dataPages[0].contact];
      setList(list);
    }

    fetchData();
  }, [list]);

  return (
    <nav className={classNames('flex', className)}>
      {list && list.flatMap(({ name, href, id }, index) => (
        <Link
          href={href}
          key={`__${id}-${index}`}
          className={
            classNames(
              'text-sm md:text-primaryLight text-white relative flex items-center container-padding-x header-height hover:text-white transition border-solid border-dark border-b md:border-r md:border-b-0',
              {
                'text-white before:w-full md:before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-warning': currentPath === href,
              },
            )}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
