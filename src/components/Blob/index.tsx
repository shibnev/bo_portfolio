import cls from '@/helpers/ClassNames';
import './style.css';

export default function Blob({ className, elements }) {
  return (
    <div className={cls('h-full w-full absolute pointer-events-none', className)}>
      <div className='blob--1 absolute top-1/3 -translate-y-1/2 -left-4 w-72 h-72 bg-success rounded-full filter blur-xl opacity-15 bg-blend-multiply' />
      <div className='blob--2 absolute top-1/2 -translate-y-1/2 -right-4 w-96 h-96 bg-secondary rounded-full filter blur-xl opacity-10 bg-blend-multiply' />
    </div>
  )
}
