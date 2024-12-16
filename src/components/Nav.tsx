import Link from 'next/link';
import { className, ContainerStyle, HeaderStyle, RestApi } from '@/types';
import classNames from '@/helpers/ClassNames';

async function getNavList(url: string) {
  const res = await fetch(url, {
    next: {
      revalidate: 0 //use 0 to optimize out of using cache
    }
  })

  return res.json()
}

interface INavProps {
  className?: className
}

export default async function Nav({ className = '' }: INavProps) {
  const list = await Object.values(getNavList(RestApi.url + RestApi.pages));

  return (
    <nav className={classNames('flex flex-col', className)}>
      {list.flatMap(({ name, href, id }: { name: string, href: string, id: string }) => (
        <Link
          href={href}
          key={id}
          className={`flex items-center ${ContainerStyle.padding} h-${HeaderStyle.height} border-b border-solid border-dark`}>
          {name}
        </Link>
      ))}
    </nav>
  )
}
