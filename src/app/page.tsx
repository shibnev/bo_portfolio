'use client'
import Container from '@/components/Container';
// import getData from '@/helpers/getData'
import Blob from '@/components/Blob';
// import { RestApi } from '@/types';
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

interface FirebaseData {
  id: string;
  name: string;
}

async function fetchDataFromFirebase(docName: string): Promise<FirebaseData[]> {
  try {
    const querySnapshot = await getDocs(collection(db, docName));

    const data: FirebaseData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as FirebaseData);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return [];
  }
}

export default function Home() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataFromFirebase('me');
        setName(data[0].name);
      } catch (error) {
        setError((error as Error).message);
      }
    }

    fetchData();
  }, []);

  // const dataBase = await getData(RestApi.url);

  // const { pages, me, socials } = dataBase;
  // const { main } = pages;
  // const { name } = me;
  // const { github } = socials;

  return (
    <Container className='relative z-10 py-8 flex-1 flex flex-col'>
      <Blob />
      <div className='py-8 flex flex-col gap-10 h-full flex-1'>
        <div className='flex flex-col gap-2 justify-center align-middle flex-1'>
          {error ? (
            <p className='text-lg text-red-500'>Error: {error}</p>
          ) : (
            <h1 className='text-6xl'>{name}</h1>
          )}
          {/* <h3 className='text-xl text-secondary'>{main.content[2]}</h3> */}
        </div>

        <div className='mb-24 flex flex-col gap-4'>
          {/* <p className='text-sm text-primaryLight'>{main.content[0]}</p> */}

          {/* <p className='text-sm'>
            <span className='text-success'>const</span> <span className='text-secondary'>GITHUB_LINK</span> = <a className='text-danger hover:text-white transition-colors' href={github.href}>“<span className='underline'>{github.href}</span>”</a>
          </p> */}
        </div>
      </div>
    </Container>
  )
}
