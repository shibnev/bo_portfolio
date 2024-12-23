import React from 'react';
import Card, { ICardProps } from '@/components/Card';
import classNames from '@/helpers/ClassNames';
import { className } from '@/types';

interface ICardsListProps {
  cards: ICardProps[];
  className?: className
}

export default function CardsList({ cards, className = '' }: ICardsListProps) {
  return (
    <div
      className={
        classNames('grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4 mt-4', className)
      }
    >
      {cards.map(({ name, href, description, image, icon }, index) => (
        <Card
          key={`__${name}_${index}`}
          name={name}
          href={href}
          description={description}
          image={image}
          icon={icon}
        />
      ))}
    </div>
  );
};

