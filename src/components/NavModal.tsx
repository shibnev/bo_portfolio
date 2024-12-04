import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import classNames from '@/helpers/ClassNames';

export default function NavModal({ isShow, className }) {
  return (
    <Modal isShow={isShow} className={classNames('bg-primary z-20', className)} >
      <Nav />
    </Modal>
  )
}
