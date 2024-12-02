import Container from '@/components/Container';

export default function Home() {
  return (
    <div className='p-8 flex flex-col gap-10 h-full'>
      <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
        <p className='text-lg'>Hi all. I am</p>
        <h1 className='text-6xl'>Micheal<br />Weaver</h1>
        <h3 className='text-xl text-secondary'>{`> Front-end developer`}</h3>
      </div>

      <div className='mb-24 flex flex-col gap-4'>
        <p className='text-sm text-primaryLight'>// find my profile on Github:</p>

        <p className='text-sm'>
          <span className='text-success'>const</span> <span className='text-secondary'>githubLink</span> = <a className='text-danger' href="https://github.com/example/url">“<span className='underline'>https://github.com/example/url</span>”</a>
        </p>
      </div>
    </div>
  )
}
