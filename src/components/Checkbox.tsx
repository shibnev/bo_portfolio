'use client';

import classNames from '@/helpers/ClassNames';
import { useState } from 'react';

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
    <label className='flex items-center gap-2 cursor-pointer'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='hidden'
      />
      <span className={
        classNames(
          'w-4 h-4 border border-solid border-primaryLight rounded-sm',
          {
            'bg-primaryLight': isChecked,
          }
        )
      } />
      <span className={
        classNames(
          'text-primaryLight select-none mt-0.5 text-sm',
          {
            'text-white': isChecked,
          }
        )
      }
      >{label}</span>
    </label >
  );
}
