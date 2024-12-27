'use client';

import Image from 'next/image';
import classNames from '@/helpers/ClassNames';
import { className, } from '@/types';
import { useEffect, useState } from 'react';
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';

interface IFooterProps {
  className?: className;
}

interface Social {
  href: string;
  iconSrc: string;
  alt: string;
}

export default function Footer({ className = '' }: IFooterProps) {

  const [socials, setSocials] = useState<Social[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const dataSocials = await fetchDataFromFirebase('socials');

      const socialsList = [dataSocials[0].github, dataSocials[0].linkedin, dataSocials[0].codewars, dataSocials[0].telegram];

      setSocials(socialsList);
    }

    fetchData();
  }, [socials]);

  return (
    <footer
      className={
        classNames('line-t header-height', className)
      }
    >
      <div className="flex items-center h-full justify-end">
        <p className='main-text px-4'>find me in:</p>
        <div className='ml-auto md:ml-0 flex items-center h-full'>
          {socials && socials.map(({ href, iconSrc, alt }, index) => (
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
