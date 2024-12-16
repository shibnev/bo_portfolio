import getData from '@/helpers/getData'

export default async function Home() {
  const { main } = await getData('http://localhost:4000/pages');
  const { name } = await getData('http://localhost:4000/me');
  const { github } = await getData('http://localhost:4000/socials');

  return (
    <div className='py-8 flex flex-col gap-10 h-full'>
      <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
        <p className='text-lg'>{main.content[1]}</p>
        <h1 className='text-6xl'>{name}</h1>
        <h3 className='text-xl text-secondary'>{main.content[2]}</h3>
      </div>

      <div className='mb-24 flex flex-col gap-4'>
        <p className='text-sm text-primaryLight'>{main.content[0]}</p>

        <p className='text-sm'>
          <span className='text-success'>const</span> <span className='text-secondary'>GITHUB_LINK</span> = <a className='text-danger' href={github.href}>“<span className='underline'>{github.href}</span>”</a>
        </p>
      </div>
    </div>
  )
}
