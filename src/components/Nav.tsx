import Link from 'next/link';
import { className } from '@/types';
import classNames from '@/helpers/ClassNames';

interface INavProps {
  className?: className
}

export default function Nav({ className = '' }: INavProps) {
  return (
    <nav className={classNames('flex flex-col gap-6', className)}>
      <Link href='/'>_hello</Link>
      <Link href='/about'>_about-me</Link>
      <Link href='/projects'>_projects</Link>
      <Link href='/contacts'>_contact-me</Link>
    </nav>
  )
}
