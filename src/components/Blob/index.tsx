import classNames from '@/helpers/ClassNames';
import './style.css';
import { className } from '@/types';

interface IBlobProps {
  className?: className;
}

export default function Blob({ className = '' }: IBlobProps) {
  return (
    <div className={classNames('h-full w-full absolute pointer-events-none', className)}>
      <div className='blob--1 absolute top-1/3 -translate-1/2 left-1/2 w-72 h-72 bg-success rounded-full filter blur-xl opacity-10 bg-blend-multiply' />
      <div className='blob--2 absolute top-1/2 -translate-1/2 right-1/2 w-96 h-96 bg-secondary rounded-full filter blur-xl opacity-10 bg-blend-multiply' />
    </div>
  )
}
