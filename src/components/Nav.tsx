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

interface IPage {
  content: string;
  href: string;
  id: number;
  name: string
}

export default function Nav({ className = '' }: INavProps) {
  const currentPath = usePathname();
  const [list, setList] = useState<IPage[]>([]);

  useEffect(() => {
    async function fetchData() {
      const dataPages = await fetchDataFromFirebase('pages') as unknown as { main?: IPage, about?: IPage };

      const list: IPage[] = [
        { content: String(dataPages?.main?.content ?? ''), href: String(dataPages?.main?.href ?? ''), id: Number(dataPages?.main?.id ?? 0), name: String(dataPages?.main?.name ?? '') },
        { content: String(dataPages?.about?.content ?? ''), href: String(dataPages?.about?.href ?? ''), id: Number(dataPages?.about?.id ?? 0), name: String(dataPages?.about?.name ?? '') },
        //   { content: '', href: '', id: 0, name: 'Contact' }
      ];
      setList(list);
    }

    fetchData();
  }, []);

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
