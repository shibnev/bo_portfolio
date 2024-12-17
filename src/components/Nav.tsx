import Link from 'next/link';
import { className } from '@/types';
import classNames from '@/helpers/ClassNames';

interface INavProps {
  className?: className;
  list: { name: string, href: string, id: string }[];
}


export default function Nav({ className = '', list }: INavProps) {
  return (
    <nav className={classNames('flex', className)}>
      {list.flatMap(({ name, href, id }) => (
        <Link
          href={href}
          key={id}
          className='flex items-center container-padding-x header-height border-b border-solid border-dark'>
          {name}
        </Link>
      ))}
    </nav>
  );
}
