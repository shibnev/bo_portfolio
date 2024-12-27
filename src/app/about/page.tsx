'use client';

import CodeText from '@/components/CodeText';
import PageInner from '@/components/PageInner';
import { useEffect, useState } from 'react';
import { fetchDataFromFirebase } from '@/utils/fetchDataFromFirebase';

export default function About() {
  const [content, setContent] = useState<[]>([]);
  const [contacts, setContacts] = useState<IMenuProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      const dataPage = await fetchDataFromFirebase('pages');
      const dataContacts = await fetchDataFromFirebase('contacts');

      setContent(dataPage[0]?.about.content);
      setContacts(dataContacts[0]);
    }

    fetchData();
  }, [content, contacts]);

  return (
    <PageInner menu={contacts || {}} >
      <div className='flex flex-col gap-4'>
        <h2>_about_me</h2>
        {content && (<CodeText>{content}</CodeText>)}

        <a
          className='mt-4 text-sm text-white bg-warning px-8 py-4 rounded-md w-max hover:bg-primaryLight transition-colors hover:text-primaryDark'
          target='_blank' href="/anton_shibnev_cv.pdf">see my cv</a>

      </div>
    </PageInner>
  )
}
