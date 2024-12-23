import classNames from '@/helpers/ClassNames';
import './style.css';
import { className } from '@/types';

interface IBlobProps {
  className?: className;
  opacity?: number;
}

export default function Blob({ className = '', opacity = 0.12 }: IBlobProps) {
  return (
    <div
      className={classNames('h-full w-full absolute pointer-events-none', className)}
      style={opacity ? { opacity: `${opacity}` } : {}}
    >
      <div className={`blob--1 absolute top-1/3 -translate-1/2 left-1/5 w-1/2 h-72 bg-success rounded-full filter blur-xl bg-blend-multiply`} />
      <div className={`blob--2 absolute top-1/5 -translate-1/2 left-1/3 w-1/2 h-96 bg-secondary rounded-full filter blur-xl bg-blend-multiply`} />
    </div>
  )
}
