import AsideAccordion from '@/components/AsideAccordion';
import Checkbox from '@/components/Checkbox';
import Image from 'next/image';

export interface IMenuProps {
  title: string;
  items: {
    name: string;
    link: { href: string };
    type: 'checkbox' | 'link';
    icon: { src: string; alt: string }
  }[];
}

export default function AccordionList({ menu }: { menu: IMenuProps }) {
  const { title, items } = menu;

  return (
    <div className='w-full flex flex-col gap-4'>
      <AsideAccordion header={title ?? ''}>
        {items.map(({ name, icon, type, link }, index: number) => {
          if (type === 'checkbox') {

            return (
              <Checkbox
                icon={icon}
                label={name}
                key={`__${index}_${name}`}
              />
            )
          }

          if (type === 'link') {
            return (
              <a
                href={link.href}
                key={`__${index}_${name}`}
                target='_blank'
                className='flex items-center gap-2 lowercase group w-max'
              >
                <Image
                  className='opacity-40 group-hover:opacity-100 transition-opacity'
                  width={10}
                  height={10}
                  src={icon.src}
                  alt={icon.alt}
                />
                <span
                  className='text-primaryLight text-sm transition-colors group-hover:text-white'
                >{name}</span>
              </a>
            )
          }

        }
        )}
      </AsideAccordion>
    </div>
  )
}
