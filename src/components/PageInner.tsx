import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';
import Aside from '@/components/Aside';
import AsideAccordion from '@/components/AsideAccordion';
import Checkbox from '@/components/Checkbox';
import Container from '@/components/Container';

interface IPageInnerProps {
  children: children;
  className?: className;
}

export default function PageInner({ children, className = '' }: IPageInnerProps) {
  return (
    <section
      className={
        classNames(
          'flex-1 flex flex-col md:flex-row',
          className,
        )
      }>
      <Aside className='w-full aside-width'>
        <AsideAccordion header='type'>
          <Checkbox label='Personal' />
        </AsideAccordion>
      </Aside>
      <Container className='py-2 flex-1 flex flex-col'>
        {children}
      </Container>
    </section>
  )
}
