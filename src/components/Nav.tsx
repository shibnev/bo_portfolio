'use client'

import Link from 'next/link';
import { className } from '@/types';
import classNames from '@/helpers/ClassNames';
import { usePathname } from 'next/navigation'

interface INavProps {
  className?: className;
  list: { name: string, href: string, id: string }[];
}

export default function Nav({ className = '', list }: INavProps) {
  const currentPath = usePathname();

  return (
    <nav className={classNames('flex', className)}>
      {list.flatMap(({ name, href, id }) => (
        <Link
          href={href}
          key={id}
          className={
            classNames(
              'main-text relative flex items-center container-padding-x header-height line-r hover:text-white transition',
              {
                'text-white before:block before:w-full before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-warning': currentPath === href,
              },
            )}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
