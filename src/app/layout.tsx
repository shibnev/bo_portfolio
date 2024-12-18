import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Blob from '@/components/Blob/index';
import WhiteNoise from '@/components/WhiteNoise';
import Container from '@/components/Container';
import { RestApi } from '@/types';
import getData from '@/helpers/getData';

export const metadata = async () => {
  const { name } = await getData(RestApi.url + RestApi.me);

  return {
    title: name,
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className='h-full'>
      <body className='p-6'>
        <section className='flex flex-col border border-solid border-dark rounded-lg h-full bg-primary overflow-hidden relative'>
          {/* <Blob /> */}
          <WhiteNoise />
          <Header />
          <main className='relative grow'>
            <Container className='relative z-10 py-3'>{children}</Container>
          </main>
          <Footer className='hidden md:block' />
        </section>
      </body>
    </html>
  );
}
