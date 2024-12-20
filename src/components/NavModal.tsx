'use client';

import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import { useIsNavModal } from '@/context/nav-modal-provider';

interface INavModalProps {
  className?: className
  onClick?: () => void
  navList: { name: string, href: string, id: string }[]
}

export default function NavModal({ className = '', navList }: INavModalProps) {
  const navModalContext = useIsNavModal();
  if (!navModalContext) {
    return null;
  }
  const { isNavOpen, setNavOpen } = navModalContext;

  return (
    <Modal
      onClick={() => setNavOpen(!isNavOpen)}
      isShow={isNavOpen}
      className={classNames('bg-primary z-20', className)}
    >
      <div className='flex flex-col h-full'>
        <Nav list={navList} />
        <Footer className='mt-auto' />
      </div>
    </Modal>
  )
}
