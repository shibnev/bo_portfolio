import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';

interface INavModalProps {
  className?: className
  isShow: boolean
  onClick?: () => void
  navList: { name: string, href: string, id: string }[]
}

export default function NavModal({ onClick, isShow, className = '', navList }: INavModalProps) {
  return (
    <Modal
      onClick={onClick}
      isShow={isShow}
      className={classNames('bg-primary z-20', className)}
    >
      <div className='flex flex-col h-full'>
        <Nav list={navList} />
        <Footer className='mt-auto' />
      </div>
    </Modal>
  )
}
