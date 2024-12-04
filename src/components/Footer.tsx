import Image from 'next/image';
import Container from '@/components/Container';
import classNames from '@/helpers/ClassNames';
import { ColMobileStyle } from '@/types';

const icons = [
  {
    src: './icons/github.svg',
    alt: "github",
    href: '#'
  },
  {
    src: './icons/telegram.svg',
    alt: "telegram",
    href: '#',
  },
  {
    src: './icons/linkedin.svg',
    alt: "linkedin",
    href: '#',
  },
]

export default function Footer({ className = '' }) {
  return (
    <footer
      className={
        classNames(`border-t border-solid border-dark ${ColMobileStyle.height}`, className)
      }
    >
      <Container className="flex items-center h-full">
        <div>find me in:</div>
        <div className='ml-auto flex items-center h-full -mr-4'>
          {icons.flatMap(({ href, src, alt }) => (
            <a
              href={href}
              key={alt}
              target='_bank'
              className={`h-full flex items-center justify-center border-l border-solid border-dark ${ColMobileStyle.height} w-14`}
            >
              <Image
                priority
                src={src}
                height={24}
                width={24}
                alt={alt}
              />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
