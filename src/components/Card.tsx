import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import Image from 'next/image';
import Button from './Button';
import cropText from '@/helpers/cropText';

export interface ICardProps {
  className?: className;
  href: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  icon: {
    src: string;
    alt: string;
  };
}

export default function Card({ className = '', href, name, description, image, icon }: ICardProps) {
  return (
    <a
      href={href}
      target='_blank'
      className={
        classNames(
          'bg-primaryDarker border border-solid border-dark rounded-xl relative overflow-hidden h-60 flex flex-col',
          className,
        )
      }
    >
      {/* <Image src={image.src} alt={image.alt} className="" width={10} height={10} /> */}
      <div className='flex-1'></div>
      <Image
        src={icon.src}
        alt={icon.alt}
        className='absolute top-2 right-2'
        width={16}
        height={16}
      />
      <div className="line-t p-4 flex flex-col gap-4 flex-1 ">
        <p className="text-primaryLight text-sm">{cropText(description, 46)}</p>
        <Button className=''>view-project</ Button>
      </div>
    </a>
  )
}
