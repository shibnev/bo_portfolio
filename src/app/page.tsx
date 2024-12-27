'use client'
import Container from '@/components/Container';
import Blob from '@/components/Blob';
import { useEffect, useState } from 'react';
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';

export default function Home() {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string[]>([]);
  const [github, setGithub] = useState<{ href: string } | null>(null)

  useEffect(() => {
    async function fetchData() {
      const dataMe = await fetchDataFromFirebase('me');
      const dataPage = await fetchDataFromFirebase('pages');
      const dataSocials = await fetchDataFromFirebase('socials');

      setName(dataMe[0]?.name);
      setContent(dataPage[0]?.main.content);
      setGithub(dataSocials[0]?.github);
    }

    fetchData();
  }, [name, content, github]);


  return (
    <Container className='relative z-10 py-8 flex-1 flex flex-col'>
      <Blob />
      <div className='py-8 flex flex-col gap-10 h-full flex-1'>
        <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
          <h1 className='text-6xl'>{name}</h1>
          <h3 className='text-xl text-secondary'>{content[0]}</h3>
        </div>

        <div className='mb-24 flex flex-col gap-4'>
          <p className='text-sm text-primaryLight'>{content[1]}</p>

          <p className='text-sm'>
            {github && (
              <>
                <span className='text-success'>const</span> <span className='text-secondary'>GITHUB_LINK</span> = <a className='text-danger hover:text-white transition-colors' href={github.href}>“<span className='underline'>{github.href}</span>”</a>
              </>)
            }
          </p>
        </div>
      </div>
    </Container>
  )
}
