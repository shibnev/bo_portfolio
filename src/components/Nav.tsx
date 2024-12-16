import Link from 'next/link';
import { className, RestApi } from '@/types';
import classNames from '@/helpers/ClassNames';
import getData from '@/helpers/getData';

interface INavProps {
  className?: className
}

export default async function Nav({ className = '' }: INavProps) {
  const list = await Object.values(getData(RestApi.url + RestApi.pages));

  return (
    <nav className={classNames('flex flex-col', className)}>
      {list.flatMap(({ name, href, id }: { name: string, href: string, id: string }) => (
        <Link
          href={href}
          key={id}
          className='flex items-center container-padding-x header-height border-b border-solid border-dark'>
          {name}
        </Link>
      ))}
    </nav>
  )
}
