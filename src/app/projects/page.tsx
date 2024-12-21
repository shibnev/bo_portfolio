import Aside from '@/components/Aside';
import AsideAccordion from '@/components/AsideAccordion';
import Checkbox from '@/components/Checkbox';

export default function Projects() {
  return (
    <section className='flex-1 flex'>
      <Aside>
        <AsideAccordion header='type'>
          <Checkbox label='Personal' />
        </AsideAccordion>
      </Aside>

      <div>
        <h1>_projects</h1>
      </div>
    </section >
  )
}
