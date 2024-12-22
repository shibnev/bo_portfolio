import classNames from '@/helpers/ClassNames';
import { className } from '@/types';

interface ICardProps {
  className?: className;
  href: string;
}

export default function Card({ className = '', href }: ICardProps) {
  return (
    <a href={href} className={classNames(className)}>
      Card
    </a>
  )
}
