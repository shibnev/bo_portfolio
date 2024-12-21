import { children } from '@/types';
// import AsideAccordion from '@/components/AsideAccordion';

interface IAsideProps {
  children?: children;
}

export default function Aside({ children }: IAsideProps) {
  return (
    <div className='line-r w-3/12 md:w-2/12'>
      {children}
    </div>
  )
}
