import classNames from '@/helpers/ClassNames';
import { children, className } from '@/types';
import Aside from '@/components/Aside';
import Container from '@/components/Container';
import AccordionList, { IMenuProps } from './AccordionList';

interface IPageInnerProps {
  children: children;
  className?: className;
  menu?: IMenuProps;
}

export default function PageInner({ children, className = '', menu }: IPageInnerProps) {
  return (
    <section className={classNames('flex-1 flex flex-col md:flex-row', className)}>

      <Aside className='aside-width'>
        {menu && <AccordionList menu={menu} />}
      </Aside>

      <Container className='py-6 flex-1 flex flex-col'>
        {children}
      </Container>
    </section>
  )
}
