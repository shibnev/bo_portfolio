import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import Image from 'next/image';

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
    <a href={href} className={classNames(className)}>
      <Image src={image.src} alt={image.alt} className="" width={10} height={10} />
      <div className="">
        <h3 className="">{name}</h3>
        <p className="">{description}</p>
      </div>
      <Image src={icon.src} alt={icon.alt} className="" width={10} height={10} />
    </a>
  )
}
