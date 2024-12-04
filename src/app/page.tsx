import { Me } from '@/types'

export default function Home() {
  const text = '// find my profile on Github:'

  return (
    <div className='p-8 flex flex-col gap-10 h-full'>
      <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
        <p className='text-lg'>Hi all. I am</p>
        <h1 className='text-6xl'>
          {Me.name}
        </h1>
        <h3 className='text-xl text-secondary'>() {`=> Front-end developer`}</h3>
      </div>

      <div className='mb-24 flex flex-col gap-4'>
        <p className='text-sm text-primaryLight'>{text}</p>

        <p className='text-sm'>
          <span className='text-success'>const</span> <span className='text-secondary'>GITHUB_LINK</span> = <a className='text-danger' href="https://github.com/shibnev">“<span className='underline'>https://github.com/shibnev</span>”</a>
        </p>
      </div>
    </div>
  )
}
