import Image from 'next/image';
import Container from '@/components/Container';
import classNames from '@/helpers/ClassNames';
import getData from '@/helpers/getData';
import { RestApi } from '@/types';

interface IFooterProps {
  className?: string;
}

export default async function Footer({ className = '' }: IFooterProps) {
  const icons: { href: string; iconSrc: string; alt: string }[] = await getData(RestApi.url + 'socials');

  return (
    <footer
      className={
        classNames('line-t header-height', className)
      }
    >
      <Container className="flex items-center h-full">
        <p className='main-text'>find me in:</p>
        <div className='ml-auto flex items-center h-full -mr-4'>
          {Object.values(icons).map(({ href, iconSrc, alt }, index) => (
            <a
              href={href}
              key={`__${alt}-${index}`}
              target='_bank'
              className={`h-full flex items-center justify-center border-l border-solid border-dark header-height w-14`}
            >
              <Image
                priority
                src={iconSrc}
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
