import Image from 'next/image';
import Container from '@/components/Container';
import classNames from '@/helpers/ClassNames';
import { ColMobileStyle, Me } from '@/types';

const icons = [
  {
    src: './icons/github.svg',
    alt: "github",
    href: Me.github
  },
  {
    src: './icons/telegram.svg',
    alt: "telegram",
    href: Me.telegram,
  },
  {
    src: './icons/linkedin.svg',
    alt: "linkedin",
    href: Me.linkedin,
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
                height={30}
                width={30}
                alt={alt}
              />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
