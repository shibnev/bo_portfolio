import Image from 'next/image';
import classNames from '@/helpers/ClassNames';
import getData from '@/helpers/getData';
import { className, RestApi } from '@/types';

interface IFooterProps {
  className?: className;
}

export default async function Footer({ className = '' }: IFooterProps) {
  const dataBase = await getData(RestApi.url);
  const { socials } = dataBase;
  const icons: { href: string; iconSrc: string; alt: string }[] = socials;

  return (
    <footer
      className={
        classNames('line-t header-height', className)
      }
    >
      <div className="flex items-center h-full justify-end">
        <p className='main-text px-4'>find me in:</p>
        <div className='ml-auto md:ml-0 flex items-center h-full'>
          {Object.values(icons).map(({ href, iconSrc, alt }, index) => (
            <a
              href={href}
              key={`__${alt}-${index}`}
              target='_bank'
              className={`group h-full flex items-center justify-center line-l header-height w-14`}
            >
              <Image
                priority
                className='opacity-50 group-hover:opacity-80 transition-opacity'
                src={iconSrc}
                height={30}
                width={30}
                alt={alt}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
