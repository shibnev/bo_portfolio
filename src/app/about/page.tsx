'use client';

import CodeText from '@/components/CodeText';
import PageInner from '@/components/PageInner';
import { useEffect, useState } from 'react';
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';
import { IMenuProps } from '@/components/AccordionList';

export default function About() {
  const [content, setContent] = useState<string | null>(null);
  const [contacts, setContacts] = useState<IMenuProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        const dataPage = await fetchDataFromFirebase('pages');
        const dataContacts = await fetchDataFromFirebase('contacts');

        const content = dataPage?.about?.content;
        if (typeof content === 'string') {
          setContent(content);
        } else {
          setContent(null);
        }
        setContacts(dataContacts as unknown as IMenuProps);
      }
    }

    fetchData();
  }, [content, contacts, isLoading]);

  return (
    <PageInner menu={contacts || undefined} >
      <div className='flex flex-col gap-4'>
        <h2>_about_me</h2>
        {isLoading ? (<p>loading...</p>) : (<CodeText>{content}</CodeText>)}

        <a
          className='mt-4 text-sm text-white bg-warning px-8 py-4 rounded-md w-max hover:bg-primaryLight transition-colors hover:text-primaryDark'
          target='_blank' href="https://raw.githubusercontent.com/shibnev/bo_portfolio/refs/heads/master/public/anton_shibnev_cv.pdf">see my cv</a>

      </div>
    </PageInner>
  )
}
