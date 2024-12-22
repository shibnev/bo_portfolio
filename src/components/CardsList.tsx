import React from 'react';
import Card, { ICardProps } from '@/components/Card';

interface ICardsListProps {
  cards: ICardProps[];
}

export default function CardsList({ cards }: ICardsListProps) {
  return (
    <div className="cards-list">
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

