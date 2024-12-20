import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Blob from '@/components/Blob/index';
// import WhiteNoise from '@/components/WhiteNoise';
import Container from '@/components/Container';
import { RestApi } from '@/types';
import getData from '@/helpers/getData';
import NavModal from '@/components/NavModal';
import { NavModalProvider } from '@/context/nav-modal-provider';
import Nav from '@/components/Nav';

export const metadata = async () => {
  const { me } = await getData(RestApi.url);

  return {
    title: me.name,
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dataBase = await getData(RestApi.url);
  const navList = Object.values(dataBase.pages) as { name: string; href: string; id: string }[];

  return (
    <html lang="en" className='h-full'>
      {/* <WhiteNoise /> */}
      <body className='p-6 min-h-screen flex flex-col'>
        <section className='flex flex-col border border-solid border-dark rounded-lg h-full bg-primary overflow-hidden relative flex-1'>
          {/* <Blob /> */}
          <NavModalProvider>
            <Header >
              <Nav
                className='hidden md:flex flex-col md:flex-row mr-auto'
                list={navList}
              />
            </Header>

            <NavModal
              className='md:hidden'
              navList={navList}
            />
          </NavModalProvider>
          <main className='relative grow'>
            <Container className='relative z-10 py-8'>{children}</Container>
          </main>
          <Footer className='hidden md:block' />
        </section>
      </body>
    </html>
  );
}
