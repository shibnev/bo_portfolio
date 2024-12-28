'use client'
import Container from '@/components/Container';
import Blob from '@/components/Blob';
import { useEffect, useState } from 'react';
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';

type PageData = {
  main?: {
    content?: string[];
  };
};

export default function Home() {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string[]>([]);
  const [github, setGithub] = useState<{ href: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
      } catch (error) { console.error(error); }
      finally {
        setIsLoading(false);
        const dataMe = await fetchDataFromFirebase('me');
        const dataPage = await fetchDataFromFirebase('pages') as PageData;
        const dataSocials = await fetchDataFromFirebase('socials');

        setName(dataMe.name);
        setContent(Array.isArray(dataPage?.main?.content) ? dataPage?.main?.content ?? [] : []);
        setGithub(dataSocials?.github as { href: string } | null);
      }
    }

    fetchData();
  }, [name, content, github, isLoading]);


  return (
    <Container className='relative z-10 py-4 md:py-8 flex-1 flex flex-col'>
      <Blob />
      <div className='flex flex-col gap-4 md:gap-10 h-full flex-1'>
        {isLoading ? <p>loading...</p> : (
          <>
            <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
              <h1 className='text-6xl'>{name}</h1>
              <h3 className='text-xl text-secondary'>{content[0]}</h3>
            </div>

            <div className='mb-12 md:mb-24 flex flex-col gap-4'>
              <p className='text-sm text-primaryLight'>{content[1]}</p>

              <p className='text-sm'>
                {github && (
                  <>
                    <span
                      className='text-success'
                    >
                      const
                    </span>
                    {' '}
                    <span
                      className='text-secondary'
                    >
                      GITHUB_LINK
                    </span>
                    {' = '}
                    <a
                      className='text-danger hover:text-white transition-colors'
                      href={github.href}
                    >
                      “<span
                        className='underline'
                      >
                        {github.href}
                      </span>”
                    </a>
                  </>)
                }
              </p>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
