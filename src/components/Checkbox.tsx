'use client';

import classNames from '@/helpers/ClassNames';
import { useState } from 'react';
import CheckIcon from '../../public/icons/check.svg';
import Image from 'next/image';

interface ICheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({ label, checked = false, onChange }: ICheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;

    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className='flex items-center gap-2 cursor-pointer group'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='hidden'
      />
      <span className={
        classNames(
          'aspect-square w-4 h-4 border border-solid border-primaryLight rounded-sm flex items-center justify-center transition-colors',
          {
            'bg-primaryLight': isChecked,
          }
        )
      }>
        <Image
          src={CheckIcon}
          alt="Check"
          width={10}
          height={10}
          className={`opacity-${isChecked ? '1' : '0'} transition-opacity`}
        />

      </span>
      <span className={
        classNames(
          'text-primaryLight select-none mt-0.5 text-sm transition-colors group-hover:text-white',
          {
            'text-white': isChecked,
          }
        )
      }
      >{label}</span>
    </label >
  );
}
