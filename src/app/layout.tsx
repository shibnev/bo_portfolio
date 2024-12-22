import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blob from '@/components/Blob/index';
// import WhiteNoise from '@/components/WhiteNoise';
import { RestApi, children } from '@/types';
import getData from '@/helpers/getData';
import { NavModalProvider } from '@/context/nav-modal-provider';

export const metadata = async () => {
  const { me } = await getData(RestApi.url);

  return {
    title: me.name,
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: children;
}>) {
  const dataBase = await getData(RestApi.url);
  const navList = Object.values(dataBase.pages) as { name: string; href: string; id: string }[];

  return (
    <html lang="en" className='h-full'>
      {/* <WhiteNoise /> */}
      <body className='p-2 md:p-6 min-h-screen flex flex-col'>
        <section className='flex flex-col border border-solid border-dark rounded-lg h-full bg-primary overflow-hidden relative flex-1'>
          <Blob />

          {/* header */}
          <NavModalProvider>
            <Header navList={navList} />
          </NavModalProvider>

          {/* main */}
          <main className='relative grow flex flex-col'>
            {children}
          </main>

          <Footer />
        </section>
      </body>
    </html>
  );
}
