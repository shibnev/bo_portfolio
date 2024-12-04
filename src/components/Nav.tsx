import Link from 'next/link';
import { className, ContainerStyle, HeaderStyle } from '@/types';
import classNames from '@/helpers/ClassNames';

interface INavProps {
  className?: className
}

const list = [
  {
    name: '_hello',
    href: '/',
  },
  {
    name: '_about',
    href: '/about',
  },
  {
    name: '_projects',
    href: '/projects',
  },
  {
    name: '_contact',
    href: '/contacts',
  },
]

export default function Nav({ className = '' }: INavProps) {
  return (
    <nav className={classNames('flex flex-col', className)}>
      {list.flatMap(({ name, href }) => (
        <Link
          href={href}
          key={name}
          className={`flex items-center ${ContainerStyle.padding} h-${HeaderStyle.height} border-b border-solid border-dark`}>
          {name}
        </Link>
      ))}
    </nav>
  )
}
