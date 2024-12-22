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
        classNames('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)
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

