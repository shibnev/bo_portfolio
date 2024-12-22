import AsideAccordion from '@/components/AsideAccordion';
import Checkbox from '@/components/Checkbox';

export interface IMenuProps {
  title: string;
  items: { name: string; icon: { src: string; alt: string } }[];
}

export default function AccordionList({ menu }: { menu: IMenuProps }) {

  const { title, items } = menu;
  return (
    <div className='w-full flex flex-col gap-2'>
      <AsideAccordion header={title}>
        {items.map(({ name, icon }, index: number) => (
          <Checkbox
            icon={icon}
            label={name}
            key={`__${index}_${name}`}
          />
        ))}
      </AsideAccordion>
    </div>
  )
}
