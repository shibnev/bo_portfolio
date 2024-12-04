import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';

interface INavModalProps {
  className?: className
  isShow: boolean
}

export default function NavModal({ onClick, isShow, className = '' }: INavModalProps) {

  return (
    <Modal
      onClick={onClick}
      isShow={isShow}
      className={classNames('bg-primary z-20', className)}
    >
      <Nav />
    </Modal>
  )
}
