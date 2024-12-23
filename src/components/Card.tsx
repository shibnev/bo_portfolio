'use client';
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import Image from 'next/image';
import Button from './Button';
// import cropText from '@/helpers/cropText';
import { useRef } from 'react';
import { useTruncateText } from '@/helpers/truncateText';

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

export default function Card({ className = '', href, description, icon }: ICardProps) {
  const headlineRef = useRef<HTMLDivElement>(null);
  useTruncateText(headlineRef);

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
      {/* {image && <Image src={image.src} alt={image.alt} className="flex-1" width={10} height={10} />} */}

      <div className='flex-1'></div>
      <Image
        src={icon.src}
        alt={icon.alt}
        className='absolute top-2 right-2'
        width={16}
        height={16}
      />
      <div className="line-t p-4 flex flex-col gap-4 flex-1 h-1/2">
        <p className="text-primaryLight text-sm" ref={headlineRef}>
          {description}
        </p>
        <Button className=''>view-project</ Button>
      </div>
    </a>
  )
}
