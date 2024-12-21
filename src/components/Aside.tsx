import { ReactNode } from 'react';

interface IAsideProps {
  children: ReactNode;
}

export default function Aside({ children }: IAsideProps) {
  return (
    <div className='line-r px-4 py-4 w-2/12'>
      {children}
    </div>
  )
}
